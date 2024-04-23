const express = require("express");
const { readFile } = require('fs');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(express.static('lab3'));
app.use(express.static('lab4'));
app.use(express.static('lab6'));

app.get('/', (request, response, next) => {
    readFile('lab6/labo6.html', 'utf-8', (err, html) => {
        if(err) throw error;
        response.send(html);
    })
    //response.render('lab6/labo6.html')
})

app.get('/ejercicios', (request, response, next) => {
    readFile('lab4/labo4.html', 'utf-8', (err, html) => {
        if(err) throw error;
        response.send(html);
    }) 
})

app.get('/presentation', (request, response, next) => {
    readFile('lab3/labo1.html', 'utf-8', (err, html) => {
        if(err) throw error;
        response.send(html);
    }) 
})

app.post('/', (request, response, next) => {
    console.log(request.body);

    const filesystem = require('fs');
    filesystem.writeFileSync('labo10.txt', `Tu contraseña es: ${request.body.password} y tu verificación es ${request.body.passwordveri}`);
    console.log("archivo creado");
})

app.get('*', (request, response, next) => {
    response.status(404);
    response.send("ocurrió el error 404")
})

app.listen(4000,()=>{console.log("SERVIDOR INICIADO")})