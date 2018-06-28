const express = require('express');
const app = express();

// Motor de Geração de VIEWS
app.set('view engine', 'ejs'); 
app.set('views', './app/views');


module.exports = app;