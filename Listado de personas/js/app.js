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

function agregarPersona(){
    const forma = documement.forms["forma"];
    const nombre = forma["nombre"];
    const apellido = forma["apellido"];
    if (nombre.value != "" && apellido.value != "") {
    const persona = new Persona (nombre.value, apellido.value);
    personas.push(persona);
    mostrarPersonas();
    }
    else {
        console.log("No hay informacion que agregar")
    }
}