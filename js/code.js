//A, B, C,..,G deben de ser chistes
const jokes = ["- Oye, ¿cuál es tu plato favorito y por qué? - Pues el hondo, porque cabe más comida…", "¿Por qué las focas del circo miran siempre hacia arriba? Porque es donde están los focos.", "- ¡Estás obsesionado con la comida! - No sé a qué te refieres croquetamente.", "- Buenos días, me gustaría alquilar 'Batman Forever'. - No es posible, tiene que devolverla tomorrow.", "- Papá, ¿qué está más lejos, Córdoba o la Luna? - Pero vamos a ver, ¿tú ves desde aquí Córdoba?", "- ¿Te gusta el rock progresivo? - Cada vez más", "¿Qué le dice un techo a otro? Techo de menos."];

function getJoke() {
    document.getElementById("joke").innerHTML = '"' + jokes[parseInt(Math.random() * jokes.length)] + '"';
}