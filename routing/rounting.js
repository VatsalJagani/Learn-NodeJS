let http = require('http');

let MyServer = function(req, res){
    if(req.url === '/'){
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.end("Hello World !!!\n");
    }
    else if(req.url === '/json'){
        res.writeHead(200, {"Content-Type": "application/json"});
        let obj = {"abc": "Hello", "xyz": "World"};
        res.end(JSON.stringify(obj));
    }
    /*
    Try anything other than / and /json.
    Will wait for server to run.
    That means if the response is not being returned from this call back function, client will wait for page and browser will say server didn't send any data after waiting for sometime.
    */
};

http.createServer(MyServer).listen(5555, '127.0.0.1');
