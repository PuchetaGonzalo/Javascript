class Producto  {
    static contadorProductos = 0;

    constructor(nombre, precio) {
        this._idProducto = ++ Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }
    get idProducto(){
        return this._idProducto;
    }
    get nombre () {
        return this._nombre
    }
    set nombre () {
        this._nombre = nombre;
    }
    get precio () {
        return this._precio
    }
    set precio () {
        this._precio = precio;
    }

    toString () {
        return `
        idProducto: ${this._idProducto} 
        nombre: ${this._nombre} 
        precio: $${this._precio}` ;
    }
}
let producto1 = new Producto(Buzo, 100)
console.log(producto1.toString());