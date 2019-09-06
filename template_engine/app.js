/*
https://expressjs.com/en/resources/template-engines.html
So many template engines available with express
*/

let express = require('express');

let app = express();

let users = [
    {name: "Kelaiyo"},
    {name: "Vatsal"}
];

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('index', {users: users});
});

app.listen(5000);