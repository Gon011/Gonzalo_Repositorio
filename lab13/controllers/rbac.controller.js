const Usuario = require("../models/usuario.model");

exports.get_comienzo = (request, response, next) => {
    response.render('comienzo');
};

exports.get_registro = (request, response, next) => {
    response.render('registro');
};

exports.post_registro = (request, response, next) => {
    const usuario = new Usuario(
        request.body.username, 
        request.body.email, 
        request.body.contra
    );
    usuario.save();
    response.redirect('inicia');
};

exports.get_inicia = (request, response, next) => {

    const error = request.session.error || '';
    request.session.error = '';
    
    response.render('inicia', {
        error: error,
    });
};

exports.post_inicia = (request, response, next) => {
    const login = Usuario.login(request.body.username, request.body.contra);

    if (login) {
        response.redirect('productos');
    } else {
        request.session.error = 'Usuario y/o contraseña incorrectos';
        response.redirect('inicia');
    }
};
