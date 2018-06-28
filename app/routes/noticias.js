module.exports = function (app) {

    app.get('/noticias', function(req,res){

        // ESTRUTURA SQL
            let mysql = require('mysql');
            // Estrutura JSON
            let connection = mysql.createConnection({
                host : 'localhost',
                user : 'root',
                password : '1234',
                database : 'portal_noticias'
            });

            //connection.query(<sql>, <func callback>);
            // Só vamos enviar o resultado para quem fizer a requisição 
            connection.query('select * from noticias', function(error, result){
                            // VIEW                 // JSON
                res.render("noticias/noticias", {noticias : result });
            });
        // FIM SQL
    });
};    