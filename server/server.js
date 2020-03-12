var express = require('express');
var mysql = require('mysql');
var app = express()


var connection = mysql.createConnection({

    host:'localhost',
    user:'root',
    port:3306,
    password: 'root',
    database:'picudb'
});

connection.connect(function(error) {
    if(!!error) {
        console.log('Error in connection');
    } else {
        console.log('Connected');
    }
});

app.get('/', function(req, resp) {
    connection.query("SELECT Page_id, Page_name FROM page;", function(error, rows, fields) {
        if(!!error) {
            console.log('Error in the query');
        } else {
            console.log('Successful!\n')
            console.log(rows);
        }
    })

});

app.listen(2000);