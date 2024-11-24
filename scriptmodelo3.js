const translations = {
    es: {
        return_button: "Regresar a la página principal",
        titulo: "Modelo 3: RUP",
        text1: "RUP es una metodología que tiene como objetivo ordenar y estructurar el desarrollo de software, con fases iterativas diseñadas para la creación de proyectos complejos.",
        text2: "RUP tiene diferentes principios fundamentales: Desarrollo Iterativo, Gestión de Requisitos, Arquitectura basada en componentes y Pruebas continuas.",
        text3: "El Desarrollo Iterativo permite hacer ajustes al avanzar con el proyecto.",
        text3_4: "La Gestión de requisitos define todo lo que se va a necesitar desde un inicio.",
        text3_8: "La Arquitectura es la estructura para facilitar la creación del producto.",
        text3_9: "Las Pruebas aseguran una buena calidad para el cliente.",
        text4: "Características",
        text4_2: "1. Forma disciplinada de asignar tareas y responsabilidades (quién hace qué, cuándo y cómo).",
        text4_4: "2. Pretende implementar las mejores prácticas en Ingeniería de Software.",
        text4_6: "3. Desarrollo iterativo.",
        text4_8: "4. Administración de requisitos.",
        text4_9: "5. Uso de arquitectura basada en componentes.",
        text4_10: "6. Control de cambios.",
        text4_11: "7. Modelado visual del software.",
        text5: "Roles en RUP: Los roles principales y específicos de RUP son iguales que Prototipos:",
        text5_2: "Analista: recopila toda la información inicial requerida por el cliente.",
        text5_4: "Diseñador: desarrolla la estructura del proyecto.",
        text5_6: "Codificador: implementa toda la información recopilada.",
        text5_8: "Tester y Gestores del proyecto: prueban la funcionalidad del programa y supervisan el avance y cumplimiento de plazos.",
        text6: "Fases:",
        text6_2: "1. Fase de Inicio.",
        text6_4: "2. Fase de Elaboración.",
        text6_6: "3. Fase de Construcción.",
        text6_8: "4. Fase de Transición.",
        text7: "Beneficios de RUP:",
        text7_2: "Reduce los riesgos del proyecto desde etapas tempranas.",
        text7_4: "Garantiza buena calidad gracias a constantes revisiones y pruebas.",
        text7_6: "Es adaptable según el proyecto.",
        text7_8: "Facilita la documentación de resultados.",
        text8: "Ventajas:",
        text8_2: "1. Forma disciplinada de asignar tareas y responsabilidades.",
        text8_4: "2. Mantenimiento más sencillo.",
        text8_6: "3. El conocimiento adquirido en una iteración puede aplicarse a las siguientes iteraciones.",
        text8_8: "4. Los usuarios están involucrados continuamente.",
        text9: "Desventajas:",
        text9_2: "1. Por el grado de complejidad puede no resultar muy adecuado.",
        text9_4: "2. El RUP es generalmente mal aplicado en el estilo cascada.",
        text9_6: "3. Requiere conocimientos del proceso.",
        text9_8: "4. Genera muchos costos."
    },
    en: {
        return_button: "Return to the main page",
        titulo: "Model 3: RUP",
        text1: "RUP is a methodology aimed at organizing and structuring software development. It includes iterative phases designed for the creation of complex projects.",
        text2: "RUP is based on several fundamental principles:",
        text3: "Iterative Development: Allows adjustments as the project progresses.",
        text3_4: "Requirements Management: Defines all necessary elements from the beginning.",
        text3_8: "Component-Based Architecture: Provides a structure to facilitate product creation.",
        text3_9: "Continuous Testing: Ensures high-quality deliverables for the client.",
        text4: "Characteristics",
        text4_2: "1. A disciplined approach to assigning tasks and responsibilities (who does what, when, and how).",
        text4_4: "2. Implements best practices in software engineering.",
        text4_6: "3. Iterative development.",
        text4_8: "4. Requirements management.",
        text4_9: "5. Component-based architecture.",
        text4_10: "6. Change control.",
        text4_11: "7. Visual software modeling.",
        text5: "Roles in RUP: The main and specific roles in RUP are similar to those in Prototyping:",
        text5_2: "Analyst: Gathers all the initial information required by the client.",
        text5_4: "Designer: Creates the project's structure.",
        text5_6: "Coder: implements all gathered information.",
        text5_8: "Testers and Project Managers: Test the program to ensure its proper functionality and supervise progress and deadlines.",
        text6: "Phases of RUP:",
        text6_2: "1. Inception Phase.",
        text6_4: "2. Elaboration Phase.",
        text6_6: "3. Construction Phase.",
        text6_8: "4. Transition Phase.",
        text7: "Benefits of RUP for Doctoral Students:",
        text7_2: "Reduces project risks from the early stages.",
        text7_4: "Ensures high quality through continuous reviews and tests.",
        text7_6: "Adaptable to the specific needs of each project.",
        text7_8: "Facilitates documentation of results.",
        text8: "Advantages of RUP:",
        text8_2: "1. A disciplined approach to assigning tasks and responsibilities.",
        text8_4: "2. Easier maintenance.",
        text8_6: "3. Knowledge gained in one iteration can be applied to subsequent iterations.",
        text8_8: "4. Continuous user involvement.",
        text9: "Disadvantages of RUP:",
        text9_2: "1. Due to its complexity, it may not be suitable for all projects.",
        text9_4: "2. Often misapplied in a waterfall-like style.",
        text9_6: "3. Requires a deep understanding of the process.",
        text9_8: "4. Can result in high costs."
    }
};


    let currentLanguage = 'es'; // Idioma inicial

    function translateText() {
        // Alternar idioma
        currentLanguage = currentLanguage === 'es' ? 'en' : 'es';

        // Recorrer todas las traducciones
        for (const id in translations[currentLanguage]) {
            const element = document.getElementById(id);
            if (element) {
                element.textContent = translations[currentLanguage][id];
            }
        }

        // Cambiar texto del botón
        document.getElementById('translate-button').textContent =
            currentLanguage === 'es' ? 'Translate to English' : 'Traducir a español';
    }