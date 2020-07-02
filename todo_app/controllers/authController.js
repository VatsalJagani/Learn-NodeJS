let path = require('path');
let express = require('express');

module.exports = function(app){

    let publicDir = path.join(__dirname, '../public');
    console.log(publicDir);

    // Authentication manager
    app.use((req, res, next) => {
        console.log(req.originalUrl);
        if(req.originalUrl.startsWith('/login') || req.originalUrl.startsWith('/api/auth')){
            next();
        }
        else{
            if (req.session.user && req.cookies.user_sid) {
                next();
            } else {
                res.redirect('/login');
            }
        }
    });


    // For login page
    app.get('/login', (req, res) => {
        res.sendFile(publicDir + '/login.html');
        // res.send("hello from login");
    });

    // For post request of login
    app.post('/api/auth', function(req, res){
        console.log(req.body.username);
        if(req.body.username){
            res.redirect('/');
        }
    });

    app.get('/', function(req, res){
        // if user is already logged in
        app.use('/', express.static(__dirname + '/public'));
    });
}