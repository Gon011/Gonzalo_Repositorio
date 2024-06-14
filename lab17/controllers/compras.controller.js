const Compra = require("../models/compra.model");

exports.get_compras = (request, response, next) => {
    
    if (request.session.username) {
        response.render('compras', {
            nombre: request.session.username,
        });
    } else {
        response.redirect('..')
    }
};