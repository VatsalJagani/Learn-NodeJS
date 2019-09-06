let http = require('http');

let MyServer = function(req, res){
    /*
    Add a break point here, run the file in debugger and try to understand the object req and res.
    */
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Hello World !!!\n");
};

http.createServer(MyServer).listen(5555, '127.0.0.1');