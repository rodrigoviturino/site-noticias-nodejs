const http = require('http');

const server = http.createServer( function(req,res){
    
    let categoria = req.url;

    if(categoria == '/tecnologia'){
        res.end("<html><body><h1>Portal de TECNOLOGIA</h1></body></html>");
    } else if( categoria == '/moda'){
        res.end("<html><body><h1>Estamos na pagina de MODA </h1></body></html>");
    } else if( categoria == '/pc'){
        res.end("<html><body><h1>Manutenção de Micro </h1></body></html>");
    } else {
        res.end("<html><body><h1>Seja bem vindo a pagina HOME</h1></body></html>");
    }
   
});

console.log('Servidor Ativo');
server.listen(3000);