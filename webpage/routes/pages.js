const express = require('express');
const router = express.Router();
const User = require('../core/user');
const pool = require('../core/pool');
const user = new User();

//login page
router.get('/login', (req, res, next) => res.render('login.ejs'));
//home page
router.get('/home', (req, res, next) => res.render('home.ejs'));
//content page
router.get('/content', (req, res, next) => res.render('content.ejs'));

//edit content
router.get('/edit-content', (req, res, next) => res.render('edit-content.ejs'));


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
    let sql1 = 'SELECT Text FROM content WHERE Page_id = "' + parentId + '";';
    pool.query(sql1, (err, contents) => {
        if (err) {
        console.dir(err);
        }
        res.render('content.ejs', {contents})
    });
});





module.exports = router;