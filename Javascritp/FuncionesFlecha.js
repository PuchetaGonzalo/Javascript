let miFuncion = function () {
    console.log("saludos desde mi funcion");
}

//const miFunctionFlecha = () => console.log("saludos desde mi funcion flecha");



//miFunctionFlecha();


//const saludar =  () => {
//    return "Saludos desde funcion Flecha"
//}

const saludar = () => "saludos desde funcion flecha"

console.log(saludar())

const regresaObjeto = () => ({nombre: "Juan", apellido: "Rodriguez"});
console.log(regresaObjeto());

//const funcionConParametros = (mensaje) => console.log(mensaje);
const funcionConParametros = mensaje => console.log(mensaje);
funcionConParametros("Saludos con parametros");

//const funcionconparametros = (op1,op2) => op1 + op2;
const funcionconparametros = (op1,op2) => {
    let resultado = op1 + op2;
    return `Resultado: ${resultado}`;
};
console.log(funcionconparametros(3,5));