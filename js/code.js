//A, B, C,..,G deben de ser chistes
const jokes = ["Pablo, ¿qué planeta va después de Marte? -Pues miércole!", "¿Dónde va el Jorge? -@!", "-Hola, ¿tiene comida de vegano? -Clago, y de inviegno, este es un gestaugante fgancés!", "-Un ratón le dice a una rata: ¿Qué haces ahí sentada? -Estoy esperando un ratito", "-¿Y cómo quiere la señora los huevos? -En la barbilla, si puede ser", "¿Cómo se dice pelo sucio en chino? - Chin cham pu", "¿Cuál es el colmo de Aladdín? -Tener mal genio"];

function getJoke() {
    document.getElementById("joke").innerHTML = '"' + jokes[parseInt(Math.random() * jokes.length)] + '"';
}