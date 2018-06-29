
const express = require('express');
const consign = require('consign');

const app = express();
// Motor de Geração de VIEWS
app.set('view engine', 'ejs'); 
app.set('views', './app/views');


// Ele vai PROCURAR os ROUTES e JOGAR dentro do APP
consign()
    .include('app/routes')
    // Aqui precisamos ESPECIFICAR o modulo e sua extensão porque o THEN do consign ele quando faz uma requisão ele automaticamente EXECUTA o modulo que está sendo exportado.
    .then('config/dbConnection.js') // fazendo isso para nao ficar em loop
    .into(app);

module.exports = app;