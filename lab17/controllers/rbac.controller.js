const Usuario = require("../models/usuario.model");


exports.get_comienzo = (request, response, next) => {
    response.render('comienzo');
};

exports.get_registro = (request, response, next) => {

    const error = request.session.error || '';
    request.session.error = '';

    response.render('registro', {
        error: error
    });
};

exports.post_registro = (request, response, next) => {
    const usuario = new Usuario(
        request.body.username, 
        request.body.email, 
        request.body.contra
    );
    Usuario.fetchOne(usuario.username)
        .then(([rows, fieldData]) => {
            if (rows.length < 1) {
                usuario.save().then(() => {
                    response.redirect('inicia');
                })
                .catch((error) => {console.log(error);});
            } else {
                request.session.error = 'Ese nombre de usuario ya está registrado';
                response.redirect('registro');
            }
        }).catch((error) => {console.log(error);});
};

exports.get_inicia = (request, response, next) => {

    const error = request.session.error || '';
    request.session.error = '';
    
    response.render('inicia', {
        error: error
    });
};

exports.post_inicia = (request, response, next) => {
    Usuario.fetchOne(request.body.username)
        .then(([rows, fieldData]) => {
            if (rows.length == 1) {
                if (rows[0].contrasena == request.body.contra) {
                    request.session.username = request.body.username;
                    response.redirect('productos');
                } else {
                    request.session.error = 'Usuario y/o contraseña incorrectos';
                    response.redirect('inicia');
                }
            } else {
                request.session.error = 'Usuario y/o contraseña incorrectos';
                response.redirect('inicia');
            }
        }).catch((error) => {console.log(error);});
};

exports.get_cierra = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('..')
    })
};
