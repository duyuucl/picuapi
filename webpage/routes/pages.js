const express = require('express');
const router = express.Router();
const User = require('../core/user');
const pool = require('../core/pool');
const user = new User();

//login page
router.get('/login', (req, res, next) => res.render('login.ejs'));

//home page
router.get('/home', (req, res, next) => res.render('home.ejs'));

//picu page
router.get('/picu', (req, res, next) => {
    let sql = 'SELECT Nav_name, page.Page_id AS id FROM navigation, page WHERE navigation.Page_id = "2" AND Nav_name = Page_name;'
    pool.query(sql, (err, navs) => {
        if (err) {
        console.dir(err);
        }
        res.render('navigation.ejs', {navs})
    });
});

//your child page
router.get('/yourchild', (req, res, next) => {
    let sql = 'SELECT Nav_name, page.Page_id AS id FROM navigation, page WHERE navigation.Page_id = "3" AND Nav_name = Page_name;'
    pool.query(sql, (err, navs) => {
        if (err) {
        console.dir(err);
        }
        res.render('navigation.ejs', {navs})
    });
});

//team page
router.get('/team', (req, res, next) => {
    let sql = 'SELECT Nav_name, page.Page_id AS id FROM navigation, page WHERE navigation.Page_id = "4" AND Nav_name = Page_name;'
    pool.query(sql, (err, navs) => {
        if (err) {
        console.dir(err);
        }
        res.render('navigation.ejs', {navs})
    });
});

//visit page
router.get('/visit', (req, res, next) => {
    let sql = 'SELECT Nav_name, page.Page_id AS id FROM navigation, page WHERE navigation.Page_id = "5" AND Nav_name = Page_name;'
    pool.query(sql, (err, navs) => {
        if (err) {
        console.dir(err);
        }
        res.render('navigation.ejs', {navs})
    });
});

//content page
router.get('/content', (req, res, next) => res.render('content.ejs'));

//edit content
router.get('/edit-content', (req, res, next) => res.render('edit-content.ejs'));

//user page
router.get('/user', (req, res, next) => res.render('user.ejs'));


//post login data
router.post('/login', (req, res, next) => {
    user.login(req.body.email, req.body.password, function(result){
        if(result){
            req.session.user = result;
            req.session.opp = 1;
            res.redirect('/home')
        } else {
            res.send('Username/password incorrect!')
        }
    })
});

//get content data
router.get('/content/:parentId', (req, res, next) => {
    var parentId = req.params.parentId;
    let sql = 'SELECT Text FROM content WHERE Page_id = "' + parentId + '";';
    pool.query(sql, (err, contents) => {
        if (err) {
        console.dir(err);
        }
        res.render('content.ejs', {contents})
    });
});


module.exports = router;