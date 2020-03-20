var http = require('http'),
    mysql = require('mysql'),
    express     = require('express'),
    bodyParser = require("body-parser"),    
    app = express(),
    apiRouter = express.Router();

app.use(bodyParser.json({limit: '10mb'}));
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}));

app.use(function(req, res, next)
{
    /* Allow access from any requesting client */
    res.setHeader('Access-Control-Allow-Origin', '*');
    /* Allow access for any of the following Http request types */
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
    /* Set the Http request header */
    res.setHeader('Access-Control-Allow-Headers', 
                 'X-Requested-With,content-type, Authorization');
    next();
});

var con = mysql.createConnection({
    host:'localhost',
    user:'root',
    port:3306,
    password: 'root',
    database:'picudb'
});

con.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
      }
      console.log('connected as id ' + connection.threadId);
    apiRouter.get('/pages', function(req, res)
    {
        let sql = "SELECT Page_id, Page_name FROM page ORDER BY Page_id ASC";  

        con.query(sql, (err, results) => {
            if (err) {
            console.dir(err);
            }
            res.json(results);
        });
    });

    apiRouter.get('/pages/:pageName', function(req, res)
    {
        var pageName = req.params.pageName;
        let sql = 'SELECT Page_id FROM page WHERE Page_name = "' + pageName + '"';

        con.query(sql, (err, results) => {
            if (err) {
            console.dir(err);
            }
            res.json(results);
        });
    });

    /* Mount the specified Middleware function based on matching path */
    app.use('/api', apiRouter);

    /* Open a UNIX socket, listen for connections to the specified port */
    app.listen(3000);
});


