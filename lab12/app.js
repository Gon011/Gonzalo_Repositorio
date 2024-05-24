const express = require('express');
const app = express();
const rutas = require("./routes");

app.set('view engine', 'ejs');
app.set('views', 'views');

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', rutas);

app.listen(3000,()=>{console.log("SERVIDOR INICIADO")});
