let http = require('http');
let fs = require('fs');

http.createServer(function(req, res){
    res.writeHead(200, {"Content-Type": "text/html"});
    fs.createReadStream(__dirname + '/template.html').pipe(res);   // Make sure to always use streams until special purpose

    // Think how we can incorporate below line in above streamed idea
    // content = content.replace('{Message}', "Streamed request.");
}).listen(5555, '127.0.0.1');