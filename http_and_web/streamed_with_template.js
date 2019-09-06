let http = require('http');
let fs = require('fs');

let stream = require('stream');

// TODO: Need to write custom stream to replace template values.
class MyStream extends stream.Transform{
    constructor(options){
        super(options);
    }
    _transform(chunk, enc, cb) {
        let newChunk = chunk.toString().replace('Content replaced by another stream.');
        this.push(newChunk);
        cb();
    }
}
let myStream = new MyStream();


http.createServer(function(req, res){
    res.writeHead(200, {"Content-Type": "text/html"});
    // fs.createReadStream(__dirname + '/template.html').pipe(res);   // Make sure to always use streams until special purpose

    // Think how we can incorporate below line in above streamed idea
    // content = content.replace('{Message}', "Streamed request.");
    
    fs.createReadStream(__dirname + '/template.html').pipe(myStream).pipe(res);

}).listen(5555, '127.0.0.1');