// Simula el Backend y Base de Datos (JSON)
const API = {
    usuario: {
        nombre: "Juan",
        racha: 7,
        minutosSesion: 12,
        preguntasHoy: 12,
        logros: ["⭐ Primera lección", "✓ 7 días seguidos"]
    },

    temas: [
        { id: "t1", bloque: "Derecho de Familia", titulo: "Tema 1: El Matrimonio", articulos: "Arts. 44-65 CC", descripcion: "Requisitos, formas de celebración y efectos", progresoPct: 80, tiempoMin: 12, lecciones: 5, completadas: 4 },
        { id: "t2", bloque: "Derecho de Familia", titulo: "Tema 2: La nulidad, separación y divorcio", articulos: "Arts. 73-107 CC", descripcion: "Causas, procesos y efectos jurídicos", progresoPct: 30, tiempoMin: 15, lecciones: 5, completadas: 1 },
        { id: "t3", bloque: "Derecho de Familia", titulo: "Tema 3: Régimen económico matrimonial", articulos: "Arts. 1315-1444 CC", descripcion: "Sociedad de gananciales, separación de bienes y participación", progresoPct: 65, tiempoMin: 18, lecciones: 5, completadas: 3 },
        { id: "t4", bloque: "Derecho de Familia", titulo: "Tema 4: La filiación", articulos: "Arts. 108-180 CC", descripcion: "Natural, adoptiva y efectos jurídicos", progresoPct: 0, tiempoMin: 20, lecciones: 4, completadas: 0 },
        { id: "t5", bloque: "Derecho de Familia", titulo: "Tema 5: La patria potestad", articulos: "Arts. 154-180 CC", descripcion: "La patria potestad y sus efectos", progresoPct: 0, tiempoMin: 15, lecciones: 3, completadas: 0 },
        { id: "t6", bloque: "Derecho de Familia", titulo: "Tema 6: Tutela, curatela y guarda de hecho", articulos: "Arts. 215-313 CC", descripcion: "La tutela, curatela, defensor judicial y guarda de hecho", progresoPct: 0, tiempoMin: 25, lecciones: 6, completadas: 0 },
        { id: "t7", bloque: "Derecho de Familia", titulo: "Tema 7: Obligaciones alimenticias", articulos: "Arts. 142-153 CC", descripcion: "Las obligaciones alimenticias entre parientes", progresoPct: 0, tiempoMin: 10, lecciones: 2, completadas: 0 },
        { id: "t8", bloque: "Derecho de Sucesiones", titulo: "Tema 8: Introducción a las sucesiones", articulos: "Arts. 657-672 CC", descripcion: "La herencia. Apertura, delación y adquisición", progresoPct: 0, tiempoMin: 15, lecciones: 4, completadas: 0 },
        { id: "t9", bloque: "Derecho de Sucesiones", titulo: "Tema 9: El testamento", articulos: "Arts. 662-743 CC", descripcion: "Capacidad y formas testamentarias", progresoPct: 0, tiempoMin: 20, lecciones: 5, completadas: 0 },
        { id: "t10", bloque: "Derecho de Sucesiones", titulo: "Tema 10: Contenido del testamento", articulos: "Arts. 763-840 CC", descripcion: "Institución de heredero, legados y mejora", progresoPct: 0, tiempoMin: 25, lecciones: 6, completadas: 0 },
        { id: "t11", bloque: "Derecho de Sucesiones", titulo: "Tema 11: La legítima", articulos: "Arts. 806-840 CC", descripcion: "Naturaleza, cuotas y protección", progresoPct: 0, tiempoMin: 22, lecciones: 5, completadas: 0 },
        { id: "t12", bloque: "Derecho de Sucesiones", titulo: "Tema 12: Sucesión intestada", articulos: "Arts. 912-958 CC", descripcion: "Órdenes de suceder y representación", progresoPct: 0, tiempoMin: 18, lecciones: 4, completadas: 0 },
        { id: "t13", bloque: "Derecho de Sucesiones", titulo: "Tema 13: Aceptación y repudiación", articulos: "Arts. 988-1009 CC", descripcion: "Aceptación y repudiación de la herencia", progresoPct: 0, tiempoMin: 15, lecciones: 3, completadas: 0 },
        { id: "t14", bloque: "Derecho de Sucesiones", titulo: "Tema 14: La comunidad hereditaria", articulos: "Arts. 1051-1087 CC", descripcion: "La comunidad hereditaria y la partición de herencia", progresoPct: 0, tiempoMin: 25, lecciones: 5, completadas: 0 }
    ],

    bancoPreguntas: [
        {
            id: "p1", temaId: "t1", nivel: "Básico",
            pregunta: "¿Cuál es la edad mínima para contraer matrimonio en España conforme al art. 46 del Código Civil?",
            opciones: ["14 años, con dispensa judicial.", "16 años, con autorización del Juez.", "18 años o menor emancipado.", "16 años con consentimiento de los padres."],
            correctaIndex: 2,
            explicacion: "Tras la LJV 15/2015, el art. 46 prohíbe el matrimonio a menores no emancipados. En la práctica, con la actual edad de emancipación (16), solo pueden casarse mayores de edad o emancipados mayores de 16."
        },
        {
            id: "p2", temaId: "t3", nivel: "Intermedio",
            pregunta: "En el régimen de sociedad de gananciales, ¿cuál de los siguientes bienes tiene carácter privativo?",
            opciones: ["Los frutos de los bienes privativos obtenidos durante el matrimonio.", "Los bienes adquiridos conjuntamente con fondos gananciales.", "Los bienes heredados por uno de los cónyuges durante el matrimonio.", "El salario de ambos cónyuges."],
            correctaIndex: 2,
            explicacion: "Art. 1346.2° CC: son privativos los bienes o derechos adquiridos después del matrimonio por título gratuito (herencia, donación o legado). Los frutos y salarios (Art. 1347) son gananciales."
        },
        {
            id: "p3", temaId: "t5", nivel: "Avanzado",
            pregunta: "La privación de la patria potestad, conforme al art. 170 CC, puede acordarse:",
            opciones: ["Únicamente por el Ministerio Fiscal de oficio.", "Por sentencia fundada en el incumplimiento de los deberes inherentes, y es reversible.", "De forma total e irreversible una vez declarada por sentencia firme.", "Por acuerdo extrajudicial ante Notario."],
            correctaIndex: 1,
            explicacion: "Art. 170 CC: El padre o la madre podrán ser privados total o parcialmente de su potestad por sentencia fundada en el incumplimiento de los deberes. Los Tribunales podrán acordar su recuperación tras el cese de las causas."
        },
        {
            id: "p4", temaId: "t4", nivel: "Intermedio",
            pregunta: "¿Qué acción de filiación es imprescriptible para el hijo?",
            opciones: ["La reclamación de la filiación no matrimonial sin posesión de estado.", "La impugnación de la paternidad del marido.", "La acción de reclamación de la filiación matrimonial únicamente.", "Toda acción de impugnación."],
            correctaIndex: 0,
            explicacion: "Art. 133 CC: La acción de reclamación de filiación no matrimonial, cuando no exista la correspondiente posesión de estado, corresponderá únicamente al hijo durante toda su vida, siendo por tanto imprescriptible solo para él."
        },
        {
            id: "p5", temaId: "t8", nivel: "Básico",
            pregunta: "¿En qué momento se produce la apertura de la sucesión de una persona?",
            opciones: ["En el momento del otorgamiento de testamento.", "En el momento de la aceptación de la herencia.", "En el momento de su fallecimiento.", "Al transcurrir un año desde la declaración de fallecimiento."],
            correctaIndex: 2,
            explicacion: "Art. 657 CC: 'Los derechos a la sucesión de una persona se transmiten desde el momento de su muerte'."
        },
        {
            id: "p6", temaId: "t11", nivel: "Intermedio",
            pregunta: "¿Cuál es la cuota de legítima que corresponde a los hijos y descendientes del causante?",
            opciones: ["Un tercio del haber hereditario.", "La mitad del haber hereditario.", "Dos tercios del haber hereditario.", "Tres cuartas partes del haber hereditario."],
            correctaIndex: 2,
            explicacion: "Art. 808 CC: Constituyen la legítima de los hijos y descendientes las dos terceras partes del haber hereditario del padre y de la madre. Uno de esos tercios puede destinarse a mejora."
        },
        {
            id: "p7", temaId: "t12", nivel: "Avanzado",
            pregunta: "En la sucesión intestada, si concurren exclusivamente ascendientes (padre y madre del causante), ¿cómo se divide la herencia?",
            opciones: ["A partes iguales, la mitad para cada uno.", "El 100% para el pariente de mayor edad.", "Debe abrirse expediente de jurisdicción voluntaria.", "Pasa al Estado."],
            correctaIndex: 0,
            explicacion: "Art. 936 CC: Si sobreviven padre y madre, heredarán por partes iguales. (Si solo sobrevive uno, hereda todo)."
        },
        {
            id: "p8", temaId: "t9", nivel: "Básico",
            pregunta: "¿Qué testamento se escribe de puño y letra y no requiere obligatoriamente Notario para su otorgamiento?",
            opciones: ["El testamento ológrafo.", "El testamento abierto.", "El testamento cerrado.", "El testamento especial marítimo."],
            correctaIndex: 0,
            explicacion: "Art. 688 CC: El testamento ológrafo es el que el testador escribe por sí mismo de su puño y letra. No requiere Notario para su otorgamiento, aunque sí para su posterior adveración y protocolización."
        }
    ],

    flashcards: [
        { id: "f1", temaId: "t3", anverso: "Régimen de Gananciales", reverso: "Conjunto de bienes adquiridos conjuntamente por los cónyuges durante el matrimonio (Art. 1344 CC)." },
        { id: "f2", temaId: "t11", anverso: "La Legítima", reverso: "Porción de bienes de la que el testador no puede disponer por haberla reservado la ley a determinados herederos forzosos (Art. 806 CC)." },
    ]
};

// --- MERGE DATA DE BORJA ---
if (typeof DatosBorja !== 'undefined') {
    // 1. Reemplazamos usuario
    API.usuario = DatosBorja.usuario;

    // 2. Inyectamos la teoría extraída en todos los temas
    API.temas.forEach(t => {
        if (DatosBorja.teoriasPorTema && DatosBorja.teoriasPorTema[t.id]) {
            t.contenido = DatosBorja.teoriasPorTema[t.id];
        } else {
            t.contenido = DatosBorja.teoria;
        }
    });

    // 3. BANCO MASIVO DESACTIVADO — errores estructurales graves:
    //    - Respuesta correcta SIEMPRE en posición A en las 500 preguntas
    //    - ~50% de respuestas marcadas correctas son jurídicamente falsas
    //    - El generador dinámico de IA lo sustituye cuando hay conexión
    //    - Las 8 preguntas del banco base son el fallback offline de calidad
    //
    // if (DatosBorja.bancoMasivo && DatosBorja.bancoMasivo.length > 0) {
    //     API.bancoPreguntas = DatosBorja.bancoMasivo;
    // }

    // 4. Añadimos el glosario jurídico
    if (DatosBorja.glosario && DatosBorja.glosario.length > 0) {
        API.glosario = DatosBorja.glosario;
    }

    // 5. Añadimos las flashcards ampliadas
    if (DatosBorja.flashcards && DatosBorja.flashcards.length > 0) {
        API.flashcards = API.flashcards.concat(DatosBorja.flashcards);
    }
}
