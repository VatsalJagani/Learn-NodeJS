let http = require('http');
let fs = require('fs');

http.createServer(function(req, res){
    res.writeHead(200, {"Content-Type": "text/html"});
    let content = fs.readFileSync(__dirname + '/template.html', 'utf-8');
    content = content.replace('{Message}', "Hello world from template html file.");
    res.end(content);
}).listen(5555, '127.0.0.1');