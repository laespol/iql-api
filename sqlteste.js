var express = require('express');
var app = express();
app.get('/', function (req, res) {
    var sql = require("mssql");
    // config for your database
    var config = {
        user: 'sa',
        password: 'TInfo@2398',
        server: '192.168.1.31', 
        database: 'corp',
        synchronize: true,
        options: {
            trustServerCertificate: true
        }
    };
    // connect to your database
    sql.connect(config, function (err) {
        if (err) console.log(err);
        // create Request object
        var request = new sql.Request();
        // query to the database and get the records
        request.query('select numero_op,data_criacao from dbo.capa_op', function (err, recordset) {
            if (err) console.log(err)
            // send records as a response
            res.send(recordset);
        });
    });
});
var server = app.listen(5000, function () {
    console.log('Server is running..');
});