const express = require('express');
const app = express();

app.get('/', function(req,res){
    res.send("<html><body><h1>Portal de noticias</h1></body></html>");
});


app.get('/teste', function(req,res){
    res.send("<html><body><h1>Portal de Testes</h1></body></html>");
});



app.listen(3000, function(){
    console.log('Servidor Ativado com Express');
    
});
