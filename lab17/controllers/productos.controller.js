const Producto = require("../models/producto.model");

exports.get_productos = (request, response, next) => {

    if (request.session.username) {
        Producto.fetchAll()
            .then(([rows, fieldData]) => {
                response.render('productos', {
                    nombre: request.session.username,
                    productos: rows
                })
            }).catch((error) => {console.log(error);})
    } else {
        response.redirect('..')
    }
};
