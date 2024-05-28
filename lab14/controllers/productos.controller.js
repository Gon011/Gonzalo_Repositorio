const Usuario = require("../models/usuario.model");
const Producto = require("../models/producto.model");
const Compra = require("../models/compra.model");

exports.get_productos = (request, response, next) => {

    if (request.session.username) {
        response.render('productos', {
            nombre: request.session.username,
            productos: Producto.fetchAll()
        });
    } else {
        response.redirect('..')
    }
};
