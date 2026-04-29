// data.js — LexFamilia v9.0
// Banco: 92 preguntas basadas en Esquemas Tirant (Familia + Sucesiones)
// Generado: 29/4/2026

const API = {
    usuario: {
        nombre: "Estudiante",
        racha: 0,
        minutosSesion: 0,
        preguntasHoy: 0,
        logros: []
    },

    temas: [
        { id: "t1",  bloque: "Derecho de Familia",    titulo: "Tema 1: El Matrimonio",                     articulos: "Arts. 44-65 CC",     descripcion: "Requisitos, formas de celebración y efectos",                          progresoPct: 0, tiempoMin: 12, lecciones: 5, completadas: 0 },
        { id: "t2",  bloque: "Derecho de Familia",    titulo: "Tema 2: La nulidad, separación y divorcio",  articulos: "Arts. 73-107 CC",    descripcion: "Causas, procesos y efectos jurídicos",                                 progresoPct: 0, tiempoMin: 15, lecciones: 5, completadas: 0 },
        { id: "t3",  bloque: "Derecho de Familia",    titulo: "Tema 3: Régimen económico matrimonial",     articulos: "Arts. 1315-1444 CC",  descripcion: "Sociedad de gananciales, separación de bienes",                       progresoPct: 0, tiempoMin: 18, lecciones: 5, completadas: 0 },
        { id: "t4",  bloque: "Derecho de Familia",    titulo: "Tema 4: La filiación",                      articulos: "Arts. 108-180 CC",    descripcion: "Natural, adoptiva y efectos jurídicos",                                progresoPct: 0, tiempoMin: 20, lecciones: 4, completadas: 0 },
        { id: "t5",  bloque: "Derecho de Familia",    titulo: "Tema 5: La patria potestad",                 articulos: "Arts. 154-180 CC",   descripcion: "La patria potestad y sus efectos",                                     progresoPct: 0, tiempoMin: 15, lecciones: 3, completadas: 0 },
        { id: "t6",  bloque: "Derecho de Familia",    titulo: "Tema 6: Tutela, curatela y guarda de hecho", articulos: "Arts. 215-313 CC",   descripcion: "La tutela, curatela, defensor judicial y guarda",                     progresoPct: 0, tiempoMin: 25, lecciones: 6, completadas: 0 },
        { id: "t7",  bloque: "Derecho de Familia",    titulo: "Tema 7: Obligaciones alimenticias",          articulos: "Arts. 142-153 CC",   descripcion: "Las obligaciones alimenticias entre parientes",                        progresoPct: 0, tiempoMin: 10, lecciones: 2, completadas: 0 },
        { id: "t8",  bloque: "Derecho de Sucesiones", titulo: "Tema 8: Introducción a las sucesiones",     articulos: "Arts. 657-672 CC",    descripcion: "La herencia. Apertura, delación y adquisición",                       progresoPct: 0, tiempoMin: 15, lecciones: 4, completadas: 0 },
        { id: "t9",  bloque: "Derecho de Sucesiones", titulo: "Tema 9: El testamento",                     articulos: "Arts. 662-743 CC",    descripcion: "Capacidad y formas testamentarias",                                    progresoPct: 0, tiempoMin: 20, lecciones: 5, completadas: 0 },
        { id: "t10", bloque: "Derecho de Sucesiones", titulo: "Tema 10: Contenido del testamento",         articulos: "Arts. 763-840 CC",    descripcion: "Institución de heredero, legados y mejora",                            progresoPct: 0, tiempoMin: 25, lecciones: 6, completadas: 0 },
        { id: "t11", bloque: "Derecho de Sucesiones", titulo: "Tema 11: La legítima",                      articulos: "Arts. 806-840 CC",    descripcion: "Naturaleza, cuotas y protección",                                      progresoPct: 0, tiempoMin: 22, lecciones: 5, completadas: 0 },
        { id: "t12", bloque: "Derecho de Sucesiones", titulo: "Tema 12: Sucesión intestada",               articulos: "Arts. 912-958 CC",    descripcion: "Órdenes de suceder y representación",                                  progresoPct: 0, tiempoMin: 18, lecciones: 4, completadas: 0 },
        { id: "t13", bloque: "Derecho de Sucesiones", titulo: "Tema 13: Aceptación y repudiación",         articulos: "Arts. 988-1009 CC",   descripcion: "Aceptación y repudiación de la herencia",                              progresoPct: 0, tiempoMin: 15, lecciones: 3, completadas: 0 },
        { id: "t14", bloque: "Derecho de Sucesiones", titulo: "Tema 14: La comunidad hereditaria",         articulos: "Arts. 1051-1087 CC",  descripcion: "La comunidad hereditaria y la partición",                              progresoPct: 0, tiempoMin: 25, lecciones: 5, completadas: 0 }
    ],

    bancoPreguntas: [
    {
        "id": "pb1",
        "temaId": "t1",
        "nivel": "Básico",
        "pregunta": "¿Cuál es la edad mínima para contraer matrimonio en España?",
        "opciones": [
            "18 años o menor emancipado.",
            "16 años con autorización judicial.",
            "14 años con dispensa.",
            "16 años con consentimiento parental."
        ],
        "correctaIndex": 0,
        "explicacion": "Art. 46 CC: No pueden contraer matrimonio los menores de edad no emancipados. Desde la LJV 15/2015 se eliminó la dispensa."
    },
    {
        "id": "pb2",
        "temaId": "t3",
        "nivel": "Intermedio",
        "pregunta": "En la sociedad de gananciales, ¿cuál de los siguientes bienes es privativo?",
        "opciones": [
            "El salario obtenido durante el matrimonio.",
            "Los bienes adquiridos con fondos gananciales.",
            "Los bienes heredados durante el matrimonio.",
            "Los frutos de bienes privativos."
        ],
        "correctaIndex": 2,
        "explicacion": "Art. 1346.2 CC: son privativos los bienes adquiridos a título gratuito (herencia, donación o legado) aunque sea durante el matrimonio."
    },
    {
        "id": "pb3",
        "temaId": "t11",
        "nivel": "Intermedio",
        "pregunta": "¿Cuál es la legítima que corresponde a los hijos y descendientes?",
        "opciones": [
            "Un tercio del haber hereditario.",
            "La mitad del haber hereditario.",
            "Dos tercios del haber hereditario.",
            "Tres cuartas partes del haber hereditario."
        ],
        "correctaIndex": 2,
        "explicacion": "Art. 808 CC: constituyen la legítima de los hijos y descendientes las dos terceras partes del haber hereditario del padre y de la madre."
    },
    {
        "id": "pb4",
        "temaId": "t9",
        "nivel": "Básico",
        "pregunta": "¿Qué testamento se escribe, fecha y firma de puño y letra sin intervención de Notario?",
        "opciones": [
            "El testamento abierto notarial.",
            "El testamento ológrafo.",
            "El testamento cerrado.",
            "El testamento especial marítimo."
        ],
        "correctaIndex": 1,
        "explicacion": "Art. 678 CC: el testamento ológrafo es el que el testador escribe por sí mismo en la forma y con los requisitos del art. 688 CC."
    },
    {
        "id": "pb5",
        "temaId": "t8",
        "nivel": "Básico",
        "pregunta": "¿En qué momento se produce la apertura de la sucesión?",
        "opciones": [
            "Al otorgarse el testamento.",
            "Al aceptarse la herencia.",
            "En el momento de la muerte del causante.",
            "Transcurrido un año desde la declaración de fallecimiento."
        ],
        "correctaIndex": 2,
        "explicacion": "Art. 657 CC: los derechos a la sucesión de una persona se transmiten desde el momento de su muerte."
    },
    {
        "id": "pb6",
        "temaId": "t12",
        "nivel": "Intermedio",
        "pregunta": "En la sucesión intestada, si el causante deja hijos y cónyuge viudo, ¿qué derechos tiene el cónyuge?",
        "opciones": [
            "Hereda una cuarta parte en pleno dominio.",
            "Tiene el usufructo del tercio destinado a mejora.",
            "Hereda a partes iguales con los hijos.",
            "No hereda nada si hay descendientes."
        ],
        "correctaIndex": 1,
        "explicacion": "Art. 834 CC: el cónyuge que al morir su consorte no se hallase separado, tendrá derecho al usufructo del tercio destinado a mejora."
    },
    {
        "id": "pb7",
        "temaId": "t5",
        "nivel": "Avanzado",
        "pregunta": "¿Puede recuperarse la patria potestad una vez privada judicialmente?",
        "opciones": [
            "No, la privación es definitiva e irreversible.",
            "Sí, los Tribunales pueden acordar su recuperación si cesó la causa que la motivó.",
            "Solo si lo solicita el Ministerio Fiscal.",
            "Solo cuando el hijo cumple 14 años."
        ],
        "correctaIndex": 1,
        "explicacion": "Art. 170 CC: los Tribunales podrán acordar la recuperación de la patria potestad cuando hubiere cesado la causa que motivó la privación."
    },
    {
        "id": "pb8",
        "temaId": "t7",
        "nivel": "Básico",
        "pregunta": "¿Qué comprenden los alimentos según el art. 142 del Código Civil?",
        "opciones": [
            "Solo el sustento y habitación.",
            "Lo indispensable para sustento, habitación, vestido, asistencia médica, educación e instrucción.",
            "El sustento, la habitación y la asistencia médica exclusivamente.",
            "Todo lo necesario para una vida digna sin restricciones."
        ],
        "correctaIndex": 1,
        "explicacion": "Art. 142 CC: se entiende por alimentos todo lo que es indispensable para el sustento, habitación, vestido, asistencia médica, educación e instrucción del alimentista."
    },
    {
        "id": "ia_t1_e0_0",
        "temaId": "t1",
        "nivel": "Básico",
        "pregunta": "¿Cuál es el elemento esencial del matrimonio según el Código Civil?",
        "opciones": [
            "La capacidad",
            "El consentimiento",
            "La edad",
            "La residencia"
        ],
        "correctaIndex": 1,
        "explicacion": "Art. 45 CC: El matrimonio es un contrato que se establece por el consentimiento del hombre y la mujer."
    },
    {
        "id": "ia_t1_e0_1",
        "temaId": "t1",
        "nivel": "Básico",
        "pregunta": "¿Qué principio inspira la regulación de los efectos del matrimonio?",
        "opciones": [
            "El principio de autoridad paterna",
            "El principio de propiedad común",
            "El principio de igualdad jurídica de los cónyuges",
            "El principio de separación de bienes"
        ],
        "correctaIndex": 2,
        "explicacion": "Art. 32.2 CE: El hombre y la mujer tienen derecho a contraer matrimonio con plena igualdad jurídica."
    },
    {
        "id": "ia_t1_e0_2",
        "temaId": "t1",
        "nivel": "Básico",
        "pregunta": "¿Qué artículo de la Constitución Española establece el derecho a contraer matrimonio?",
        "opciones": [
            "Art. 14 CE",
            "Art. 16 CE",
            "Art. 32 CE",
            "Art. 18 CE"
        ],
        "correctaIndex": 2,
        "explicacion": "Art. 32 CE: El hombre y la mujer tienen derecho a contraer matrimonio con plena igualdad jurídica."
    },
    {
        "id": "ia_t1_e0_3",
        "temaId": "t1",
        "nivel": "Básico",
        "pregunta": "¿Qué tipo de matrimonio se introdujo en el Código Civil con la Ley 13/2005?",
        "opciones": [
            "Matrimonio entre personas del mismo sexo",
            "Matrimonio entre personas de diferentes nacionalidades",
            "Matrimonio entre personas con discapacidad",
            "Matrimonio entre personas menores de edad"
        ],
        "correctaIndex": 0,
        "explicacion": "Ley 13/2005: Se modifica el Código civil en materia de derecho a contraer matrimonio, autorizando a contraer matrimonio a personas del mismo sexo."
    },
    {
        "id": "ia_t1_e0_4",
        "temaId": "t1",
        "nivel": "Intermedio",
        "pregunta": "¿Qué requisito es necesario para contraer matrimonio según el Código Civil?",
        "opciones": [
            "La residencia",
            "La capacidad",
            "La nacionalidad",
            "La religión"
        ],
        "correctaIndex": 1,
        "explicacion": "Art. 46 CC: Para contraer matrimonio es necesario tener la capacidad necesaria para otorgar el consentimiento."
    },
    {
        "id": "ia_t1_e0_5",
        "temaId": "t1",
        "nivel": "Intermedio",
        "pregunta": "¿Qué artículo del Código Civil regula la forma de celebración del matrimonio?",
        "opciones": [
            "Art. 45 CC",
            "Art. 50 CC",
            "Art. 51 CC",
            "Art. 49 CC"
        ],
        "correctaIndex": 3,
        "explicacion": "Art. 49 CC: El matrimonio se celebrará ante el Juez, Alcalde o funcionario diplomático o consular español."
    },
    {
        "id": "ia_t1_e0_6",
        "temaId": "t1",
        "nivel": "Intermedio",
        "pregunta": "¿Qué efecto tiene el matrimonio sobre la situación jurídica de los cónyuges?",
        "opciones": [
            "Establece la autoridad paterna sobre los hijos",
            "Establece la propiedad común de los bienes",
            "Establece la separación de bienes",
            "Establece la igualdad jurídica entre los cónyuges"
        ],
        "correctaIndex": 3,
        "explicacion": "Art. 32.2 CE: El hombre y la mujer tienen derecho a contraer matrimonio con plena igualdad jurídica."
    },
    {
        "id": "ia_t1_e0_7",
        "temaId": "t1",
        "nivel": "Intermedio",
        "pregunta": "¿Qué tipo de parejas se consideran como figura paralela al matrimonio?",
        "opciones": [
            "Parejas de hecho",
            "Parejas de negocios",
            "Parejas de trabajo",
            "Parejas de amistad"
        ],
        "correctaIndex": 0,
        "explicacion": "Art. 1.3 del Real Decreto-ley 8/2021: Se reconoce el derecho a contraer matrimonio y a formar parejas de hecho."
    },
    {
        "id": "ia_t1_e0_8",
        "temaId": "t1",
        "nivel": "Avanzado",
        "pregunta": "¿Qué principio se aplica a las parejas de hecho según la jurisprudencia?",
        "opciones": [
            "El principio de igualdad",
            "El principio de autoridad",
            "El principio de propiedad",
            "El principio de separación de bienes"
        ],
        "correctaIndex": 0,
        "explicacion": "STC 93/1991, de 25 de abril: Se aplica el principio de igualdad a las parejas de hecho."
    },
    {
        "id": "ia_t1_e0_9",
        "temaId": "t1",
        "nivel": "Avanzado",
        "pregunta": "¿Qué artículo del Código Civil regula la extinción del matrimonio?",
        "opciones": [
            "Art. 50 CC",
            "Art. 55 CC",
            "Art. 61 CC",
            "Art. 58 CC"
        ],
        "correctaIndex": 2,
        "explicacion": "Art. 61 CC: El matrimonio se extingue por la muerte de uno de los cónyuges o por la declaración de fallecimiento."
    },
    {
        "id": "ia_t1_e0_10",
        "temaId": "t1",
        "nivel": "Avanzado",
        "pregunta": "¿Qué efecto tiene la separación de los cónyuges sobre el régimen económico del matrimonio?",
        "opciones": [
            "Produce la separación de bienes",
            "Produce la comunidad de bienes",
            "Produce la propiedad común",
            "No produce efectos sobre el régimen económico"
        ],
        "correctaIndex": 3,
        "explicacion": "Art. 63 CC: La separación no produce efectos sobre el régimen económico del matrimonio."
    },
    {
        "id": "ia_t1_e0_11",
        "temaId": "t1",
        "nivel": "Avanzado",
        "pregunta": "¿Qué artículo de la Constitución Española establece el Estado aconfesional?",
        "opciones": [
            "Art. 14 CE",
            "Art. 16 CE",
            "Art. 15 CE",
            "Art. 17 CE"
        ],
        "correctaIndex": 1,
        "explicacion": "Art. 16 CE: La Constitución garantiza la libertad religiosa y de culto, y el Estado es aconfesional."
    },
    {
        "id": "ia_t2_e1_0",
        "temaId": "t2",
        "nivel": "Básico",
        "pregunta": "¿Cuál es el plazo mínimo que debe transcurrir desde la celebración del matrimonio para solicitar la separación?",
        "opciones": [
            "Seis meses",
            "Un año",
            "Tres meses",
            "Dos años"
        ],
        "correctaIndex": 2,
        "explicacion": "Art. 81 CC: La separación puede solicitarse transcurridos tres meses desde la celebración del matrimonio."
    },
    {
        "id": "ia_t2_e1_1",
        "temaId": "t2",
        "nivel": "Básico",
        "pregunta": "¿Quién puede solicitar la separación?",
        "opciones": [
            "Solo el cónyuge varón",
            "Solo el cónyuge mujer",
            "Ambos cónyuges o uno con el consentimiento del otro",
            "Cualquier pariente"
        ],
        "correctaIndex": 2,
        "explicacion": "Art. 81 CC: La separación puede ser solicitada por ambos cónyuges o por uno con el consentimiento del otro."
    },
    {
        "id": "ia_t2_e1_2",
        "temaId": "t2",
        "nivel": "Intermedio",
        "pregunta": "¿Qué documento debe acompañar a la demanda de separación?",
        "opciones": [
            "Convenio regulador",
            "Acta de matrimonio",
            "Testamento",
            "Propuesta fundada de las medidas que hayan de regular los efectos derivados de la separación"
        ],
        "correctaIndex": 3,
        "explicacion": "Art. 81 CC: A la demanda de separación debe acompañarse una propuesta fundada de las medidas que hayan de regular los efectos derivados de la separación."
    },
    {
        "id": "ia_t2_e1_3",
        "temaId": "t2",
        "nivel": "Intermedio",
        "pregunta": "¿Cuál es el requisito para que la separación mutuo acuerdo se pueda realizar ante el Letrado de la Administración de Justicia o Notario?",
        "opciones": [
            "Tener hijos menores emancipados",
            "Tener hijos mayores con medidas de apoyo atribuidas a sus progenitores",
            "No tener hijos menores no emancipados ni hijos mayores con medidas de apoyo atribuidas a sus progenitores",
            "Tener hijos menores no emancipados"
        ],
        "correctaIndex": 2,
        "explicacion": "Art. 82 CC: La separación mutuo acuerdo puede realizarse ante el Letrado de la Administración de Justicia o Notario si no hay hijos menores no emancipados ni hijos mayores con medidas de apoyo atribuidas a sus progenitores."
    },
    {
        "id": "ia_t2_e1_4",
        "temaId": "t2",
        "nivel": "Intermedio",
        "pregunta": "¿Cuál es el efecto principal de la separación?",
        "opciones": [
            "Disolución del matrimonio",
            "Suspensión de la vida común de los casados",
            "Anulación del matrimonio",
            "Separación de bienes"
        ],
        "correctaIndex": 1,
        "explicacion": "Art. 81 CC: La separación supone la suspensión de la vida común de los casados."
    },
    {
        "id": "ia_t2_e1_5",
        "temaId": "t2",
        "nivel": "Intermedio",
        "pregunta": "¿Quién puede intervenir en la separación mutuo acuerdo ante el Letrado de la Administración de Justicia o Notario?",
        "opciones": [
            "Los cónyuges, asistidos de Letrado",
            "Solo el cónyuge que solicita la separación",
            "Los hijos menores emancipados",
            "Los padres de los cónyuges"
        ],
        "correctaIndex": 0,
        "explicacion": "Art. 82 CC: La separación mutuo acuerdo ante el Letrado de la Administración de Justicia o Notario requiere la intervención personal de los cónyuges, asistidos de Letrado."
    },
    {
        "id": "ia_t2_e1_6",
        "temaId": "t2",
        "nivel": "Intermedio",
        "pregunta": "¿Cuál es el plazo de espera para solicitar la separación en caso de riesgo para la vida, la integridad física, la libertad, la integridad moral o libertad e indemnidad sexual del cónyuge demandante o de los hijos?",
        "opciones": [
            "No hay plazo de espera",
            "Tres meses",
            "Seis meses",
            "Un año"
        ],
        "correctaIndex": 0,
        "explicacion": "Art. 81 CC: No hay plazo de espera para solicitar la separación en caso de riesgo para la vida, la integridad física, la libertad, la integridad moral o libertad e indemnidad sexual del cónyuge demandante o de los hijos."
    },
    {
        "id": "ia_t2_e1_7",
        "temaId": "t2",
        "nivel": "Avanzado",
        "pregunta": "¿Qué tipo de medidas pueden adoptarse durante el procedimiento de separación?",
        "opciones": [
            "Medidas definitivas",
            "Medidas cautelares",
            "Medidas de apoyo",
            "Medidas provisionales"
        ],
        "correctaIndex": 3,
        "explicacion": "Art. 81 CC: Durante el procedimiento de separación, pueden adoptarse medidas provisionales."
    },
    {
        "id": "ia_t2_e1_8",
        "temaId": "t2",
        "nivel": "Avanzado",
        "pregunta": "¿Cuál es el efecto de la separación en la liquidación del régimen económico matrimonial?",
        "opciones": [
            "La liquidación del régimen económico matrimonial se realiza de forma automática",
            "La liquidación del régimen económico matrimonial se realizará de acuerdo con lo establecido en el convenio regulador o, en su defecto, por el juez",
            "La liquidación del régimen económico matrimonial se realiza solo si hay hijos menores",
            "La liquidación del régimen económico matrimonial se realiza solo si hay bienes comunes"
        ],
        "correctaIndex": 1,
        "explicacion": "Art. 81 CC: La liquidación del régimen económico matrimonial se realizará de acuerdo con lo establecido en el convenio regulador o, en su defecto, por el juez."
    },
    {
        "id": "ia_t2_e1_9",
        "temaId": "t2",
        "nivel": "Básico",
        "pregunta": "¿Quién puede solicitar la separación en caso de que uno de los cónyuges no esté de acuerdo?",
        "opciones": [
            "El cónyuge que no esté de acuerdo no puede solicitar la separación",
            "El cónyuge que no esté de acuerdo puede solicitar la separación transcurridos tres meses desde la celebración del matrimonio",
            "El cónyuge que no esté de acuerdo puede solicitar la separación en cualquier momento",
            "El cónyuge que no esté de acuerdo puede solicitar la separación solo si hay hijos menores"
        ],
        "correctaIndex": 1,
        "explicacion": "Art. 81 CC: El cónyuge que no esté de acuerdo puede solicitar la separación transcurridos tres meses desde la celebración del matrimonio."
    },
    {
        "id": "ia_t2_e1_10",
        "temaId": "t2",
        "nivel": "Intermedio",
        "pregunta": "¿Cuál es el requisito para que la separación se considere definitiva?",
        "opciones": [
            "La separación se considera definitiva cuando se ha dictado sentencia firme",
            "La separación se considera definitiva cuando se ha presentado la demanda",
            "La separación se considera definitiva cuando se ha realizado el convenio regulador",
            "La separación se considera definitiva cuando se ha realizado la liquidación del régimen económico matrimonial"
        ],
        "correctaIndex": 0,
        "explicacion": "Art. 81 CC: La separación se considera definitiva cuando se ha dictado sentencia firme."
    },
    {
        "id": "ia_t2_e1_11",
        "temaId": "t2",
        "nivel": "Avanzado",
        "pregunta": "¿Cuál es el efecto de la separación en la guarda y custodia de los hijos?",
        "opciones": [
            "La guarda y custodia de los hijos se asigna automáticamente al cónyuge que solicita la separación",
            "La guarda y custodia de los hijos se asigna automáticamente al cónyuge que no solicita la separación",
            "La guarda y custodia de los hijos se asigna a un tercero",
            "La guarda y custodia de los hijos se regulará de acuerdo con lo establecido en el convenio regulador o, en su defecto, por el juez"
        ],
        "correctaIndex": 3,
        "explicacion": "Art. 81 CC: La guarda y custodia de los hijos se regulará de acuerdo con lo establecido en el convenio regulador o, en su defecto, por el juez."
    },
    {
        "id": "ia_t3_e0_0",
        "temaId": "t3",
        "nivel": "Básico",
        "pregunta": "¿Qué régimen económico matrimonial se aplica en el derecho común en ausencia de capitulaciones?",
        "opciones": [
            "Separación de bienes",
            "Sociedad de gananciales",
            "Comunidad de bienes",
            "Régimen de participación en ganancias"
        ],
        "correctaIndex": 1,
        "explicacion": "Art. 1316 CC: En defecto de pacto, y en cuanto al consorcio conyugal se refiere, regirá el régimen de la sociedad de gananciales."
    },
    {
        "id": "ia_t3_e0_1",
        "temaId": "t3",
        "nivel": "Básico",
        "pregunta": "¿Qué libertad se atribuye a los cónyuges para fijar el régimen económico matrimonial?",
        "opciones": [
            "Libertad contractual",
            "Libertad de testar",
            "Libertad de pactos",
            "Libertad de disposición"
        ],
        "correctaIndex": 2,
        "explicacion": "Art. 1325 CC: Los cónyuges pueden pactar, antes de contraer matrimonio, el régimen económico de su sociedad conyugal."
    },
    {
        "id": "ia_t3_e0_2",
        "temaId": "t3",
        "nivel": "Básico",
        "pregunta": "¿Qué sucede con la titularidad de los bienes en caso de confesión?",
        "opciones": [
            "Se atribuye según la ley",
            "Se atribuye según la costumbre",
            "Se atribuye libremente",
            "Se atribuye según la voluntad de uno solo de los cónyuges"
        ],
        "correctaIndex": 2,
        "explicacion": "Art. 1328 CC: La confesión es un medio de prueba que puede ser utilizado para acreditar la propiedad de un bien."
    },
    {
        "id": "ia_t3_e0_3",
        "temaId": "t3",
        "nivel": "Básico",
        "pregunta": "¿Quién tiene la potestad doméstica ordinaria en la familia?",
        "opciones": [
            "El marido",
            "La mujer",
            "El hijo mayor",
            "Ambos cónyuges"
        ],
        "correctaIndex": 3,
        "explicacion": "Art. 1335 CC: La potestad doméstica se ejerce conjuntamente por ambos cónyuges."
    },
    {
        "id": "ia_t3_e0_4",
        "temaId": "t3",
        "nivel": "Intermedio",
        "pregunta": "¿Qué se requiere para disponer de la vivienda familiar?",
        "opciones": [
            "Consentimiento de uno solo de los cónyuges",
            "Autorización judicial",
            "No se requiere consentimiento",
            "Consentimiento de ambos cónyuges"
        ],
        "correctaIndex": 3,
        "explicacion": "Art. 1337 CC: Para disponer de la vivienda familiar se requiere el consentimiento de ambos cónyuges."
    },
    {
        "id": "ia_t3_e0_5",
        "temaId": "t3",
        "nivel": "Intermedio",
        "pregunta": "¿Qué sucede con los bienes comunes en caso de incumplimiento de las cargas matrimoniales?",
        "opciones": [
            "No pueden ser embargados",
            "Pueden ser embargados",
            "Pueden ser vendidos",
            "Pueden ser donados"
        ],
        "correctaIndex": 1,
        "explicacion": "Art. 1342 CC: Los bienes comunes pueden ser embargados en caso de incumplimiento de las cargas matrimoniales."
    },
    {
        "id": "ia_t3_e0_6",
        "temaId": "t3",
        "nivel": "Intermedio",
        "pregunta": "¿Qué es la litis expensas?",
        "opciones": [
            "Gastos necesarios derivados de litigios entre cónyuges",
            "Gastos necesarios derivados de litigios contra terceros",
            "Gastos necesarios derivados de litigios entre cónyuges o contra terceros",
            "Gastos voluntarios derivados de litigios"
        ],
        "correctaIndex": 2,
        "explicacion": "Art. 1353 CC: La litis expensas se refiere a los gastos necesarios derivados de litigios entre cónyuges o contra terceros."
    },
    {
        "id": "ia_t3_e0_7",
        "temaId": "t3",
        "nivel": "Intermedio",
        "pregunta": "¿Qué requisitos se deben cumplir para que un cónyuge tenga derecho a la litis expensas?",
        "opciones": [
            "Carecer de bienes propios suficientes",
            "Carecer de bienes propios suficientes y que los gastos sean necesarios",
            "Que los gastos sean necesarios",
            "Que los gastos sean voluntarios"
        ],
        "correctaIndex": 1,
        "explicacion": "Art. 1354 CC: Para tener derecho a la litis expensas, se deben cumplir los requisitos de carecer de bienes propios suficientes y que los gastos sean necesarios."
    },
    {
        "id": "ia_t3_e0_8",
        "temaId": "t3",
        "nivel": "Intermedio",
        "pregunta": "¿Qué sucede con la responsabilidad por deudas en caso de potestad doméstica ordinaria?",
        "opciones": [
            "Se es responsable solo con los bienes comunes",
            "Se es responsable solo con los bienes del cónyuge que contraiga la deuda",
            "No se es responsable",
            "Se es solidariamente responsable con los bienes comunes y los del cónyuge que contraiga la deuda"
        ],
        "correctaIndex": 3,
        "explicacion": "Art. 1362 CC: En caso de potestad doméstica ordinaria, se es solidariamente responsable con los bienes comunes y los del cónyuge que contraiga la deuda."
    },
    {
        "id": "ia_t3_e0_9",
        "temaId": "t3",
        "nivel": "Avanzado",
        "pregunta": "¿Qué efecto tiene la modificación del régimen económico matrimonial sobre los derechos adquiridos por terceros?",
        "opciones": [
            "No perjudica los derechos ya adquiridos por terceros",
            "Perjudica los derechos ya adquiridos por terceros",
            "No afecta a los derechos de terceros",
            "Requiere el consentimiento de terceros"
        ],
        "correctaIndex": 0,
        "explicacion": "Art. 1326 CC: La modificación del régimen económico matrimonial no perjudica los derechos ya adquiridos por terceros."
    },
    {
        "id": "ia_t3_e0_10",
        "temaId": "t3",
        "nivel": "Avanzado",
        "pregunta": "¿Qué sucede con la protección de la vivienda familiar en caso de deuda contraída por uno de los cónyuges?",
        "opciones": [
            "La vivienda familiar puede ser embargada, pero se requiere el consentimiento de ambos cónyuges",
            "La vivienda familiar no puede ser embargada",
            "La vivienda familiar puede ser embargada sin consentimiento de ambos cónyuges",
            "La vivienda familiar puede ser vendida sin consentimiento de ambos cónyuges"
        ],
        "correctaIndex": 0,
        "explicacion": "Art. 1338 CC: La vivienda familiar puede ser embargada, pero se requiere el consentimiento de ambos cónyuges."
    },
    {
        "id": "ia_t3_e0_11",
        "temaId": "t3",
        "nivel": "Avanzado",
        "pregunta": "¿Qué sucede con el ajuar familiar en caso de viudedad?",
        "opciones": [
            "Se atribuye al cónyuge sobreviviente",
            "Se atribuye a los hijos",
            "Se atribuye a los padres del cónyuge fallecido",
            "Se vende en pública subasta"
        ],
        "correctaIndex": 0,
        "explicacion": "Art. 1345 CC: El ajuar familiar se atribuye al cónyuge sobreviviente en caso de viudedad."
    },
    {
        "id": "ia_t3_e1_0",
        "temaId": "t3",
        "nivel": "Básico",
        "pregunta": "¿Cuál es el régimen económico matrimonial supletorio en el derecho común español?",
        "opciones": [
            "Sociedad de gananciales",
            "Separación de bienes",
            "Participación en gananciales",
            "Comunidad de bienes"
        ],
        "correctaIndex": 0,
        "explicacion": "Art. 1315 CC: El régimen económico matrimonial se regirá por lo pactado en capitulaciones, y en su defecto, por el régimen legal supletorio."
    },
    {
        "id": "ia_t3_e1_1",
        "temaId": "t3",
        "nivel": "Intermedio",
        "pregunta": "¿Qué ocurre con los bienes de los cónyuges en caso de separación de bienes?",
        "opciones": [
            "Los bienes pasan a ser comunes",
            "Los bienes se dividen por mitad",
            "Cada cónyuge mantiene la propiedad y administración de sus bienes",
            "Los bienes se venden y se reparten las ganancias"
        ],
        "correctaIndex": 2,
        "explicacion": "Art. 1325 CC: En el régimen de separación de bienes, cada cónyuge conserva la propiedad y el derecho a administrar sus bienes."
    },
    {
        "id": "ia_t3_e1_2",
        "temaId": "t3",
        "nivel": "Básico",
        "pregunta": "¿Quién tiene la potestad doméstica ordinaria en el matrimonio?",
        "opciones": [
            "El cónyuge varón",
            "Ambos cónyuges",
            "El cónyuge con mayor edad",
            "El cónyuge con mayor capacidad económica"
        ],
        "correctaIndex": 1,
        "explicacion": "Art. 1328 CC: La potestad doméstica ordinaria se ejerce conjuntamente por ambos cónyuges."
    },
    {
        "id": "ia_t3_e1_3",
        "temaId": "t3",
        "nivel": "Intermedio",
        "pregunta": "¿Qué es el caudal común en el régimen económico matrimonial?",
        "opciones": [
            "La suma de los bienes y derechos que pertenecen a ambos cónyuges",
            "La suma de los bienes y derechos que pertenecen a un solo cónyuge",
            "La suma de los bienes y derechos que se adquieren durante el matrimonio",
            "La suma de los bienes y derechos que se donan durante el matrimonio"
        ],
        "correctaIndex": 0,
        "explicacion": "Art. 1344 CC: El caudal común está formado por la suma de los bienes y derechos que pertenecen a ambos cónyuges."
    },
    {
        "id": "ia_t3_e1_4",
        "temaId": "t3",
        "nivel": "Intermedio",
        "pregunta": "¿Qué ocurre con los bienes comunes en caso de disolución del matrimonio?",
        "opciones": [
            "Se dividen por mitad",
            "Se venden y se reparten las ganancias",
            "Se mantienen en común",
            "Se adjudican al cónyuge que los administra"
        ],
        "correctaIndex": 0,
        "explicacion": "Art. 1404 CC: En caso de disolución del matrimonio, los bienes comunes se dividen por mitad."
    },
    {
        "id": "ia_t3_e1_5",
        "temaId": "t3",
        "nivel": "Básico",
        "pregunta": "¿Qué es la litis expensas en el régimen económico matrimonial?",
        "opciones": [
            "Los gastos necesarios derivados de la administración de los bienes comunes",
            "Los gastos necesarios derivados de la manutención de los hijos",
            "Los gastos necesarios derivados de litigios entre cónyuges o contra terceros",
            "Los gastos necesarios derivados de la adquisición de bienes"
        ],
        "correctaIndex": 2,
        "explicacion": "Art. 1362 CC: La litis expensas se refiere a los gastos necesarios derivados de litigios entre cónyuges o contra terceros."
    },
    {
        "id": "ia_t3_e1_6",
        "temaId": "t3",
        "nivel": "Intermedio",
        "pregunta": "¿Quién tiene derecho a la litis expensas en el régimen económico matrimonial?",
        "opciones": [
            "El cónyuge que administra los bienes comunes",
            "El cónyuge que tiene mayor capacidad económica",
            "El cónyuge que tiene mayor edad",
            "El cónyuge que carece de bienes propios suficientes"
        ],
        "correctaIndex": 3,
        "explicacion": "Art. 1363 CC: El cónyuge que carece de bienes propios suficientes tiene derecho a la litis expensas."
    },
    {
        "id": "ia_t3_e1_7",
        "temaId": "t3",
        "nivel": "Básico",
        "pregunta": "¿Qué es la protección del hogar familiar en el régimen económico matrimonial?",
        "opciones": [
            "La libre disposición de los cónyuges sobre la vivienda familiar",
            "La atribución de la vivienda familiar a un solo cónyuge",
            "La limitación de los actos dispositivos de los cónyuges sobre la vivienda familiar",
            "La venta de la vivienda familiar para repartir las ganancias"
        ],
        "correctaIndex": 2,
        "explicacion": "Art. 1320 CC: La protección del hogar familiar se refiere a la limitación de los actos dispositivos de los cónyuges sobre la vivienda familiar."
    },
    {
        "id": "ia_t3_e1_8",
        "temaId": "t3",
        "nivel": "Intermedio",
        "pregunta": "¿Qué ocurre con la vivienda familiar en caso de viudedad?",
        "opciones": [
            "Se vende y se reparten las ganancias",
            "Se atribuye al cónyuge sobreviviente",
            "Se mantiene en común con los herederos del cónyuge fallecido",
            "Se adjudica a los herederos del cónyuge fallecido"
        ],
        "correctaIndex": 1,
        "explicacion": "Art. 1321 CC: En caso de viudedad, la vivienda familiar se atribuye al cónyuge sobreviviente."
    },
    {
        "id": "ia_t3_e1_9",
        "temaId": "t3",
        "nivel": "Intermedio",
        "pregunta": "¿Qué es la responsabilidad por deudas en el régimen económico matrimonial?",
        "opciones": [
            "La responsabilidad subsidiaria de los cónyuges por las deudas contraídas en el ejercicio de la potestad doméstica ordinaria",
            "La responsabilidad conjunta de los cónyuges por las deudas contraídas en el ejercicio de la potestad doméstica ordinaria",
            "La irresponsabilidad de los cónyuges por las deudas contraídas en el ejercicio de la potestad doméstica ordinaria",
            "La responsabilidad solidaria de los cónyuges por las deudas contraídas en el ejercicio de la potestad doméstica ordinaria"
        ],
        "correctaIndex": 3,
        "explicacion": "Art. 1337 CC: La responsabilidad por deudas se refiere a la responsabilidad solidaria de los cónyuges por las deudas contraídas en el ejercicio de la potestad doméstica ordinaria."
    },
    {
        "id": "ia_t3_e1_10",
        "temaId": "t3",
        "nivel": "Avanzado",
        "pregunta": "¿Qué ocurre con las deudas contraídas por un cónyuge en el ejercicio de la potestad doméstica ordinaria?",
        "opciones": [
            "Se satisfacen con los bienes del cónyuge que contraiga la deuda y, subsidiariamente, con los bienes comunes",
            "Se satisfacen con los bienes comunes y, subsidiariamente, con los bienes del cónyuge que contraiga la deuda",
            "Se satisfacen con los bienes comunes y, subsidiariamente, con los bienes de ambos cónyuges",
            "Se satisfacen con los bienes de ambos cónyuges y, subsidiariamente, con los bienes comunes"
        ],
        "correctaIndex": 1,
        "explicacion": "Art. 1340 CC: Las deudas contraídas por un cónyuge en el ejercicio de la potestad doméstica ordinaria se satisfacen con los bienes comunes y, subsidiariamente, con los bienes del cónyuge que contraiga la deuda."
    },
    {
        "id": "ia_t3_e1_11",
        "temaId": "t3",
        "nivel": "Avanzado",
        "pregunta": "¿Qué es la modificación del régimen económico matrimonial?",
        "opciones": [
            "La modificación del régimen económico matrimonial por sentencia judicial",
            "La modificación del régimen económico matrimonial por acuerdo de los cónyuges y los hijos",
            "La modificación del régimen económico matrimonial por testamento",
            "La modificación del régimen económico matrimonial pactado por los cónyuges"
        ],
        "correctaIndex": 3,
        "explicacion": "Art. 1316 CC: La modificación del régimen económico matrimonial se refiere a la modificación del régimen económico matrimonial pactado por los cónyuges."
    },
    {
        "id": "ia_t4_e1_0",
        "temaId": "t4",
        "nivel": "Básico",
        "pregunta": "¿Cuál es el principio que garantiza la igualdad de los hijos en la ley y ante la ley?",
        "opciones": [
            "Igualdad consagrado en el art. 39 CE",
            "Igualdad consagrado en el art. 14 CE",
            "Igualdad consagrado en el art. 112 CC",
            "Igualdad consagrado en el art. 120 CC"
        ],
        "correctaIndex": 1,
        "explicacion": "Art. 14 CE: garantiza la igualdad de los hijos en la ley y ante la ley"
    },
    {
        "id": "ia_t4_e1_1",
        "temaId": "t4",
        "nivel": "Básico",
        "pregunta": "¿Qué artículo del Código Civil establece que la filiación despliega todos sus efectos desde que queda determinada legalmente?",
        "opciones": [
            "Art. 112 CC",
            "Art. 108 CC",
            "Art. 110 CC",
            "Art. 120 CC"
        ],
        "correctaIndex": 0,
        "explicacion": "Art. 112 CC: la filiación despliega todos sus efectos desde que queda determinada legalmente"
    },
    {
        "id": "ia_t4_e1_2",
        "temaId": "t4",
        "nivel": "Básico",
        "pregunta": "¿Cuál es el derecho que los padres deben prestar a los hijos según el art. 39.3 CE?",
        "opciones": [
            "Asistencia económica",
            "Asistencia médica",
            "Asistencia educativa",
            "Asistencia de todo orden"
        ],
        "correctaIndex": 3,
        "explicacion": "Art. 39.3 CE: los padres deben prestar asistencia de todo orden a los hijos"
    },
    {
        "id": "ia_t4_e1_3",
        "temaId": "t4",
        "nivel": "Básico",
        "pregunta": "¿Qué artículo del Código Civil establece que la posesión de estado puede conducir a la determinación de la filiación?",
        "opciones": [
            "Art. 108 CC",
            "Art. 110 CC",
            "Art. 113 CC",
            "Art. 120 CC"
        ],
        "correctaIndex": 2,
        "explicacion": "Art. 113 CC: la posesión de estado puede conducir a la determinación de la filiación"
    },
    {
        "id": "ia_t4_e1_4",
        "temaId": "t4",
        "nivel": "Intermedio",
        "pregunta": "¿Cómo se determina la filiación matrimonial paterna?",
        "opciones": [
            "Por sentencia firme",
            "Por reconocimiento ante el encargado del Registro Civil",
            "Por declaración realizada por el padre en el formulario oficial del Registro Civil",
            "Por la inscripción del nacimiento en el Registro junto con la inscripción del matrimonio de los padres"
        ],
        "correctaIndex": 3,
        "explicacion": "Art. 116 CC: la filiación matrimonial paterna se determina por la inscripción del nacimiento en el Registro junto con la inscripción del matrimonio de los padres"
    },
    {
        "id": "ia_t4_e1_5",
        "temaId": "t4",
        "nivel": "Intermedio",
        "pregunta": "¿Cuál es el plazo para destruir la presunción de paternidad en el caso de un hijo nacido dentro de los ciento ochenta días después de celebrado el matrimonio?",
        "opciones": [
            "Tres meses siguientes al parto",
            "Nueve meses siguientes al parto",
            "Un año siguiente al parto",
            "Seis meses siguientes al parto"
        ],
        "correctaIndex": 3,
        "explicacion": "Art. 116 CC: el plazo para destruir la presunción de paternidad es de seis meses siguientes al parto"
    },
    {
        "id": "ia_t4_e1_6",
        "temaId": "t4",
        "nivel": "Intermedio",
        "pregunta": "¿Qué requisito es necesario para que un progenitor menor no emancipado pueda reconocer a un hijo?",
        "opciones": [
            "Aprobación del otro progenitor",
            "Aprobación del Tribunal de Familia",
            "Aprobación judicial con audiencia del Ministerio Fiscal",
            "Aprobación del Registro Civil"
        ],
        "correctaIndex": 2,
        "explicacion": "Art. 120 CC: el progenitor menor no emancipado necesita aprobación judicial con audiencia del Ministerio Fiscal para reconocer a un hijo"
    },
    {
        "id": "ia_t4_e1_7",
        "temaId": "t4",
        "nivel": "Intermedio",
        "pregunta": "¿Cómo se puede determinar la filiación no matrimonial?",
        "opciones": [
            "Por declaración realizada por el padre en el formulario oficial del Registro Civil o por reconocimiento ante el encargado del Registro Civil",
            "Por inscripción del nacimiento en el Registro junto con la inscripción del matrimonio de los padres",
            "Por sentencia firme",
            "Por posesión de estado"
        ],
        "correctaIndex": 0,
        "explicacion": "Art. 120 CC: la filiación no matrimonial se puede determinar por declaración realizada por el padre en el formulario oficial del Registro Civil o por reconocimiento ante el encargado del Registro Civil"
    },
    {
        "id": "ia_t4_e1_8",
        "temaId": "t4",
        "nivel": "Avanzado",
        "pregunta": "¿Cuál es el efecto de la determinación de la filiación en cuanto a la sucesión?",
        "opciones": [
            "Los hijos no tienen derecho a heredar a sus padres",
            "Los hijos tienen derecho a heredar a sus padres",
            "Los hijos solo tienen derecho a heredar a sus padres si son matrimonial",
            "Los hijos solo tienen derecho a heredar a sus padres si son no matrimonial"
        ],
        "correctaIndex": 1,
        "explicacion": "Art. 807 CC: los hijos tienen derecho a heredar a sus padres"
    },
    {
        "id": "ia_t4_e1_9",
        "temaId": "t4",
        "nivel": "Avanzado",
        "pregunta": "¿Qué artículo del Código Civil establece que la filiación tiene efectos retroactivos siempre que dicha retroactividad sea compatible con la naturaleza de aquellos y la Ley no disponga lo contrario?",
        "opciones": [
            "Art. 112 CC",
            "Art. 108 CC",
            "Art. 110 CC",
            "Art. 120 CC"
        ],
        "correctaIndex": 0,
        "explicacion": "Art. 112 CC: la filiación tiene efectos retroactivos siempre que dicha retroactividad sea compatible con la naturaleza de aquellos y la Ley no disponga lo contrario"
    },
    {
        "id": "ia_t4_e1_10",
        "temaId": "t4",
        "nivel": "Avanzado",
        "pregunta": "¿Cuál es el derecho que los hijos tienen en cuanto al apellido de sus padres?",
        "opciones": [
            "Derecho a elegir el apellido de sus padres",
            "Derecho a cambiar el apellido de sus padres",
            "Derecho a llevar el apellido de sus padres",
            "Derecho a no llevar el apellido de sus padres"
        ],
        "correctaIndex": 2,
        "explicacion": "Art. 109 CC: los hijos tienen derecho a llevar el apellido de sus padres"
    },
    {
        "id": "ia_t4_e1_11",
        "temaId": "t4",
        "nivel": "Intermedio",
        "pregunta": "¿Qué artículo del Código Civil establece que los padres deben prestar asistencia a los hijos habidos dentro y fuera del matrimonio?",
        "opciones": [
            "Art. 108 CC",
            "Art. 39.3 CE",
            "Art. 110 CC",
            "Art. 120 CC"
        ],
        "correctaIndex": 1,
        "explicacion": "Art. 39.3 CE: los padres deben prestar asistencia a los hijos habidos dentro y fuera del matrimonio"
    },
    {
        "id": "ia_t4_e2_0",
        "temaId": "t4",
        "nivel": "Básico",
        "pregunta": "¿Cuál es el principio que garantiza la igualdad de los hijos en la ley y ante la ley?",
        "opciones": [
            "Principio de no discriminación",
            "Principio de igualdad de género",
            "Principio de igualdad consagrado en el art. 14 CE",
            "Principio de justicia social"
        ],
        "correctaIndex": 2,
        "explicacion": "Art. 14 CE: ..."
    },
    {
        "id": "ia_t4_e2_1",
        "temaId": "t4",
        "nivel": "Intermedio",
        "pregunta": "¿Cuál es el efecto de la determinación de la filiación en cuanto a la retroactividad?",
        "opciones": [
            "La determinación de la filiación no tiene efectos retroactivos",
            "La determinación de la filiación tiene efectos retroactivos en todos los casos",
            "La determinación de la filiación tiene efectos retroactivos solo en casos de adopción",
            "La determinación de la filiación tiene efectos retroactivos siempre que dicha retroactividad sea compatible con la naturaleza de aquellos y la Ley no disponga lo contrario"
        ],
        "correctaIndex": 3,
        "explicacion": "Art. 112 CC: ..."
    },
    {
        "id": "ia_t4_e2_2",
        "temaId": "t4",
        "nivel": "Básico",
        "pregunta": "¿Cuál es el derecho que los padres deben prestar a los hijos según el art. 39.3 CE?",
        "opciones": [
            "Asistencia de todo orden",
            "Asistencia económica",
            "Asistencia emocional",
            "Asistencia educativa"
        ],
        "correctaIndex": 0,
        "explicacion": "Art. 39.3 CE: ..."
    },
    {
        "id": "ia_t4_e2_3",
        "temaId": "t4",
        "nivel": "Intermedio",
        "pregunta": "¿Cuál es el artículo que regula el derecho al apellido en la filiación?",
        "opciones": [
            "Art. 110 CC",
            "Art. 111 CC",
            "Art. 114 CC",
            "Art. 109 CC"
        ],
        "correctaIndex": 3,
        "explicacion": "Art. 109 CC: ..."
    },
    {
        "id": "ia_t4_e2_4",
        "temaId": "t4",
        "nivel": "Intermedio",
        "pregunta": "¿Cuál es el medio por el cual se puede determinar la filiación en concurrencia con otras pruebas?",
        "opciones": [
            "La posesión de estado",
            "La inscripción del nacimiento en el Registro Civil",
            "La sentencia firme",
            "El reconocimiento ante el encargado del Registro Civil"
        ],
        "correctaIndex": 0,
        "explicacion": "Art. 113 CC: ..."
    },
    {
        "id": "ia_t4_e2_5",
        "temaId": "t4",
        "nivel": "Intermedio",
        "pregunta": "¿Cuál es el plazo para destruir la presunción de paternidad en el caso de nacido dentro de los ciento ochenta días después de celebrado el matrimonio?",
        "opciones": [
            "Un año después del parto",
            "Dos años después del parto",
            "Seis meses siguientes al parto",
            "Tres años después del parto"
        ],
        "correctaIndex": 2,
        "explicacion": "Art. 116 CC: ..."
    },
    {
        "id": "ia_t4_e2_6",
        "temaId": "t4",
        "nivel": "Avanzado",
        "pregunta": "¿Cuál es el efecto de la adopción en la relación jurídica de la filiación?",
        "opciones": [
            "La adopción no es fuente de la relación jurídica de la filiación",
            "La adopción es una forma de filiación solo en casos de orfandad",
            "La adopción es una forma de filiación solo en casos de abandono",
            "La adopción es igualmente fuente de la relación jurídica de la filiación"
        ],
        "correctaIndex": 3,
        "explicacion": "Art. 108 CC: ..."
    },
    {
        "id": "ia_t4_e2_7",
        "temaId": "t4",
        "nivel": "Intermedio",
        "pregunta": "¿Cuál es el artículo que regula la aplicación de técnicas de reproducción asistida humana?",
        "opciones": [
            "Art. 110 CC",
            "Ley 14/2006, de 26 de mayo",
            "Art. 111 CC",
            "Art. 114 CC"
        ],
        "correctaIndex": 1,
        "explicacion": "Ley 14/2006, de 26 de mayo: ..."
    },
    {
        "id": "ia_t4_e2_8",
        "temaId": "t4",
        "nivel": "Básico",
        "pregunta": "¿Cuál es el derecho que los hijos tienen en cuanto a la sucesión de los padres?",
        "opciones": [
            "Derechos sucesorios",
            "Derechos económicos",
            "Derechos emocionales",
            "Derechos educativos"
        ],
        "correctaIndex": 0,
        "explicacion": "Art. 807 CC: ..."
    },
    {
        "id": "ia_t4_e2_9",
        "temaId": "t4",
        "nivel": "Avanzado",
        "pregunta": "¿Cuál es el efecto de la determinación de la filiación en la relación entre los progenitores y los hijos?",
        "opciones": [
            "La determinación de la filiación no tiene efectos en la relación entre los progenitores y los hijos",
            "La determinación de la filiación despliega todos sus efectos desde que queda determinada legalmente",
            "La determinación de la filiación tiene efectos solo en la relación entre los progenitores",
            "La determinación de la filiación tiene efectos solo en la relación entre los hijos"
        ],
        "correctaIndex": 1,
        "explicacion": "Art. 112 CC: ..."
    },
    {
        "id": "ia_t4_e2_10",
        "temaId": "t4",
        "nivel": "Intermedio",
        "pregunta": "¿Cuál es el requisito para que un progenitor menor no emancipado pueda reconocer a un hijo?",
        "opciones": [
            "Necesita la aprobación del otro progenitor",
            "Necesita la aprobación judicial con audiencia del Ministerio Fiscal",
            "Necesita la aprobación de un tutor",
            "Necesita la aprobación de un juez"
        ],
        "correctaIndex": 1,
        "explicacion": "Art. 120 CC: ..."
    },
    {
        "id": "ia_t4_e2_11",
        "temaId": "t4",
        "nivel": "Avanzado",
        "pregunta": "¿Cuál es el efecto de la filiación en la relación entre los hermanos?",
        "opciones": [
            "La filiación no tiene efectos en la relación entre los hermanos",
            "La filiación tiene efectos solo en la relación entre los hermanos biológicos",
            "La filiación tiene efectos en la relación entre los hermanos en cuanto a la sucesión y la herencia",
            "La filiación tiene efectos solo en la relación entre los hermanos adoptivos"
        ],
        "correctaIndex": 2,
        "explicacion": "Art. 931 CC: ..."
    },
    {
        "id": "ia_t8_e0_0",
        "temaId": "t8",
        "nivel": "Básico",
        "pregunta": "¿Qué tipo de sucesión se produce cuando una persona entra en el puesto de otra ya fallecida respecto de un complejo de relaciones jurídicas?",
        "opciones": [
            "Sucesión por causa de muerte",
            "Sucesión por actos inter vivos",
            "Sucesión por ley",
            "Sucesión por testamento"
        ],
        "correctaIndex": 0,
        "explicacion": "Art. 657 CC: La sucesión por causa de muerte es la que se produce cuando una persona entra en el puesto de otra ya fallecida respecto de un complejo de relaciones jurídicas."
    },
    {
        "id": "ia_t8_e0_1",
        "temaId": "t8",
        "nivel": "Básico",
        "pregunta": "¿Qué es la sucesión universal?",
        "opciones": [
            "La sucesión en una parte de los bienes del causante",
            "La sucesión en la universalidad de los bienes del causante",
            "La sucesión en un derecho personal",
            "La sucesión en una relación jurídica"
        ],
        "correctaIndex": 1,
        "explicacion": "Art. 658 CC: La sucesión universal es la que se produce cuando el heredero sucede al causante en la universalidad de sus bienes."
    },
    {
        "id": "ia_t8_e0_2",
        "temaId": "t8",
        "nivel": "Básico",
        "pregunta": "¿Qué es la sucesión particular?",
        "opciones": [
            "La sucesión en la universalidad de los bienes del causante",
            "La sucesión en un derecho personal o en una relación jurídica concreta",
            "La sucesión en una parte de los bienes del causante",
            "La sucesión en una relación jurídica no concreta"
        ],
        "correctaIndex": 1,
        "explicacion": "Art. 660 CC: La sucesión particular es la que se produce cuando el legatario sucede al causante en un derecho personal o en una relación jurídica concreta."
    },
    {
        "id": "ia_t8_e0_3",
        "temaId": "t8",
        "nivel": "Básico",
        "pregunta": "¿Qué es la apertura de la sucesión?",
        "opciones": [
            "El momento en que el heredero acepta la herencia",
            "El momento en que el causante fallece y la herencia queda sin titular",
            "El momento en que el testamento es otorgado",
            "El momento en que la herencia es dividida"
        ],
        "correctaIndex": 1,
        "explicacion": "Art. 657 CC: La apertura de la sucesión se produce en el momento en que el causante fallece y la herencia queda sin titular."
    },
    {
        "id": "ia_t8_e0_4",
        "temaId": "t8",
        "nivel": "Intermedio",
        "pregunta": "¿Qué es la vocación a la herencia?",
        "opciones": [
            "La aceptación de la herencia por parte del heredero",
            "La delación de la herencia",
            "La división de la herencia",
            "El llamamiento de todos los posibles sucesores del causante"
        ],
        "correctaIndex": 3,
        "explicacion": "Art. 658 CC: La vocación a la herencia es el llamamiento de todos los posibles sucesores del causante."
    },
    {
        "id": "ia_t8_e0_5",
        "temaId": "t8",
        "nivel": "Intermedio",
        "pregunta": "¿Qué es la delación de la herencia?",
        "opciones": [
            "La aceptación de la herencia por parte del heredero",
            "La vocación a la herencia",
            "El ofrecimiento de la herencia al heredero",
            "La división de la herencia"
        ],
        "correctaIndex": 2,
        "explicacion": "Art. 659 CC: La delación de la herencia es el ofrecimiento de la herencia al heredero."
    },
    {
        "id": "ia_t8_e0_6",
        "temaId": "t8",
        "nivel": "Intermedio",
        "pregunta": "¿Qué es la adquisición de la herencia?",
        "opciones": [
            "El momento en que el heredero acepta la herencia",
            "El momento en que la herencia es dividida",
            "El momento en que el heredero queda investido como tal del conjunto de titularidades transmisibles pertenecientes al causante",
            "El momento en que el testamento es otorgado"
        ],
        "correctaIndex": 2,
        "explicacion": "Art. 661 CC: La adquisición de la herencia es el momento en que el heredero queda investido como tal del conjunto de titularidades transmisibles pertenecientes al causante."
    },
    {
        "id": "ia_t8_e0_7",
        "temaId": "t8",
        "nivel": "Intermedio",
        "pregunta": "¿Qué tipo de sucesión se produce cuando el causante no ha dispuesto nada en su testamento?",
        "opciones": [
            "Sucesión testada",
            "Sucesión voluntaria",
            "Sucesión intestada",
            "Sucesión universal"
        ],
        "correctaIndex": 2,
        "explicacion": "Art. 658 CC: La sucesión intestada se produce cuando el causante no ha dispuesto nada en su testamento."
    },
    {
        "id": "ia_t8_e0_8",
        "temaId": "t8",
        "nivel": "Intermedio",
        "pregunta": "¿Qué es el legatario?",
        "opciones": [
            "La persona designada para recibir un derecho personal o una relación jurídica concreta",
            "La persona designada para recibir la universalidad de los bienes del causante",
            "La persona designada para recibir una parte de los bienes del causante",
            "La persona designada para recibir una relación jurídica no concreta"
        ],
        "correctaIndex": 0,
        "explicacion": "Art. 660 CC: El legatario es la persona designada para recibir un derecho personal o una relación jurídica concreta."
    },
    {
        "id": "ia_t8_e0_9",
        "temaId": "t8",
        "nivel": "Avanzado",
        "pregunta": "¿Qué efecto produce la aceptación de la herencia en la responsabilidad del heredero?",
        "opciones": [
            "El heredero no responde de las deudas del causante",
            "El heredero responde de las deudas del causante solo en parte",
            "El heredero responde de las deudas del causante solo en caso de que el testamento lo establezca",
            "El heredero responde de las deudas del causante"
        ],
        "correctaIndex": 3,
        "explicacion": "Art. 662 CC: La aceptación de la herencia produce el efecto de que el heredero responde de las deudas del causante."
    },
    {
        "id": "ia_t8_e0_10",
        "temaId": "t8",
        "nivel": "Avanzado",
        "pregunta": "¿Qué es la renuncia a la herencia?",
        "opciones": [
            "El acto por el que el heredero acepta la herencia",
            "El acto por el que el heredero divide la herencia",
            "El acto por el que el heredero vende la herencia",
            "El acto por el que el heredero rechaza la herencia"
        ],
        "correctaIndex": 3,
        "explicacion": "Art. 663 CC: La renuncia a la herencia es el acto por el que el heredero rechaza la herencia."
    },
    {
        "id": "ia_t8_e0_11",
        "temaId": "t8",
        "nivel": "Avanzado",
        "pregunta": "¿Qué efecto produce la renuncia a la herencia en la sucesión?",
        "opciones": [
            "La renuncia a la herencia produce el efecto de que la herencia se defiere a los siguientes llamados",
            "La renuncia a la herencia produce el efecto de que la herencia se divide entre los demás herederos",
            "La renuncia a la herencia produce el efecto de que la herencia se vende",
            "La renuncia a la herencia produce el efecto de que la herencia se pierde"
        ],
        "correctaIndex": 0,
        "explicacion": "Art. 664 CC: La renuncia a la herencia produce el efecto de que la herencia se defiere a los siguientes llamados."
    }
],

    flashcards: [],
    glosario: []
};

// Merge con datos de DatosBorja (teoría, glosario, flashcards)
if (typeof DatosBorja !== 'undefined') {
    API.temas.forEach(t => {
        if (DatosBorja.teoriasPorTema && DatosBorja.teoriasPorTema[t.id]) {
            t.contenido = DatosBorja.teoriasPorTema[t.id];
        } else if (DatosBorja.teoria) {
            t.contenido = DatosBorja.teoria;
        }
    });
    if (DatosBorja.glosario) API.glosario = DatosBorja.glosario;
    if (DatosBorja.flashcards) API.flashcards = DatosBorja.flashcards;
}
