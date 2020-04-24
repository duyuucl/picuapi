var express = require('express');
var app = express();
var apiRouter = express.Router();
var bodyParser = require("body-parser");
var pool = require('../webpage/core/pool')
var port = process.env.port || 3000; //according to the slides, this means port is based on the environment, or 3000

// webpage
const session = require('express-session');
const pageRouter = require('../webpage/routes/pages');

app.use(bodyParser.json({limit: '10mb'}));
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}));
app.all("*", function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-control-Allow-Headers", "xCors");
    res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT,OPTIONS,HEAD,FETCH");
    res.header("Access-control-max-age", 1000);
    next();
})

/*
var connection = mysql.createConnection({

    host:'picuserver.mysql.database.azure.com',
    user:'admin0@picuserver',
    port: 3306,    
    password: 'picu+2020',
    database:'picudb'
});
*/


apiRouter.get('/navs/home', function(req, res){
    let sql = 'SELECT Nav_name, Nav_link, Icon_path FROM navigation WHERE Page_id = "1";';  

    pool.query(sql, (err, results) => {
        if (err) {
        console.dir(err);
        }
        res.json(results);
    });
});

apiRouter.get('/navs/picu', function(req, res){
    let sql = 'SELECT Nav_name, Nav_link, page.Page_id AS id FROM navigation, page WHERE navigation.Page_id = "2" AND Nav_name = Page_name;';  

    pool.query(sql, (err, results) => {
        if (err) {
        console.dir(err);
        }
        res.json(results);
    });
});

apiRouter.get('/navs/yourchild', function(req, res){
    let sql = 'SELECT Nav_name, Nav_link, page.Page_id AS id FROM navigation, page WHERE navigation.Page_id = "3" AND Nav_name = Page_name;';  

    pool.query(sql, (err, results) => {
        if (err) {
        console.dir(err);s
        }
        res.json(results);
    });
});

apiRouter.get('/navs/team', function(req, res){
    let sql = 'SELECT Nav_name, Nav_link, page.Page_id AS id FROM navigation, page WHERE navigation.Page_id = "4" AND Nav_name = Page_name;';  

    pool.query(sql, (err, results) => {
        if (err) {
        console.dir(err);
        }
        res.json(results);
    });
});

apiRouter.get('/navs/visit', function(req, res){
    let sql = 'SELECT Nav_name, Nav_link, page.Page_id AS id FROM navigation, page WHERE navigation.Page_id = "5" AND Nav_name = Page_name;';  

    pool.query(sql, (err, results) => {
        if (err) {
        console.dir(err);
        }
        res.json(results);
    });
});

apiRouter.get('/navs/qa', function(req, res){
    let sql = 'SELECT Q_title, Q_answer FROM faq;';  

    pool.query(sql, (err, results) => {
        if (err) {
        console.dir(err);
        }
        res.json(results);
    });
});

apiRouter.get('/content/:parentId', function(req, res){
    var parentId = req.params.parentId;
    let sql = 'SELECT Image1_path, Image2_path, Image3_path, Text FROM content WHERE Page_id = "' + parentId + '";';  

    pool.query(sql, (err, results) => {
        if (err) {
        console.dir(err);
        }
        res.json(results);
    });
});

apiRouter.get('/menu/:parentId', function(req, res){
    var parentId = req.params.parentId;
    let sql = 'SELECT Nav_name, Nav_link, page.Page_id AS id FROM navigation, page WHERE navigation.Page_id = "' + parentId + '" AND Nav_name = Page_name;';  

    pool.query(sql, (err, results) => {
        if (err) {
        console.dir(err);
        }
        res.json(results);
    });
});

apiRouter.get('/:navName', function(req, res){
    var navName = req.params.navName;
    let sql = 'SELECT Nav_name, Nav_link, Icon_path FROM navigation WHERE Nav_name = "' + navName + '";';  
    pool.query(sql, (err, results) => {
        if (err) {
        console.dir(err);
        }
        res.json(results);
    });
});

apiRouter.post('/navs/qa', function(req, res){
    var userName = req.body.name,
        userFeedback = req.body.feedback;
    let sql = 'INSERT INTO feedback(user_name, feedback) VALUES ("' + userName + '", "' + userFeedback + '");';  
    pool.query(sql, (err, results) => {
        if (err) {
        console.dir(err);
        }
        res.json({ message: 'Row successfully inserted' });
    });
});


/* -------------------------  webpage  -------------------------- */
// EJS* （Keep it on top）
app.set('views', '../webpage/views');
app.set('view-engin', 'ejs');

// Bodyparser*
app.use(express.urlencoded({ extended: false }));

//session
app.use(session({
    secret: 'picu',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60 * 1000 * 30
    }
}));

// static engine
app.use('/public', express.static('../webpage/public'));

// Routes
app.use('/', pageRouter);


// errors page not found 404*
app.use((req, res, next) => {
    var err = new Error('Page not found');
    err.status = 404;
    next(err);
})

// handling errors*
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send(err.message);
})

app.use('/api', apiRouter);
app.listen(port)


