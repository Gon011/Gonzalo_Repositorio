const express = require('express');
const router = express.Router();
const { readFile } = require('fs');

router.get('/', (request, response) => {
    readFile('lab6/labo6.html', 'utf-8', (err, html) => {
        if(err) throw error;
        response.send(html);
    })
})

router.get('/ejercicios', (request, response) => {
    readFile('lab4/labo4.html', 'utf-8', (err, html) => {
        if(err) throw error;
        response.send(html);
    }) 
})

router.get('/presentation', (request, response) => {
    readFile('lab3/labo1.html', 'utf-8', (err, html) => {
        if(err) throw error;
        response.send(html);
    }) 
})

router.post('/', (request, response) => {
    console.log(request.body);

    const filesystem = require('fs');
    filesystem.writeFileSync('labo11.txt', `Tu contraseña es: ${request.body.password} y tu verificación es: ${request.body.passwordveri}`);
    console.log("archivo creado");
})



module.exports = router;