//var dbConnection = require('../../config/dbConnection');

module.exports = function (app) {
 
  

  app.get('/noticias', function(req,res){
    // só vai funcionar quando está ROTA for ACESSADA que é o dbConnection
    var connection = app.config.dbConnection();

            //connection.query(<sql>, <func callback>);
            // Só vamos enviar o resultado para quem fizer a requisição 
            connection.query('select * from noticias', function(error, result){
                            // VIEW                 // JSON
                res.render("../views/noticias/noticias", {noticias : result });
            });
        // FIM SQL
    });
};    