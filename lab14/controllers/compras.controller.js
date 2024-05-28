const Usuario = require("../models/usuario.model");
const Producto = require("../models/producto.model");
const Compra = require("../models/compra.model");

exports.get_compras = (request, response, next) => {
    response.render('compras', {
        nombre: request.session.username
    });
};