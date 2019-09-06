let express = require('express');

let app = express();

app.get('/', function(req, res){
    res.send('Hello world!!!');
});
// express takes care of assigning content-type


// special routes
app.get('/teach/*/', function(req, res){
    res.send(`Route with wildcard.`);
});

// request parameters
app.get('/person/:id', function(req, res){
    res.send(`Hello ${req.params.id}`);
});

/*
app.post()
req.query.id
// In post get value by req.query
// If something in body we need to use bodyParser as middleware to get proper body values
*/


// Middleware
app.use('/style', express.static(__dirname + '/static'));
app.get('/middleware', function(req, res){
    res.send('<html><head><link type="text/css" rel="stylesheet" href="/style/body.css" /></head><body><h1>Middleware</h1></body></html>')
});


// Custom middleware
app.use('/', function(req, res, next){
    console.log("custom middleware");
    next();
});
// move this to top to make this work


// Redirection
app.use('/', function(req, res, next){
    res.redirect('/index.html');
    res.next();
});


app.listen(5000);
// nodemon app.js


/*
Use express generator
- It gives better code structure
- Better Route usage
*/