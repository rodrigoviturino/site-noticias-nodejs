const express = require('express');
const consign = require('consign');

const app = express();
// Motor de Geração de VIEWS
app.set('view engine', 'ejs'); 
app.set('views', './app/views');


// Ele vai scanear o DEFAULT e encontrar o ROUTES e jogar dentro do APP
consign().include('app/routes').into(app);

module.exports = app;