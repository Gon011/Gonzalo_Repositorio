const Usuario = require("../models/usuario.model");
const Producto = require("../models/producto.model");
const Compra = require("../models/compra.model");

exports.get_productos = (request, response, next) => {
    response.render('productos');
};
