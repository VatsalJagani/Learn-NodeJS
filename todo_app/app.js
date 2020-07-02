// initialize express
let express = require('express');
let app = express();
let port = process.env.PORT || 3000;


// Parsers
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());


// Session and Authentication management
let Session = require('express-session');
app.use(Session({
    secret: 'username', cookie: { maxAge: 60000 }
}));


// In case server restarted and user session is still open it needs to be closed
app.use(function(req, res, next){
    if(req.cookies.username && !req.session.username){
        res.clearCookie('username');
    }
    next();
});


// Check if user is logged-in
app.use(function(req, res, next){
    if(req.cookies.username && req.session.username){
        res.redirect('/dashboard');
    }
    else{
        next();
    }
});


app.get('/', function(req, res){
    res.redirect('/login');
})


// MongoDB
/*
Cluster on AWS
ClusterName: MEANlearning
Location: Mumbai
*/
var mongoose = require('mongoose');
var databaseConfig = require('./database');
mongoose.connect(databaseConfig);   // mongoDB do not require to close the connection.


// Authentication & Router
// app.use('/login', express.static(__dirname + '/public/login.html'))
let authController = require('./controllers/authController');
authController(app);


// Controllers
let apiController = require('./controllers/apiController');
apiController(app);


// Start app
app.listen(port);