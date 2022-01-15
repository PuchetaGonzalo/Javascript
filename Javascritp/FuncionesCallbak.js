//funcion tipo callback
let imp = function imprimir (mensaje) {
    console.log(mensaje);
}


function sumar (op1,op2,funcionCallback) {
    let res = op1+op2;
    funcionCallback(`Resultado ${res}`)
}

sumar(5,10,imp);

//llamadas asincronicas con uso setTimeout