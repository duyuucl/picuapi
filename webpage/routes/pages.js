const express = require('express');
const router = express.Router();
const User = require('../core/user');

const user = new User();

//login page
router.get('/login', (req, res, next) => res.render('login.ejs'));
//home page
router.get('/home', (req, res, next) => res.render('home.ejs'));

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


module.exports = router;