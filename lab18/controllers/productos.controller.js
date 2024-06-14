const Producto = require("../models/producto.model");

exports.get_productos = (request, response, next) => {
    Producto.fetchAll()
        .then(([rows, fieldData]) => {
            response.render('productos', {
                nombre: request.session.username,
                productos: rows
            })
        }).catch((error) => {console.log(error);})
};

exports.get_producto = (request, response, next) => {
    const id = request.params.id;
    Producto.fetchOne(id)
        .then(([rows, fieldData]) => {
            response.render('detallesProducto', {
                nombre: request.session.username,
                producto: rows[0]
            })
        }).catch((error) => {console.log(error);})
}
