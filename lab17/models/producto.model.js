const db = require('../util/database');

module.exports = class Producto {

    constructor(categoria, nombre, precio, descripcion, imagen) {
        this.categoria = categoria;
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.imagen = imagen
    }

    save() {
        
    }

    static fetchAll() {
        return db.execute(`SELECT * FROM productos`)
    }
}