const translations = {
    es: {
        return_button: "Regresar a la página principal",
        titulo: "Modelo 1: Scrum",
        text1: "¿Qué es Scrum? Scrum es un proceso en el que se aplican de manera regular un conjunto de buenas prácticas para trabajar colaborativamente, en equipo, y obtener el mejor resultado posible de un proyecto. En Scrum se realizan entregas parciales y regulares del producto final, priorizadas por el beneficio que aportan al receptor del proyecto.",
        text2: "Scrum es una técnica de la metodología ágil ampliada que ofrece una forma de conectar varios equipos que necesitan trabajar juntos para ofrecer soluciones complejas. Está diseñada para gestionar proyectos de forma flexible y efectiva. Se basa en ciclos cortos llamados 'sprints' que permiten priorizar tareas, ajustar objetivos y fomentar la colaboración.",
        text3: "Si tu proyecto utiliza la metodología Scrum debes de tomar en cuenta que este método requiere de apoyo de un equipo para las diferentes actividades a realizar. Debes de tener una visión clara de los avances y retos que se te presentan en cada fase de Scrum, el evaluar el progreso regularmente es muy necesario y ajustar los planes según las necesidades de tu proyecto para poder completarlo.",
        text4: "Características:",
        text4_3: "1. Fomenta la colaboración de cada uno de los integrantes del equipo de trabajo.",
        text4_6: "2. Autoorganización: los equipos deben saber gestionar las cargas de trabajo y tener controlado el tiempo que invierten para cada tarea en todo momento.",
        text4_9: "3. Está orientada a ofrecer soluciones o respuestas rápidas y efectivas a los requerimientos especificados por el cliente.",
        text5: "Roles en scrum: Los roles principales y específicos de Scrum son:",
        text5_2: "Scrum Master como el líder que facilita y elimina los obstáculos del proceso del proyecto.",
        text5_4: "Product Owner quién es el prioriza las tareas y da el orden de trabajo a cada integrante del equipo.",
        text5_6: "Equipo son los que realizan el trabajo y aseguran la entrega de cada sprint.",
        text5_8: "Cliente es quien establece las especificaciones básicas.",
        text5_9: "Stakeholder toma decisiones importantes y mejora la comunicación con el equipo.",
        text6: "Fases de Scrum:",
        text6_2: "1. Fase de Iniciación.",
        text6_4: "2. Fase de Planificación y Estimación.",
        text6_6: "3. Fase de Implementación.",
        text6_8: "4. Fase de Revisión y Retrospectiva.",
        text6_9: "5. Fase de Lanzamiento.",
        text7: "Beneficios de Scrum para estudiantes de doctorado:",
        text7_2: "El manejo de información se vuelve sencillo ya que divide investigaciones complejas para hacer las tareas más manejables.",
        text7_4: "A medida que avances con los sprints la tarea se va haciendo más sencilla de realizar ya que ya cumpliste con lo más básico del proyecto.",
        text7_6: "Fomenta la confianza del trabajo en equipo.",
        text7_8: "Reduce el estrés y la sobrecarga de trabajo ya que vas avanzando conforme a las revisiones y avances que vas presentando.",
        text8: "Ventajas:",
        text8_2: "1. Mayor colaboración por parte del equipo.",
        text8_4: "2. Tiene una mejor productividad por la colaboración y esfuerzo que le dan.",
        text8_6: "3. Es de mayor calidad y genera una gran satisfacción.",
        text8_8: "4. Es más flexible.",
        text9: "Desventajas:",
        text9_2: "1. Requiere tener experiencia para poder trabajar con él.",
        text9_4: "2. Debe ser dependiente.",
        text9_6: "3. El aprendizaje continuo es algo que sí o sí sucede en este método.",
        text9_8: "4. Están bajo constante presión y estrés."
    },
    en: {
        return_button: "Return to main page",
        titulo: "Model 1: Scrum",
        text1: "What is Scrum? Scrum is a process that regularly applies a set of best practices to work collaboratively as a team, aiming to achieve the best possible outcome for a project. In Scrum, partial and regular deliveries of the final product are made, prioritized by the benefit they provide to the project stakeholders.",
        text2: "Scrum is an extended agile methodology technique that connects multiple teams needing to collaborate to deliver complex solutions. It is designed to manage projects flexibly and effectively. Scrum is based on short cycles called sprints that enable task prioritization, adjustment of objectives, and promotion of collaboration.",
        text3: "If your project uses the Scrum methodology, you must keep in mind that this method requires team support for the various activities involved. It is crucial to have a clear vision of the progress and challenges in each Scrum phase. Regularly evaluating progress and adjusting plans according to project needs is necessary to complete it successfully.",
        text4: "Characteristics:",
        text4_3: "1. Encourages collaboration: Every team member plays a significant role in the project.",
        text4_6: "2. Self-organization: Teams must manage workloads and monitor the time spent on tasks at all times.",
        text4_9: "3. Quick and effective solutions: Scrum is focused on providing prompt responses to client-specified requirements.",
        text5: "Roles in Scrum: The main and specific roles of Scrum are:",
        text5_2: "Scrum Master: The leader who facilitates the process and removes obstacles during the project.",
        text5_4: "Product Owner: Responsible for prioritizing tasks and organizing the workflow for each team member.",
        text5_6: "Team Members: Execute the work and ensure the delivery of each sprint.",
        text5_8: "Client: Establishes basic specifications.",
        text5_9: "Stakeholder: Makes critical decisions and improves communication with the team.",
        text6: "Phases of Scrum:",
        text6_2: "1. Initiation Phase.",
        text6_4: "2. Planning and Estimation Phase.",
        text6_6: "3. Implementation Phase.",
        text6_8: "4. Review and Retrospective Phase.",
        text6_9: "5. Launch Phase.",
        text7: "Benefits of Scrum for Doctoral Students:",
        text7_2: "Simplifies information management: Breaks down complex research tasks into manageable portions.",
        text7_4: "Gradual progress: Tasks become easier as basic parts of the project are completed in early sprints.",
        text7_6: "Encourages teamwork and trust: Promotes collaboration among team members.",
        text7_8: "Reduces stress and workload: Advances are made in line with scheduled reviews and progress presentations.",
        text8: "Advantages:",
        text8_2: "1. Increased collaboration within the team.",
        text8_4: "2. Enhanced productivity due to collaboration and effort.",
        text8_6: "3. Higher quality outcomes that lead to great satisfaction.",
        text8_8: "4. Flexible and adaptable to changes.",
        text9: "Disadvantages:",
        text9_2: "1. RRequires experience to work effectively.",
        text9_4: "2. Relies heavily on team dependency.",
        text9_6: "3. Continuous learning is an integral part of the method.",
        text9_8: "4. Teams may face constant pressure and stress."
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