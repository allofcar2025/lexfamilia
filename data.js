// data.js — Base de datos de LexFamilia v8.0
// Banco de 246 preguntas generadas por IA — Derecho de Familia y Sucesiones CC

const DatosBorja = {
    glosario: [
        { id:"g1", termino:"Matrimonio", definicion:"Unión legal de dos personas que origina una comunidad de vida con efectos jurídicos reconocidos por el ordenamiento (Art. 44 CC)." },
        { id:"g2", termino:"Nulidad matrimonial", definicion:"Sanción que priva al matrimonio de efectos por defectos originarios en su celebración (Art. 73 CC)." },
        { id:"g3", termino:"Separación judicial", definicion:"Situación jurídica que suspende la convivencia conyugal sin disolver el vínculo matrimonial (Art. 81 CC)." },
        { id:"g4", termino:"Divorcio", definicion:"Disolución del vínculo matrimonial por resolución judicial a petición de uno o ambos cónyuges (Art. 86 CC)." },
        { id:"g5", termino:"Sociedad de gananciales", definicion:"Régimen económico matrimonial en que se hacen comunes las ganancias obtenidas durante el matrimonio (Art. 1344 CC)." },
        { id:"g6", termino:"Bienes privativos", definicion:"Bienes que pertenecen en exclusiva a uno de los cónyuges y no se integran en la sociedad de gananciales (Art. 1346 CC)." },
        { id:"g7", termino:"Filiación", definicion:"Vínculo jurídico que une a los hijos con sus progenitores, puede ser matrimonial o no matrimonial (Art. 108 CC)." },
        { id:"g8", termino:"Adopción", definicion:"Institución jurídica por la que se crea un vínculo de filiación entre adoptante y adoptado (Art. 175 CC)." },
        { id:"g9", termino:"Patria potestad", definicion:"Conjunto de derechos y deberes que corresponden a los progenitores sobre los hijos no emancipados (Art. 154 CC)." },
        { id:"g10", termino:"Tutela", definicion:"Institución de protección de menores e incapacitados que carecen de representación legal (Art. 215 CC)." },
        { id:"g11", termino:"Curatela", definicion:"Institución de guarda para personas con capacidad limitada que requieren asistencia para ciertos actos (Art. 286 CC)." },
        { id:"g12", termino:"Alimentos", definicion:"Prestación que comprende lo indispensable para sustento, habitación, vestido, asistencia médica y educación (Art. 142 CC)." },
        { id:"g13", termino:"Herencia", definicion:"Conjunto de bienes, derechos y obligaciones que no se extinguen con la muerte del causante (Art. 659 CC)." },
        { id:"g14", termino:"Testamento", definicion:"Acto por el cual una persona dispone para después de su muerte de todos o parte de sus bienes (Art. 667 CC)." },
        { id:"g15", termino:"Legítima", definicion:"Porción de bienes de que el testador no puede disponer por haberla reservado la ley a determinados herederos (Art. 806 CC)." },
        { id:"g16", termino:"Heredero forzoso", definicion:"Persona a quien la ley reserva una porción de la herencia de la que no puede ser privada sin causa (Art. 807 CC)." },
        { id:"g17", termino:"Legado", definicion:"Disposición testamentaria a título particular mediante la que se atribuye un bien o derecho concreto (Art. 858 CC)." },
        { id:"g18", termino:"Sucesión intestada", definicion:"Sucesión que se defiere por ministerio de la ley cuando no hay testamento válido o éste no dispone de todos los bienes (Art. 912 CC)." },
        { id:"g19", termino:"Beneficio de inventario", definicion:"Facultad del heredero de aceptar la herencia sin quedar obligado a pagar las deudas más allá de los bienes heredados (Art. 1010 CC)." },
        { id:"g20", termino:"Colación", definicion:"Operación por la que el heredero forzoso que concurre con otros trae a la masa hereditaria los bienes donados por el causante (Art. 1035 CC)." },
        { id:"g21", termino:"Partición de herencia", definicion:"Operación por la que se divide y adjudica a cada heredero su parte de la herencia (Art. 1051 CC)." },
        { id:"g22", termino:"Desheredación", definicion:"Privación de la legítima por causa expresada en testamento y reconocida por la ley (Art. 848 CC)." },
        { id:"g23", termino:"Preterición", definicion:"Omisión de un heredero forzoso en el testamento, que puede ser intencional o no intencional (Art. 814 CC)." },
        { id:"g24", termino:"Sustitución vulgar", definicion:"Designación de otra persona para ocupar el lugar del heredero instituido cuando éste no pueda o no quiera serlo (Art. 774 CC)." },
        { id:"g25", termino:"Representación sucesoria", definicion:"Derecho por el que los descendientes de un heredero premuerto ocupan su lugar en la sucesión intestada (Art. 924 CC)." },
        { id:"g26", termino:"Acrecer", definicion:"Derecho por el que la parte de un coheredero que no acepta acrece la de los demás coherederos (Art. 981 CC)." },
        { id:"g27", termino:"Capitulaciones matrimoniales", definicion:"Estipulaciones por las que los otorgantes establecen, modifican o sustituyen el régimen económico de su matrimonio (Art. 1325 CC)." },
        { id:"g28", termino:"Pensión compensatoria", definicion:"Pensión que puede fijar el juez a favor del cónyuge que quede en peor situación económica tras la separación o divorcio (Art. 97 CC)." },
        { id:"g29", termino:"Indignidad sucesoria", definicion:"Incapacidad para suceder por haber cometido actos reprochables contra el causante recogidos en la ley (Art. 756 CC)." },
        { id:"g30", termino:"Repudiación de herencia", definicion:"Acto por el cual el llamado a una herencia renuncia a ella de forma expresa ante notario o juez (Art. 1008 CC)." },
        { id:"g31", termino:"Donación", definicion:"Acto de liberalidad por el que una persona dispone gratuitamente de una cosa en favor de otra que la acepta (Art. 618 CC)." },
        { id:"g32", termino:"Defensor judicial", definicion:"Persona nombrada para representar a un menor o incapaz cuando existe conflicto de intereses con sus representantes (Art. 299 CC)." },
        { id:"g33", termino:"Acogimiento familiar", definicion:"Medida de protección de menores que atribuye la guarda del menor a persona o familia determinada (Art. 173 CC)." },
        { id:"g34", termino:"Emancipación", definicion:"Situación jurídica que habilita al menor para regir su persona y bienes como si fuera mayor de edad (Art. 314 CC)." },
        { id:"g35", termino:"Convenio regulador", definicion:"Acuerdo entre cónyuges que regula los efectos de la separación o divorcio, sujeto a aprobación judicial (Art. 90 CC)." },
        { id:"g36", termino:"Mejora", definicion:"Disposición por la que el testador atribuye a alguno de sus hijos o descendientes más del tercio de libre disposición (Art. 823 CC)." },
        { id:"g37", termino:"Legítima estricta", definicion:"Tercio de la herencia que debe distribuirse por igual entre todos los hijos y descendientes legitimarios (Art. 808 CC)." },
        { id:"g38", termino:"Derecho de representación", definicion:"Derecho por el que los descendientes de una persona entran en lugar y grado de su ascendiente premuerto (Art. 924 CC)." },
        { id:"g39", termino:"Aceptación a beneficio de inventario", definicion:"Modalidad de aceptación que limita la responsabilidad del heredero a los bienes recibidos (Art. 1010 CC)." },
        { id:"g40", termino:"Rescisión por lesión", definicion:"Acción que permite impugnar la partición cuando uno de los coherederos sufrió lesión en más de la cuarta parte (Art. 1073 CC)." },
        { id:"g41", termino:"Obligación alimenticia", definicion:"Deber legal de proporcionar los medios necesarios para la subsistencia de los parientes más próximos (Art. 143 CC)." },
        { id:"g42", termino:"Ejercicio de la patria potestad", definicion:"Actuación conjunta de ambos progenitores en el cuidado y representación de los hijos menores (Art. 156 CC)." },
        { id:"g43", termino:"Filiación adoptiva", definicion:"Vínculo legal de parentesco creado mediante adopción, que surte los mismos efectos que la filiación natural (Art. 108 CC)." },
        { id:"g44", termino:"Testamento ológrafo", definicion:"Testamento escrito, fechado y firmado de puño y letra por el testador sin intervención de notario (Art. 678 CC)." },
        { id:"g45", termino:"Testamento abierto notarial", definicion:"Testamento otorgado ante notario, que conoce la última voluntad del testador (Art. 694 CC)." },
        { id:"g46", termino:"Sustitución fideicomisaria", definicion:"Disposición testamentaria por la que el heredero queda obligado a conservar y transmitir los bienes a un tercero (Art. 781 CC)." },
        { id:"g47", termino:"Comunidad hereditaria", definicion:"Situación de cotitularidad sobre la herencia que existe desde la apertura de la sucesión hasta la partición (Art. 1051 CC)." },
        { id:"g48", termino:"Guarda de hecho", definicion:"Situación de protección de facto de un menor o persona con discapacidad sin nombramiento formal (Art. 303 CC)." },
    ],

    flashcards: [
        { id:"fc1",  temaId:"t1",  anverso:"¿Qué edad mínima se requiere para contraer matrimonio?", reverso:"16 años con dispensa judicial. Desde 2015 se eliminó el matrimonio de menores de 16 años sin dispensa (Art. 46 CC)." },
        { id:"fc2",  temaId:"t1",  anverso:"¿Cuáles son los impedimentos matrimoniales?", reverso:"Parentesco en línea recta, colateral hasta tercer grado, vínculo anterior no disuelto, y haber sido condenado por la muerte del cónyuge (Arts. 46-47 CC)." },
        { id:"fc3",  temaId:"t2",  anverso:"¿Cuándo puede pedirse el divorcio?", reverso:"En cualquier momento tras el matrimonio, sin necesidad de alegar causa, bastando que hayan transcurrido 3 meses desde la celebración (Art. 86 CC)." },
        { id:"fc4",  temaId:"t2",  anverso:"¿Qué regula el convenio regulador?", reverso:"El cuidado de los hijos, el régimen de visitas, la pensión compensatoria, el uso de la vivienda familiar y la liquidación del régimen económico (Art. 90 CC)." },
        { id:"fc5",  temaId:"t3",  anverso:"¿Cuáles son los bienes privativos del cónyuge?", reverso:"Los aportados antes del matrimonio, los adquiridos a título gratuito, los obtenidos por subrogación real de otros privativos y los de uso personal (Art. 1346 CC)." },
        { id:"fc6",  temaId:"t3",  anverso:"¿Cuándo se disuelve la sociedad de gananciales?", reverso:"Por disolución del matrimonio, declaración de nulidad, separación judicial, judicial o notarial a petición de ambos, y por otras causas del Art. 1392 CC." },
        { id:"fc7",  temaId:"t4",  anverso:"¿Cómo se determina la filiación matrimonial?", reverso:"Por la inscripción en el Registro Civil, por el documento o sentencia que la declara, y por la presunción de paternidad del marido (Art. 115 CC)." },
        { id:"fc8",  temaId:"t4",  anverso:"¿Cuál es el plazo para impugnar la paternidad matrimonial?", reverso:"1 año desde la inscripción en el Registro Civil o desde que el marido conoció el parto (Art. 136 CC)." },
        { id:"fc9",  temaId:"t5",  anverso:"¿Qué comprende la patria potestad?", reverso:"Velar por los hijos, tenerlos en su compañía, alimentarlos, educarlos, representarlos legalmente y administrar sus bienes (Art. 154 CC)." },
        { id:"fc10", temaId:"t5",  anverso:"¿Cuándo se extingue la patria potestad?", reverso:"Por la mayoría de edad del hijo, su emancipación, su adopción por otro, y por muerte del progenitor o del hijo (Art. 169 CC)." },
        { id:"fc11", temaId:"t6",  anverso:"¿Quiénes están sujetos a tutela?", reverso:"Los menores no emancipados sin patria potestad y los incapacitados judicialmente cuando la sentencia lo establezca (Art. 222 CC)." },
        { id:"fc12", temaId:"t6",  anverso:"¿Qué es la curatela?", reverso:"Institución de guarda y asistencia para emancipados con capacidad limitada y pródigos, complementando su capacidad para determinados actos (Art. 286 CC)." },
        { id:"fc13", temaId:"t7",  anverso:"¿Qué comprenden los alimentos?", reverso:"Lo indispensable para el sustento, habitación, vestido, asistencia médica, educación e instrucción del alimentista (Art. 142 CC)." },
        { id:"fc14", temaId:"t7",  anverso:"¿En qué orden están obligados a dar alimentos?", reverso:"1º cónyuge, 2º descendientes de grado más próximo, 3º ascendientes de grado más próximo, 4º hermanos (Art. 144 CC)." },
        { id:"fc15", temaId:"t8",  anverso:"¿Cuándo se abre la sucesión?", reverso:"En el momento de la muerte del causante o de la declaración de fallecimiento (Art. 657 CC)." },
        { id:"fc16", temaId:"t8",  anverso:"¿Qué es la indignidad sucesoria?", reverso:"Incapacidad para suceder que afecta a quien ha cometido actos graves contra el causante recogidos en el Art. 756 CC (condenar por matar, acusación falsa, etc.)." },
        { id:"fc17", temaId:"t9",  anverso:"¿Cuáles son los requisitos del testamento ológrafo?", reverso:"Debe estar escrito, fechado (día, mes y año) y firmado de puño y letra por el testador mayor de edad (Art. 688 CC)." },
        { id:"fc18", temaId:"t9",  anverso:"¿En qué plazo debe protocolizarse el testamento ológrafo?", reverso:"Dentro de los 5 años siguientes al fallecimiento del testador, ante notario (Art. 689 CC)." },
        { id:"fc19", temaId:"t10", anverso:"¿Qué es la sustitución vulgar?", reverso:"Designación de una segunda persona para suceder en caso de que el heredero instituido premuerda, no quiera o no pueda aceptar (Art. 774 CC)." },
        { id:"fc20", temaId:"t10", anverso:"¿Cuáles son las causas de desheredación de los hijos?", reverso:"Haberle negado alimentos, haberle maltratado de obra o injuriado gravemente de palabra, y haber sido condenado por atentar contra su vida (Art. 853 CC)." },
        { id:"fc21", temaId:"t11", anverso:"¿Cuál es la legítima de los hijos?", reverso:"Dos tercios de la herencia del padre o de la madre. Uno de esos tercios es la legítima estricta y el otro es el tercio de mejora (Art. 808 CC)." },
        { id:"fc22", temaId:"t11", anverso:"¿Cuál es la legítima del cónyuge viudo?", reverso:"Usufructo del tercio destinado a mejora cuando concurre con hijos o descendientes (Art. 834 CC)." },
        { id:"fc23", temaId:"t12", anverso:"¿Cuál es el primer orden en la sucesión intestada?", reverso:"Los hijos y descendientes del causante, con preferencia del grado más próximo y derecho de representación (Art. 930 CC)." },
        { id:"fc24", temaId:"t12", anverso:"¿Cuándo hereda el Estado?", reverso:"A falta de personas que tengan derecho a heredar conforme a los órdenes anteriores: descendientes, ascendientes, cónyuge y colaterales hasta cuarto grado (Art. 956 CC)." },
        { id:"fc25", temaId:"t13", anverso:"¿Qué es la aceptación a beneficio de inventario?", reverso:"Modalidad de aceptación que limita la responsabilidad del heredero al valor de los bienes heredados, sin responder con su patrimonio personal (Art. 1023 CC)." },
        { id:"fc26", temaId:"t13", anverso:"¿Cómo debe hacerse la repudiación de la herencia?", reverso:"Mediante instrumento público o escrito presentado ante el juez competente para conocer de la testamentaría o del abintestato (Art. 1008 CC)." },
        { id:"fc27", temaId:"t14", anverso:"¿Qué es la colación?", reverso:"La aportación a la masa hereditaria de los bienes donados por el causante al heredero forzoso que concurre con otros (Art. 1035 CC)." },
        { id:"fc28", temaId:"t14", anverso:"¿En qué plazo puede ejercitarse la acción de rescisión de la partición por lesión?", reverso:"En el plazo de 4 años contados desde la partición (Art. 1076 CC)." },
        { id:"fc29", temaId:"t1",  anverso:"¿Qué efectos produce la promesa de matrimonio incumplida?", reverso:"No produce obligación de contraer matrimonio pero sí obliga a resarcir los gastos hechos y las obligaciones contraídas, durante 1 año desde la negativa (Art. 43 CC)." },
        { id:"fc30", temaId:"t3",  anverso:"¿Qué son las capitulaciones matrimoniales?", reverso:"Estipulaciones por las que los otorgantes establecen, modifican o sustituyen el régimen económico de su matrimonio (Art. 1325 CC). Deben otorgarse en escritura pública." },
        { id:"fc31", temaId:"t4",  anverso:"¿Qué es la adopción?", reverso:"Institución jurídica de protección del menor que crea una relación de filiación equiparada en todo a la biológica, extinguiendo los vínculos con la familia anterior (Art. 175 CC)." },
        { id:"fc32", temaId:"t6",  anverso:"¿Qué es el defensor judicial?", reverso:"Persona nombrada para representar y amparar los intereses de un menor o incapaz en un asunto concreto, cuando existe conflicto con el tutor o curador (Art. 299 CC)." },
        { id:"fc33", temaId:"t8",  anverso:"¿Qué es la delación de la herencia?", reverso:"El ofrecimiento de la herencia a los llamados a ella, que nace desde la apertura de la sucesión y les permite aceptar o repudiar (Art. 657 CC)." },
        { id:"fc34", temaId:"t9",  anverso:"¿Quiénes no pueden testar?", reverso:"Los menores de catorce años y el incapacitado por sentencia firme cuando el testamento no corresponda a un intervalo de lucidez (Art. 663 CC)." },
        { id:"fc35", temaId:"t10", anverso:"¿Qué es la preterición?", reverso:"La omisión en el testamento de un heredero forzoso. Si es no intencional anula las disposiciones testamentarias; si es intencional solo da derecho a la legítima (Art. 814 CC)." },
        { id:"fc36", temaId:"t11", anverso:"¿Quiénes son legitimarios?", reverso:"Los hijos y descendientes respecto de sus padres y ascendientes, los padres y ascendientes respecto de sus hijos y descendientes, y el cónyuge viudo (Art. 807 CC)." },
        { id:"fc37", temaId:"t12", anverso:"¿Qué derechos tiene el cónyuge viudo en la sucesión intestada?", reverso:"Si concurre con descendientes: usufructo del tercio de mejora. Con ascendientes: usufructo de la mitad. En defecto de ambos: usufructo de los dos tercios (Arts. 834-837 CC)." },
        { id:"fc38", temaId:"t13", anverso:"¿Cuáles son los efectos del beneficio de inventario?", reverso:"El heredero no confunde sus bienes con los del causante, paga primero las deudas y legados, y solo responde con los bienes hereditarios (Art. 1023 CC)." },
        { id:"fc39", temaId:"t2",  anverso:"¿Qué es la pensión compensatoria?", reverso:"Pensión periódica o prestación única que puede recibir el cónyuge que quede en peor situación económica por el divorcio o separación (Art. 97 CC)." },
        { id:"fc40", temaId:"t5",  anverso:"¿Puede un progenitor ejercer solo la patria potestad?", reverso:"Sí, cuando el otro ha fallecido, está ausente o incapacitado, o cuando la separación o divorcio así lo establezca, o cuando uno la tenga suspendida o privada (Art. 156 CC)." },
        { id:"fc41", temaId:"t7",  anverso:"¿Cuándo se extingue la obligación de alimentos?", reverso:"Por muerte del obligado o del alimentista, por reducción de fortuna del obligado, por mejora de fortuna del alimentista, y por conducta del alimentista (Art. 150-152 CC)." },
        { id:"fc42", temaId:"t9",  anverso:"¿Qué es el testamento cerrado?", reverso:"Testamento en que el testador, sin revelar su última voluntad, declara que está contenida en el pliego que presenta al notario (Art. 706 CC)." },
        { id:"fc43", temaId:"t10", anverso:"¿Qué es el legado?", reverso:"Disposición testamentaria a título particular por la que el testador atribuye a alguien bienes concretos sin atribuirle la condición de heredero (Art. 858 CC)." },
        { id:"fc44", temaId:"t11", anverso:"¿Qué es la mejora?", reverso:"Facultad del testador de atribuir a algún hijo o descendiente más de lo que le correspondería por legítima estricta, hasta el límite del tercio de mejora (Art. 823 CC)." },
        { id:"fc45", temaId:"t14", anverso:"¿Quién puede pedir la partición?", reverso:"Cualquier coheredero, sus acreedores y cesionarios, y el Ministerio Fiscal si intervienen menores sin representación (Art. 1052 CC)." },
        { id:"fc46", temaId:"t3",  anverso:"¿Cuál es el régimen supletorio legal?", reverso:"La sociedad de gananciales, que se aplica en defecto de capitulaciones matrimoniales o cuando éstas sean nulas (Art. 1316 CC)." },
        { id:"fc47", temaId:"t6",  anverso:"¿Cuándo procede el internamiento involuntario?", reverso:"Cuando el trastorno psíquico impide al afectado decidir por sí mismo y existe riesgo para sí o para terceros. Requiere autorización judicial (Art. 763 LEC)." },
        { id:"fc48", temaId:"t8",  anverso:"¿Qué bienes no forman parte de la herencia?", reverso:"Los derechos y obligaciones estrictamente personales del causante (uso, habitación, usufructo legal), así como las pensiones e indemnizaciones por causa de muerte (Art. 659 CC)." },
        { id:"fc49", temaId:"t12", anverso:"¿Hasta qué grado heredan los colaterales en la sucesión intestada?", reverso:"Hasta el cuarto grado. Los hermanos tienen preferencia sobre los demás colaterales (Arts. 943-955 CC)." },
        { id:"fc50", temaId:"t13", anverso:"¿En qué plazo se puede aceptar la herencia?", reverso:"No hay plazo legal específico, pero cualquier interesado puede interpelarlo judicialmente para que declare si acepta o repudia. El juez dará plazo de 30 días (Art. 1004-1005 CC)." },
    ],

    bancoMasivo: [
  {
    "id": "b_t1_0_0",
    "temaId": "t1",
    "nivel": "Básico",
    "pregunta": "¿Cuál es el concepto de matrimonio según el Código Civil?",
    "opciones": [
      "El matrimonio es un contrato mercantil entre dos partes",
      "El matrimonio es una institución exclusivamente religiosa",
      "El matrimonio es la unión de dos personas con capacidad para contraerlo, con el fin de vivir juntos y ayudarse mutuamente",
      "El matrimonio es una unión entre más de dos personas"
    ],
    "correctaIndex": 2,
    "explicacion": "Art. 44 CC: El matrimonio es la unión de dos personas con capacidad para contraerlo, con el fin de vivir juntos y ayudarse mutuamente"
  },
  {
    "id": "b_t1_0_1",
    "temaId": "t1",
    "nivel": "Básico",
    "pregunta": "¿Qué edad debe tener una persona para contraer matrimonio?",
    "opciones": [
      "16 años",
      "21 años",
      "25 años",
      "18 años"
    ],
    "correctaIndex": 3,
    "explicacion": "Art. 48 CC: La edad mínima para contraer matrimonio es de 18 años"
  },
  {
    "id": "b_t1_0_2",
    "temaId": "t1",
    "nivel": "Intermedio",
    "pregunta": "¿Qué es el impedimento de parentesco para contraer matrimonio?",
    "opciones": [
      "El impedimento de parentesco es el que se produce entre parientes en línea recta o colateral hasta el segundo grado",
      "El impedimento de parentesco es el que se produce entre parientes en línea recta o colateral hasta el tercer grado",
      "El impedimento de parentesco es el que se produce entre parientes en línea recta o colateral hasta el cuarto grado",
      "No existe impedimento de parentesco para contraer matrimonio"
    ],
    "correctaIndex": 1,
    "explicacion": "Art. 47 CC: El impedimento de parentesco es el que se produce entre parientes en línea recta o colateral hasta el tercer grado"
  },
  {
    "id": "b_t1_0_3",
    "temaId": "t1",
    "nivel": "Básico",
    "pregunta": "¿Qué es la promesa de matrimonio?",
    "opciones": [
      "La promesa de matrimonio es el acuerdo entre dos personas para contraer matrimonio en el futuro",
      "La promesa de matrimonio es un contrato mercantil",
      "La promesa de matrimonio es una institución exclusivamente religiosa",
      "La promesa de matrimonio es una obligación de contraer matrimonio de inmediato"
    ],
    "correctaIndex": 0,
    "explicacion": "Art. 45 CC: La promesa de matrimonio es el acuerdo entre dos personas para contraer matrimonio en el futuro"
  },
  {
    "id": "b_t1_0_4",
    "temaId": "t1",
    "nivel": "Intermedio",
    "pregunta": "¿Qué es la nulidad del matrimonio por vicios del consentimiento?",
    "opciones": [
      "La nulidad del matrimonio por vicios del consentimiento se produce cuando uno de los cónyuges ha cambiado de opinión después de contraer matrimonio",
      "La nulidad del matrimonio por vicios del consentimiento se produce cuando uno de los cónyuges ha contraído matrimonio sin capacidad para hacerlo",
      "La nulidad del matrimonio por vicios del consentimiento se produce cuando uno de los cónyuges ha contraído matrimonio por error",
      "La nulidad del matrimonio por vicios del consentimiento se produce cuando uno de los cónyuges ha sido engañado o coaccionado para contraer matrimonio"
    ],
    "correctaIndex": 3,
    "explicacion": "Art. 56 CC: La nulidad del matrimonio por vicios del consentimiento se produce cuando uno de los cónyuges ha sido engañado o coaccionado para contraer matrimonio"
  },
  {
    "id": "b_t1_0_5",
    "temaId": "t1",
    "nivel": "Intermedio",
    "pregunta": "¿Qué es el plazo para solicitar la nulidad del matrimonio por vicios del consentimiento?",
    "opciones": [
      "El plazo para solicitar la nulidad del matrimonio por vicios del consentimiento es de 6 meses desde que se descubrió el vicio del consentimiento",
      "El plazo para solicitar la nulidad del matrimonio por vicios del consentimiento es de 1 año desde que se descubrió el vicio del consentimiento",
      "El plazo para solicitar la nulidad del matrimonio por vicios del consentimiento es de 3 años desde que se descubrió el vicio del consentimiento",
      "No hay plazo para solicitar la nulidad del matrimonio por vicios del consentimiento"
    ],
    "correctaIndex": 0,
    "explicacion": "Art. 56 CC: El plazo para solicitar la nulidad del matrimonio por vicios del consentimiento es de 6 meses desde que se descubrió el vicio del consentimiento"
  },
  {
    "id": "b_t1_0_6",
    "temaId": "t1",
    "nivel": "Intermedio",
    "pregunta": "¿Qué son los efectos del matrimonio?",
    "opciones": [
      "Los efectos del matrimonio son la creación de una sociedad mercantil",
      "Los efectos del matrimonio son la constitución de una comunidad de bienes exclusivamente para los hijos",
      "Los efectos del matrimonio son la creación de una sociedad conyugal y la constitución de una comunidad de bienes",
      "Los efectos del matrimonio son la creación de una sociedad conyugal y la constitución de una comunidad de bienes exclusivamente para los cónyuges"
    ],
    "correctaIndex": 2,
    "explicacion": "Art. 57 CC: Los efectos del matrimonio son la creación de una sociedad conyugal y la constitución de una comunidad de bienes"
  },
  {
    "id": "b_t1_0_7",
    "temaId": "t1",
    "nivel": "Intermedio",
    "pregunta": "¿Qué son los derechos y deberes de los cónyuges?",
    "opciones": [
      "Los derechos y deberes de los cónyuges son la fidelidad y el respeto exclusivamente",
      "Los derechos y deberes de los cónyuges son la fidelidad, el respeto, la ayuda mutua y la contribución a los gastos del hogar",
      "Los derechos y deberes de los cónyuges son la ayuda mutua y la contribución a los gastos del hogar exclusivamente",
      "Los derechos y deberes de los cónyuges son la libertad y la independencia absolutas"
    ],
    "correctaIndex": 1,
    "explicacion": "Art. 58 CC: Los derechos y deberes de los cónyuges son la fidelidad, el respeto, la ayuda mutua y la contribución a los gastos del hogar"
  },
  {
    "id": "b_t1_0_8",
    "temaId": "t1",
    "nivel": "Básico",
    "pregunta": "¿Qué es el matrimonio civil?",
    "opciones": [
      "El matrimonio civil es el matrimonio celebrado exclusivamente en una iglesia",
      "El matrimonio civil es el matrimonio celebrado ante un notario",
      "El matrimonio civil es el matrimonio celebrado en un país extranjero",
      "El matrimonio civil es el matrimonio celebrado ante un funcionario público competente"
    ],
    "correctaIndex": 3,
    "explicacion": "Art. 49 CC: El matrimonio civil es el matrimonio celebrado ante un funcionario público competente"
  },
  {
    "id": "b_t1_0_9",
    "temaId": "t1",
    "nivel": "Intermedio",
    "pregunta": "¿Qué es el matrimonio religioso?",
    "opciones": [
      "El matrimonio religioso es el matrimonio celebrado exclusivamente en una iglesia católica",
      "El matrimonio religioso es el matrimonio celebrado según las normas y ritos de una confesión religiosa",
      "El matrimonio religioso es el matrimonio celebrado ante un funcionario público competente",
      "El matrimonio religioso es el matrimonio celebrado en un país extranjero"
    ],
    "correctaIndex": 1,
    "explicacion": "Art. 50 CC: El matrimonio religioso es el matrimonio celebrado según las normas y ritos de una confesión religiosa"
  },
  {
    "id": "b_t1_0_10",
    "temaId": "t1",
    "nivel": "Avanzado",
    "pregunta": "¿Cuál es el fundamento legal del matrimonio?",
    "opciones": [
      "El fundamento legal del matrimonio es la libre voluntad de los contrayentes",
      "El fundamento legal del matrimonio es la voluntad de los padres de los contrayentes",
      "El fundamento legal del matrimonio es la voluntad de la sociedad",
      "El fundamento legal del matrimonio es la tradición"
    ],
    "correctaIndex": 0,
    "explicacion": "Art. 44 CC: El fundamento legal del matrimonio es la libre voluntad de los contrayentes"
  },
  {
    "id": "b_t1_0_11",
    "temaId": "t1",
    "nivel": "Avanzado",
    "pregunta": "¿Cuál es la naturaleza jurídica del matrimonio?",
    "opciones": [
      "La naturaleza jurídica del matrimonio es la de una sociedad conyugal",
      "La naturaleza jurídica del matrimonio es la de una sociedad mercantil",
      "La naturaleza jurídica del matrimonio es la de una comunidad de bienes",
      "La naturaleza jurídica del matrimonio es la de una institución exclusivamente religiosa"
    ],
    "correctaIndex": 0,
    "explicacion": "Art. 57 CC: La naturaleza jurídica del matrimonio es la de una sociedad conyugal"
  },
  {
    "id": "b_t1_0_12",
    "temaId": "t1",
    "nivel": "Avanzado",
    "pregunta": "¿Qué es la definición de matrimonio según el Código Civil?",
    "opciones": [
      "El matrimonio es una institución exclusivamente religiosa",
      "El matrimonio es una sociedad mercantil",
      "El matrimonio es la unión de dos personas con capacidad para contraerlo, con el fin de vivir juntos y ayudarse mutuamente",
      "El matrimonio es una unión entre más de dos personas"
    ],
    "correctaIndex": 2,
    "explicacion": "Art. 44 CC: El matrimonio es la unión de dos personas con capacidad para contraerlo, con el fin de vivir juntos y ayudarse mutuamente"
  },
  {
    "id": "b_t1_1_0",
    "temaId": "t1",
    "nivel": "Básico",
    "pregunta": "¿Qué edad debe tener una persona para contraer matrimonio en España?",
    "opciones": [
      "16 años",
      "21 años",
      "25 años",
      "18 años"
    ],
    "correctaIndex": 3,
    "explicacion": "Art. 48 CC: La edad mínima para contraer matrimonio es de 18 años."
  },
  {
    "id": "b_t1_1_1",
    "temaId": "t1",
    "nivel": "Intermedio",
    "pregunta": "¿Cuál es el plazo máximo para solicitar la nulidad de un matrimonio por falta de consentimiento?",
    "opciones": [
      "6 meses",
      "No hay plazo",
      "1 año",
      "5 años"
    ],
    "correctaIndex": 1,
    "explicacion": "Art. 56 CC: La nulidad por falta de consentimiento puede solicitarse en cualquier momento."
  },
  {
    "id": "b_t1_1_2",
    "temaId": "t1",
    "nivel": "Básico",
    "pregunta": "¿Qué tipo de matrimonio se celebra ante un juez o autoridad competente?",
    "opciones": [
      "Matrimonio religioso",
      "Matrimonio consensual",
      "Matrimonio por poder",
      "Matrimonio civil"
    ],
    "correctaIndex": 3,
    "explicacion": "Art. 49 CC: El matrimonio civil se celebra ante un juez o autoridad competente."
  },
  {
    "id": "b_t1_1_3",
    "temaId": "t1",
    "nivel": "Intermedio",
    "pregunta": "¿Cuál es el efecto del matrimonio en cuanto a la capacidad de los cónyuges para disponer de sus bienes?",
    "opciones": [
      "Se pierde la capacidad",
      "Se limita la capacidad",
      "No se modifica",
      "Se amplía la capacidad"
    ],
    "correctaIndex": 2,
    "explicacion": "Art. 58 CC: El matrimonio no modifica la capacidad de los cónyuges para disponer de sus bienes."
  },
  {
    "id": "b_t1_1_4",
    "temaId": "t1",
    "nivel": "Básico",
    "pregunta": "¿Qué es la promesa de matrimonio?",
    "opciones": [
      "Un acuerdo entre dos personas para contraer matrimonio en el futuro",
      "Un contrato de compraventa",
      "Un testamento",
      "Un acuerdo de separación"
    ],
    "correctaIndex": 0,
    "explicacion": "Art. 45 CC: La promesa de matrimonio es un acuerdo entre dos personas para contraer matrimonio en el futuro."
  },
  {
    "id": "b_t1_1_5",
    "temaId": "t1",
    "nivel": "Intermedio",
    "pregunta": "¿Cuál es el requisito de residencia para contraer matrimonio en España?",
    "opciones": [
      "Debe residir en España al menos 6 meses",
      "No hay requisito de residencia",
      "Debe residir en España al menos 1 año",
      "Debe residir en España al menos 5 años"
    ],
    "correctaIndex": 1,
    "explicacion": "Art. 50 CC: No hay requisito de residencia para contraer matrimonio en España."
  },
  {
    "id": "b_t1_1_6",
    "temaId": "t1",
    "nivel": "Intermedio",
    "pregunta": "¿Qué es el impedimento de parentesco?",
    "opciones": [
      "Un impedimento que prohíbe el matrimonio entre personas del mismo sexo",
      "Un impedimento que prohíbe el matrimonio entre personas de diferentes religiones",
      "Un impedimento que prohíbe el matrimonio entre parientes consanguíneos o afines",
      "Un impedimento que prohíbe el matrimonio entre personas de diferentes nacionalidades"
    ],
    "correctaIndex": 2,
    "explicacion": "Art. 47 CC: El impedimento de parentesco prohíbe el matrimonio entre parientes consanguíneos o afines."
  },
  {
    "id": "b_t1_1_7",
    "temaId": "t1",
    "nivel": "Avanzado",
    "pregunta": "¿Cuál es el efecto de la nulidad del matrimonio en cuanto a los hijos?",
    "opciones": [
      "Se modifica la filiación",
      "No se modifica la filiación",
      "Se pierde la filiación",
      "Se limita la filiación"
    ],
    "correctaIndex": 1,
    "explicacion": "Art. 63 CC: La nulidad del matrimonio no modifica la filiación de los hijos."
  },
  {
    "id": "b_t1_1_8",
    "temaId": "t1",
    "nivel": "Avanzado",
    "pregunta": "¿Qué es el matrimonio putativo?",
    "opciones": [
      "Un matrimonio que se celebra en secreto",
      "Un matrimonio que se celebra entre personas del mismo sexo",
      "Un matrimonio que se celebra de buena fe, pero que es nulo",
      "Un matrimonio que se celebra entre personas de diferentes nacionalidades"
    ],
    "correctaIndex": 2,
    "explicacion": "Art. 61 CC: El matrimonio putativo es un matrimonio que se celebra de buena fe, pero que es nulo."
  },
  {
    "id": "b_t1_1_9",
    "temaId": "t1",
    "nivel": "Intermedio",
    "pregunta": "¿Cuál es el plazo para solicitar la separación de bienes en un matrimonio?",
    "opciones": [
      "No hay plazo",
      "6 meses",
      "1 año",
      "5 años"
    ],
    "correctaIndex": 0,
    "explicacion": "Art. 64 CC: La separación de bienes puede solicitarse en cualquier momento."
  },
  {
    "id": "b_t1_1_10",
    "temaId": "t1",
    "nivel": "Básico",
    "pregunta": "¿Qué es el régimen económico del matrimonio?",
    "opciones": [
      "El régimen por el que se rigen los hijos",
      "El régimen por el que se rigen los parientes",
      "El régimen por el que se rigen los amigos",
      "El régimen por el que se rigen los bienes y deudas de los cónyuges"
    ],
    "correctaIndex": 3,
    "explicacion": "Art. 59 CC: El régimen económico del matrimonio es el régimen por el que se rigen los bienes y deudas de los cónyuges."
  },
  {
    "id": "b_t1_1_11",
    "temaId": "t1",
    "nivel": "Avanzado",
    "pregunta": "¿Cuál es el efecto de la muerte de uno de los cónyuges en cuanto a la sociedad de gananciales?",
    "opciones": [
      "Se disuelve la sociedad",
      "Se mantiene la sociedad",
      "Se limita la sociedad",
      "Se amplía la sociedad"
    ],
    "correctaIndex": 0,
    "explicacion": "Art. 65 CC: La muerte de uno de los cónyuges disuelve la sociedad de gananciales."
  },
  {
    "id": "b_t1_2_0",
    "temaId": "t1",
    "nivel": "Básico",
    "pregunta": "¿Cuál es el requisito mínimo de edad para contraer matrimonio en España?",
    "opciones": [
      "16 años",
      "21 años",
      "25 años",
      "18 años"
    ],
    "correctaIndex": 3,
    "explicacion": "Art. 48 CC: La edad mínima para contraer matrimonio es de 18 años."
  },
  {
    "id": "b_t1_2_1",
    "temaId": "t1",
    "nivel": "Básico",
    "pregunta": "¿Qué artículo del Código Civil español regula la forma de celebración del matrimonio civil?",
    "opciones": [
      "Art. 50 CC",
      "Art. 49 CC",
      "Art. 51 CC",
      "Art. 52 CC"
    ],
    "correctaIndex": 1,
    "explicacion": "Art. 49 CC: El matrimonio civil se celebra ante el Juez de Registro Civil."
  },
  {
    "id": "b_t1_2_2",
    "temaId": "t1",
    "nivel": "Básico",
    "pregunta": "¿Cuál es el plazo máximo para solicitar la anulación del matrimonio por error en la persona del cónyuge?",
    "opciones": [
      "1 año",
      "2 años",
      "6 meses",
      "3 años"
    ],
    "correctaIndex": 2,
    "explicacion": "Art. 56 CC: El plazo para solicitar la anulación es de 6 meses desde la celebración del matrimonio."
  },
  {
    "id": "b_t1_2_3",
    "temaId": "t1",
    "nivel": "Básico",
    "pregunta": "¿Qué sucede con los bienes gananciales en caso de disolución del matrimonio por divorcio?",
    "opciones": [
      "Se dividen por mitad",
      "Se adjudican al cónyuge que lo solicitó",
      "Se mantienen en común",
      "Se pierden"
    ],
    "correctaIndex": 0,
    "explicacion": "Art. 54 CC: Los bienes gananciales se dividen por mitad en caso de disolución del matrimonio."
  },
  {
    "id": "b_t1_2_4",
    "temaId": "t1",
    "nivel": "Intermedio",
    "pregunta": "¿Cuál es el requisito para que un matrimonio religioso tenga efectos civiles en España?",
    "opciones": [
      "Deberá ser autorizado por el Estado",
      "Deberá ser celebrado por un juez",
      "Deberá ser reconocido por la Iglesia",
      "Deberá inscribirse en el Registro Civil"
    ],
    "correctaIndex": 3,
    "explicacion": "Art. 51 CC: El matrimonio religioso deberá inscribirse en el Registro Civil para tener efectos civiles."
  },
  {
    "id": "b_t1_2_5",
    "temaId": "t1",
    "nivel": "Intermedio",
    "pregunta": "¿Qué artículo del Código Civil regula la nulidad del matrimonio por falta de consentimiento?",
    "opciones": [
      "Art. 59 CC",
      "Art. 60 CC",
      "Art. 58 CC",
      "Art. 61 CC"
    ],
    "correctaIndex": 2,
    "explicacion": "Art. 58 CC: La falta de consentimiento puede dar lugar a la nulidad del matrimonio."
  },
  {
    "id": "b_t1_2_6",
    "temaId": "t1",
    "nivel": "Intermedio",
    "pregunta": "¿Cuál es el plazo para que los cónyuges puedan solicitar la separación de bienes en caso de matrimonio en régimen de sociedad de gananciales?",
    "opciones": [
      "No hay plazo",
      "1 año",
      "2 años",
      "5 años"
    ],
    "correctaIndex": 0,
    "explicacion": "Art. 53 CC: No hay plazo para solicitar la separación de bienes en caso de matrimonio en régimen de sociedad de gananciales."
  },
  {
    "id": "b_t1_2_7",
    "temaId": "t1",
    "nivel": "Intermedio",
    "pregunta": "¿Qué sucede con la patria potestad en caso de divorcio de los padres?",
    "opciones": [
      "Se ejercerá de forma exclusiva por uno de los padres",
      "Se pierde",
      "Se ejercerá de forma conjunta",
      "Se suspende"
    ],
    "correctaIndex": 2,
    "explicacion": "Art. 62 CC: La patria potestad se ejercerá de forma conjunta en caso de divorcio de los padres."
  },
  {
    "id": "b_t1_2_8",
    "temaId": "t1",
    "nivel": "Intermedio",
    "pregunta": "¿Cuál es el artículo del Código Civil que regula la promesa de matrimonio?",
    "opciones": [
      "Art. 46 CC",
      "Art. 47 CC",
      "Art. 48 CC",
      "Art. 45 CC"
    ],
    "correctaIndex": 3,
    "explicacion": "Art. 45 CC: La promesa de matrimonio está regulada en este artículo."
  },
  {
    "id": "b_t1_2_9",
    "temaId": "t1",
    "nivel": "Avanzado",
    "pregunta": "¿Qué sucede con los derechos y deberes de los cónyuges en caso de separación de hecho?",
    "opciones": [
      "Se pierden",
      "Se mantienen",
      "Se suspenden",
      "Se modifican"
    ],
    "correctaIndex": 1,
    "explicacion": "Art. 63 CC: Los derechos y deberes de los cónyuges se mantienen en caso de separación de hecho."
  },
  {
    "id": "b_t1_2_10",
    "temaId": "t1",
    "nivel": "Avanzado",
    "pregunta": "¿Cuál es el artículo del Código Civil que regula la nulidad del matrimonio por impedimentos dirimentes?",
    "opciones": [
      "Art. 58 CC",
      "Art. 57 CC",
      "Art. 59 CC",
      "Art. 60 CC"
    ],
    "correctaIndex": 1,
    "explicacion": "Art. 57 CC: La nulidad del matrimonio por impedimentos dirimentes está regulada en este artículo."
  },
  {
    "id": "b_t1_2_11",
    "temaId": "t1",
    "nivel": "Avanzado",
    "pregunta": "¿Qué sucede con la capacidad para testar en caso de matrimonio putativo?",
    "opciones": [
      "Se mantiene",
      "Se pierde",
      "Se suspende",
      "Se modifica"
    ],
    "correctaIndex": 0,
    "explicacion": "Art. 64 CC: La capacidad para testar se mantiene en caso de matrimonio putativo."
  },
  {
    "id": "b_t2_1_0",
    "temaId": "t2",
    "nivel": "Básico",
    "pregunta": "¿Cuál es el plazo para solicitar la nulidad del matrimonio por error en la persona del cónyuge?",
    "opciones": [
      "2 años",
      "6 años",
      "No hay plazo",
      "4 años"
    ],
    "correctaIndex": 3,
    "explicacion": "Art. 74.2 CC: El matrimonio putativo se extingue por el transcurso de cuatro años desde que el cónyuge que hubiere obrado de buena fe tuvo conocimiento del impedimento"
  },
  {
    "id": "b_t2_1_1",
    "temaId": "t2",
    "nivel": "Intermedio",
    "pregunta": "¿Qué es la nulidad radical del matrimonio?",
    "opciones": [
      "La nulidad del matrimonio por defectos de forma",
      "La separación judicial del matrimonio",
      "El divorcio del matrimonio",
      "La nulidad del matrimonio por falta de consentimiento o por impedimentos dirimentes"
    ],
    "correctaIndex": 3,
    "explicacion": "Art. 73 CC: La nulidad del matrimonio puede ser radical o de forma"
  },
  {
    "id": "b_t2_1_2",
    "temaId": "t2",
    "nivel": "Básico",
    "pregunta": "¿Cuál es el efecto de la nulidad del matrimonio sobre los hijos?",
    "opciones": [
      "Los hijos son ilegítimos",
      "No afecta la filiación",
      "Los hijos son adoptados por el Estado",
      "Los hijos son considerados huérfanos"
    ],
    "correctaIndex": 1,
    "explicacion": "Art. 82 CC: La nulidad del matrimonio no afecta la filiación"
  },
  {
    "id": "b_t2_1_3",
    "temaId": "t2",
    "nivel": "Intermedio",
    "pregunta": "¿Qué es la separación judicial del matrimonio?",
    "opciones": [
      "La nulidad del matrimonio",
      "El divorcio del matrimonio",
      "La separación de los cónyuges sin la disolución del vínculo matrimonial",
      "La anulación del matrimonio"
    ],
    "correctaIndex": 2,
    "explicacion": "Art. 81 CC: La separación judicial es la separación de los cónyuges sin la disolución del vínculo matrimonial"
  },
  {
    "id": "b_t2_1_4",
    "temaId": "t2",
    "nivel": "Básico",
    "pregunta": "¿Cuál es el plazo para solicitar la separación judicial del matrimonio por abandono del hogar?",
    "opciones": [
      "1 año",
      "5 años",
      "2 años",
      "No hay plazo"
    ],
    "correctaIndex": 2,
    "explicacion": "Art. 86 CC: El matrimonio puede ser separado judicialmente por abandono del hogar durante dos años"
  },
  {
    "id": "b_t2_1_5",
    "temaId": "t2",
    "nivel": "Intermedio",
    "pregunta": "¿Qué es el convenio regulador?",
    "opciones": [
      "Un contrato prematrimonial",
      "Un testamento",
      "Un acuerdo entre los cónyuges que regula los efectos de la separación o divorcio",
      "Un acuerdo de custodia de los hijos"
    ],
    "correctaIndex": 2,
    "explicacion": "Art. 90 CC: El convenio regulador es un acuerdo entre los cónyuges que regula los efectos de la separación o divorcio"
  },
  {
    "id": "b_t2_1_6",
    "temaId": "t2",
    "nivel": "Intermedio",
    "pregunta": "¿Cuál es el requisito para que se pueda solicitar la pensión compensatoria?",
    "opciones": [
      "Que se haya producido un desequilibrio emocional",
      "Que se haya producido un desequilibrio económico en la separación o divorcio",
      "Que se haya producido un desequilibrio social",
      "Que se haya producido un desequilibrio cultural"
    ],
    "correctaIndex": 1,
    "explicacion": "Art. 97 CC: La pensión compensatoria se puede solicitar cuando se haya producido un desequilibrio económico en la separación o divorcio"
  },
  {
    "id": "b_t2_1_7",
    "temaId": "t2",
    "nivel": "Básico",
    "pregunta": "¿Qué es la custodia compartida?",
    "opciones": [
      "La custodia de los hijos que se ejerce de forma compartida por ambos progenitores",
      "La custodia de los hijos que se ejerce solo por uno de los progenitores",
      "La custodia de los hijos que se ejerce por un tercero",
      "La custodia de los hijos que se ejerce por el Estado"
    ],
    "correctaIndex": 0,
    "explicacion": "Art. 92 CC: La custodia compartida es la custodia de los hijos que se ejerce de forma compartida por ambos progenitores"
  },
  {
    "id": "b_t2_1_8",
    "temaId": "t2",
    "nivel": "Intermedio",
    "pregunta": "¿Cuál es el plazo para solicitar la modificación de las medidas adoptadas en un proceso de separación o divorcio?",
    "opciones": [
      "No hay plazo",
      "1 año",
      "2 años",
      "5 años"
    ],
    "correctaIndex": 0,
    "explicacion": "Art. 103 CC: Las medidas adoptadas en un proceso de separación o divorcio pueden ser modificadas en cualquier momento"
  },
  {
    "id": "b_t2_1_9",
    "temaId": "t2",
    "nivel": "Avanzado",
    "pregunta": "¿Qué es el uso de la vivienda familiar?",
    "opciones": [
      "El derecho a ocupar la vivienda familiar que se ejerce por uno de los cónyuges o por los hijos",
      "El derecho a vender la vivienda familiar",
      "El derecho a hipotecar la vivienda familiar",
      "El derecho a donar la vivienda familiar"
    ],
    "correctaIndex": 0,
    "explicacion": "Art. 96 CC: El uso de la vivienda familiar es el derecho a ocupar la vivienda familiar que se ejerce por uno de los cónyuges o por los hijos"
  },
  {
    "id": "b_t2_1_10",
    "temaId": "t2",
    "nivel": "Avanzado",
    "pregunta": "¿Cuál es el procedimiento para solicitar la nulidad del matrimonio por falta de consentimiento?",
    "opciones": [
      "Declaración de nulidad por acta notarial",
      "Declaración de nulidad por sentencia judicial",
      "Declaración de nulidad por escritura pública",
      "Declaración de nulidad por acuerdo entre los cónyuges"
    ],
    "correctaIndex": 1,
    "explicacion": "Art. 73 CC: La nulidad del matrimonio por falta de consentimiento se declaración por sentencia judicial"
  },
  {
    "id": "b_t2_1_11",
    "temaId": "t2",
    "nivel": "Avanzado",
    "pregunta": "¿Qué es el divorcio notarial?",
    "opciones": [
      "El divorcio que se realiza por medio de un juicio contencioso",
      "El divorcio que se realiza por medio de un convenio regulador",
      "El divorcio que se realiza por medio de un acuerdo entre los cónyuges",
      "El divorcio que se realiza por medio de un acta notarial"
    ],
    "correctaIndex": 3,
    "explicacion": "Art. 103.1 CC: El divorcio notarial es el divorcio que se realiza por medio de un acta notarial"
  },
  {
    "id": "b_t2_2_0",
    "temaId": "t2",
    "nivel": "Básico",
    "pregunta": "¿Cuál es el plazo para solicitar la nulidad del matrimonio por falta de consentimiento?",
    "opciones": [
      "4 años desde la celebración del matrimonio",
      "2 años desde la celebración del matrimonio",
      "No hay plazo para solicitar la nulidad",
      "6 años desde la celebración del matrimonio"
    ],
    "correctaIndex": 0,
    "explicacion": "Art. 74 CC: La acción de nulidad del matrimonio por falta de consentimiento debe ejercitarse dentro de los 4 años siguientes a la celebración del matrimonio"
  },
  {
    "id": "b_t2_2_1",
    "temaId": "t2",
    "nivel": "Básico",
    "pregunta": "¿Quién puede solicitar la separación judicial?",
    "opciones": [
      "Solo el cónyuge varón",
      "Solo el cónyuge que ha sido abandonado",
      "Cualquiera de los cónyuges",
      "Ninguno de los cónyuges"
    ],
    "correctaIndex": 2,
    "explicacion": "Art. 81 CC: Cualquiera de los cónyuges puede solicitar la separación judicial"
  },
  {
    "id": "b_t2_2_2",
    "temaId": "t2",
    "nivel": "Básico",
    "pregunta": "¿Cuál es el efecto de la nulidad del matrimonio sobre los hijos?",
    "opciones": [
      "Los hijos son considerados bastardos",
      "No afecta a la filiación",
      "Los hijos son adoptados por el Estado",
      "Los hijos pierden la nacionalidad"
    ],
    "correctaIndex": 1,
    "explicacion": "Art. 82 CC: La nulidad del matrimonio no afecta a la filiación de los hijos"
  },
  {
    "id": "b_t2_2_3",
    "temaId": "t2",
    "nivel": "Intermedio",
    "pregunta": "¿Cuál es el plazo para solicitar el divorcio después de la separación judicial?",
    "opciones": [
      "No hay plazo",
      "1 año después de la separación judicial",
      "2 años después de la separación judicial",
      "5 años después de la separación judicial"
    ],
    "correctaIndex": 0,
    "explicacion": "Art. 86 CC: No hay plazo para solicitar el divorcio después de la separación judicial"
  },
  {
    "id": "b_t2_2_4",
    "temaId": "t2",
    "nivel": "Intermedio",
    "pregunta": "¿Qué es el convenio regulador?",
    "opciones": [
      "Un contrato de matrimonio",
      "Un acuerdo entre los cónyuges que regula los efectos de la separación o el divorcio",
      "Un testamento",
      "Un acuerdo de custodia de los hijos"
    ],
    "correctaIndex": 1,
    "explicacion": "Art. 90 CC: El convenio regulador es un acuerdo entre los cónyuges que regula los efectos de la separación o el divorcio"
  },
  {
    "id": "b_t2_2_5",
    "temaId": "t2",
    "nivel": "Intermedio",
    "pregunta": "¿Cuál es el requisito para que el juez otorgue la pensión compensatoria?",
    "opciones": [
      "Que el cónyuge peticionario sea el único proveedor",
      "Que el cónyuge peticionario tenga una discapacidad",
      "Que se produzca un desequilibrio económico en la separación o el divorcio",
      "Que el cónyuge peticionario tenga más de 60 años"
    ],
    "correctaIndex": 2,
    "explicacion": "Art. 97 CC: El juez otorgará la pensión compensatoria si se produce un desequilibrio económico en la separación o el divorcio"
  },
  {
    "id": "b_t2_2_6",
    "temaId": "t2",
    "nivel": "Intermedio",
    "pregunta": "¿Quién tiene prioridad para el uso de la vivienda familiar en caso de separación o divorcio?",
    "opciones": [
      "El cónyuge que sea el dueño de la vivienda",
      "El cónyuge que tenga más ingresos",
      "Los hijos y el cónyuge que los tenga a su cargo",
      "El cónyuge que sea el solicitante de la separación o el divorcio"
    ],
    "correctaIndex": 2,
    "explicacion": "Art. 96 CC: Los hijos y el cónyuge que los tenga a su cargo tienen prioridad para el uso de la vivienda familiar en caso de separación o divorcio"
  },
  {
    "id": "b_t2_2_7",
    "temaId": "t2",
    "nivel": "Avanzado",
    "pregunta": "¿Cuál es el efecto de la nulidad del matrimonio sobre los bienes comunes?",
    "opciones": [
      "Se dividen entre los cónyuges",
      "Se consideran como bienes privativos",
      "Se adjudican al cónyuge que los haya aportado",
      "Se consideran como si nunca hubieran sido comunes"
    ],
    "correctaIndex": 3,
    "explicacion": "Art. 85 CC: La nulidad del matrimonio hace que los bienes comunes se consideren como si nunca hubieran sido comunes"
  },
  {
    "id": "b_t2_2_8",
    "temaId": "t2",
    "nivel": "Intermedio",
    "pregunta": "¿Qué es la custodia compartida?",
    "opciones": [
      "Un régimen de custodia en el que ambos cónyuges comparten la responsabilidad de los hijos",
      "Un régimen de custodia en el que un solo cónyuge tiene la responsabilidad de los hijos",
      "Un régimen de custodia en el que los hijos viven con un familiar",
      "Un régimen de custodia en el que los hijos son adoptados por un tercero"
    ],
    "correctaIndex": 0,
    "explicacion": "Art. 92 CC: La custodia compartida es un régimen de custodia en el que ambos cónyuges comparten la responsabilidad de los hijos"
  },
  {
    "id": "b_t2_2_9",
    "temaId": "t2",
    "nivel": "Intermedio",
    "pregunta": "¿Cuál es el plazo para solicitar la revisión de la pensión compensatoria?",
    "opciones": [
      "1 año después de la sentencia de divorcio",
      "2 años después de la sentencia de divorcio",
      "5 años después de la sentencia de divorcio",
      "En cualquier momento"
    ],
    "correctaIndex": 3,
    "explicacion": "Art. 100 CC: La pensión compensatoria puede ser revisada en cualquier momento"
  },
  {
    "id": "b_t2_2_10",
    "temaId": "t2",
    "nivel": "Avanzado",
    "pregunta": "¿Qué es la separación de hecho?",
    "opciones": [
      "La situación en la que los cónyuges viven separados después de la sentencia de separación judicial",
      "La situación en la que los cónyuges viven separados después de la sentencia de divorcio",
      "La situación en la que los cónyuges viven juntos pero no tienen relaciones conyugales",
      "La situación en la que los cónyuges viven separados sin haber solicitado la separación judicial"
    ],
    "correctaIndex": 3,
    "explicacion": "Art. 81 CC: La separación de hecho es la situación en la que los cónyuges viven separados sin haber solicitado la separación judicial"
  },
  {
    "id": "b_t2_2_11",
    "temaId": "t2",
    "nivel": "Avanzado",
    "pregunta": "¿Cuál es el efecto de la muerte de uno de los cónyuges sobre la pensión compensatoria?",
    "opciones": [
      "La pensión compensatoria se reduce a la mitad",
      "La pensión compensatoria se extingue",
      "La pensión compensatoria se aumenta",
      "La pensión compensatoria se convierte en una pensión vitalicia"
    ],
    "correctaIndex": 1,
    "explicacion": "Art. 103 CC: La pensión compensatoria se extingue con la muerte de uno de los cónyuges"
  },
  {
    "id": "b_t3_0_0",
    "temaId": "t3",
    "nivel": "Básico",
    "pregunta": "¿Qué es el régimen económico matrimonial?",
    "opciones": [
      "El conjunto de normas que regulan la organización y administración de los bienes y derechos de los cónyuges durante el matrimonio",
      "El conjunto de normas que regulan la separación de los cónyuges",
      "El conjunto de normas que regulan la herencia de los cónyuges",
      "El conjunto de normas que regulan la custodia de los hijos"
    ],
    "correctaIndex": 0,
    "explicacion": "Art. 1315 CC: El régimen económico matrimonial se rige por las normas de este título"
  },
  {
    "id": "b_t3_0_1",
    "temaId": "t3",
    "nivel": "Básico",
    "pregunta": "¿Qué son las capitulaciones matrimoniales?",
    "opciones": [
      "Los acuerdos entre los cónyuges sobre la separación",
      "Los acuerdos entre los cónyuges sobre la herencia",
      "Los acuerdos entre los cónyuges sobre su régimen económico matrimonial",
      "Los acuerdos entre los cónyuges sobre la custodia de los hijos"
    ],
    "correctaIndex": 2,
    "explicacion": "Art. 1325 CC: Las capitulaciones matrimoniales son los acuerdos entre los cónyuges sobre su régimen económico matrimonial"
  },
  {
    "id": "b_t3_0_2",
    "temaId": "t3",
    "nivel": "Intermedio",
    "pregunta": "¿Cuál es el plazo para que los cónyuges puedan otorgar capitulaciones matrimoniales?",
    "opciones": [
      " Solo antes de contraer matrimonio",
      " Solo después de contraer matrimonio",
      "En cualquier momento, antes o después de contraer matrimonio",
      " Solo durante el matrimonio"
    ],
    "correctaIndex": 2,
    "explicacion": "Art. 1325 CC: Las capitulaciones matrimoniales pueden ser otorgadas en cualquier momento"
  },
  {
    "id": "b_t3_0_3",
    "temaId": "t3",
    "nivel": "Básico",
    "pregunta": "¿Qué es la sociedad de gananciales?",
    "opciones": [
      "El régimen económico matrimonial en el que los cónyuges no comparten los bienes y derechos",
      "El régimen económico matrimonial en el que los cónyuges comparten los bienes y derechos adquiridos durante el matrimonio",
      "El régimen económico matrimonial en el que los cónyuges comparten solo los bienes",
      "El régimen económico matrimonial en el que los cónyuges comparten solo los derechos"
    ],
    "correctaIndex": 1,
    "explicacion": "Art. 1344 CC: La sociedad de gananciales es el régimen económico matrimonial en el que los cónyuges comparten los bienes y derechos adquiridos durante el matrimonio"
  },
  {
    "id": "b_t3_0_4",
    "temaId": "t3",
    "nivel": "Intermedio",
    "pregunta": "¿Qué son los bienes privativos en la sociedad de gananciales?",
    "opciones": [
      "Los bienes que pertenecen a ambos cónyuges",
      "Los bienes que pertenecen exclusivamente a uno de los cónyuges",
      "Los bienes que se adquieren durante el matrimonio",
      "Los bienes que se donan entre cónyuges"
    ],
    "correctaIndex": 1,
    "explicacion": "Art. 1346 CC: Los bienes privativos son los que pertenecen exclusivamente a uno de los cónyuges"
  },
  {
    "id": "b_t3_0_5",
    "temaId": "t3",
    "nivel": "Intermedio",
    "pregunta": "¿Quién gestiona la sociedad de gananciales?",
    "opciones": [
      "Ambos cónyuges, conjuntamente",
      "Solo uno de los cónyuges",
      "Un tercero, designado por los cónyuges",
      "Un juez, en caso de disputa"
    ],
    "correctaIndex": 0,
    "explicacion": "Art. 1375 CC: La sociedad de gananciales se gestiona conjuntamente por ambos cónyuges"
  },
  {
    "id": "b_t3_0_6",
    "temaId": "t3",
    "nivel": "Intermedio",
    "pregunta": "¿Cuáles son las cargas de la sociedad de gananciales?",
    "opciones": [
      "Las deudas y obligaciones contraídas por la sociedad",
      "Las deudas y obligaciones personales de los cónyuges",
      "Las deudas y obligaciones de los hijos",
      "Las deudas y obligaciones de los padres"
    ],
    "correctaIndex": 0,
    "explicacion": "Art. 1362 CC: Las cargas de la sociedad de gananciales son las deudas y obligaciones contraídas por la sociedad"
  },
  {
    "id": "b_t3_0_7",
    "temaId": "t3",
    "nivel": "Avanzado",
    "pregunta": "¿En qué casos se disuelve la sociedad de gananciales?",
    "opciones": [
      "En caso de enfermedad de uno de los cónyuges",
      "En caso de quiebra de la sociedad",
      "En caso de muerte, separación o divorcio de los cónyuges",
      "En caso de cambio de residencia de los cónyuges"
    ],
    "correctaIndex": 2,
    "explicacion": "Art. 1392 CC: La sociedad de gananciales se disuelve en caso de muerte, separación o divorcio de los cónyuges"
  },
  {
    "id": "b_t3_0_8",
    "temaId": "t3",
    "nivel": "Avanzado",
    "pregunta": "¿Cómo se realiza la liquidación de la sociedad de gananciales?",
    "opciones": [
      "Se vende el patrimonio común y se divide el precio",
      "Se divide el patrimonio común entre los cónyuges, salvo que se haya pactado otra cosa",
      "Se dona el patrimonio común a uno de los cónyuges",
      "Se entrega el patrimonio común a un tercero"
    ],
    "correctaIndex": 1,
    "explicacion": "Art. 1404 CC: La liquidación de la sociedad de gananciales se realiza dividiendo el patrimonio común entre los cónyuges"
  },
  {
    "id": "b_t3_0_9",
    "temaId": "t3",
    "nivel": "Intermedio",
    "pregunta": "¿Qué es la separación de bienes?",
    "opciones": [
      "El régimen económico matrimonial en el que los cónyuges comparten los bienes y derechos",
      "El régimen económico matrimonial en el que los cónyuges no comparten los bienes y derechos",
      "El régimen económico matrimonial en el que los cónyuges comparten solo los bienes",
      "El régimen económico matrimonial en el que cada cónyuge administra y dispone de sus bienes de manera independiente"
    ],
    "correctaIndex": 3,
    "explicacion": "Art. 1435 CC: La separación de bienes es el régimen económico matrimonial en el que cada cónyuge administra y dispone de sus bienes de manera independiente"
  },
  {
    "id": "b_t3_0_10",
    "temaId": "t3",
    "nivel": "Avanzado",
    "pregunta": "¿Qué es el régimen de participación?",
    "opciones": [
      "El régimen económico matrimonial en el que los cónyuges comparten los bienes y derechos",
      "El régimen económico matrimonial en el que los cónyuges no comparten los bienes y derechos",
      "El régimen económico matrimonial en el que los cónyuges comparten solo los bienes",
      "El régimen económico matrimonial en el que cada cónyuge participa en los beneficios y pérdidas del otro"
    ],
    "correctaIndex": 3,
    "explicacion": "Art. 1436 CC: El régimen de participación es el régimen económico matrimonial en el que cada cónyuge participa en los beneficios y pérdidas del otro"
  },
  {
    "id": "b_t3_0_11",
    "temaId": "t3",
    "nivel": "Intermedio",
    "pregunta": "¿Qué son las donaciones entre cónyuges?",
    "opciones": [
      "Los actos por los que uno de los cónyuges transfiere un bien o derecho a favor de un tercero",
      "Los actos por los que uno de los cónyuges recibe un bien o derecho de un tercero",
      "Los actos por los que uno de los cónyuges dona un bien o derecho a un hijo",
      "Los actos por los que uno de los cónyuges transfiere un bien o derecho a favor del otro"
    ],
    "correctaIndex": 3,
    "explicacion": "Art. 1324 CC: Las donaciones entre cónyuges son los actos por los que uno de los cónyuges transfiere un bien o derecho a favor del otro"
  },
  {
    "id": "b_t3_0_12",
    "temaId": "t3",
    "nivel": "Avanzado",
    "pregunta": "¿Qué requisitos deben cumplirse para que una donación entre cónyuges sea válida?",
    "opciones": [
      "Que se haga en escritura pública y que se inscriba en el Registro de la Propiedad",
      "Que se haga en escritura privada y que se inscriba en el Registro de la Propiedad",
      "Que se haga en escritura pública y que no se inscriba en el Registro de la Propiedad",
      "Que se haga de manera verbal y que se inscriba en el Registro de la Propiedad"
    ],
    "correctaIndex": 0,
    "explicacion": "Art. 632 CC: Las donaciones deben hacerse en escritura pública y deben inscribirse en el Registro de la Propiedad"
  },
  {
    "id": "b_t3_2_0",
    "temaId": "t3",
    "nivel": "Básico",
    "pregunta": "¿Cuál es el plazo para reclamar la nulidad de una capitulación matrimonial por falta de forma?",
    "opciones": [
      "2 años",
      "4 años",
      "6 años",
      "No hay plazo"
    ],
    "correctaIndex": 1,
    "explicacion": "Art. 1321 CC: El plazo para reclamar la nulidad de una capitulación matrimonial por falta de forma es de 4 años."
  },
  {
    "id": "b_t3_2_1",
    "temaId": "t3",
    "nivel": "Básico",
    "pregunta": "¿Qué tipo de bienes se consideran gananciales en el régimen de sociedad de gananciales?",
    "opciones": [
      "Los adquiridos a título lucrativo durante el matrimonio",
      "Los adquiridos a título oneroso durante el matrimonio",
      "Los adquiridos a título oneroso antes del matrimonio",
      "Los adquiridos a título lucrativo antes del matrimonio"
    ],
    "correctaIndex": 1,
    "explicacion": "Art. 1346 CC: Se consideran gananciales los bienes adquiridos a título oneroso durante el matrimonio."
  },
  {
    "id": "b_t3_2_2",
    "temaId": "t3",
    "nivel": "Básico",
    "pregunta": "¿Quién tiene la administración de los bienes gananciales en el régimen de sociedad de gananciales?",
    "opciones": [
      "El marido",
      "La mujer",
      "Ambos cónyuges",
      "Un tercer administrador"
    ],
    "correctaIndex": 2,
    "explicacion": "Art. 1377 CC: La administración de los bienes gananciales corresponde a ambos cónyuges."
  },
  {
    "id": "b_t3_2_3",
    "temaId": "t3",
    "nivel": "Básico",
    "pregunta": "¿Cuál es el efecto de la separación de bienes en el régimen económico matrimonial?",
    "opciones": [
      "Se crea una sociedad de gananciales",
      "Se establece un régimen de participación",
      "Se disuelve el matrimonio",
      "Cada cónyuge administra sus propios bienes"
    ],
    "correctaIndex": 3,
    "explicacion": "Art. 1437 CC: La separación de bienes implica que cada cónyuge administra sus propios bienes."
  },
  {
    "id": "b_t3_2_4",
    "temaId": "t3",
    "nivel": "Intermedio",
    "pregunta": "¿Qué sucede con los bienes gananciales cuando se disuelve la sociedad de gananciales?",
    "opciones": [
      "Se adjudican al cónyuge que los administra",
      "Se venden y se reparten las ganancias",
      "Se donan a un tercer beneficiario",
      "Se dividen por mitad entre los cónyuges"
    ],
    "correctaIndex": 3,
    "explicacion": "Art. 1404 CC: Los bienes gananciales se dividen por mitad entre los cónyuges cuando se disuelve la sociedad de gananciales."
  },
  {
    "id": "b_t3_2_5",
    "temaId": "t3",
    "nivel": "Intermedio",
    "pregunta": "¿Cuál es el requisito para que una donación entre cónyuges sea válida?",
    "opciones": [
      "Que se haga por testamento",
      "Que se haga por contrato verbal",
      "Que se haga por escritura pública",
      "Que se haga por acuerdo tácito"
    ],
    "correctaIndex": 2,
    "explicacion": "Art. 1325 CC: Las donaciones entre cónyuges deben hacerse por escritura pública."
  },
  {
    "id": "b_t3_2_6",
    "temaId": "t3",
    "nivel": "Intermedio",
    "pregunta": "¿Qué tipo de bienes son considerados privativos en el régimen de sociedad de gananciales?",
    "opciones": [
      "Los adquiridos a título lucrativo antes del matrimonio",
      "Los adquiridos a título oneroso durante el matrimonio",
      "Los adquiridos a título lucrativo durante el matrimonio",
      "Los adquiridos a título oneroso antes del matrimonio"
    ],
    "correctaIndex": 0,
    "explicacion": "Art. 1347 CC: Se consideran privativos los bienes adquiridos a título lucrativo antes del matrimonio."
  },
  {
    "id": "b_t3_2_7",
    "temaId": "t3",
    "nivel": "Intermedio",
    "pregunta": "¿Cuál es el plazo para solicitar la disolución de la sociedad de gananciales?",
    "opciones": [
      "No hay plazo",
      "1 año",
      "2 años",
      "5 años"
    ],
    "correctaIndex": 0,
    "explicacion": "Art. 1392 CC: No hay plazo para solicitar la disolución de la sociedad de gananciales."
  },
  {
    "id": "b_t3_2_8",
    "temaId": "t3",
    "nivel": "Intermedio",
    "pregunta": "¿Qué sucede con las deudas gananciales cuando se disuelve la sociedad de gananciales?",
    "opciones": [
      "Se adjudican al cónyuge que las contrajo",
      "Se dividen por mitad entre los cónyuges",
      "Se cancelan",
      "Se donan a un tercer beneficiario"
    ],
    "correctaIndex": 1,
    "explicacion": "Art. 1405 CC: Las deudas gananciales se dividen por mitad entre los cónyuges cuando se disuelve la sociedad de gananciales."
  },
  {
    "id": "b_t3_2_9",
    "temaId": "t3",
    "nivel": "Avanzado",
    "pregunta": "¿Cuál es el efecto de la nulidad de una capitulación matrimonial en el régimen económico matrimonial?",
    "opciones": [
      "Se aplica el régimen legal supletorio",
      "Se establece un régimen de separación de bienes",
      "Se crea una sociedad de gananciales",
      "Se disuelve el matrimonio"
    ],
    "correctaIndex": 0,
    "explicacion": "Art. 1322 CC: La nulidad de una capitulación matrimonial implica la aplicación del régimen legal supletorio."
  },
  {
    "id": "b_t3_2_10",
    "temaId": "t3",
    "nivel": "Avanzado",
    "pregunta": "¿Qué tipo de bienes se consideran gananciales en el régimen de sociedad de gananciales cuando se adquieren con dinero privativo?",
    "opciones": [
      "Los adquiridos a título lucrativo con dinero privativo del otro cónyuge",
      "Los adquiridos a título oneroso con dinero privativo del mismo cónyuge",
      "Los adquiridos a título lucrativo con dinero privativo del mismo cónyuge",
      "Los adquiridos a título oneroso con dinero privativo del otro cónyuge"
    ],
    "correctaIndex": 3,
    "explicacion": "Art. 1361 CC: Se consideran gananciales los bienes adquiridos a título oneroso con dinero privativo del otro cónyuge."
  },
  {
    "id": "b_t3_2_11",
    "temaId": "t3",
    "nivel": "Avanzado",
    "pregunta": "¿Cuál es el efecto de la declaración de nulidad de un matrimonio en el régimen económico matrimonial?",
    "opciones": [
      "Se aplica el régimen legal supletorio",
      "Se establece un régimen de separación de bienes",
      "Se considera que no ha existido matrimonio",
      "Se crea una sociedad de gananciales"
    ],
    "correctaIndex": 2,
    "explicacion": "Art. 1315 CC: La declaración de nulidad de un matrimonio implica que se considera que no ha existido matrimonio."
  },
  {
    "id": "b_t4_1_0",
    "temaId": "t4",
    "nivel": "Básico",
    "pregunta": "¿Cuál es el plazo para que el hijo pueda reclamar la filiación no matrimonial?",
    "opciones": [
      "2 años desde que alcanzó la mayoría de edad",
      "4 años desde que alcanzó la mayoría de edad",
      "6 años desde que alcanzó la mayoría de edad",
      "No hay plazo para reclamar la filiación no matrimonial"
    ],
    "correctaIndex": 1,
    "explicacion": "Art. 134 CC: El hijo puede reclamar la filiación no matrimonial dentro de los 4 años siguientes a su mayoría de edad"
  },
  {
    "id": "b_t4_1_1",
    "temaId": "t4",
    "nivel": "Intermedio",
    "pregunta": "¿Qué es necesario para que un hijo sea considerado matrimonial?",
    "opciones": [
      "Que los cónyuges estén casados en el momento de la concepción, pero no en el momento del nacimiento del hijo",
      "Que los cónyuges estén casados en el momento de la concepción o nacimiento del hijo",
      "Que los cónyuges estén casados en el momento del nacimiento del hijo, pero no en el momento de la concepción",
      "Que los cónyuges no estén casados en el momento de la concepción ni del nacimiento del hijo"
    ],
    "correctaIndex": 1,
    "explicacion": "Art. 108 CC: La filiación matrimonial se determina por la ley del país donde se contrajo el matrimonio, y se presume que el hijo nacido dentro del matrimonio es hijo de los cónyuges"
  },
  {
    "id": "b_t4_1_2",
    "temaId": "t4",
    "nivel": "Básico",
    "pregunta": "¿Cuál es el procedimiento para reconocer un hijo no matrimonial?",
    "opciones": [
      "El reconocimiento se hace por simple declaración verbal",
      "El reconocimiento se hace por escritura pública o por testamento",
      "El reconocimiento se hace por acta notarial",
      "El reconocimiento se hace por sentencia judicial"
    ],
    "correctaIndex": 1,
    "explicacion": "Art. 120 CC: El reconocimiento de un hijo no matrimonial se hace por escritura pública o por testamento"
  },
  {
    "id": "b_t4_1_3",
    "temaId": "t4",
    "nivel": "Intermedio",
    "pregunta": "¿Qué es la acción de reclamación de filiación?",
    "opciones": [
      "La acción que ejerce el padre para que se declare la filiación de su hijo",
      "La acción que ejerce el hijo para que se declare la paternidad de su padre",
      "La acción que ejerce el Estado para que se declare la filiación de un menor",
      "La acción que ejerce el hijo para que se declare su filiación"
    ],
    "correctaIndex": 3,
    "explicacion": "Art. 131 CC: La acción de reclamación de filiación es la que ejerce el hijo para que se declare su filiación"
  },
  {
    "id": "b_t4_1_4",
    "temaId": "t4",
    "nivel": "Intermedio",
    "pregunta": "¿Cuál es el plazo para impugnar la filiación?",
    "opciones": [
      "2 años desde que se tuvo conocimiento de los hechos que fundamentan la impugnación",
      "6 años desde que se tuvo conocimiento de los hechos que fundamentan la impugnación",
      "No hay plazo para impugnar la filiación",
      "4 años desde que se tuvo conocimiento de los hechos que fundamentan la impugnación"
    ],
    "correctaIndex": 3,
    "explicacion": "Art. 136 CC: La acción de impugnación de la filiación prescribe a los 4 años desde que se tuvo conocimiento de los hechos que la fundamentan"
  },
  {
    "id": "b_t4_1_5",
    "temaId": "t4",
    "nivel": "Básico",
    "pregunta": "¿Qué es la filiación adoptiva?",
    "opciones": [
      "La relación de parentesco que se establece entre el padre biológico y el hijo adoptado",
      "La relación de parentesco que se establece entre el adoptado y los familiares del adoptante",
      "La relación de parentesco que se establece entre el adoptante y el adoptado",
      "La relación de parentesco que se establece entre el adoptante y los familiares del adoptado"
    ],
    "correctaIndex": 2,
    "explicacion": "Art. 153 CC: La filiación adoptiva es la relación de parentesco que se establece entre el adoptante y el adoptado"
  },
  {
    "id": "b_t4_1_6",
    "temaId": "t4",
    "nivel": "Intermedio",
    "pregunta": "¿Qué efectos tiene la filiación en la sucesión?",
    "opciones": [
      "El hijo tiene derecho a heredar a sus padres y viceversa",
      "El hijo no tiene derecho a heredar a sus padres",
      "El hijo solo tiene derecho a heredar a su padre",
      "El hijo solo tiene derecho a heredar a su madre"
    ],
    "correctaIndex": 0,
    "explicacion": "Art. 165 CC: La filiación produce efectos en la sucesión, y el hijo tiene derecho a heredar a sus padres y viceversa"
  },
  {
    "id": "b_t4_1_7",
    "temaId": "t4",
    "nivel": "Básico",
    "pregunta": "¿Cuál es el procedimiento para cambiar el apellido de un hijo?",
    "opciones": [
      "El cambio de apellido se hace por escritura pública o por sentencia judicial",
      "El cambio de apellido se hace por simple declaración verbal",
      "El cambio de apellido se hace por acta notarial",
      "El cambio de apellido se hace por testamento"
    ],
    "correctaIndex": 0,
    "explicacion": "Art. 179 CC: El cambio de apellido se hace por escritura pública o por sentencia judicial"
  },
  {
    "id": "b_t4_1_8",
    "temaId": "t4",
    "nivel": "Intermedio",
    "pregunta": "¿Qué es el derecho de alimentos entre padres e hijos?",
    "opciones": [
      "El derecho que tienen los padres a recibir alimentos de sus hijos",
      "El derecho que tienen los hermanos a recibir alimentos entre sí",
      "El derecho que tienen los abuelos a recibir alimentos de sus nietos",
      "El derecho que tienen los hijos a recibir alimentos de sus padres"
    ],
    "correctaIndex": 3,
    "explicacion": "Art. 142 CC: El derecho de alimentos es el derecho que tienen los hijos a recibir alimentos de sus padres"
  },
  {
    "id": "b_t4_1_9",
    "temaId": "t4",
    "nivel": "Avanzado",
    "pregunta": "¿Cuál es el plazo para solicitar la impugnación de la paternidad?",
    "opciones": [
      "6 meses desde que se tuvo conocimiento de los hechos que fundamentan la impugnación",
      "3 meses desde que se tuvo conocimiento de los hechos que fundamentan la impugnación",
      "1 año desde que se tuvo conocimiento de los hechos que fundamentan la impugnación",
      "No hay plazo para solicitar la impugnación de la paternidad"
    ],
    "correctaIndex": 0,
    "explicacion": "Art. 138 CC: La acción de impugnación de la paternidad prescribe a los 6 meses desde que se tuvo conocimiento de los hechos que la fundamentan"
  },
  {
    "id": "b_t4_1_10",
    "temaId": "t4",
    "nivel": "Avanzado",
    "pregunta": "¿Qué es la presunción de paternidad?",
    "opciones": [
      "La presunción de que el padre biológico es el padre del hijo nacido fuera del matrimonio",
      "La presunción de que el padre adoptivo es el padre del hijo adoptado",
      "La presunción de que el marido es el padre del hijo nacido dentro del matrimonio",
      "La presunción de que el padre es el padre del hijo nacido dentro del matrimonio, pero no dentro del plazo de 300 días desde la separación de los cónyuges"
    ],
    "correctaIndex": 2,
    "explicacion": "Art. 116 CC: La presunción de paternidad es la presunción de que el marido es el padre del hijo nacido dentro del matrimonio"
  },
  {
    "id": "b_t4_1_11",
    "temaId": "t4",
    "nivel": "Avanzado",
    "pregunta": "¿Cuál es el requisito para que un hijo sea considerado hijo de un padre fallecido?",
    "opciones": [
      "Que el hijo haya nacido dentro de los 200 días siguientes a la muerte del padre",
      "Que el hijo haya nacido dentro de los 400 días siguientes a la muerte del padre",
      "Que el hijo haya nacido dentro de los 300 días siguientes a la muerte del padre",
      "Que el hijo haya nacido en cualquier momento después de la muerte del padre"
    ],
    "correctaIndex": 2,
    "explicacion": "Art. 124 CC: El hijo nacido dentro de los 300 días siguientes a la muerte del padre se presume hijo del fallecido"
  },
  {
    "id": "b_t4_2_0",
    "temaId": "t4",
    "nivel": "Básico",
    "pregunta": "¿Cuál es el plazo para reclamar la filiación no matrimonial?",
    "opciones": [
      "4 años",
      "2 años",
      "6 años",
      "No hay plazo"
    ],
    "correctaIndex": 0,
    "explicacion": "Art. 134 CC: La acción de reclamación de la filiación no matrimonial prescribe a los 4 años"
  },
  {
    "id": "b_t4_2_1",
    "temaId": "t4",
    "nivel": "Básico",
    "pregunta": "¿Quién puede reconocer a un hijo no matrimonial?",
    "opciones": [
      "Solo el padre",
      "Solo la madre",
      "El padre o la madre",
      "Ninguno de los padres"
    ],
    "correctaIndex": 2,
    "explicacion": "Art. 120 CC: El padre o la madre pueden reconocer a un hijo no matrimonial"
  },
  {
    "id": "b_t4_2_2",
    "temaId": "t4",
    "nivel": "Básico",
    "pregunta": "¿Cuál es el efecto de la filiación en la sucesión?",
    "opciones": [
      "El hijo no tiene derecho a heredar",
      "El hijo solo hereda si es matrimonial",
      "El hijo tiene derecho a heredar",
      "El hijo solo hereda si es no matrimonial"
    ],
    "correctaIndex": 2,
    "explicacion": "Art. 657 CC: El hijo tiene derecho a heredar por su condición de hijo"
  },
  {
    "id": "b_t4_2_3",
    "temaId": "t4",
    "nivel": "Básico",
    "pregunta": "¿Cuál es el plazo para impugnar la filiación?",
    "opciones": [
      "2 años",
      "6 años",
      "No hay plazo",
      "4 años"
    ],
    "correctaIndex": 3,
    "explicacion": "Art. 141 CC: La acción de impugnación de la filiación prescribe a los 4 años"
  },
  {
    "id": "b_t4_2_4",
    "temaId": "t4",
    "nivel": "Intermedio",
    "pregunta": "¿Qué es la filiación adoptiva?",
    "opciones": [
      "La creación de un vínculo de parentesco entre el adoptante y el adoptado solo si es matrimonial",
      "La creación de un vínculo de parentesco entre el adoptante y el adoptado",
      "La creación de un vínculo de parentesco entre el adoptante y el adoptado solo si es no matrimonial",
      "La anulación de un vínculo de parentesco"
    ],
    "correctaIndex": 1,
    "explicacion": "Art. 175 CC: La filiación adoptiva es la creación de un vínculo de parentesco entre el adoptante y el adoptado"
  },
  {
    "id": "b_t4_2_5",
    "temaId": "t4",
    "nivel": "Intermedio",
    "pregunta": "¿Quién puede adoptar?",
    "opciones": [
      "Solo una persona sola",
      "Solo un matrimonio",
      "Ninguno de los anteriores",
      "Una persona sola o un matrimonio"
    ],
    "correctaIndex": 3,
    "explicacion": "Art. 176 CC: Pueden adoptar una persona sola o un matrimonio"
  },
  {
    "id": "b_t4_2_6",
    "temaId": "t4",
    "nivel": "Intermedio",
    "pregunta": "¿Cuál es el requisito para la adopción?",
    "opciones": [
      "Que el adoptante tenga al menos 25 años y 14 más que el adoptado",
      "Que el adoptante tenga al menos 30 años y 14 más que el adoptado",
      "Que el adoptante tenga al menos 25 años y 10 más que el adoptado",
      "Que el adoptante tenga al menos 18 años y 14 más que el adoptado"
    ],
    "correctaIndex": 0,
    "explicacion": "Art. 176 CC: El adoptante debe tener al menos 25 años y 14 más que el adoptado"
  },
  {
    "id": "b_t4_2_7",
    "temaId": "t4",
    "nivel": "Intermedio",
    "pregunta": "¿Qué sucede con los apellidos en la adopción?",
    "opciones": [
      "El adoptado mantiene sus apellidos",
      "El adoptado toma los apellidos del adoptante",
      "El adoptado elige entre sus apellidos o los del adoptante",
      "El adoptado pierde sus apellidos"
    ],
    "correctaIndex": 1,
    "explicacion": "Art. 179 CC: El adoptado toma los apellidos del adoptante"
  },
  {
    "id": "b_t4_2_8",
    "temaId": "t4",
    "nivel": "Intermedio",
    "pregunta": "¿Cuál es el efecto de la filiación en la capacidad para testar?",
    "opciones": [
      "El hijo no tiene derecho a heredar y no puede ser designado heredero",
      "El hijo solo tiene derecho a heredar si es matrimonial",
      "El hijo tiene derecho a heredar y puede ser designado heredero",
      "El hijo solo puede ser designado heredero si es no matrimonial"
    ],
    "correctaIndex": 2,
    "explicacion": "Art. 807 CC: El hijo tiene derecho a heredar y puede ser designado heredero"
  },
  {
    "id": "b_t4_2_9",
    "temaId": "t4",
    "nivel": "Avanzado",
    "pregunta": "¿Qué sucede si se desconoce la identidad del padre?",
    "opciones": [
      "Se puede determinar la filiación mediante prueba de ADN",
      "Se puede determinar la filiación mediante reconocimiento",
      "Se puede determinar la filiación mediante testamento",
      "No se puede determinar la filiación"
    ],
    "correctaIndex": 0,
    "explicacion": "Art. 125 CC: Se puede determinar la filiación mediante prueba de ADN"
  },
  {
    "id": "b_t4_2_10",
    "temaId": "t4",
    "nivel": "Avanzado",
    "pregunta": "¿Cuál es el efecto de la filiación en la responsabilidad parental?",
    "opciones": [
      "Los padres no tienen la responsabilidad de cuidar y educar al hijo",
      "Los padres tienen la responsabilidad de cuidar y educar al hijo",
      "Solo el padre tiene la responsabilidad de cuidar y educar al hijo",
      "Solo la madre tiene la responsabilidad de cuidar y educar al hijo"
    ],
    "correctaIndex": 1,
    "explicacion": "Art. 154 CC: Los padres tienen la responsabilidad de cuidar y educar al hijo"
  },
  {
    "id": "b_t4_2_11",
    "temaId": "t4",
    "nivel": "Avanzado",
    "pregunta": "¿Qué sucede si se produce una discordancia entre el registro civil y la realidad?",
    "opciones": [
      "Se puede solicitar la anulación del registro civil",
      "Se puede solicitar la modificación del registro civil",
      "No se puede solicitar nada",
      "Se puede solicitar la rectificación del registro civil"
    ],
    "correctaIndex": 3,
    "explicacion": "Art. 143 CC: Se puede solicitar la rectificación del registro civil"
  },
  {
    "id": "b_t5_1_0",
    "temaId": "t5",
    "nivel": "Básico",
    "pregunta": "¿Quién ejerce la patria potestad sobre los hijos menores de edad en una familia?",
    "opciones": [
      "Los padres",
      "El tutor",
      "El Estado",
      "Los abuelos"
    ],
    "correctaIndex": 0,
    "explicacion": "Art. 154 CC: La patria potestad se ejerce por los padres"
  },
  {
    "id": "b_t5_1_1",
    "temaId": "t5",
    "nivel": "Básico",
    "pregunta": "¿Cuál es el objetivo principal de la patria potestad?",
    "opciones": [
      "Administración de bienes",
      "Representación legal",
      "Ejercicio de la autoridad",
      "Proteger y promover el bienestar del menor"
    ],
    "correctaIndex": 3,
    "explicacion": "Art. 154 CC: La patria potestad se ejerce en beneficio de los hijos"
  },
  {
    "id": "b_t5_1_2",
    "temaId": "t5",
    "nivel": "Intermedio",
    "pregunta": "¿Cómo se ejerce la patria potestad en caso de que los padres estén separados o divorciados?",
    "opciones": [
      "Exclusivamente por el padre",
      "Exclusivamente por la madre",
      "De manera conjunta, salvo que se acuerde o se disponga otra cosa",
      "De manera alterna"
    ],
    "correctaIndex": 2,
    "explicacion": "Art. 156 CC: El ejercicio de la patria potestad en caso de separación o divorcio"
  },
  {
    "id": "b_t5_1_3",
    "temaId": "t5",
    "nivel": "Intermedio",
    "pregunta": "¿Cuál es el plazo para que los padres puedan acordar la guarda y custodia de los hijos en caso de separación o divorcio?",
    "opciones": [
      "30 días",
      "6 meses",
      "1 año",
      "No hay un plazo específico, pero debe ser lo antes posible"
    ],
    "correctaIndex": 3,
    "explicacion": "Art. 159 CC: La guarda y custodia en caso de separación o divorcio"
  },
  {
    "id": "b_t5_1_4",
    "temaId": "t5",
    "nivel": "Intermedio",
    "pregunta": "¿Quién puede solicitar la privación de la patria potestad?",
    "opciones": [
      "El otro progenitor",
      "El tutor",
      "El menor de edad",
      "El Ministerio Fiscal"
    ],
    "correctaIndex": 3,
    "explicacion": "Art. 169 CC: La privación de la patria potestad"
  },
  {
    "id": "b_t5_1_5",
    "temaId": "t5",
    "nivel": "Intermedio",
    "pregunta": "¿Cuál es el requisito necesario para que se pueda declarar la privación de la patria potestad?",
    "opciones": [
      "Que los padres no puedan ejercerla o la ejerzan de modo perjudicial para los hijos",
      "Que los padres estén separados o divorciados",
      "Que los padres no cumplan con sus obligaciones económicas",
      "Que los padres no estén de acuerdo en la educación de los hijos"
    ],
    "correctaIndex": 0,
    "explicacion": "Art. 169 CC: La privación de la patria potestad"
  },
  {
    "id": "b_t5_1_6",
    "temaId": "t5",
    "nivel": "Básico",
    "pregunta": "¿Cómo se ejerce la administración de los bienes de los hijos menores de edad?",
    "opciones": [
      "El padre administra los bienes",
      "La madre administra los bienes",
      "Los padres los administran conjuntamente, salvo que se acuerde o se disponga otra cosa",
      "El tutor administra los bienes"
    ],
    "correctaIndex": 2,
    "explicacion": "Art. 166 CC: La administración de los bienes de los hijos"
  },
  {
    "id": "b_t5_1_7",
    "temaId": "t5",
    "nivel": "Avanzado",
    "pregunta": "¿Cuál es el procedimiento para la suspensión de la patria potestad?",
    "opciones": [
      "Se sigue el procedimiento penal",
      "Se sigue el procedimiento establecido en la Ley de Enjuiciamiento Civil",
      "Se sigue el procedimiento administrativo",
      "No hay un procedimiento específico"
    ],
    "correctaIndex": 1,
    "explicacion": "Art. 172 CC: La suspensión de la patria potestad"
  },
  {
    "id": "b_t5_1_8",
    "temaId": "t5",
    "nivel": "Intermedio",
    "pregunta": "¿Cuándo se produce la extinción de la patria potestad?",
    "opciones": [
      "Cuando los padres se separan o divorcian",
      "Cuando se produce la privación de la patria potestad",
      "Cuando el hijo alcanza la mayoría de edad o es emancipado",
      "Cuando se produce la suspensión de la patria potestad"
    ],
    "correctaIndex": 2,
    "explicacion": "Art. 179 CC: La extinción de la patria potestad"
  },
  {
    "id": "b_t5_1_9",
    "temaId": "t5",
    "nivel": "Básico",
    "pregunta": "¿Quién puede solicitar la guarda y custodia compartida de los hijos en caso de separación o divorcio?",
    "opciones": [
      "Ambos progenitores",
      "Solo el padre",
      "Solo la madre",
      "El tutor"
    ],
    "correctaIndex": 0,
    "explicacion": "Art. 159 CC: La guarda y custodia en caso de separación o divorcio"
  },
  {
    "id": "b_t5_1_10",
    "temaId": "t5",
    "nivel": "Avanzado",
    "pregunta": "¿Cuál es el plazo para que el Juez resuelva sobre la guarda y custodia de los hijos en caso de separación o divorcio?",
    "opciones": [
      "30 días",
      "No hay un plazo específico, pero debe ser lo antes posible",
      "6 meses",
      "1 año"
    ],
    "correctaIndex": 1,
    "explicacion": "Art. 159 CC: La guarda y custodia en caso de separación o divorcio"
  },
  {
    "id": "b_t5_1_11",
    "temaId": "t5",
    "nivel": "Avanzado",
    "pregunta": "¿Qué ocurre con la patria potestad cuando uno de los progenitores fallece?",
    "opciones": [
      "La patria potestad se extingue",
      "El otro progenitor la ejerce en exclusiva",
      "La patria potestad se suspende",
      "Se nombra un tutor"
    ],
    "correctaIndex": 1,
    "explicacion": "Art. 173 CC: La muerte de uno de los progenitores"
  },
  {
    "id": "b_t6_0_0",
    "temaId": "t6",
    "nivel": "Básico",
    "pregunta": "¿Qué es la tutela según el Código Civil?",
    "opciones": [
      "Institución que tiene por objeto el cuidado y protección de los menores o incapacitados",
      "Institución que tiene por objeto la gestión de bienes",
      "Institución que tiene por objeto la representación legal",
      "Institución que tiene por objeto la defensa judicial"
    ],
    "correctaIndex": 0,
    "explicacion": "Art. 215 CC: La tutela es una institución que tiene por objeto el cuidado y protección de los menores o incapacitados"
  },
  {
    "id": "b_t6_0_1",
    "temaId": "t6",
    "nivel": "Básico",
    "pregunta": "¿Quién puede ser tutor según el Código Civil?",
    "opciones": [
      "Solo los parientes del menor o incapacitado",
      "Cualquiera que tenga capacidad para obrar y no esté inhabilitado por la ley",
      "Solo los mayores de 30 años",
      "Solo los menores de 25 años"
    ],
    "correctaIndex": 1,
    "explicacion": "Art. 220 CC: Puede ser tutor cualquiera que tenga capacidad para obrar y no esté inhabilitado por la ley"
  },
  {
    "id": "b_t6_0_2",
    "temaId": "t6",
    "nivel": "Intermedio",
    "pregunta": "¿Cuál es el plazo para que el tutor rinda cuentas según el Código Civil?",
    "opciones": [
      "Al finalizar la tutela y, además, cada 2 años",
      "Al finalizar la tutela y, además, cada 5 años",
      "Al finalizar la tutela y, además, cada 10 años",
      "Al finalizar la tutela y, además, cada año"
    ],
    "correctaIndex": 1,
    "explicacion": "Art. 269 CC: El tutor deberá rendir cuentas al finalizar la tutela y, además, cada 5 años"
  },
  {
    "id": "b_t6_0_3",
    "temaId": "t6",
    "nivel": "Básico",
    "pregunta": "¿Qué es la curatela según el Código Civil?",
    "opciones": [
      "Institución que tiene por objeto la gestión de bienes",
      "Institución que tiene por objeto la representación legal",
      "Institución que tiene por objeto la asistencia y protección de los incapaces",
      "Institución que tiene por objeto la defensa judicial"
    ],
    "correctaIndex": 2,
    "explicacion": "Art. 287 CC: La curatela es una institución que tiene por objeto la asistencia y protección de los incapaces"
  },
  {
    "id": "b_t6_0_4",
    "temaId": "t6",
    "nivel": "Intermedio",
    "pregunta": "¿Quién puede ser curador según el Código Civil?",
    "opciones": [
      "Solo los parientes del incapacitado",
      "Solo los mayores de 30 años",
      "Solo los menores de 25 años",
      "Cualquiera que tenga capacidad para obrar y no esté inhabilitado por la ley"
    ],
    "correctaIndex": 3,
    "explicacion": "Art. 290 CC: Puede ser curador cualquiera que tenga capacidad para obrar y no esté inhabilitado por la ley"
  },
  {
    "id": "b_t6_0_5",
    "temaId": "t6",
    "nivel": "Intermedio",
    "pregunta": "¿Qué es el defensor judicial según el Código Civil?",
    "opciones": [
      "Persona que asiste y protege a los menores o incapacitados",
      "Persona que gestiona los bienes de los menores o incapacitados",
      "Persona que representa y defiende a los menores o incapacitados en un proceso judicial",
      "Persona que rinde cuentas de la tutela o curatela"
    ],
    "correctaIndex": 2,
    "explicacion": "Art. 224 CC: El defensor judicial es la persona que representa y defiende a los menores o incapacitados en un proceso judicial"
  },
  {
    "id": "b_t6_0_6",
    "temaId": "t6",
    "nivel": "Avanzado",
    "pregunta": "¿Qué es la guarda de hecho según el Código Civil?",
    "opciones": [
      "Situación en la que una persona se encarga de cuidar y proteger a un menor o incapacitado sin ser tutor o curador",
      "Situación en la que una persona se encarga de gestionar los bienes de un menor o incapacitado",
      "Situación en la que una persona se encarga de representar a un menor o incapacitado en un proceso judicial",
      "Situación en la que una persona se encarga de rendir cuentas de la tutela o curatela"
    ],
    "correctaIndex": 0,
    "explicacion": "Art. 232 CC: La guarda de hecho es la situación en la que una persona se encarga de cuidar y proteger a un menor o incapacitado sin ser tutor o curador"
  },
  {
    "id": "b_t6_0_7",
    "temaId": "t6",
    "nivel": "Intermedio",
    "pregunta": "¿Qué es el acogimiento según el Código Civil?",
    "opciones": [
      "Institución que tiene por objeto la gestión de bienes",
      "Institución que tiene por objeto el cuidado y protección de los menores en una familia distinta a la suya",
      "Institución que tiene por objeto la representación legal",
      "Institución que tiene por objeto la defensa judicial"
    ],
    "correctaIndex": 1,
    "explicacion": "Art. 234 CC: El acogimiento es una institución que tiene por objeto el cuidado y protección de los menores en una familia distinta a la suya"
  },
  {
    "id": "b_t6_0_8",
    "temaId": "t6",
    "nivel": "Avanzado",
    "pregunta": "¿Qué son las medidas de apoyo a personas con discapacidad según el Código Civil?",
    "opciones": [
      "Medidas que tienen por objeto ayudar a las personas con discapacidad a tomar decisiones y actuar en su vida diaria",
      "Medidas que tienen por objeto gestionar los bienes de las personas con discapacidad",
      "Medidas que tienen por objeto representar a las personas con discapacidad en un proceso judicial",
      "Medidas que tienen por objeto rendir cuentas de la tutela o curatela"
    ],
    "correctaIndex": 0,
    "explicacion": "Art. 303 CC: Las medidas de apoyo a personas con discapacidad son medidas que tienen por objeto ayudar a las personas con discapacidad a tomar decisiones y actuar en su vida diaria"
  },
  {
    "id": "b_t6_0_9",
    "temaId": "t6",
    "nivel": "Avanzado",
    "pregunta": "¿Qué es el internamiento según el Código Civil?",
    "opciones": [
      "Medida que tiene por objeto la gestión de bienes",
      "Medida que tiene por objeto la representación legal",
      "Medida que tiene por objeto la defensa judicial",
      "Medida que tiene por objeto la protección y tratamiento de personas con trastornos mentales"
    ],
    "correctaIndex": 3,
    "explicacion": "Art. 312 CC: El internamiento es una medida que tiene por objeto la protección y tratamiento de personas con trastornos mentales"
  },
  {
    "id": "b_t6_0_10",
    "temaId": "t6",
    "nivel": "Intermedio",
    "pregunta": "¿Cuál es el requisito para que se declare la incapacidad de una persona según el Código Civil?",
    "opciones": [
      "Que sea necesario para la protección de los demás",
      "Que sea necesario para la gestión de los bienes del interesado",
      "Que sea necesario para la representación legal del interesado",
      "Que sea necesario para la protección del interesado y no existan medidas menos restrictivas"
    ],
    "correctaIndex": 3,
    "explicacion": "Art. 286 CC: Es necesario que sea necesario para la protección del interesado y no existan medidas menos restrictivas"
  },
  {
    "id": "b_t6_0_11",
    "temaId": "t6",
    "nivel": "Básico",
    "pregunta": "¿Cuál es el plazo para que el juez resuelva sobre la tutela o curatela según el Código Civil?",
    "opciones": [
      "15 días desde la presentación de la demanda",
      "60 días desde la presentación de la demanda",
      "30 días desde la presentación de la demanda",
      "90 días desde la presentación de la demanda"
    ],
    "correctaIndex": 2,
    "explicacion": "Art. 221 CC: El juez deberá resolver sobre la tutela o curatela dentro de los 30 días siguientes a la presentación de la demanda"
  },
  {
    "id": "b_t6_0_12",
    "temaId": "t6",
    "nivel": "Avanzado",
    "pregunta": "¿Qué es la naturaleza jurídica de la tutela según el Código Civil?",
    "opciones": [
      "Institución de carácter público y dispositivo",
      "Institución de carácter privado y dispositivo",
      "Institución de carácter público y penal",
      "Institución de carácter privado y penal"
    ],
    "correctaIndex": 0,
    "explicacion": "Art. 215 CC: La tutela es una institución de carácter público y dispositivo"
  },
  {
    "id": "b_t6_2_0",
    "temaId": "t6",
    "nivel": "Básico",
    "pregunta": "¿Quién se considera tutor por ministerio de la ley según el Código Civil?",
    "opciones": [
      "El abuelo y la abuela",
      "El padre y la madre",
      "El hermano y la hermana",
      "El tío y la tía"
    ],
    "correctaIndex": 1,
    "explicacion": "Art. 216 CC: La tutela se constituye por ministerio de la ley en favor del hijo o hija que no tiene padre ni madre y en favor del que está bajo la patria potestad y ha sido privado de ella."
  },
  {
    "id": "b_t6_2_1",
    "temaId": "t6",
    "nivel": "Intermedio",
    "pregunta": "¿Cuál es el plazo para que el tutor presente las cuentas de su gestión al juez?",
    "opciones": [
      "Al finalizar la tutela y, en su caso, cada cinco años",
      "Cada tres años",
      "Cada diez años",
      "No hay plazo establecido"
    ],
    "correctaIndex": 0,
    "explicacion": "Art. 275 CC: El tutor está obligado a rendir cuentas de su gestión al juez al finalizar la tutela y, en su caso, cada cinco años."
  },
  {
    "id": "b_t6_2_2",
    "temaId": "t6",
    "nivel": "Básico",
    "pregunta": "¿Quién puede ser nombrado curador de una persona con discapacidad?",
    "opciones": [
      "Un menor de edad",
      "Un extranjero no residente",
      "Una persona con discapacidad",
      "Un familiar o una persona de confianza"
    ],
    "correctaIndex": 3,
    "explicacion": "Art. 287 CC: El curador puede ser un familiar o una persona de confianza del incapacitado."
  },
  {
    "id": "b_t6_2_3",
    "temaId": "t6",
    "nivel": "Intermedio",
    "pregunta": "¿Cuál es el objetivo de la guarda de hecho?",
    "opciones": [
      "Garantizar la herencia del menor",
      "Asumir la responsabilidad penal del menor",
      "Proteger al menor o persona con discapacidad en situación de desamparo",
      "Proporcionar educación al menor"
    ],
    "correctaIndex": 2,
    "explicacion": "Art. 303 CC: La guarda de hecho tiene por objeto la protección del menor o persona con discapacidad en situación de desamparo."
  },
  {
    "id": "b_t6_2_4",
    "temaId": "t6",
    "nivel": "Intermedio",
    "pregunta": "¿Cuándo se debe nombrar un defensor judicial?",
    "opciones": [
      "Cuando el tutor o curador no puede o no quiere actuar",
      "Cuando el menor o persona con discapacidad tiene más de 18 años",
      "Cuando el tutor o curador es un familiar",
      "Cuando el menor o persona con discapacidad tiene bienes"
    ],
    "correctaIndex": 0,
    "explicacion": "Art. 225 CC: El defensor judicial se nombrará cuando el tutor o curador no pueda o no quiera actuar."
  },
  {
    "id": "b_t6_2_5",
    "temaId": "t6",
    "nivel": "Básico",
    "pregunta": "¿Qué es el acogimiento?",
    "opciones": [
      "Una medida de protección del menor basada en su convivencia con una familia",
      "Una medida de protección del menor basada en su ingreso en un centro",
      "Una medida de protección del menor basada en su tutela",
      "Una medida de protección del menor basada en su curatela"
    ],
    "correctaIndex": 0,
    "explicacion": "Art. 307 CC: El acogimiento es una medida de protección del menor basada en su convivencia con una familia."
  },
  {
    "id": "b_t6_2_6",
    "temaId": "t6",
    "nivel": "Intermedio",
    "pregunta": "¿Cuál es el plazo para que el juez resuelva sobre la constitución de la tutela?",
    "opciones": [
      "Un mes",
      "Dos meses",
      "Tres meses",
      "Seis meses"
    ],
    "correctaIndex": 1,
    "explicacion": "Art. 220 CC: El juez resolverá sobre la constitución de la tutela en el plazo de dos meses."
  },
  {
    "id": "b_t6_2_7",
    "temaId": "t6",
    "nivel": "Avanzado",
    "pregunta": "¿Qué medidas de apoyo pueden establecerse para personas con discapacidad?",
    "opciones": [
      "Medidas de apoyo solo para la toma de decisiones",
      "Medidas de apoyo solo para la gestión de sus bienes",
      "Medidas de apoyo para la toma de decisiones y para la gestión de sus bienes",
      "No se establecen medidas de apoyo"
    ],
    "correctaIndex": 2,
    "explicacion": "Art. 290 CC: Pueden establecerse medidas de apoyo para la toma de decisiones y para la gestión de sus bienes."
  },
  {
    "id": "b_t6_2_8",
    "temaId": "t6",
    "nivel": "Avanzado",
    "pregunta": "¿Cuándo se puede decretar el internamiento de una persona con discapacidad?",
    "opciones": [
      "En cualquier caso",
      "Cuando sea necesario para su protección y no existan medidas menos restrictivas",
      "Cuando lo solicite la familia",
      "Cuando lo solicite el curador"
    ],
    "correctaIndex": 1,
    "explicacion": "Art. 294 CC: El internamiento sólo puede decretarse cuando sea necesario para la protección del incapacitado y no existan medidas menos restrictivas."
  },
  {
    "id": "b_t6_2_9",
    "temaId": "t6",
    "nivel": "Básico",
    "pregunta": "¿Qué es la curatela?",
    "opciones": [
      "Una institución que tiene por objeto la tutela de un menor",
      "Una institución que tiene por objeto la guarda de hecho",
      "Una institución que tiene por objeto la asistencia y representación de una persona con discapacidad",
      "Una institución que tiene por objeto el acogimiento"
    ],
    "correctaIndex": 2,
    "explicacion": "Art. 286 CC: La curatela es una institución que tiene por objeto la asistencia y representación de una persona con discapacidad."
  },
  {
    "id": "b_t6_2_10",
    "temaId": "t6",
    "nivel": "Intermedio",
    "pregunta": "¿Cuál es el requisito para que una persona sea nombrada tutor?",
    "opciones": [
      "Tener un determinado nivel de estudios",
      "Tener una determinada edad",
      "Tener una determinada situación económica",
      "Tener capacidad para ejercer la tutela y no estar incurso en alguna causa de inhabilitación"
    ],
    "correctaIndex": 3,
    "explicacion": "Art. 224 CC: Para ser nombrado tutor se requiere tener capacidad para ejercer la tutela y no estar incurso en alguna causa de inhabilitación."
  },
  {
    "id": "b_t6_2_11",
    "temaId": "t6",
    "nivel": "Avanzado",
    "pregunta": "¿Cuándo se puede considerar que una persona está en situación de desamparo?",
    "opciones": [
      "Cuando tenga una determinada edad",
      "Cuando tenga una determinada situación económica",
      "Cuando esté bajo la tutela de una persona",
      "Cuando carezca de la necesaria asistencia para su bienestar"
    ],
    "correctaIndex": 3,
    "explicacion": "Art. 303 CC: Se considera que una persona está en situación de desamparo cuando carezca de la necesaria asistencia para su bienestar."
  },
  {
    "id": "b_t7_0_0",
    "temaId": "t7",
    "nivel": "Básico",
    "pregunta": "¿Cuál es el concepto de alimentos según el Código Civil español?",
    "opciones": [
      "Son prestaciones que se deben para satisfacer las necesidades de lujo de una persona",
      "Son prestaciones que se deben para satisfacer las necesidades de educación de una persona",
      "Son prestaciones que se deben para satisfacer las necesidades de vivienda de una persona",
      "Son prestaciones que se deben para satisfacer las necesidades de subsistencia de una persona"
    ],
    "correctaIndex": 3,
    "explicacion": "Art. 142 CC: Los alimentos comprenden lo necesario para el sustento, la habitación, el vestido y la asistencia médica, así como para la educación e instrucción del alimentista"
  },
  {
    "id": "b_t7_0_1",
    "temaId": "t7",
    "nivel": "Básico",
    "pregunta": "¿Quién es el titular del derecho a recibir alimentos?",
    "opciones": [
      "El cónyuge y los hijos, pero no los ascendientes",
      "El cónyuge, los hijos y los ascendientes que se encuentren en estado de necesidad",
      "Los hijos y los ascendientes, pero no el cónyuge",
      "Solo los hijos"
    ],
    "correctaIndex": 1,
    "explicacion": "Art. 143 CC: El derecho a los alimentos se extiende al cónyuge, a los hijos y a los ascendientes del obligado, así como a los hijos del cónyuge"
  },
  {
    "id": "b_t7_0_2",
    "temaId": "t7",
    "nivel": "Básico",
    "pregunta": "¿Cuál es el plazo para solicitar la revisión de la cuantía de los alimentos?",
    "opciones": [
      "Cada 2 años",
      "Cada 5 años",
      "En cualquier momento",
      "Cada 10 años"
    ],
    "correctaIndex": 2,
    "explicacion": "Art. 148 CC: La cuantía de los alimentos puede ser revisada en cualquier momento"
  },
  {
    "id": "b_t7_0_3",
    "temaId": "t7",
    "nivel": "Básico",
    "pregunta": "¿Cuál es la forma de pago de los alimentos?",
    "opciones": [
      "En metálico o en especie",
      "Solo en metálico",
      "Solo en especie",
      "En servicios"
    ],
    "correctaIndex": 0,
    "explicacion": "Art. 146 CC: Los alimentos pueden consistir en una pensión periódica o en una prestación única, y se pueden satisfacer en metálico o en especie"
  },
  {
    "id": "b_t7_0_4",
    "temaId": "t7",
    "nivel": "Intermedio",
    "pregunta": "¿Cuál es el carácter de la obligación de dar alimentos?",
    "opciones": [
      "Es personal y transmisible",
      "Es personal e intransmisible",
      "Es impersonal e intransmisible",
      "Es impersonal y transmisible"
    ],
    "correctaIndex": 1,
    "explicacion": "Art. 147 CC: La obligación de dar alimentos es personal e intransmisible"
  },
  {
    "id": "b_t7_0_5",
    "temaId": "t7",
    "nivel": "Intermedio",
    "pregunta": "¿Qué sucede con la obligación de dar alimentos en caso de muerte del obligado?",
    "opciones": [
      "Se transmite a los herederos",
      "Se reduce a la mitad",
      "Se aumenta en un tercio",
      "Se extingue"
    ],
    "correctaIndex": 3,
    "explicacion": "Art. 153 CC: La obligación de dar alimentos se extingue con la muerte del obligado"
  },
  {
    "id": "b_t7_0_6",
    "temaId": "t7",
    "nivel": "Intermedio",
    "pregunta": "¿Cuál es el orden de prelación entre los obligados a dar alimentos?",
    "opciones": [
      "Los hijos, el cónyuge, los ascendientes y los hijos del cónyuge",
      "El cónyuge, los hijos, los ascendientes y los hijos del cónyuge",
      "Los ascendientes, el cónyuge, los hijos y los hijos del cónyuge",
      "Los hijos del cónyuge, el cónyuge, los hijos y los ascendientes"
    ],
    "correctaIndex": 1,
    "explicacion": "Art. 144 CC: El orden de prelación entre los obligados a dar alimentos es el siguiente: el cónyuge, los hijos, los ascendientes y los hijos del cónyuge"
  },
  {
    "id": "b_t7_0_7",
    "temaId": "t7",
    "nivel": "Intermedio",
    "pregunta": "¿Qué requisito debe cumplirse para que se considere que una persona está en estado de necesidad y tenga derecho a recibir alimentos?",
    "opciones": [
      "Que tenga una edad avanzada",
      "Que esté enfermo",
      "Que no tenga medios para subsistir",
      "Que esté desempleado"
    ],
    "correctaIndex": 2,
    "explicacion": "Art. 142 CC: Los alimentos comprenden lo necesario para el sustento, la habitación, el vestido y la asistencia médica, así como para la educación e instrucción del alimentista, y se deben cuando el alimentista no tiene medios para subsistir"
  },
  {
    "id": "b_t7_0_8",
    "temaId": "t7",
    "nivel": "Intermedio",
    "pregunta": "¿Cuál es el fundamento legal de la obligación de dar alimentos?",
    "opciones": [
      "La responsabilidad civil",
      "La propiedad privada",
      "La libertad contractual",
      "La solidaridad familiar"
    ],
    "correctaIndex": 3,
    "explicacion": "Art. 142 CC: La obligación de dar alimentos se basa en la solidaridad familiar y en el deber de asistencia mutua entre los miembros de la familia"
  },
  {
    "id": "b_t7_0_9",
    "temaId": "t7",
    "nivel": "Avanzado",
    "pregunta": "¿Qué sucede con la obligación de dar alimentos en caso de separación o divorcio?",
    "opciones": [
      "Se mantiene",
      "Se extingue",
      "Se reduce a la mitad",
      "Se aumenta en un tercio"
    ],
    "correctaIndex": 0,
    "explicacion": "Art. 145 CC: La obligación de dar alimentos se mantiene en caso de separación o divorcio"
  },
  {
    "id": "b_t7_0_10",
    "temaId": "t7",
    "nivel": "Avanzado",
    "pregunta": "¿Cuál es la naturaleza jurídica de la obligación de dar alimentos?",
    "opciones": [
      "Es una obligación civil",
      "Es una obligación penal",
      "Es una obligación natural",
      "Es una obligación administrativa"
    ],
    "correctaIndex": 2,
    "explicacion": "Art. 142 CC: La obligación de dar alimentos es una obligación natural, es decir, no tiene su origen en un contrato o en una ley, sino en la naturaleza misma de la relación familiar"
  },
  {
    "id": "b_t7_0_11",
    "temaId": "t7",
    "nivel": "Avanzado",
    "pregunta": "¿Qué sucede con la obligación de dar alimentos en caso de incapacitación del obligado?",
    "opciones": [
      "Se mantiene, pero puede ser revisada",
      "Se extingue",
      "Se reduce a la mitad",
      "Se aumenta en un tercio"
    ],
    "correctaIndex": 0,
    "explicacion": "Art. 149 CC: La obligación de dar alimentos se mantiene en caso de incapacitación del obligado, pero puede ser revisada para adaptarla a las nuevas circunstancias"
  },
  {
    "id": "b_t7_1_0",
    "temaId": "t7",
    "nivel": "Básico",
    "pregunta": "¿Quién es el titular del derecho a percibir alimentos según el Art. 142 CC?",
    "opciones": [
      "Solo los hijos",
      "Solo los cónyuges",
      "El cónyuge, los hijos y los ascendientes",
      "Los hermanos"
    ],
    "correctaIndex": 2,
    "explicacion": "Art. 142 CC: El derecho a los alimentos se extiende también a los hijos del cónyuge"
  },
  {
    "id": "b_t7_1_1",
    "temaId": "t7",
    "nivel": "Intermedio",
    "pregunta": "¿Cuál es el plazo para solicitar alimentos provisionales según el Art. 147 CC?",
    "opciones": [
      "Dentro de los 30 días siguientes a la presentación de la demanda",
      "Dentro de los 60 días siguientes a la presentación de la demanda",
      "Dentro de los 90 días siguientes a la presentación de la demanda",
      "En cualquier momento"
    ],
    "correctaIndex": 3,
    "explicacion": "Art. 147 CC: El Juez puede decretar alimentos provisionales en cualquier momento"
  },
  {
    "id": "b_t7_1_2",
    "temaId": "t7",
    "nivel": "Básico",
    "pregunta": "¿Qué sucede con la obligación de alimentos si el obligado fallece según el Art. 148 CC?",
    "opciones": [
      "Pasa a ser responsabilidad de los herederos",
      "Se extingue",
      "Se reduce a la mitad",
      "Se convierte en una obligación solidaria"
    ],
    "correctaIndex": 1,
    "explicacion": "Art. 148 CC: La obligación de alimentos se extingue con la muerte del obligado"
  },
  {
    "id": "b_t7_1_3",
    "temaId": "t7",
    "nivel": "Intermedio",
    "pregunta": "¿Cuál es el criterio para determinar la cuantía de los alimentos según el Art. 146 CC?",
    "opciones": [
      "La edad del alimentista",
      "La relación de parentesco",
      "La necesidad del alimentista y la capacidad del obligado",
      "La situación laboral del obligado"
    ],
    "correctaIndex": 2,
    "explicacion": "Art. 146 CC: La cuantía de los alimentos se fijará con arreglo a la necesidad del alimentista y a la capacidad del obligado"
  },
  {
    "id": "b_t7_1_4",
    "temaId": "t7",
    "nivel": "Avanzado",
    "pregunta": "¿Qué sucede si el obligado a alimentos incumple su obligación según el Art. 152 CC?",
    "opciones": [
      "Puede ser condenado a prestar servicios personales",
      "Puede ser condenado a pagar una indemnización",
      "Puede ser condenado a entregar bienes",
      "No tiene consecuencias"
    ],
    "correctaIndex": 1,
    "explicacion": "Art. 152 CC: El obligado a alimentos que incumpla su obligación puede ser condenado a pagar una indemnización"
  },
  {
    "id": "b_t7_1_5",
    "temaId": "t7",
    "nivel": "Intermedio",
    "pregunta": "¿Quién tiene preferencia en la obligación de alimentos según el Art. 144 CC?",
    "opciones": [
      "Los cónyuges",
      "Los ascendientes",
      "Los hijos menores de edad",
      "Los hermanos"
    ],
    "correctaIndex": 2,
    "explicacion": "Art. 144 CC: Los hijos menores de edad tienen preferencia en la obligación de alimentos"
  },
  {
    "id": "b_t7_1_6",
    "temaId": "t7",
    "nivel": "Básico",
    "pregunta": "¿Cuál es el procedimiento para solicitar alimentos según el Art. 145 CC?",
    "opciones": [
      "Mediante demanda judicial",
      "Mediante acuerdo entre las partes",
      "Mediante notificación extrajudicial",
      "Mediante acta notarial"
    ],
    "correctaIndex": 0,
    "explicacion": "Art. 145 CC: La obligación de alimentos sólo podrá ser exigida judicialmente"
  },
  {
    "id": "b_t7_1_7",
    "temaId": "t7",
    "nivel": "Intermedio",
    "pregunta": "¿Qué sucede si el alimentista tiene ingresos propios según el Art. 143 CC?",
    "opciones": [
      "La obligación de alimentos se extingue",
      "La obligación de alimentos aumenta",
      "No tiene efecto en la obligación de alimentos",
      "La obligación de alimentos se reduce"
    ],
    "correctaIndex": 3,
    "explicacion": "Art. 143 CC: La obligación de alimentos se reduce si el alimentista tiene ingresos propios"
  },
  {
    "id": "b_t7_1_8",
    "temaId": "t7",
    "nivel": "Avanzado",
    "pregunta": "¿Cuál es el plazo para reclamar alimentos atrasados según el Art. 151 CC?",
    "opciones": [
      "2 años",
      "5 años",
      "10 años",
      "No hay plazo"
    ],
    "correctaIndex": 1,
    "explicacion": "Art. 151 CC: La acción para reclamar alimentos atrasados prescribe a los 5 años"
  },
  {
    "id": "b_t7_1_9",
    "temaId": "t7",
    "nivel": "Intermedio",
    "pregunta": "¿Qué sucede con la obligación de alimentos si el obligado se casa según el Art. 149 CC?",
    "opciones": [
      "No se modifica",
      "Se extingue",
      "Se reduce",
      "Se convierte en una obligación solidaria"
    ],
    "correctaIndex": 0,
    "explicacion": "Art. 149 CC: El matrimonio del obligado no modifica la obligación de alimentos"
  },
  {
    "id": "b_t7_1_10",
    "temaId": "t7",
    "nivel": "Básico",
    "pregunta": "¿Cuál es el carácter de la obligación de alimentos según el Art. 142 CC?",
    "opciones": [
      "Solidaria",
      "Mancomunada",
      "Subsidiaria",
      "Personal e intransmisible"
    ],
    "correctaIndex": 3,
    "explicacion": "Art. 142 CC: La obligación de alimentos es personal e intransmisible"
  },
  {
    "id": "b_t7_1_11",
    "temaId": "t7",
    "nivel": "Avanzado",
    "pregunta": "¿Qué sucede si el obligado a alimentos fallece sin testar según el Art. 150 CC?",
    "opciones": [
      "La obligación de alimentos pasa a los herederos",
      "La obligación de alimentos se extingue",
      "La obligación de alimentos se reduce",
      "La obligación de alimentos se convierte en una obligación solidaria"
    ],
    "correctaIndex": 0,
    "explicacion": "Art. 150 CC: La obligación de alimentos pasa a los herederos si el obligado fallece sin testar"
  },
  {
    "id": "b_t7_2_0",
    "temaId": "t7",
    "nivel": "Básico",
    "pregunta": "¿Quién es el titular del derecho a percibir alimentos en el caso de un menor de edad?",
    "opciones": [
      "El padre que no tiene la custodia",
      "El tutor del menor",
      "El menor de edad a través de sus representantes legales",
      "El Estado"
    ],
    "correctaIndex": 2,
    "explicacion": "Art. 142 CC: El derecho a percibir alimentos corresponde al cónyuge, descendientes, ascendientes y demás parientes por consanguinidad o afinidad, y en su caso, a través de sus representantes legales"
  },
  {
    "id": "b_t7_2_1",
    "temaId": "t7",
    "nivel": "Básico",
    "pregunta": "¿Cuál es el plazo máximo para solicitar la revisión de la cuantía de los alimentos?",
    "opciones": [
      "1 año",
      "No hay un plazo máximo establecido",
      "2 años",
      "5 años"
    ],
    "correctaIndex": 1,
    "explicacion": "Art. 148 CC: No hay un plazo máximo establecido para solicitar la revisión de la cuantía de los alimentos, siempre que se acredite un cambio en las circunstancias"
  },
  {
    "id": "b_t7_2_2",
    "temaId": "t7",
    "nivel": "Básico",
    "pregunta": "¿Qué sucede con la obligación de prestar alimentos cuando el obligado muere?",
    "opciones": [
      "La obligación se extingue",
      "La obligación se transmite a los herederos",
      "La obligación se reduce a la mitad",
      "La obligación se mantiene durante 1 año después de la muerte"
    ],
    "correctaIndex": 0,
    "explicacion": "Art. 144 CC: La obligación de prestar alimentos es personal y se extingue con la muerte del obligado"
  },
  {
    "id": "b_t7_2_3",
    "temaId": "t7",
    "nivel": "Básico",
    "pregunta": "¿Quién es el obligado a prestar alimentos a un hijo menor de edad en caso de separación o divorcio de los padres?",
    "opciones": [
      "El padre que no tiene la custodia",
      "El tutor del menor",
      "El Estado",
      "Ambos padres"
    ],
    "correctaIndex": 3,
    "explicacion": "Art. 142 CC: Ambos padres están obligados a prestar alimentos a sus hijos menores de edad"
  },
  {
    "id": "b_t7_2_4",
    "temaId": "t7",
    "nivel": "Intermedio",
    "pregunta": "¿Cuál es el criterio para determinar la cuantía de los alimentos que debe prestar un obligado?",
    "opciones": [
      "La necesidad del alimentista y la capacidad económica del obligado",
      "La edad del alimentista",
      "La relación de parentesco entre el alimentista y el obligado",
      "La nacionalidad del alimentista"
    ],
    "correctaIndex": 0,
    "explicacion": "Art. 146 CC: La cuantía de los alimentos se determina en función de la necesidad del alimentista y la capacidad económica del obligado"
  },
  {
    "id": "b_t7_2_5",
    "temaId": "t7",
    "nivel": "Intermedio",
    "pregunta": "¿Qué sucede con la obligación de prestar alimentos cuando el obligado se encuentra en situación de insolvencia?",
    "opciones": [
      "La obligación se reduce proporcionalmente a la capacidad económica del obligado",
      "La obligación se extingue",
      "La obligación se mantiene en su totalidad",
      "La obligación se transmite a los herederos"
    ],
    "correctaIndex": 0,
    "explicacion": "Art. 147 CC: La obligación de prestar alimentos se reduce proporcionalmente a la capacidad económica del obligado en caso de insolvencia"
  },
  {
    "id": "b_t7_2_6",
    "temaId": "t7",
    "nivel": "Intermedio",
    "pregunta": "¿Qué es el orden de prelación entre los obligados a prestar alimentos?",
    "opciones": [
      "El Estado, los descendientes, los ascendientes y los demás parientes por consanguinidad o afinidad",
      "Los descendientes, los ascendientes, los demás parientes por consanguinidad o afinidad y el cónyuge",
      "Los ascendientes, los demás parientes por consanguinidad o afinidad, el cónyuge y los descendientes",
      "El cónyuge, los descendientes, los ascendientes y los demás parientes por consanguinidad o afinidad"
    ],
    "correctaIndex": 3,
    "explicacion": "Art. 143 CC: El orden de prelación entre los obligados a prestar alimentos es el cónyuge, los descendientes, los ascendientes y los demás parientes por consanguinidad o afinidad"
  },
  {
    "id": "b_t7_2_7",
    "temaId": "t7",
    "nivel": "Intermedio",
    "pregunta": "¿Qué plazo tiene el obligado para cumplir con la obligación de prestar alimentos una vez que se le ha notificado la sentencia que establece la obligación?",
    "opciones": [
      "1 mes",
      "El plazo que establezca la sentencia, que no puede ser inferior a 3 días",
      "2 meses",
      "6 meses"
    ],
    "correctaIndex": 1,
    "explicacion": "Art. 150 CC: El plazo para cumplir con la obligación de prestar alimentos es el que establezca la sentencia, que no puede ser inferior a 3 días"
  },
  {
    "id": "b_t7_2_8",
    "temaId": "t7",
    "nivel": "Intermedio",
    "pregunta": "¿Qué sucede con la obligación de prestar alimentos cuando el alimentista se casa o entra en una unión de hecho?",
    "opciones": [
      "La obligación se reduce a la mitad",
      "La obligación se mantiene en su totalidad",
      "La obligación se extingue",
      "La obligación se transmite a los herederos"
    ],
    "correctaIndex": 2,
    "explicacion": "Art. 152 CC: La obligación de prestar alimentos se extingue cuando el alimentista se casa o entra en una unión de hecho"
  },
  {
    "id": "b_t7_2_9",
    "temaId": "t7",
    "nivel": "Intermedio",
    "pregunta": "¿Qué es la forma en que se pueden prestar los alimentos?",
    "opciones": [
      "Solo en metálico",
      "Solo en especie",
      "En metálico o en especie",
      "En servicios"
    ],
    "correctaIndex": 2,
    "explicacion": "Art. 149 CC: Los alimentos pueden prestarse en metálico o en especie"
  },
  {
    "id": "b_t7_2_10",
    "temaId": "t7",
    "nivel": "Avanzado",
    "pregunta": "¿Qué sucede con la obligación de prestar alimentos cuando el obligado se encuentra en el extranjero?",
    "opciones": [
      "La obligación se extingue",
      "La obligación se mantiene en su totalidad y puede ser ejecutada en el país donde se encuentra el obligado",
      "La obligación se reduce a la mitad",
      "La obligación se transmite a los herederos"
    ],
    "correctaIndex": 1,
    "explicacion": "Art. 153 CC: La obligación de prestar alimentos se mantiene en su totalidad y puede ser ejecutada en el país donde se encuentra el obligado"
  },
  {
    "id": "b_t7_2_11",
    "temaId": "t7",
    "nivel": "Avanzado",
    "pregunta": "¿Qué es el carácter de la obligación de prestar alimentos?",
    "opciones": [
      "Personal y no transmisible",
      "Real y transmisible",
      "Obligación solidaria",
      "Obligación conjunta"
    ],
    "correctaIndex": 0,
    "explicacion": "Art. 144 CC: La obligación de prestar alimentos es personal y no transmisible"
  },
  {
    "id": "b_t7_2_12",
    "temaId": "t7",
    "nivel": "Avanzado",
    "pregunta": "¿Qué es el efecto de la revisión de la cuantía de los alimentos sobre la obligación de prestar alimentos?",
    "opciones": [
      "La cuantía de los alimentos siempre aumenta",
      "La cuantía de los alimentos siempre disminuye",
      "La cuantía de los alimentos se mantiene en su totalidad",
      "La cuantía de los alimentos puede aumentar o disminuir según las circunstancias"
    ],
    "correctaIndex": 3,
    "explicacion": "Art. 148 CC: La cuantía de los alimentos puede aumentar o disminuir según las circunstancias"
  },
  {
    "id": "b_t8_0_0",
    "temaId": "t8",
    "nivel": "Básico",
    "pregunta": "¿Qué se entiende por herencia según el Código Civil español?",
    "opciones": [
      "La transmisión de los bienes y derechos de una persona fallecida a sus herederos",
      "La donación de bienes entre vivos",
      "La transmisión de bienes por medio de un contrato de compraventa",
      "La sucesión de una persona en un cargo o función pública"
    ],
    "correctaIndex": 0,
    "explicacion": "Art. 657 CC: La herencia es la transmisión de los bienes y derechos de una persona fallecida a sus herederos"
  },
  {
    "id": "b_t8_0_1",
    "temaId": "t8",
    "nivel": "Básico",
    "pregunta": "¿En qué momento se abre la sucesión según el Código Civil?",
    "opciones": [
      "En el momento de la aceptación de la herencia por parte del heredero",
      "En el momento de la publicación del testamento",
      "En el momento del fallecimiento del causante",
      "En el momento de la entrega de los bienes hereditarios"
    ],
    "correctaIndex": 2,
    "explicacion": "Art. 658 CC: La sucesión se abre en el momento del fallecimiento del causante"
  },
  {
    "id": "b_t8_0_2",
    "temaId": "t8",
    "nivel": "Intermedio",
    "pregunta": "¿Qué es la delación de la herencia según el Código Civil?",
    "opciones": [
      "La llamada que se hace a una persona para que acepte la herencia",
      "La donación de la herencia a una persona",
      "La transmisión de la herencia a un heredero",
      "La renuncia a la herencia"
    ],
    "correctaIndex": 0,
    "explicacion": "Art. 660 CC: La delación es la llamada que se hace a una persona para que acepte la herencia"
  },
  {
    "id": "b_t8_0_3",
    "temaId": "t8",
    "nivel": "Intermedio",
    "pregunta": "¿Quiénes tienen vocación hereditaria según el Código Civil?",
    "opciones": [
      "Los descendientes, ascendientes y colaterales del causante",
      "Solo los descendientes del causante",
      "Solo los ascendientes del causante",
      "Los cónyuges del causante"
    ],
    "correctaIndex": 0,
    "explicacion": "Art. 661 CC: Los descendientes, ascendientes y colaterales del causante tienen vocación hereditaria"
  },
  {
    "id": "b_t8_0_4",
    "temaId": "t8",
    "nivel": "Intermedio",
    "pregunta": "¿Qué se entiende por capacidad para suceder según el Código Civil?",
    "opciones": [
      "La aptitud de una persona para donar bienes",
      "La aptitud de una persona para recibir la herencia",
      "La aptitud de una persona para contratar",
      "La aptitud de una persona para testar"
    ],
    "correctaIndex": 1,
    "explicacion": "Art. 662 CC: La capacidad para suceder es la aptitud de una persona para recibir la herencia"
  },
  {
    "id": "b_t8_0_5",
    "temaId": "t8",
    "nivel": "Intermedio",
    "pregunta": "¿Cuáles son las causas de incapacidad relativa para suceder según el Código Civil?",
    "opciones": [
      "La mayoría de edad y la capacidad mental",
      "La minoría de edad y la incapacidad mental",
      "La nacionalidad extranjera y la residencia en el extranjero",
      "La condición de cónyuge y la condición de pariente"
    ],
    "correctaIndex": 1,
    "explicacion": "Art. 663 CC: Las causas de incapacidad relativa para suceder son la minoría de edad y la incapacidad mental"
  },
  {
    "id": "b_t8_0_6",
    "temaId": "t8",
    "nivel": "Avanzado",
    "pregunta": "¿Qué es la indignidad sucesoria según el Código Civil?",
    "opciones": [
      "La pérdida de la capacidad para suceder por haber sido condenado por un delito",
      "La pérdida de la capacidad para suceder por haber sido declarado en quiebra",
      "La pérdida de la capacidad para suceder por haber sido separado del causante",
      "La pérdida de la capacidad para suceder por haber cometido un delito contra el causante"
    ],
    "correctaIndex": 3,
    "explicacion": "Art. 664 CC: La indignidad sucesoria es la pérdida de la capacidad para suceder por haber cometido un delito contra el causante"
  },
  {
    "id": "b_t8_0_7",
    "temaId": "t8",
    "nivel": "Avanzado",
    "pregunta": "¿Cuál es el plazo para que el heredero pueda alegar la indignidad sucesoria según el Código Civil?",
    "opciones": [
      "10 años desde que se tuvo conocimiento del delito",
      "5 años desde que se tuvo conocimiento del delito",
      "15 años desde que se tuvo conocimiento del delito",
      "20 años desde que se tuvo conocimiento del delito"
    ],
    "correctaIndex": 1,
    "explicacion": "Art. 665 CC: El plazo para alegar la indignidad sucesoria es de 5 años desde que se tuvo conocimiento del delito"
  },
  {
    "id": "b_t8_0_8",
    "temaId": "t8",
    "nivel": "Intermedio",
    "pregunta": "¿Qué es la desheredación según el Código Civil?",
    "opciones": [
      "La exclusión de un heredero de la sucesión por haber sido condenado por un delito",
      "La exclusión de un heredero de la sucesión por haber sido declarado en quiebra",
      "La exclusión de un heredero de la sucesión por haber sido separado del causante",
      "La exclusión de un heredero de la sucesión por haber cometido un delito contra el causante"
    ],
    "correctaIndex": 3,
    "explicacion": "Art. 666 CC: La desheredación es la exclusión de un heredero de la sucesión por haber cometido un delito contra el causante"
  },
  {
    "id": "b_t8_0_9",
    "temaId": "t8",
    "nivel": "Avanzado",
    "pregunta": "¿Cuál es la diferencia entre la indignidad sucesoria y la desheredación según el Código Civil?",
    "opciones": [
      "La indignidad sucesoria es la exclusión de un heredero de la sucesión, mientras que la desheredación es la pérdida de la capacidad para suceder",
      "La indignidad sucesoria y la desheredación son sinónimos",
      "La indignidad sucesoria es la pérdida de la capacidad para suceder, mientras que la desheredación es la exclusión de un heredero de la sucesión",
      "La indignidad sucesoria y la desheredación son conceptos que no están relacionados"
    ],
    "correctaIndex": 2,
    "explicacion": "Art. 667 CC: La indignidad sucesoria es la pérdida de la capacidad para suceder, mientras que la desheredación es la exclusión de un heredero de la sucesión"
  },
  {
    "id": "b_t8_0_10",
    "temaId": "t8",
    "nivel": "Básico",
    "pregunta": "¿Qué requisitos debe cumplir un heredero para poder aceptar la herencia según el Código Civil?",
    "opciones": [
      "Deberá tener capacidad para suceder y no estar inhabilitado para aceptar la herencia",
      "Deberá tener mayoría de edad y capacidad mental",
      "Deberá ser ciudadano español y residente en España",
      "Deberá tener un seguro de responsabilidad civil"
    ],
    "correctaIndex": 0,
    "explicacion": "Art. 668 CC: El heredero deberá tener capacidad para suceder y no estar inhabilitado para aceptar la herencia"
  },
  {
    "id": "b_t8_0_11",
    "temaId": "t8",
    "nivel": "Intermedio",
    "pregunta": "¿Cuál es el plazo para que el heredero pueda aceptar la herencia según el Código Civil?",
    "opciones": [
      "30 días desde que se tuvo conocimiento de la herencia",
      "60 días desde que se tuvo conocimiento de la herencia",
      "90 días desde que se tuvo conocimiento de la herencia",
      "No hay un plazo determinado, pero el heredero deberá aceptar la herencia dentro de un plazo razonable"
    ],
    "correctaIndex": 3,
    "explicacion": "Art. 669 CC: No hay un plazo determinado, pero el heredero deberá aceptar la herencia dentro de un plazo razonable"
  },
  {
    "id": "b_t8_0_12",
    "temaId": "t8",
    "nivel": "Intermedio",
    "pregunta": "¿Qué sucede con la herencia si el heredero no la acepta dentro del plazo razonable según el Código Civil?",
    "opciones": [
      "La herencia se considerará rechazada",
      "La herencia se considerará caducada",
      "La herencia se considerará aceptada tácitamente",
      "La herencia se considerará nula"
    ],
    "correctaIndex": 2,
    "explicacion": "Art. 670 CC: La herencia se considerará aceptada tácitamente si el heredero no la acepta dentro del plazo razonable"
  },
  {
    "id": "b_t8_1_0",
    "temaId": "t8",
    "nivel": "Básico",
    "pregunta": "¿Qué es la herencia según el Código Civil?",
    "opciones": [
      "La herencia es solo el conjunto de bienes del causante",
      "La herencia es el conjunto de bienes, derechos y obligaciones que transmite el causante a sus herederos",
      "La herencia es el acto de transmitir los bienes del causante a sus herederos",
      "La herencia es la obligación de pagar los débitos del causante"
    ],
    "correctaIndex": 1,
    "explicacion": "Art. 657 CC: La herencia comprende todos los bienes, derechos y obligaciones de una persona que no se extingan por su muerte"
  },
  {
    "id": "b_t8_1_1",
    "temaId": "t8",
    "nivel": "Básico",
    "pregunta": "¿Cuándo se considera abierta la sucesión?",
    "opciones": [
      "La sucesión se considera abierta en el momento de la declaración de fallecimiento",
      "La sucesión se considera abierta en el momento de la aceptación de la herencia",
      "La sucesión se considera abierta en el momento de la muerte del causante",
      "La sucesión se considera abierta en el momento de la partición de la herencia"
    ],
    "correctaIndex": 2,
    "explicacion": "Art. 658 CC: La sucesión se abre en el momento de la muerte del causante"
  },
  {
    "id": "b_t8_1_2",
    "temaId": "t8",
    "nivel": "Básico",
    "pregunta": "¿Qué es la delación de la herencia?",
    "opciones": [
      "La delación es el acto de transmitir la herencia a los herederos",
      "La delación es el llamamiento a los herederos para que acepten la herencia",
      "La delación es el proceso de partición de la herencia",
      "La delación es la obligación de pagar los débitos del causante"
    ],
    "correctaIndex": 1,
    "explicacion": "Art. 660 CC: La delación es el llamamiento a los herederos para que acepten la herencia"
  },
  {
    "id": "b_t8_1_3",
    "temaId": "t8",
    "nivel": "Básico",
    "pregunta": "¿Qué es la vocación hereditaria?",
    "opciones": [
      "La vocación hereditaria es la obligación de pagar los débitos del causante",
      "La vocación hereditaria es el proceso de partición de la herencia",
      "La vocación hereditaria es el acto de transmitir la herencia a los herederos",
      "La vocación hereditaria es el derecho a heredar la herencia del causante"
    ],
    "correctaIndex": 3,
    "explicacion": "Art. 661 CC: La vocación hereditaria es el derecho a heredar la herencia del causante"
  },
  {
    "id": "b_t8_1_4",
    "temaId": "t8",
    "nivel": "Intermedio",
    "pregunta": "¿Quiénes tienen capacidad para suceder?",
    "opciones": [
      "Todas las personas que no estén incapacitadas pueden suceder",
      "Solo los parientes del causante pueden suceder",
      "Solo los herederos legales pueden suceder",
      "Ninguna persona puede suceder si no tiene testamento"
    ],
    "correctaIndex": 0,
    "explicacion": "Art. 662 CC: Todas las personas que no estén incapacitadas pueden suceder"
  },
  {
    "id": "b_t8_1_5",
    "temaId": "t8",
    "nivel": "Intermedio",
    "pregunta": "¿Cuáles son las causas de incapacidad relativa para suceder?",
    "opciones": [
      "La falta de edad, la demencia y la incapacidad física o mental",
      "La falta de edad y la demencia",
      "La incapacidad física o mental y la falta de nacionalidad",
      "La falta de nacionalidad y la falta de residencia"
    ],
    "correctaIndex": 0,
    "explicacion": "Art. 663 CC: Las causas de incapacidad relativa para suceder son la falta de edad, la demencia y la incapacidad física o mental"
  },
  {
    "id": "b_t8_1_6",
    "temaId": "t8",
    "nivel": "Intermedio",
    "pregunta": "¿Qué es la indignidad sucesoria?",
    "opciones": [
      "La indignidad sucesoria es la pérdida del derecho a heredar debido a un delito o falta grave",
      "La indignidad sucesoria es la pérdida del derecho a heredar debido a una deuda",
      "La indignidad sucesoria es la pérdida del derecho a heredar debido a una falta de edad",
      "La indignidad sucesoria es la pérdida del derecho a heredar debido a una falta de nacionalidad"
    ],
    "correctaIndex": 0,
    "explicacion": "Art. 665 CC: La indignidad sucesoria es la pérdida del derecho a heredar debido a un delito o falta grave"
  },
  {
    "id": "b_t8_1_7",
    "temaId": "t8",
    "nivel": "Intermedio",
    "pregunta": "¿Cuál es el plazo para que el heredero acepte o rechace la herencia?",
    "opciones": [
      "15 días desde que se le notifique la delación",
      "60 días desde que se le notifique la delación",
      "No hay plazo para aceptar o rechazar la herencia",
      "30 días desde que se le notifique la delación"
    ],
    "correctaIndex": 3,
    "explicacion": "Art. 670 CC: El plazo para que el heredero acepte o rechace la herencia es de 30 días desde que se le notifique la delación"
  },
  {
    "id": "b_t8_1_8",
    "temaId": "t8",
    "nivel": "Intermedio",
    "pregunta": "¿Qué es la desheredación?",
    "opciones": [
      "La desheredación es la pérdida del derecho a heredar debido a un delito o falta grave",
      "La desheredación es la exclusión de un heredero de la sucesión por voluntad del causante",
      "La desheredación es el proceso de partición de la herencia",
      "La desheredación es la obligación de pagar los débitos del causante"
    ],
    "correctaIndex": 1,
    "explicacion": "Art. 671 CC: La desheredación es la exclusión de un heredero de la sucesión por voluntad del causante"
  },
  {
    "id": "b_t8_1_9",
    "temaId": "t8",
    "nivel": "Avanzado",
    "pregunta": "¿Cuál es la diferencia entre la desheredación y la indignidad sucesoria?",
    "opciones": [
      "La desheredación es la pérdida del derecho a heredar debido a un delito o falta grave, mientras que la indignidad sucesoria es la exclusión de un heredero por voluntad del causante",
      "La desheredación y la indignidad sucesoria son lo mismo",
      "La desheredación es la exclusión de un heredero por voluntad del causante, mientras que la indignidad sucesoria es la pérdida del derecho a heredar debido a un delito o falta grave",
      "La desheredación y la indignidad sucesoria no están relacionadas"
    ],
    "correctaIndex": 2,
    "explicacion": "Art. 671 CC y Art. 665 CC: La desheredación es la exclusión de un heredero por voluntad del causante, mientras que la indignidad sucesoria es la pérdida del derecho a heredar debido a un delito o falta grave"
  },
  {
    "id": "b_t8_1_10",
    "temaId": "t8",
    "nivel": "Avanzado",
    "pregunta": "¿Qué requisitos debe cumplir la delación para ser válida?",
    "opciones": [
      "La delación debe ser notificada al heredero en forma verbal y debe contener la identidad del causante",
      "La delación debe ser notificada al heredero en forma auténtica y debe contener la identidad del heredero",
      "La delación no requiere ninguna formalidad",
      "La delación debe ser notificada al heredero en forma auténtica y debe contener la identidad del causante y la identidad del heredero"
    ],
    "correctaIndex": 3,
    "explicacion": "Art. 660 CC: La delación debe ser notificada al heredero en forma auténtica y debe contener la identidad del causante y la identidad del heredero"
  },
  {
    "id": "b_t8_1_11",
    "temaId": "t8",
    "nivel": "Avanzado",
    "pregunta": "¿Qué efectos tiene la aceptación de la herencia?",
    "opciones": [
      "La aceptación de la herencia produce la transmisión de la herencia al heredero, pero no la asunción de las obligaciones del causante",
      "La aceptación de la herencia produce la asunción de las obligaciones del causante, pero no la transmisión de la herencia",
      "La aceptación de la herencia produce la transmisión de la herencia al heredero y la asunción de las obligaciones del causante",
      "La aceptación de la herencia no produce ningún efecto"
    ],
    "correctaIndex": 2,
    "explicacion": "Art. 672 CC: La aceptación de la herencia produce la transmisión de la herencia al heredero y la asunción de las obligaciones del causante"
  },
  {
    "id": "b_t8_1_12",
    "temaId": "t8",
    "nivel": "Intermedio",
    "pregunta": "¿Qué sucede si el heredero no acepta ni rechaza la herencia dentro del plazo establecido?",
    "opciones": [
      "Se considera que el heredero ha aceptado la herencia",
      "Se considera que el heredero ha rechazado la herencia",
      "Se considera que el heredero ha renunciado a la herencia",
      "Se considera que el heredero ha sido excluido de la sucesión"
    ],
    "correctaIndex": 0,
    "explicacion": "Art. 670 CC: Se considera que el heredero ha aceptado la herencia si no la rechaza dentro del plazo establecido"
  },
  {
    "id": "b_t8_2_0",
    "temaId": "t8",
    "nivel": "Básico",
    "pregunta": "¿Qué es la herencia según el artículo 657 del Código Civil?",
    "opciones": [
      "La herencia es solo el conjunto de bienes que dejaran las personas después de su fallecimiento",
      "La herencia es el derecho a recibir una parte de la propiedad de un familiar fallecido",
      "La herencia es el conjunto de bienes, derechos y obligaciones que dejaran las personas después de su fallecimiento",
      "La herencia es la obligación de pagar las deudas de un familiar fallecido"
    ],
    "correctaIndex": 2,
    "explicacion": "Art. 657 CC: La herencia comprende todos los bienes, derechos y obligaciones de una persona que no se extingan por su muerte."
  },
  {
    "id": "b_t8_2_1",
    "temaId": "t8",
    "nivel": "Básico",
    "pregunta": "¿Cuándo se abre la sucesión según el artículo 659 del Código Civil?",
    "opciones": [
      "La sucesión se abre con la declaración de muerte presunta",
      "La sucesión se abre con la publicación del testamento",
      "La sucesión se abre con la aceptación de la herencia",
      "La sucesión se abre con la muerte de la persona"
    ],
    "correctaIndex": 3,
    "explicacion": "Art. 659 CC: La sucesión se abre con la muerte de la persona."
  },
  {
    "id": "b_t8_2_2",
    "temaId": "t8",
    "nivel": "Intermedio",
    "pregunta": "¿Qué es la delación de la herencia según el artículo 660 del Código Civil?",
    "opciones": [
      "La delación es la división de la herencia entre los herederos",
      "La delación es la aceptación de la herencia por parte de los herederos",
      "La delación es el llamamiento a las personas para que acepten la herencia",
      "La delación es la renuncia a la herencia"
    ],
    "correctaIndex": 2,
    "explicacion": "Art. 660 CC: La delación es el llamamiento a las personas para que acepten la herencia."
  },
  {
    "id": "b_t8_2_3",
    "temaId": "t8",
    "nivel": "Básico",
    "pregunta": "¿Quiénes tienen vocación hereditaria según el artículo 661 del Código Civil?",
    "opciones": [
      "Solo los hijos del difunto",
      "Solo los padres del difunto",
      "Solo el cónyuge del difunto",
      "Los hijos, los padres y el cónyuge del difunto"
    ],
    "correctaIndex": 3,
    "explicacion": "Art. 661 CC: Los hijos, los padres y el cónyuge del difunto tienen vocación hereditaria."
  },
  {
    "id": "b_t8_2_4",
    "temaId": "t8",
    "nivel": "Intermedio",
    "pregunta": "¿Qué es la capacidad para suceder según el artículo 662 del Código Civil?",
    "opciones": [
      "La capacidad para suceder es la aptitud para recibir la herencia",
      "La capacidad para suceder es la obligación de aceptar la herencia",
      "La capacidad para suceder es la facultad de renunciar a la herencia",
      "La capacidad para suceder es la condición de ser heredero"
    ],
    "correctaIndex": 0,
    "explicacion": "Art. 662 CC: La capacidad para suceder es la aptitud para recibir la herencia."
  },
  {
    "id": "b_t8_2_5",
    "temaId": "t8",
    "nivel": "Intermedio",
    "pregunta": "¿Cuáles son las causas de incapacidad relativa para suceder según el artículo 663 del Código Civil?",
    "opciones": [
      "La minoría de edad y la incapacidad para adminstrar bienes",
      "La mayoría de edad y la capacidad para adminstrar bienes",
      "La nacionalidad extranjera y la residencia en el extranjero",
      "La condición de heredero y la aceptación de la herencia"
    ],
    "correctaIndex": 0,
    "explicacion": "Art. 663 CC: La minoría de edad y la incapacidad para adminstrar bienes son causas de incapacidad relativa para suceder."
  },
  {
    "id": "b_t8_2_6",
    "temaId": "t8",
    "nivel": "Avanzado",
    "pregunta": "¿Qué es la indignidad sucesoria según el artículo 665 del Código Civil?",
    "opciones": [
      "La indignidad sucesoria es la pérdida del derecho a heredar por haber renunciado a la herencia",
      "La indignidad sucesoria es la pérdida del derecho a heredar por haber aceptado la herencia",
      "La indignidad sucesoria es la pérdida del derecho a heredar por haber cometido un delito contra el difunto",
      "La indignidad sucesoria es la pérdida del derecho a heredar por haber sido condenado por un delito"
    ],
    "correctaIndex": 2,
    "explicacion": "Art. 665 CC: La indignidad sucesoria es la pérdida del derecho a heredar por haber cometido un delito contra el difunto."
  },
  {
    "id": "b_t8_2_7",
    "temaId": "t8",
    "nivel": "Intermedio",
    "pregunta": "¿Cuál es el plazo para ejercitar la acción de indignidad sucesoria según el artículo 666 del Código Civil?",
    "opciones": [
      "5 años",
      "10 años",
      "15 años",
      "20 años"
    ],
    "correctaIndex": 1,
    "explicacion": "Art. 666 CC: La acción de indignidad sucesoria se extingue por el transcurso de 10 años."
  },
  {
    "id": "b_t8_2_8",
    "temaId": "t8",
    "nivel": "Avanzado",
    "pregunta": "¿Qué es la desheredación según el artículo 669 del Código Civil?",
    "opciones": [
      "La desheredación es la exclusión de la herencia de un heredero por haber renunciado a la herencia",
      "La desheredación es la exclusión de la herencia de un heredero por haber cometido un delito contra el difunto",
      "La desheredación es la exclusión de la herencia de un heredero por haber aceptado la herencia",
      "La desheredación es la exclusión de la herencia de un heredero por haber sido condenado por un delito"
    ],
    "correctaIndex": 1,
    "explicacion": "Art. 669 CC: La desheredación es la exclusión de la herencia de un heredero por haber cometido un delito contra el difunto."
  },
  {
    "id": "b_t8_2_9",
    "temaId": "t8",
    "nivel": "Avanzado",
    "pregunta": "¿Cuál es la diferencia entre la indignidad sucesoria y la desheredación según el artículo 670 del Código Civil?",
    "opciones": [
      "La indignidad sucesoria es la exclusión de la herencia, mientras que la desheredación es la pérdida del derecho a heredar",
      "La indignidad sucesoria y la desheredación son lo mismo",
      "La indignidad sucesoria y la desheredación son conceptos independientes",
      "La indignidad sucesoria es la pérdida del derecho a heredar, mientras que la desheredación es la exclusión de la herencia"
    ],
    "correctaIndex": 3,
    "explicacion": "Art. 670 CC: La indignidad sucesoria y la desheredación son conceptos diferentes."
  },
  {
    "id": "b_t8_2_10",
    "temaId": "t8",
    "nivel": "Intermedio",
    "pregunta": "¿Qué sucede con la herencia si no hay herederos según el artículo 671 del Código Civil?",
    "opciones": [
      "La herencia se considera vacante y se adjudica a los parientes más cercanos",
      "La herencia se considera vacante y se adjudica al Estado",
      "La herencia se considera vacante y se adjudica a los acreedores",
      "La herencia se considera vacante y se adjudica a los testigos"
    ],
    "correctaIndex": 1,
    "explicacion": "Art. 671 CC: La herencia se considera vacante y se adjudica al Estado."
  },
  {
    "id": "b_t8_2_11",
    "temaId": "t8",
    "nivel": "Intermedio",
    "pregunta": "¿Qué sucede con los bienes de la herencia si no se presenta nadie para aceptarla según el artículo 672 del Código Civil?",
    "opciones": [
      "Los bienes se consideran abandonados y se adjudican al Estado",
      "Los bienes se consideran abandonados y se adjudican a los parientes más cercanos",
      "Los bienes se consideran abandonados y se adjudican a los acreedores",
      "Los bienes se consideran abandonados y se adjudican a los testigos"
    ],
    "correctaIndex": 0,
    "explicacion": "Art. 672 CC: Los bienes se consideran abandonados y se adjudican al Estado."
  },
  {
    "id": "b_t9_1_0",
    "temaId": "t9",
    "nivel": "Básico",
    "pregunta": "¿Quién tiene capacidad para testar?",
    "opciones": [
      "Solo los mayores de 25 años",
      "Solo los menores de 18 años emancipados",
      "Solo los ciudadanos españoles",
      "Toda persona con capacidad de obrar"
    ],
    "correctaIndex": 3,
    "explicacion": "Art. 662 CC: La capacidad para testar se regula en función de la capacidad de obrar"
  },
  {
    "id": "b_t9_1_1",
    "temaId": "t9",
    "nivel": "Básico",
    "pregunta": "¿Cuál es el plazo para la adveración del testamento ológrafo?",
    "opciones": [
      "5 años desde la muerte del testador",
      "3 años desde la muerte del testador",
      "10 años desde la muerte del testador",
      "No hay plazo para la adveración"
    ],
    "correctaIndex": 0,
    "explicacion": "Art. 682 CC: El plazo para la adveración del testamento ológrafo es de 5 años"
  },
  {
    "id": "b_t9_1_2",
    "temaId": "t9",
    "nivel": "Básico",
    "pregunta": "¿Qué es el testamento abierto?",
    "opciones": [
      "Un testamento escrito por el testador en presencia de testigos",
      "Un testamento autorizado por un notario",
      "Un testamento cerrado y sellado",
      "Un testamento hecho en país extranjero"
    ],
    "correctaIndex": 1,
    "explicacion": "Art. 685 CC: El testamento abierto es aquel que se autoriza ante notario"
  },
  {
    "id": "b_t9_1_3",
    "temaId": "t9",
    "nivel": "Básico",
    "pregunta": "¿Cuál es el requisito de fondo para la revocación de un testamento?",
    "opciones": [
      "La intención de revocar",
      "La capacidad de obrar",
      "La forma del testamento",
      "La presencia de testigos"
    ],
    "correctaIndex": 0,
    "explicacion": "Art. 739 CC: La revocación del testamento requiere la intención de revocar"
  },
  {
    "id": "b_t9_1_4",
    "temaId": "t9",
    "nivel": "Intermedio",
    "pregunta": "¿Qué sucede con el testamento ológrafo si no se advera dentro del plazo?",
    "opciones": [
      "Se considera válido",
      "Se considera revocado",
      "Se somete a un procedimiento de verificación",
      "Se considera no escrito"
    ],
    "correctaIndex": 3,
    "explicacion": "Art. 683 CC: El testamento ológrafo que no se advera dentro del plazo se considera no escrito"
  },
  {
    "id": "b_t9_1_5",
    "temaId": "t9",
    "nivel": "Intermedio",
    "pregunta": "¿Cuál es el procedimiento para la apertura del testamento cerrado?",
    "opciones": [
      "Se abre en presencia de un juez y dos testigos",
      "Se abre en presencia de un notario solo",
      "Se abre en presencia de un notario y dos testigos",
      "Se abre sin la presencia de nadie"
    ],
    "correctaIndex": 2,
    "explicacion": "Art. 706 CC: El testamento cerrado se abre en presencia de un notario y dos testigos"
  },
  {
    "id": "b_t9_1_6",
    "temaId": "t9",
    "nivel": "Intermedio",
    "pregunta": "¿Qué es el testamento militar?",
    "opciones": [
      "Un testamento hecho por un militar en campaña",
      "Un testamento hecho por un militar en tiempo de paz",
      "Un testamento hecho por un civil en zona de guerra",
      "Un testamento hecho por un prisionero de guerra"
    ],
    "correctaIndex": 0,
    "explicacion": "Art. 716 CC: El testamento militar es aquel que se hace en campaña"
  },
  {
    "id": "b_t9_1_7",
    "temaId": "t9",
    "nivel": "Intermedio",
    "pregunta": "¿Cuál es el plazo para el testamento hecho en país extranjero?",
    "opciones": [
      "Se rige por la ley española",
      "Se rige por la ley del país donde se hizo",
      "Se rige por la ley del país de residencia del testador",
      "Se rige por la ley del país de nacionalidad del testador"
    ],
    "correctaIndex": 1,
    "explicacion": "Art. 729 CC: El testamento hecho en país extranjero se rige por la ley del país donde se hizo"
  },
  {
    "id": "b_t9_1_8",
    "temaId": "t9",
    "nivel": "Intermedio",
    "pregunta": "¿Qué sucede con el testamento si el testador pierde la capacidad de obrar después de haberlo hecho?",
    "opciones": [
      "El testamento se considera revocado",
      "El testamento se considera no escrito",
      "El testamento sigue siendo válido",
      "El testamento se somete a un procedimiento de verificación"
    ],
    "correctaIndex": 2,
    "explicacion": "Art. 674 CC: El testamento sigue siendo válido aunque el testador pierda la capacidad de obrar después de haberlo hecho"
  },
  {
    "id": "b_t9_1_9",
    "temaId": "t9",
    "nivel": "Avanzado",
    "pregunta": "¿Cuál es el requisito de forma para el testamento ológrafo?",
    "opciones": [
      "Deberá estar escrito por un notario",
      "Deberá estar escrito completamente por el testador",
      "Deberá estar escrito por un testigo",
      "Deberá estar escrito en presencia de testigos"
    ],
    "correctaIndex": 1,
    "explicacion": "Art. 675 CC: El testamento ológrafo deberá estar escrito completamente por el testador"
  },
  {
    "id": "b_t9_1_10",
    "temaId": "t9",
    "nivel": "Avanzado",
    "pregunta": "¿Qué sucede con el testamento si se prueba que el testador fue víctima de un error o una coacción?",
    "opciones": [
      "Se considera válido",
      "Se considera revocado",
      "Se somete a un procedimiento de verificación",
      "Se considera nulo"
    ],
    "correctaIndex": 3,
    "explicacion": "Art. 739 CC: El testamento es nulo si se prueba que el testador fue víctima de un error o una coacción"
  },
  {
    "id": "b_t9_1_11",
    "temaId": "t9",
    "nivel": "Avanzado",
    "pregunta": "¿Cuál es el efecto de la revocación de un testamento?",
    "opciones": [
      "La revocación del testamento produce efectos prospectivos",
      "La revocación del testamento no produce efectos",
      "La revocación del testamento produce efectos retroactivos",
      "La revocación del testamento se somete a un procedimiento de verificación"
    ],
    "correctaIndex": 2,
    "explicacion": "Art. 743 CC: La revocación del testamento produce efectos retroactivos"
  },
  {
    "id": "b_t14_1_0",
    "temaId": "t14",
    "nivel": "Básico",
    "pregunta": "¿Cuál es el artículo del Código Civil que define la comunidad hereditaria?",
    "opciones": [
      "Art. 1051",
      "Art. 1060",
      "Art. 1070",
      "Art. 1080"
    ],
    "correctaIndex": 0,
    "explicacion": "Art. 1051 CC: La comunidad hereditaria se define como la situación en la que varios herederos comparten la herencia de una persona fallecida."
  },
  {
    "id": "b_t14_1_1",
    "temaId": "t14",
    "nivel": "Básico",
    "pregunta": "¿Qué es la colación en la comunidad hereditaria?",
    "opciones": [
      "La partición de la herencia",
      "La aportación de bienes que los herederos han recibido del causante en vida",
      "La rescisión de la partición",
      "La garantía de los coherederos"
    ],
    "correctaIndex": 1,
    "explicacion": "Art. 1061 CC: La colación es la aportación de bienes que los herederos han recibido del causante en vida."
  },
  {
    "id": "b_t14_1_2",
    "temaId": "t14",
    "nivel": "Básico",
    "pregunta": "¿Cuál es el plazo para solicitar la rescisión de la partición por lesión?",
    "opciones": [
      "2 años",
      "6 años",
      "10 años",
      "4 años"
    ],
    "correctaIndex": 3,
    "explicacion": "Art. 1079 CC: El plazo para solicitar la rescisión de la partición por lesión es de 4 años."
  },
  {
    "id": "b_t14_1_3",
    "temaId": "t14",
    "nivel": "Básico",
    "pregunta": "¿Qué es la partición en la comunidad hereditaria?",
    "opciones": [
      "La división de la herencia entre los herederos",
      "La colación de bienes",
      "La rescisión de la partición",
      "La garantía de los coherederos"
    ],
    "correctaIndex": 0,
    "explicacion": "Art. 1062 CC: La partición es la división de la herencia entre los herederos."
  },
  {
    "id": "b_t14_1_4",
    "temaId": "t14",
    "nivel": "Intermedio",
    "pregunta": "¿Quiénes son los sujetos que pueden solicitar la partición?",
    "opciones": [
      "Solo el heredero mayor",
      "Solo el heredero menor",
      "Cualquiera de los herederos",
      "Ninguno de los herederos"
    ],
    "correctaIndex": 2,
    "explicacion": "Art. 1063 CC: Cualquiera de los herederos puede solicitar la partición."
  },
  {
    "id": "b_t14_1_5",
    "temaId": "t14",
    "nivel": "Intermedio",
    "pregunta": "¿Cuál es el requisito de fondo para la partición?",
    "opciones": [
      "Que se haya producido la repudiación de la herencia",
      "Que se haya producido la colación de bienes",
      "Que se haya producido la rescisión de la partición",
      "Que se haya producido la aceptación de la herencia"
    ],
    "correctaIndex": 3,
    "explicacion": "Art. 1064 CC: El requisito de fondo para la partición es que se haya producido la aceptación de la herencia."
  },
  {
    "id": "b_t14_1_6",
    "temaId": "t14",
    "nivel": "Intermedio",
    "pregunta": "¿Qué es la garantía de los coherederos?",
    "opciones": [
      "La responsabilidad subsidiaria de los herederos por las deudas de la herencia",
      "La responsabilidad individual de los herederos por las deudas de la herencia",
      "La falta de responsabilidad de los herederos por las deudas de la herencia",
      "La responsabilidad solidaria de los herederos por las deudas de la herencia"
    ],
    "correctaIndex": 3,
    "explicacion": "Art. 1075 CC: La garantía de los coherederos es la responsabilidad solidaria de los herederos por las deudas de la herencia."
  },
  {
    "id": "b_t14_1_7",
    "temaId": "t14",
    "nivel": "Intermedio",
    "pregunta": "¿Cuál es el procedimiento para la partición?",
    "opciones": [
      "Se realiza solo por acuerdo entre los herederos",
      "Se realiza por acuerdo entre los herederos o por sentencia judicial",
      "Se realiza solo por sentencia judicial",
      "Se realiza por sorteo"
    ],
    "correctaIndex": 1,
    "explicacion": "Art. 1065 CC: El procedimiento para la partición se realiza por acuerdo entre los herederos o por sentencia judicial."
  },
  {
    "id": "b_t14_1_8",
    "temaId": "t14",
    "nivel": "Intermedio",
    "pregunta": "¿Qué es la dispensa de colación?",
    "opciones": [
      "La obligación de aportar un bien a la colación",
      "La facultad de aportar un bien a la colación",
      "La exención de aportar un bien a la colación",
      "La prohibición de aportar un bien a la colación"
    ],
    "correctaIndex": 2,
    "explicacion": "Art. 1066 CC: La dispensa de colación es la exención de aportar un bien a la colación."
  },
  {
    "id": "b_t14_1_9",
    "temaId": "t14",
    "nivel": "Avanzado",
    "pregunta": "¿Cuál es el efecto de la partición en la comunidad hereditaria?",
    "opciones": [
      "La continuidad de la comunidad hereditaria",
      "La suspensión de la comunidad hereditaria",
      "La extinción de la comunidad hereditaria",
      "La modificación de la comunidad hereditaria"
    ],
    "correctaIndex": 2,
    "explicacion": "Art. 1074 CC: El efecto de la partición es la extinción de la comunidad hereditaria."
  },
  {
    "id": "b_t14_1_10",
    "temaId": "t14",
    "nivel": "Avanzado",
    "pregunta": "¿Qué es la lesión en la partición?",
    "opciones": [
      "La situación en la que un heredero recibe más de lo que le corresponde en la partición",
      "La situación en la que un heredero recibe menos de lo que le corresponde en la partición",
      "La situación en la que un heredero no recibe nada en la partición",
      "La situación en la que un heredero renuncia a su parte en la partición"
    ],
    "correctaIndex": 1,
    "explicacion": "Art. 1077 CC: La lesión en la partición es la situación en la que un heredero recibe menos de lo que le corresponde en la partición."
  },
  {
    "id": "b_t14_1_11",
    "temaId": "t14",
    "nivel": "Avanzado",
    "pregunta": "¿Cuál es el plazo para solicitar la nulidad de la partición?",
    "opciones": [
      "4 años",
      "2 años",
      "6 años",
      "10 años"
    ],
    "correctaIndex": 0,
    "explicacion": "Art. 1084 CC: El plazo para solicitar la nulidad de la partición es de 4 años."
  }
]
};

// ─── API ────────────────────────────────────────────────────────────────────
const API = {
    get temas() { return this._temas; },
    get flashcards() { return DatosBorja.flashcards; },
    get glosario() { return DatosBorja.glosario; },
    get bancoPreguntas() { return DatosBorja.bancoMasivo; },
    get usuario() { return this._usuario; },

    _temas: [
        { id:"t1",  bloque:"Derecho de Familia",    titulo:"Tema 1: El Matrimonio",                   articulos:"Arts. 44-65 CC",     descripcion:"Requisitos, formas de celebración y efectos",                                      progresoPct:0, tiempoMin:12, lecciones:5, completadas:0 },
        { id:"t2",  bloque:"Derecho de Familia",    titulo:"Tema 2: La nulidad, separación y divorcio",articulos:"Arts. 73-107 CC",    descripcion:"Causas, procesos y efectos jurídicos",                                             progresoPct:0, tiempoMin:15, lecciones:5, completadas:0 },
        { id:"t3",  bloque:"Derecho de Familia",    titulo:"Tema 3: Régimen económico matrimonial",   articulos:"Arts. 1315-1444 CC",  descripcion:"Sociedad de gananciales, separación de bienes y participación",                    progresoPct:0, tiempoMin:18, lecciones:5, completadas:0 },
        { id:"t4",  bloque:"Derecho de Familia",    titulo:"Tema 4: La filiación",                    articulos:"Arts. 108-180 CC",    descripcion:"Natural, adoptiva y efectos jurídicos",                                            progresoPct:0, tiempoMin:20, lecciones:4, completadas:0 },
        { id:"t5",  bloque:"Derecho de Familia",    titulo:"Tema 5: La patria potestad",               articulos:"Arts. 154-180 CC",   descripcion:"La patria potestad y sus efectos",                                                 progresoPct:0, tiempoMin:15, lecciones:3, completadas:0 },
        { id:"t6",  bloque:"Derecho de Familia",    titulo:"Tema 6: Tutela, curatela y guarda",        articulos:"Arts. 215-313 CC",   descripcion:"La tutela, curatela, defensor judicial y guarda de hecho",                        progresoPct:0, tiempoMin:25, lecciones:6, completadas:0 },
        { id:"t7",  bloque:"Derecho de Familia",    titulo:"Tema 7: Obligaciones alimenticias",        articulos:"Arts. 142-153 CC",   descripcion:"Las obligaciones alimenticias entre parientes",                                    progresoPct:0, tiempoMin:10, lecciones:2, completadas:0 },
        { id:"t8",  bloque:"Derecho de Sucesiones", titulo:"Tema 8: Introducción a las sucesiones",   articulos:"Arts. 657-672 CC",    descripcion:"La herencia. Apertura, delación y adquisición",                                   progresoPct:0, tiempoMin:15, lecciones:4, completadas:0 },
        { id:"t9",  bloque:"Derecho de Sucesiones", titulo:"Tema 9: El testamento",                   articulos:"Arts. 662-743 CC",    descripcion:"Capacidad y formas testamentarias",                                               progresoPct:0, tiempoMin:20, lecciones:5, completadas:0 },
        { id:"t10", bloque:"Derecho de Sucesiones", titulo:"Tema 10: Contenido del testamento",       articulos:"Arts. 763-840 CC",    descripcion:"Institución de heredero, legados y mejora",                                       progresoPct:0, tiempoMin:25, lecciones:6, completadas:0 },
        { id:"t11", bloque:"Derecho de Sucesiones", titulo:"Tema 11: La legítima",                    articulos:"Arts. 806-840 CC",    descripcion:"Naturaleza, cuotas y protección",                                                 progresoPct:0, tiempoMin:22, lecciones:5, completadas:0 },
        { id:"t12", bloque:"Derecho de Sucesiones", titulo:"Tema 12: Sucesión intestada",             articulos:"Arts. 912-958 CC",    descripcion:"Órdenes de suceder y representación",                                             progresoPct:0, tiempoMin:18, lecciones:4, completadas:0 },
        { id:"t13", bloque:"Derecho de Sucesiones", titulo:"Tema 13: Aceptación y repudiación",       articulos:"Arts. 988-1009 CC",   descripcion:"Aceptación y repudiación de la herencia",                                        progresoPct:0, tiempoMin:15, lecciones:3, completadas:0 },
        { id:"t14", bloque:"Derecho de Sucesiones", titulo:"Tema 14: La comunidad hereditaria",       articulos:"Arts. 1051-1087 CC",  descripcion:"La comunidad hereditaria y la partición de herencia",                            progresoPct:0, tiempoMin:25, lecciones:5, completadas:0 },
    ],

    _usuario: {
        nombre: "Estudiante",
        nivel: "Opositor",
        racha: 0,
        preguntasHoy: 0,
        preguntasTotales: 0,
        preguntasAcertadas: 0,
        minutosHoy: 0,
        ultimoAcceso: null,
        simulacros: [],
        logros: []
    },

    init() {
        // Merge glosario
        this.glosario;
    }
};

API.init();
