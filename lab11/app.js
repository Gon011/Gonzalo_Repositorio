const express = require('express');
const app = express();
const rutas = require("./routes");

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(express.static('lab3'));
app.use(express.static('lab4'));
app.use(express.static('lab6'));

app.use("/", rutas);

app.use((requset, response, next) => {
    response.status(404);
    response.render('404');
  });

app.listen(4000,()=>{console.log("SERVIDOR INICIADO")});

