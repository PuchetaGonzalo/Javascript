const personas = [
    new Persona ("loro", "segundo"),
    new Persona ("rodrigo", "peloso")
];


function mostrarPersonas() {
    let texto = "";
    for(let persona of personas){
        console.log(persona);
        texto += `<li>${persona.nombre} ${persona.apellido}</li>`;
    }
    document.getElementById("personas").innerHTML = texto;
}