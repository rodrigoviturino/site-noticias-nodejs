const app = require('./config/server');

// let rotaNoticias = require('./app/routes/noticias');
// rotaNoticias(app);

// let rotaHome = require('./app/routes/home');
// rotaHome(app);

// let rotaFormInclusaoNoticia = require('./app/routes/formulario_inclusao_noticia');
// rotaFormInclusaoNoticia(app);


// CONFIG SERVIDOR
app.listen(3000, function(){
    console.log('Servidor ON');    
    
});
