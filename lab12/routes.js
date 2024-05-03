const express = require('express');
const router = express.Router();

router.get('/', (request, response, next) => {
    response.render('labo6');
})

router.get('/ejercicios', (request, response, next) => {
    response.render('labo4');
})

module.exports = router;
