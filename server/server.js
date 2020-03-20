var express = require('express');
var mysql = require('mysql');
var app = express();
var pagesRouter = express.Router();
var bodyParser = require("body-parser");

app.use(bodyParser.json({limit: '10mb'}));
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}));

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
        pagesRouter.get('/', function(req, res){
            let sql = "SELECT Page_id, Page_name FROM page;";  

            connection.query(sql, (err, results) => {
                if (err) {
                console.dir(err);
                }
                res.json(results);
            });
        });

        pagesRouter.get('/:pageId', function(req, res){
            var pageId = req.params.pageId;
            let sql = 'SELECT Page_id, Page_name FROM page WHERE Page_id = "' + pageId + '";';  

            connection.query(sql, (err, results) => {
                if (err) {
                console.dir(err);
                }
                res.json(results);
            });
        });

        app.use('/pages', pagesRouter);
        app.listen(2000)
    }
});

/*
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
*/
