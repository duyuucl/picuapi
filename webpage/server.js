const express = require('express');
const app = express();
const session = require('express-session');
const pageRouter = require('./routes/pages');


// EJS* （Keep it on top）
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
app.use('/public', express.static('public'));

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



app.listen(3000)
