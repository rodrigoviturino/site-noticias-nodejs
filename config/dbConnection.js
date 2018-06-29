let mysql = require ('mysql');


// Conexao com o BANCO DE DADOS
let connMySQL = function(){
    console.log('conexao com banco foi estabelicida');
    
    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '1234',
        database : 'portal_noticias'
    });
}

module.exports = function (){
    console.log('o Autoload carregou o Modulo fez conexao com o banco de dados');
    
    return connMySQL;
}