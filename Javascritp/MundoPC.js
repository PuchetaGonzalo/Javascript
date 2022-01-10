class DispositivoEntrada {
    constructor(tipoEntrada, marca){ 
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get tipoEntrada() {
        return this._tipoEntrada
    }
    set tipoEntrada(tipoEntrada) {
        this._tipoEntrada = tipoEntrada;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca) {
        this._marca = marca;
    }
}


class Raton extends DispositivoEntrada {
    static contadorRatones = 0;

    constructor (tipoEntrada, marca){
        super(tipoEntrada,marca);
        this._idRaton = ++Raton.contadorRatones;
    }
    get idRaton(){
        return this._idRaton;
    }
    toString(){
        return `Raton: [idRaton: ${this._idRaton}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca} ]`;
    }
}
let raton1 = new Raton("USB", "Razor")


class Teclado extends DispositivoEntrada {
    static contadorTeclados = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada,marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }

    get idTeclado(){
        return this._idTeclado;
    }
    toString(){
        return `Teclado: [idTeclado: ${this._idTeclado}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca} ]`;
    }
}

let teclado1 = new Teclado("USB", "Razor");


class Monitor {
    static contadorMonitores = 0;

    constructor(marca, tamaño){
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamaño = tamaño;
    }

    get idMonitor() {
        return this._idMonitor;
    }
    toString(){
        return `Monitor: [idMonitor: ${this._idMonitor}, marca: ${this._marca}, tamaño ${this._tamaño} ]`;
    }
}

let monitor1 = new Monitor("Zowie", 19);

class Computadora {
    static contadorComputadoras = 0 ;

    constructor(nombre, monitor, raton, teclado){
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._raton = raton;
        this._teclado = teclado;
    }
    toString () {
        return `Computadora ${this._idComputadora}: ${this._nombre} \n ${this._monitor} \n ${this._raton} \n ${this._teclado}`;
    }
}

class Orden {
    static contadorOrdenes = 0;

    constructor (computadoras) {
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }
    get idOrden () {
        return this.idOrden;
    }
    agregarCompuradora(computadora) {
        this._computadoras.push(computadora);
    }
    mostrarOrden () {
        let computadorasOrden = "";
        for (let computadora of this._computadoras) {
            computadorasOrden += `\n ${computadora}`;
        }

        console.log(`Orden: ${this._idOrden},Computadoras: ${computadorasOrden}`)
    }

}



let computadora1 = new Computadora("razor",monitor1,raton1,teclado1);

console.log(computadora1.toString());

let orden1 = new Orden();
orden1.agregarCompuradora(computadora1);
orden1.agregarCompuradora(computadora1);
orden1.agregarCompuradora(computadora1);


orden1.mostrarOrden()