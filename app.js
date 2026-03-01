// app.js - Lógica Principal SPA (Vistas y Enrutamiento)
console.log("\uD83D\uDE80 LexFamilia v6.8 - SISTEMA BLINDADO");

// Función de purga de caché agresiva
window.purgaTotal = function () {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistrations().then(registrations => {
            for (let registration of registrations) registration.unregister();
            localStorage.clear();
            sessionStorage.clear();
            alert("Sistema purgado correctamente. Recargando...");
            window.location.reload(true);
        });
    } else {
        localStorage.clear();
        window.location.reload(true);
    }
};

window.toggleAjustes = function () {
    const m = document.getElementById('ajustes-menu');
    if (m) m.style.display = m.style.display === 'none' ? 'block' : 'none';
};

const Store = {
    get: (key) => JSON.parse(localStorage.getItem('lf_' + key) || 'null'),
    set: (key, val) => localStorage.setItem('lf_' + key, JSON.stringify(val)),

    cargarUsuario() {
        const guardado = this.get('usuario');
        if (guardado) API.usuario = { ...API.usuario, ...guardado };
        else this.set('usuario', API.usuario);
    },

    guardarProgreso(temaId, pact, completadas) {
        const prog = this.get('progreso') || {};
        prog[temaId] = { pct: pact, c: completadas };
        this.set('progreso', prog);
    },

    getProgreso() {
        return this.get('progreso') || {};
    },

    registrarRacha() {
        const hoy = new Date().toDateString();
        const ultima = this.get('ultimaSesion');
        if (ultima !== hoy) {
            if (ultima === new Date(Date.now() - 86400000).toDateString()) {
                API.usuario.racha++;
                API.usuario.preguntasHoy = 0; // reset daily
            } else {
                if (ultima) API.usuario.racha = 1;
                API.usuario.preguntasHoy = 0;
            }
            this.set('ultimaSesion', hoy);
            this.set('usuario', API.usuario);
        }
    },

    guardarError(preguntaId) {
        const falladas = this.get('falladas') || [];
        if (!falladas.includes(preguntaId)) {
            falladas.push(preguntaId);
            this.set('falladas', falladas);
        }
    },

    eliminarError(preguntaId) {
        let falladas = this.get('falladas') || [];
        falladas = falladas.filter(id => id !== preguntaId);
        this.set('falladas', falladas);
    },

    getFalladas() {
        return this.get('falladas') || [];
    },

    reforzarFalladas() {
        let falladas = this.get('falladas') || [];
        if (!window.API || !window.API.bancoPreguntas) return;
        const validIds = window.API.bancoPreguntas.map(p => p.id);
        falladas = falladas.filter(id => validIds.includes(id));
        this.set('falladas', falladas);
    },

    addPreguntaRespondida() {
        API.usuario.preguntasHoy = (API.usuario.preguntasHoy || 0) + 1;
        API.usuario.preguntasTotales = (API.usuario.preguntasTotales || 0) + 1;
        this.set('usuario', API.usuario);
    },

    addPreguntaAcertada() {
        API.usuario.preguntasAcertadas = (API.usuario.preguntasAcertadas || 0) + 1;
        this.set('usuario', API.usuario);
    },

    saveSimulacro(score, time) {
        const sims = this.get('simulacros') || [];
        sims.unshift({ date: new Date().toLocaleDateString(), score, time });
        if (sims.length > 5) sims.pop();
        this.set('simulacros', sims);
    }
};

Store.cargarUsuario();
Store.registrarRacha();
Store.reforzarFalladas();

let preguntasVistas = []; // Para Rotación Inteligente
let testActivo = [];
let currentTestIndex = 0;
let correctas = 0;
let timerInterval = null;

document.addEventListener('DOMContentLoaded', () => {
    window.appView = document.getElementById('app-view');
    window.navItems = document.querySelectorAll('.nav-item');

    window.navigateTo = function (route) {
        console.log("Navegando a: " + route);
        window.navItems.forEach(nav => nav.classList.remove('active'));
        const targetNav = Array.from(window.navItems).find(nav => nav.getAttribute('data-route') === route);
        if (targetNav) targetNav.classList.add('active');

        window.appView.innerHTML = '';
        switch (route) {
            case 'inicio': window.renderInicio(); break;
            case 'estudio': window.renderEstudio(); break;
            case 'test': window.renderTest(); break;
            case 'flashcards': window.renderFlashcards(); break;
            case 'perfil': window.renderPerfil(); break;
            case 'glosario': window.renderGlosario(); break;
            default: window.renderInicio();
        }
        window.scrollTo(0, 0);
    };

    // Asegurar que el listener se registra correctamente y de forma infalible
    setTimeout(() => {
        window.navItems = document.querySelectorAll('.nav-item');
        window.navItems.forEach(nav => {
            nav.replaceWith(nav.cloneNode(true)); // Limpiar listeners previos
        });
        window.navItems = document.querySelectorAll('.nav-item'); // Re-seleccionar
        window.navItems.forEach(nav => {
            nav.addEventListener('click', () => {
                const route = nav.getAttribute('data-route');
                window.navigateTo(route);
            });
        });
    }, 100);

    window.navItems.forEach(nav => {
        nav.addEventListener('click', (e) => {
            const route = nav.getAttribute('data-route'); // Usamos 'nav' directamente
            console.log("Navegando a: " + route);
            window.navigateTo(route);
        });
    });

    // --- Vistas ---

    window.renderInicio = function () {
        const html = `
            <div class="view-section active view-inicio" style="padding-top: 24px; padding-bottom: 80px;">
                <div style="display:flex; justify-content:center; align-items:center; margin-bottom: 24px;">
                    <svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" style="width: 240px; height: auto;">
                        <defs>
                            <linearGradient id="shield-gradient-inline" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" style="stop-color:#1A3A5C;stop-opacity:1" />
                                <stop offset="100%" style="stop-color:#2E6DA4;stop-opacity:1" />
                            </linearGradient>
                        </defs>
                        <path d="M 50 15 L 80 35 L 80 70 C 80 85 50 100 50 100 C 50 100 20 85 20 70 L 20 35 Z" fill="url(#shield-gradient-inline)" stroke="none"/>
                        <g transform="translate(50, 60)">
                            <path d="M -8 -8 L -3 -10 L -3 10 L -8 8 Z" fill="#E8F0F8" stroke="none"/>
                            <path d="M 3 -10 L 8 -8 L 8 8 L 3 10 Z" fill="#E8F0F8" stroke="none"/>
                            <line x1="-3" y1="-8" x2="3" y2="-8" stroke="#1A3A5C" stroke-width="1"/>
                            <line x1="-3" y1="-2" x2="3" y2="-2" stroke="#1A3A5C" stroke-width="1"/>
                            <line x1="-3" y1="4" x2="3" y2="4" stroke="#1A3A5C" stroke-width="1"/>
                            <circle cx="-3" cy="0" r="1.5" fill="#27AE60"/>
                            <circle cx="3" cy="0" r="1.5" fill="#27AE60"/>
                            <line x1="-3" y1="0" x2="3" y2="0" stroke="#27AE60" stroke-width="1"/>
                        </g>
                        <text x="130" y="50" font-family="var(--font-display, Inter, sans-serif)" font-size="28" font-weight="700" fill="#1A3A5C">LexFamilia</text>
                        <line x1="130" y1="58" x2="300" y2="58" stroke="#2E6DA4" stroke-width="2" opacity="0.6"/>
                        <text x="130" y="80" font-family="Inter, sans-serif" font-size="10" font-weight="400" fill="#6C757D">Derecho de Familia y Sucesiones</text>
                    </svg>
                </div>
                
                <div style="position: absolute; top: 20px; right: 20px; z-index: 100;">
                    <button onclick="window.toggleAjustes()" style="background:none; border:none; font-size:24px; cursor:pointer; opacity:0.6;">⚙️</button>
                    <div id="ajustes-menu" style="display:none; position:absolute; top:40px; right:0; background:white; border-radius:12px; box-shadow:0 10px 25px rgba(0,0,0,0.1); width:200px; padding:16px; border:1px solid #eee;">
                        <h4 style="margin-bottom:12px; font-size:14px; color:var(--color-primary-dark);">AJUSTES</h4>
                        <p style="font-size:11px; color:#666; margin-bottom:12px;">Si ves errores o acentos mal, prueba a resetear la caché:</p>
                        <button class="btn btn-secondary" style="width:100%; font-size:12px;" onclick="window.purgaTotal()">REPARAR APP ↻</button>
                    </div>
                </div>

                <div class="screen-header">
                    <h2>☀️ ¡Hola, ${API.usuario.nombre}!</h2>
                    <div class="screen-header-meta">${new Date().toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' })}</div>
                </div>

                <div>
                    <h4 style="margin-bottom: 12px;">\uD83D\uDCCA TU PROGRESO HOY</h4>
                    <div style="background: var(--color-primary-light); padding: 12px; border-radius: var(--radius-lg); margin-bottom: 24px;">
                        <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
                            <span class="label" style="color:var(--color-primary-dark)">Racha:</span>
                            <span class="label" style="color:var(--color-primary-medium)">\uD83D\uDD25 ${API.usuario.racha} días</span>
                        </div>
                        <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
                            <span class="label" style="color:var(--color-primary-dark)">Sesión de hoy:</span>
                            <span class="label" style="color:var(--color-primary-medium)">⏱️ ${API.usuario.minutosSesion || 0} min</span>
                        </div>
                        <div style="display:flex; justify-content:space-between;">
                            <span class="label" style="color:var(--color-primary-dark)">Respondidas:</span>
                            <span class="label" style="color:var(--color-primary-medium)">${API.usuario.preguntasHoy || 0} preguntas</span>
                        </div>
                    </div>

                    <h4 style="margin-bottom: 12px;">\uD83C\uDFAF ACCESO RÁPIDO</h4>
                    <div class="card cursor-pointer" onclick="window.navigateTo('estudio')" style="cursor:pointer; margin-bottom: 16px;">
                        <div style="display:flex; gap:12px; margin-bottom:8px;">
                            <span style="font-size:24px;">\uD83D\uDCD6</span>
                            <div>
                                <h4 style="font-size:16px;">Continuar Temario</h4>
                                <div class="caption">Ver módulos de estudio</div>
                            </div>
                        </div>
                    </div>

                    <div class="card cursor-pointer" onclick="window.navigateTo('glosario')" style="cursor:pointer; margin-bottom: 24px;">
                        <div style="display:flex; gap:12px; margin-bottom:8px;">
                            <span style="font-size:24px;">\uD83D\uDCCB</span>
                            <div>
                                <h4 style="font-size:16px;">Glosario Jurídico</h4>
                                <div class="caption">Términos clave de Familia y Sucesiones</div>
                            </div>
                        </div>
                    </div>

                    <h4 style="margin-bottom: 12px;">\uD83C\uDFC6 LOGROS</h4>
                    <div class="card">
                        <div style="display:flex; gap:8px; flex-wrap:wrap;">
                            ${(API.usuario.logros || []).map(logro => `<span class="badge success">${logro}</span>`).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
        window.appView.innerHTML = html;
    };

    window.renderEstudio = function () {
        const prog = Store.getProgreso();
        const temasFamilia = API.temas.filter(t => t.bloque === 'Derecho de Familia');
        const temasSucesiones = API.temas.filter(t => t.bloque === 'Derecho de Sucesiones');

        const blockTemplate = (temas) => temas.map(tema => {
            const p = prog[tema.id] || { pct: tema.progresoPct || 0, c: tema.completadas || 0 };
            return `
                <div class="card cursor-pointer tema-card" data-id="${tema.id}" style="cursor:pointer;">
                    <div style="display:flex; gap:12px; margin-bottom:8px;">
                        <span style="font-size:24px;">\uD83D\uDCD6</span>
                        <div>
                            <h4 style="font-size:16px;">${tema.titulo}</h4>
                            <div class="caption">${tema.articulos}</div>
                        </div>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${p.pct}%"></div>
                    </div>
                </div>
            `;
        }).join('');

        window.appView.innerHTML = `
            <div class="view-section active view-estudio" style="padding-top: 24px; padding-bottom: 80px;">
                <div class="screen-header">
                    <h2>\uD83D\uDCDA Temario</h2>
                    <div class="screen-header-meta">Crea una base sólida</div>
                </div>
                
                <h4 style="margin-bottom: 12px; font-size: 14px; color: var(--color-primary-medium);">DERECHO DE FAMILIA</h4>
                <div style="margin-bottom: 24px;">
                    ${blockTemplate(temasFamilia)}
                </div>

                <h4 style="margin-bottom: 12px; font-size: 14px; color: var(--color-primary-medium);">DERECHO DE SUCESIONES</h4>
                <div style="margin-bottom: 24px;">
                    ${blockTemplate(temasSucesiones)}
                </div>
            </div>
        `;

        document.querySelectorAll('.tema-card').forEach(card => {
            card.addEventListener('click', () => {
                const id = card.getAttribute('data-id');
                window.renderLector(id);
            });
        });
    };

    window.renderLector = function (temaId) {
        const tema = API.temas.find(t => t.id === temaId);
        if (!tema) return;

        Store.guardarProgreso(tema.id, 100, tema.lecciones);
        const originalContent = tema.contenido ? tema.contenido : '<p><i>No hay contenido disponible.</i></p>';

        window.appView.innerHTML = `
            <div class="view-section active view-lector" style="padding-top: 16px; padding-bottom: 80px;">
                <div class="search-container">
                    <input type="text" id="theory-search" class="search-input" placeholder="Buscar en el tema... (ej. 'art. 46')">
                </div>

                <div style="margin-bottom: 24px;">
                    <div class="badge" style="background: var(--color-primary-dark); color: white; padding: 6px 16px; font-size: 14px; border-radius: 30px; margin-bottom: 12px; display: inline-block; font-weight: 600;">
                        ${tema.titulo}
                    </div>
                    <div style="font-family: var(--font-inter); font-size: 13px; color: var(--color-neutral-dark); font-weight: 500;">
                        \uD83D\uDCD6 ${tema.articulos}
                    </div>
                </div>
                
                <div id="lector-body" class="lector-content" style="line-height: 1.6; color: var(--color-primary-dark); margin-bottom: 32px;">
                    ${originalContent}
                </div>

                <div style="display:flex; gap:12px; justify-content:center; align-items:center;">
                    <button class="btn btn-secondary" style="flex:1" onclick="window.navigateTo('estudio')">⬅️ Volver</button>
                    <button class="btn btn-primary" style="flex:2" onclick="window.iniciarExamen('tema', '${tema.id}')">\uD83C\uDFAF Iniciar Test IA</button>
                </div>
            </div>
        `;

        const searchInput = document.getElementById('theory-search');
        const lectorBody = document.getElementById('lector-body');

        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.trim().toLowerCase();
            if (!term || term.length < 3) { lectorBody.innerHTML = originalContent; return; }

            const regex = new RegExp(`(${term})`, 'gi');
            const parts = originalContent.split(/(<[^>]*>)/g);
            const highlightedParts = parts.map(part => {
                if (part.startsWith('<')) return part;
                return part.replace(regex, '<span class="highlight">$1</span>');
            });

            lectorBody.innerHTML = highlightedParts.join('');
            const firstMatch = lectorBody.querySelector('.highlight');
            if (firstMatch) firstMatch.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    };

    window.renderTest = function () {
        window.appView.innerHTML = `
            <div class="view-section active view-test" style="padding-top: 24px; padding-bottom: 80px;">
                <div class="screen-header">
                    <h2>❓ Test</h2>
                    <div class="screen-header-meta">Modos de Práctica</div>
                </div>
                
                <div class="card cursor-pointer test-mode" data-mode="libre" style="margin-bottom:16px;">
                    <h4 style="font-size:18px; margin-bottom:4px; color:var(--color-primary-medium)">\uD83D\uDCDA Práctica Libre</h4>
                    <p class="body-small">20 preguntas aleatorias con Rotación Inteligente.</p>
                </div>

                <div class="card cursor-pointer test-mode" data-mode="simulacro" style="margin-bottom:16px;">
                    <h4 style="font-size:18px; margin-bottom:4px; color:var(--color-primary-medium)">⏱️ Simulacro</h4>
                    <p class="body-small">50 preguntas aleatorias. 90 min de tiempo real.</p>
                </div>

                <div class="card cursor-pointer test-mode" data-mode="falladas" style="margin-bottom:32px;">
                    <h4 style="font-size:18px; margin-bottom:4px; color:var(--color-primary-medium)">\uD83D\uDD04 Repasar Falladas</h4>
                    <p class="body-small">Tus errores. Se eliminan automáticamente al acertar.</p>
                </div>

                <h4 style="margin-bottom: 12px; font-size:14px; color:var(--color-neutral-dark); font-weight:700;">\uD83C\uDFAF ENTRENAMIENTO POR TEMAS</h4>
                <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); gap:10px;">
                    ${API.temas.map(t => `
                        <div class="card cursor-pointer test-tema-pill" data-id="${t.id}" style="padding:10px; text-align:center; font-size:11px; font-weight:600; line-height:1.2;">
                            ${t.titulo.split(':')[0]}
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        document.querySelectorAll('.test-mode').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const mode = e.currentTarget.getAttribute('data-mode');
                window.iniciarExamen(mode);
            });
        });

        document.querySelectorAll('.test-tema-pill').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = e.currentTarget.getAttribute('data-id');
                window.iniciarExamen('tema', id);
            });
        });
    };

    window.iniciarExamen = async function (mode, temaId = null) {
        if (!API.bancoPreguntas || API.bancoPreguntas.length === 0) return alert('No hay preguntas disponibles.');
        let baseBank = [...API.bancoPreguntas];
        correctas = 0;

        // ——— IA CHECK —————————————————
        const conIA = typeof ClaudeGenerator !== "undefined"
            && typeof CONFIG !== "undefined"
            && CONFIG.GROQ_API_KEY !== "gsk_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";

        // 1. Caso TEMA ESPECÍFICO con IA
        if (conIA && temaId && temaId !== "falladas") {
            const nivel = mode === "simulacro" ? "Avanzado" : "Intermedio";
            const preguntasIA = await ClaudeGenerator.obtenerPreguntas(temaId, nivel, 10);
            if (preguntasIA) {
                testActivo = preguntasIA;
                currentTestIndex = 0;
                window.renderTestEnCurso(mode === 'simulacro' ? 90 : null);
                return;
            }
        }

        // 2. Caso SIMULACRO o PRÁCTICA LIBRE con IA (Mezclado)
        if (conIA && (mode === 'simulacro' || mode === 'libre')) {
            const cantidad = mode === 'simulacro' ? 50 : 20;
            const nivel = mode === 'simulacro' ? "Avanzado" : "Intermedio";
            const preguntasIA = await ClaudeGenerator.obtenerPreguntasMezcladas(nivel, cantidad);
            if (preguntasIA) {
                testActivo = preguntasIA;
                currentTestIndex = 0;
                window.renderTestEnCurso(mode === 'simulacro' ? 90 : null);
                return;
            }
        }
        // ——— FIN BLOQUE IA (Si falla o no hay, sigue el flujo local) ———

        if (mode === 'tema' && temaId) {
            testActivo = shuffle(baseBank.filter(p => p.temaId === temaId));
            if (testActivo.length === 0) return alert('No hay preguntas para este tema aún.');
        } else if (mode === 'simulacro') {
            testActivo = shuffle(baseBank).slice(0, 50);
        } else if (mode === 'falladas') {
            const errIds = Store.getFalladas();
            testActivo = baseBank.filter(p => errIds.includes(p.id));
            if (testActivo.length === 0) return alert('¡No tienes preguntas falladas registradas!');
            testActivo = shuffle(testActivo);
        } else {
            let noVistas = baseBank.filter(p => !preguntasVistas.includes(p.id));
            if (noVistas.length < 20) { preguntasVistas = []; noVistas = baseBank; }
            testActivo = shuffle(noVistas).slice(0, 20);
            testActivo.forEach(p => preguntasVistas.push(p.id));
        }

        currentTestIndex = 0;
        window.renderTestEnCurso(mode === 'simulacro' ? 90 : null);
    };

    window.renderTestEnCurso = function (timeLimitMinutes = null) {
        if (currentTestIndex === 0 && timeLimitMinutes) {
            let totalSeconds = timeLimitMinutes * 60;
            if (timerInterval) clearInterval(timerInterval);
            timerInterval = setInterval(() => {
                totalSeconds--;
                const td = document.getElementById('timer-display');
                if (td) {
                    td.textContent = formatTime(totalSeconds);
                    if (totalSeconds <= 300) { td.style.background = 'var(--color-error)'; td.style.color = 'white'; }
                }
                if (totalSeconds <= 0) { clearInterval(timerInterval); window.terminarTest(); }
            }, 1000);
        }

        if (currentTestIndex >= testActivo.length) { window.terminarTest(); return; }

        const q = testActivo[currentTestIndex];
        const totalQ = testActivo.length;
        let timerHTML = timeLimitMinutes
            ? `<div id="timer-display" style="background:#34495e; padding: 4px 12px; border-radius: 20px; font-weight: 600; font-size:14px; color:white;">--:--</div>`
            : `<div style="background:var(--color-success); padding: 4px 12px; border-radius: 20px; font-weight: 600; font-size:14px; color:white;">Sin Tiempo</div>`;

        // Aleatorizamos las opciones ANTES de renderizar para que no sea siempre la misma posición (ej. la B)
        // Guardamos las opciones originales con su índice para saber cuál es la correcta tras el shuffle
        const opcionesConIndices = q.opciones.map((op, idx) => ({ texto: op, originalIdx: idx }));
        const opcionesMezcladas = shuffle([...opcionesConIndices]);
        const nuevoCorrectaIndex = opcionesMezcladas.findIndex(o => o.originalIdx === q.correctaIndex);

        window.appView.innerHTML = `
            <div class="view-section active view-test-curso" style="padding-top: 24px; padding-bottom: 80px;">
                <div class="screen-header" style="display:flex; justify-content:space-between; align-items:center;">
                    <div>
                        <h2>Test en curso</h2>
                        <div class="screen-header-meta">Pregunta ${currentTestIndex + 1} de ${totalQ}</div>
                    </div>
                    ${timerHTML}
                </div>
                <div style="margin-bottom: 16px;"><span class="badge warning">${q.nivel || 'Mixto'}</span></div>
                <h4 class="test-question" style="margin-bottom: 24px;">${q.pregunta}</h4>
                <div id="options-container">
                    ${opcionesMezcladas.map((op, idx) => `
                        <div class="question-item" data-idx="${idx}">
                            <input type="radio" name="answer" style="margin-right:8px; transform:scale(1.2)">
                            <label>${op.texto}</label>
                        </div>
                    `).join('')}
                </div>
                <button id="btn-verify" class="btn btn-primary" style="margin-top:24px;">Verificar</button>
            </div>
        `;

        const items = document.querySelectorAll('.question-item');
        // Actualizamos la lógica de verificación para usar el nuevo índice
        const verifyHandler = () => {
            const selected = document.querySelector('.question-item.selected');
            if (!selected) return alert('Selecciona una opción.');
            const idx = parseInt(selected.getAttribute('data-idx'));
            items.forEach(i => i.style.pointerEvents = 'none');
            Store.addPreguntaRespondida();

            if (idx === nuevoCorrectaIndex) {
                Store.eliminarError(q.id);
                Store.addPreguntaAcertada();
                correctas++;
                selected.style.background = 'rgba(39, 174, 96, 0.1)';
                selected.style.borderLeftColor = 'var(--color-success)';
                selected.innerHTML += ` <span style="margin-left:auto; color:var(--color-success); font-weight:bold;">✓</span> `;
            } else {
                Store.guardarError(q.id);
                selected.classList.add('incorrect');
                const correct = document.querySelector(`.question-item[data-idx="${nuevoCorrectaIndex}"]`);
                if (correct) {
                    correct.style.background = 'rgba(39, 174, 96, 0.1)';
                    correct.style.borderLeftColor = 'var(--color-success)';
                }
            }

            const btn = document.getElementById('btn-verify');
            btn.outerHTML = `
                <div style="margin-top:24px; padding:16px; background:var(--color-primary-light); border-radius:var(--radius-md); border-left:4px solid var(--color-primary-medium);">
                    <h4 style="font-size:14px; margin-bottom:8px;">\uD83D\uDCA1 Explicación Jurídica</h4>
                    <p class="body-small">${q.explicacion}</p>
                </div>
                <div style="display:flex; gap:12px; margin-top:24px;">
                    <button class="btn btn-secondary" style="flex:1;" onclick="window.navigateTo('test')">Salir</button>
                    <button id="btn-next-question" class="btn btn-primary" style="flex:2;">Siguiente ➡ </button>
                </div>
            `;

            document.getElementById('btn-next-question').addEventListener('click', () => {
                currentTestIndex++;
                window.renderTestEnCurso(timeLimitMinutes);
            });
        };

        items.forEach(item => {
            item.addEventListener('click', () => {
                items.forEach(i => i.classList.remove('selected'));
                item.classList.add('selected');
                item.querySelector('input').checked = true;
            });
        });

        document.getElementById('btn-verify').addEventListener('click', verifyHandler);
    };

    window.terminarTest = function () {
        if (timerInterval) clearInterval(timerInterval);
        const score = Math.round((correctas / testActivo.length) * 100);
        Store.saveSimulacro(score, testActivo.length);

        window.appView.innerHTML = `
            <div class="view-section active view-test-final" style="padding: 40px 24px; text-align:center;">
                <div style="font-size:64px; margin-bottom:24px;">${score >= 70 ? '\uD83C\uDF89' : '\uD83D\uDCDA'}</div>
                <h2>Test Finalizado</h2>
                <div style="font-size:32px; font-weight:bold; color:var(--color-primary); margin: 16px 0;">${score}%</div>
                <p>Has acertado ${correctas} de ${testActivo.length} preguntas.</p>
                <button class="btn btn-primary" style="margin-top:32px; width:100%;" onclick="window.navigateTo('test')">Volver al menú de Test</button>
            </div>
        `;
    };

    window.renderFlashcards = function () {
        const list = API.flashcards || [];
        let cur = 0;
        const renderNext = () => {
            if (cur >= list.length) {
                window.appView.innerHTML = `<div style="padding:40px; text-align:center;"><h3>¡Repaso Completado!</h3><button class="btn btn-primary" onclick="window.navigateTo('inicio')">Inicio</button></div>`;
                return;
            }
            const f = list[cur];
            window.appView.innerHTML = `
                <div class="view-section active view-flash" style="padding: 24px; padding-bottom: 80px;">
                    <div class="screen-header"><h2>\uD83D\uDD04 Tarjetas</h2><div class="screen-header-meta">Tarjeta ${cur + 1} de ${list.length}</div></div>
                    <div class="flashcard" onclick="this.classList.toggle('flipped')" style="height:320px; perspective:1000px; cursor:pointer;">
                        <div class="flashcard-inner" style="position:relative; width:100%; height:100%; text-align:center; transition: transform 0.6s; transform-style: preserve-3d;">
                            <div class="flashcard-front" style="position:absolute; width:100%; height:100%; backface-visibility:hidden; background:white; border-radius:16px; border:2px solid #eee; display:flex; align-items:center; justify-content:center; padding:24px; font-size:20px; font-weight:bold; color:var(--color-primary-dark);">${f.anverso}</div>
                            <div class="flashcard-back" style="position:absolute; width:100%; height:100%; backface-visibility:hidden; background:var(--color-primary-light); border-radius:16px; transform: rotateY(180deg); display:flex; align-items:center; justify-content:center; padding:24px; line-height:1.5; color:var(--color-primary-dark);">${f.reverso}</div>
                        </div>
                    </div>
                    <style>
                        .view-flash { perspective: 1000px; }
                        .flashcard { width: 100%; height: 320px; transition: transform 0.6s; transform-style: preserve-3d; cursor: pointer; position: relative; }
                        .flashcard.flipped { transform: rotateY(180deg) !important; }
                        .flashcard-inner { position: relative; width: 100%; height: 100%; text-align: center; transition: transform 0.6s; transform-style: preserve-3d; }
                        .flashcard-front, .flashcard-back { position: absolute; width: 100%; height: 100%; backface-visibility: hidden; border-radius: 16px; display: flex; align-items: center; justify-content: center; padding: 24px; }
                        .flashcard-back { transform: rotateY(180deg); }
                    </style>
                    <div style="display:flex; gap:12px; margin-top:32px;">
                        <button class="btn btn-secondary" style="flex:1" onclick="window.navigateTo('inicio')">Parar</button>
                        <button id="btn-next-flash" class="btn btn-primary" style="flex:2">Entendida OK</button>
                    </div>
                </div>
              `;
            document.getElementById('btn-next-flash').addEventListener('click', () => { cur++; renderNext(); });
        };
        renderNext();
    };

    window.renderPerfil = function () {
        let tot = API.usuario.preguntasTotales || 0;
        let acertadas = API.usuario.preguntasAcertadas || 0;
        let globalPct = tot > 0 ? ((acertadas / tot) * 100).toFixed(1) : 0;
        let simsHTML = (Store.get('simulacros') || []).map(s => `<div style="display:flex; justify-content:space-between; padding:8px 0; border-bottom:1px solid #eee;"><span>\uD83D\uDDD3️ ${s.date}</span><span style="font-weight:bold; color:var(--color-primary)">${s.score}%</span></div>`).join('');
        if (!simsHTML) simsHTML = '<p class="caption">Aún no has hecho simulacros.</p>';

        window.appView.innerHTML = `
            <div class="view-section active view-perfil" style="padding-top: 24px; padding-bottom: 80px;">
                <div class="screen-header"><h2>\uD83D\uDC64 Perfil</h2><div class="screen-header-meta">Estadísticas</div></div>
                <div class="card" style="text-align:center; margin-bottom: 24px;">
                    <div style="width:80px; height:80px; background:var(--color-primary-light); border-radius:50%; margin:0 auto 16px; display:flex; align-items:center; justify-content:center; font-size:32px;">\uD83D\uDC68‍\uD83C\uDF93</div>
                    <h3>${API.usuario.nombre}</h3>
                    <div style="display:flex; justify-content:space-around; background:#f8f9fa; padding:12px; border-radius:var(--radius-md);">
                        <div><div style="font-weight:bold; font-size:18px;">${API.usuario.racha}</div><div class="caption">Racha</div></div>
                        <div><div style="font-weight:bold; font-size:18px;">${tot}</div><div class="caption">Pregs</div></div>
                        <div><div style="font-weight:bold; font-size:18px; color:var(--color-success);">${globalPct}%</div><div class="caption">Éxito</div></div>
                    </div>
                </div>
                <h4 style="margin-bottom: 12px;">Últimos Simulacros</h4>
                <div class="card">${simsHTML}</div>
            </div>
        `;
    };

    window.renderGlosario = function () {
        const glosario = (typeof DatosBorja !== "undefined" && DatosBorja.glosario) ? DatosBorja.glosario : [];
        window.appView.innerHTML = `
            <div class="view-section active view-glosario" style="padding-top: 16px; padding-bottom: 80px;">
                <div class="search-container"><input type="text" id="glossary-search" class="search-input" placeholder="Buscar término..."></div>
                <div class="screen-header"><h2>\uD83D\uDCD1 Glosario</h2><div class="screen-header-meta">Conceptos clave</div></div>
                <div id="glossary-list" style="margin-top: 24px;">
                    ${glosario.map(item => `<div class="glosario-card"><h3>${item.termino}</h3><p>${item.definicion}</p></div>`).join('')}
                </div>
                <div style="display:flex; justify-content:center; margin-top: 24px;"><button class="btn btn-secondary" onclick="window.navigateTo('inicio')">⬅️ Volver</button></div>
            </div>
        `;
        const searchInput = document.getElementById('glossary-search');
        const glossaryList = document.getElementById('glossary-list');
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            const filtered = glosario.filter(i => i.termino.toLowerCase().includes(term) || i.definicion.toLowerCase().includes(term));
            glossaryList.innerHTML = filtered.map(i => `<div class="glosario-card"><h3>${i.termino}</h3><p>${i.definicion}</p></div>`).join('') || '<p style="text-align:center;">No encontrado.</p>';
        });
    };

    function shuffle(array) {
        let m = array.length, t, i;
        while (m) { i = Math.floor(Math.random() * m--); t = array[m]; array[m] = array[i]; array[i] = t; }
        return array;
    }

    function formatTime(secs) {
        const m = Math.floor(secs / 60).toString().padStart(2, '0');
        const s = (secs % 60).toString().padStart(2, '0');
        return m + ':' + s;
    }

    window.navigateTo('inicio');
});