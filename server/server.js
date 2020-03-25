var express = require('express');
var mysql = require('mysql');
var app = express();
var apiRouter = express.Router();
var bodyParser = require("body-parser");

app.use(bodyParser.json({limit: '10mb'}));
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}));

app.all("*", function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-control-Allow-Headers", "xCors");
    res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT,OPTIONS,HEAD,FETCH");
    res.header("Access-control-max-age", 1000);
    next();
})

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
        apiRouter.get('/navs/home', function(req, res){
            let sql = 'SELECT Nav_name, Nav_link, Icon_path FROM navigation WHERE Page_id = "1";';  

            connection.query(sql, (err, results) => {
                if (err) {
                console.dir(err);
                }
                res.json(results);
            });
        });

        apiRouter.get('/navs/picu', function(req, res){
            let sql = 'SELECT Nav_name, Nav_link FROM navigation WHERE Page_id = "2";';  

            connection.query(sql, (err, results) => {
                if (err) {
                console.dir(err);
                }
                res.json(results);
            });
        });

        apiRouter.get('/navs/yourchild', function(req, res){
            let sql = 'SELECT Nav_name, Nav_link FROM navigation WHERE Page_id = "3";';  

            connection.query(sql, (err, results) => {
                if (err) {
                console.dir(err);s
                }
                res.json(results);
            });
        });

        apiRouter.get('/navs/team', function(req, res){
            let sql = 'SELECT Nav_name, Nav_link FROM navigation WHERE Page_id = "4";';  

            connection.query(sql, (err, results) => {
                if (err) {
                console.dir(err);
                }
                res.json(results);
            });
        });

        apiRouter.get('/navs/visit', function(req, res){
            let sql = 'SELECT Nav_name, Nav_link FROM navigation WHERE Page_id = "5";';  

            connection.query(sql, (err, results) => {
                if (err) {
                console.dir(err);
                }
                res.json(results);
            });
        });

        apiRouter.get('/:navName', function(req, res){
            var navName = req.params.navName;
            let sql = 'SELECT Nav_name, Nav_link, Icon_path FROM navigation WHERE Nav_name = "' + navName + '";';  

            connection.query(sql, (err, results) => {
                if (err) {
                console.dir(err);
                }
                res.json(results);
            });
        });

        app.use('/api', apiRouter);
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