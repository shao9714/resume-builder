const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const passport = require('passport');
const flash = require('express-flash');
const session = require('express-session');
const initializePassport = require('./passport-config');
const methodOverride = require('method-override');
const cors = require('cors');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

users = []

initializePassport(
    passport, 
    email => {
        return users.find(user => user.email === email);
    }, 
    id => {
        return users.find(user => user.id === id);
});
app.use(flash());
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// might move to another file later on
var router = express.Router();

app.use('/', router);
app.use('/register', router);
app.use('/login', router);

router.get('/', function(req, res, next) {
    console.log("API reached!");
    res.send("Api working!");
});

router.get('/home', function(req, res, next) {
    console.log("Login successful");
    res.send("Login successful!");
});

router.post('/register', function(req, res, next) {
    console.log("Register reached " +JSON.stringify(req.body));
    users.push({
        id: Date.now().toString(),
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    console.log("users: "+ JSON.stringify(users));
    res.redirect('/');
});

router.post('/login', passport.authenticate('local', {
    successRedirect: '/home',
    failureRedirect: '/',
    failureFlash: true
}));

var port = '5000';
app.listen(port, () => console.log("App listening on port " + port));