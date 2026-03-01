/**
 * claude_generator.js — Generador dinámico de preguntas con IA
 * LexFamilia · Derecho de Familia y Sucesiones
 * v7.3 - Groq + rotación cliente + llamadas encadenadas para simulacro/libre
 */

// Rota las opciones en el cliente — el modelo siempre pone la correcta en "correcta"
function rotarOpciones(pregunta, nuevoIndice) {
    const opciones = [...pregunta.opciones];
    const correcta = opciones[0];
    opciones.splice(0, 1);
    opciones.splice(nuevoIndice, 0, correcta);
    return { ...pregunta, opciones, correctaIndex: nuevoIndice };
}

// Genera secuencia aleatoria bien distribuida de índices 0-3
function generarIndices(cantidad) {
    const base = Array.from({length: cantidad}, (_, i) => i % 4);
    for (let i = base.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [base[i], base[j]] = [base[j], base[i]];
    }
    return base;
}

// Llama a Groq y devuelve un array de preguntas en crudo (correcta siempre en pos 0)
async function llamarGroq(prompt) {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + CONFIG.GROQ_API_KEY,
        },
        body: JSON.stringify({
            model: CONFIG.GROQ_MODEL,
            max_tokens: CONFIG.MAX_TOKENS,
            temperature: 0.7,
            messages: [{ role: "user", content: prompt }],
        }),
    });

    if (!response.ok) {
        const err = await response.json();
        throw new Error("Error API Groq: " + (err.error?.message || response.status));
    }

    const data = await response.json();
    let texto = data.choices[0].message.content.trim();
    if (texto.includes("```")) texto = texto.replace(/```json/g, "").replace(/```/g, "").trim();
    const match = texto.match(/\[[\s\S]*\]/);
    if (match) texto = match[0];
    return JSON.parse(texto);
}

const ClaudeGenerator = {

    // ─── TEST POR TEMA (10 preguntas) ───────────────────────────────────
    async generarPreguntas(temaId, nivel = "Intermedio", cantidad = 10) {
        const tema = API.temas.find(t => t.id === temaId);
        if (!tema) throw new Error("Tema no encontrado: " + temaId);

        const contenidoTexto = (tema.contenido || "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();

        const prompt = `Eres un profesor de Derecho Civil español. Genera exactamente ${cantidad} preguntas de test de nivel ${nivel} sobre: ${tema.titulo} (${tema.articulos}).

CONTENIDO:
${contenidoTexto}

FORMATO OBLIGATORIO — devuelve SOLO este JSON sin markdown ni texto extra:
[
  {
    "pregunta": "¿Texto de la pregunta?",
    "correcta": "Texto de la respuesta correcta",
    "incorrecta1": "Distractor plausible pero incorrecto",
    "incorrecta2": "Otro distractor plausible pero incorrecto",
    "incorrecta3": "Otro distractor plausible pero incorrecto",
    "explicacion": "Art. X CC: explicación breve"
  }
]

Genera exactamente ${cantidad} objetos. Cita artículos exactos del Código Civil español.`;

        const raw = await llamarGroq(prompt);
        const indices = generarIndices(raw.length);

        return raw.map((q, i) => {
            const base = {
                id: `ai_${temaId}_${Date.now()}_${i}`,
                temaId,
                nivel,
                pregunta: q.pregunta,
                opciones: [q.correcta, q.incorrecta1, q.incorrecta2, q.incorrecta3],
                correctaIndex: 0,
                explicacion: q.explicacion,
                esIA: true
            };
            return rotarOpciones(base, indices[i]);
        });
    },

    // ─── PRÁCTICA LIBRE (20 preguntas = 2 llamadas de 10) ───────────────
    // ─── SIMULACRO     (50 preguntas = 5 llamadas de 10) ────────────────
    async generarPreguntasMezcladas(nivel = "Avanzado", cantidad = 20) {
        const temas = API.temas;
        const llamadasNecesarias = Math.ceil(cantidad / 10);
        const preguntasPorLlamada = 10;

        // Repartir temas entre llamadas para máxima variedad
        const temasDisponibles = [...temas];
        let todasLasPreguntas = [];

        actualizarMensajeCarga(`Generando preguntas (0/${llamadasNecesarias})...`);

        for (let llamada = 0; llamada < llamadasNecesarias; llamada++) {
            // Seleccionar 3-4 temas distintos para esta llamada
            const shuffle = arr => arr.sort(() => Math.random() - 0.5);
            const temasLlamada = shuffle([...temasDisponibles]).slice(0, 4);
            const resumenTemas = temasLlamada.map(t => `- ${t.titulo}: ${t.articulos}`).join("\n");

            const prompt = `Eres catedrático de Derecho Civil español. Genera exactamente ${preguntasPorLlamada} preguntas de examen de nivel ${nivel} mezclando estos temas:

${resumenTemas}

FORMATO OBLIGATORIO — devuelve SOLO este JSON sin markdown ni texto extra:
[
  {
    "temaId": "t1",
    "pregunta": "¿Texto?",
    "correcta": "Respuesta correcta",
    "incorrecta1": "Distractor 1",
    "incorrecta2": "Distractor 2",
    "incorrecta3": "Distractor 3",
    "explicacion": "Art. X CC: ..."
  }
]

Genera exactamente ${preguntasPorLlamada} objetos. Varía los temas dentro del array. Cita artículos del CC.`;

            const raw = await llamarGroq(prompt);
            todasLasPreguntas = todasLasPreguntas.concat(raw);

            actualizarMensajeCarga(`Generando preguntas (${llamada + 1}/${llamadasNecesarias})...`);

            // Pequeña pausa entre llamadas para no saturar el rate limit de Groq
            if (llamada < llamadasNecesarias - 1) {
                await new Promise(r => setTimeout(r, 300));
            }
        }

        // Aplicar rotación de índices a todas las preguntas juntas
        const indices = generarIndices(todasLasPreguntas.length);

        return todasLasPreguntas.slice(0, cantidad).map((q, i) => {
            const base = {
                id: `ai_mix_${Date.now()}_${i}`,
                temaId: q.temaId || "t1",
                nivel,
                pregunta: q.pregunta,
                opciones: [q.correcta, q.incorrecta1, q.incorrecta2, q.incorrecta3],
                correctaIndex: 0,
                explicacion: q.explicacion,
                esIA: true
            };
            return rotarOpciones(base, indices[i]);
        });
    },

    async obtenerPreguntas(temaId, nivel, cantidad) {
        try {
            mostrarCargandoIA();
            const p = await this.generarPreguntas(temaId, nivel, cantidad);
            ocultarCargandoIA();
            return p;
        } catch (err) {
            ocultarCargandoIA();
            console.error("ClaudeGenerator error (tema):", err.message);
            return null;
        }
    },

    async obtenerPreguntasMezcladas(nivel, cantidad) {
        try {
            mostrarCargandoIA(cantidad >= 50);
            const p = await this.generarPreguntasMezcladas(nivel, cantidad);
            ocultarCargandoIA();
            return p;
        } catch (err) {
            ocultarCargandoIA();
            console.error("ClaudeGenerator error (mezcladas):", err.message);
            return null;
        }
    }
};

function mostrarCargandoIA(esSimulacro = false) {
    // Eliminar loader anterior si existe
    const anterior = document.getElementById("ia-loader");
    if (anterior) anterior.remove();

    const div = document.createElement("div");
    div.id = "ia-loader";
    div.style.cssText = "position:fixed;inset:0;background:rgba(15,23,42,0.95);display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:9998;color:white;text-align:center;padding:20px;";
    const title = esSimulacro ? "Generando Simulacro de 50 preguntas..." : "Generando preguntas con IA...";
    const desc = esSimulacro
        ? "Haciendo varias llamadas al modelo, puede tardar 15-20 segundos..."
        : "Creando preguntas únicas para ti...";
    div.innerHTML = `
        <div style="font-size:64px;margin-bottom:24px;animation:pulse 1.5s infinite">⚖️</div>
        <h3 style="font-family:serif;font-size:26px;margin-bottom:12px">${title}</h3>
        <p id="ia-loader-msg" style="opacity:0.8;font-size:16px">${desc}</p>
        <div style="margin-top:30px;width:200px;height:4px;background:rgba(255,255,255,0.1);border-radius:2px;overflow:hidden">
            <div style="width:100%;height:100%;background:#3b82f6;animation:progress 1.5s infinite ease-in-out"></div>
        </div>
        <style>
            @keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.15)}}
            @keyframes progress{0%{transform:translateX(-100%)}100%{transform:translateX(100%)}}
        </style>`;
    document.body.appendChild(div);
}

function actualizarMensajeCarga(msg) {
    const el = document.getElementById("ia-loader-msg");
    if (el) el.textContent = msg;
}

function ocultarCargandoIA() {
    const d = document.getElementById("ia-loader");
    if (d) d.remove();
}
