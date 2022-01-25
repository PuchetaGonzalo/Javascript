class Persona {
    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        return this._nombre;
    }
    get apellido() {
        return this._apellido;
    }
    set apellido(apellido) {
        return this._apellido;
    }
    toString() {
        return `
            ${this._nombre} ${this._apellido}`;
    }
}