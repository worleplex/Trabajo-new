const originalText1 = `El sitio web fue creado con el fin de apoyar a estudiantes de doctorado que buscan
profundizar su conocimiento en el campo del software.
Gracias a este sitio será más sencillo para todos aquellos alumnos que busquen información
confiable y relevante sobre las metodologías de desarrollo de software, conociendo las fases,
ventajas y desventajas de cada uno de los modelos existentes en el sitio.`;

const translatedText1 = `The website was created to support doctoral students seeking to deepen their knowledge in the field of software.
Thanks to this site, it will be easier for students to find reliable and relevant information about software development methodologies, including the phases, advantages, and disadvantages of each model available on the site.`;

const originalText2 = `El objetivo es que los estudiantes puedan acceder a contenido actualizado y
confiable, que les
permita no solo entender cómo funcionan las metodologías, sino también entender sobre como
funcionan ya hablando en el contexto de implementación de la vida real.`;

const translatedText2 = `The goal is for students to access up-to-date and reliable content that allows them not only to understand how methodologies work,
but also to understand how they function in real-world implementation contexts.`;

let isOriginalText = true; // Variable para alternar entre los textos

function translateText() {
    const introText1 = document.querySelector('.intro-text1'); // Seleccionamos el primer párrafo
    const introText2 = document.querySelector('.intro-text2'); // Seleccionamos el segundo párrafo
    const translateButton = document.getElementById('translate-button'); // Botón de traducción

    // Alternamos el contenido de los dos párrafos
    introText1.textContent = isOriginalText ? translatedText1 : originalText1;
    introText2.textContent = isOriginalText ? translatedText2 : originalText2;
    if (isOriginalText) {
        translateButton.textContent = "Traducir a español";
    } else {
        translateButton.textContent = "Translate to English";
    }
    isOriginalText = !isOriginalText; // Alternar el estado
}
