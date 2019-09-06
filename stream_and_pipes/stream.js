let fs = require('fs');

let readableStream = fs.createReadStream(__dirname + '/text.txt');

readableStream.on('data', function(chunk){
    console.log(chunk);
});

let readableStream2 = fs.createReadStream(__dirname + '/text.txt', { encoding: 'utf8', highWaterMark: 1024 });

readableStream2.on('data', function(chunk){
    console.log(chunk.length);
});

let readableStream_ = fs.createReadStream(__dirname + '/text.txt', { encoding: 'utf8' });
let writableStream_ = fs.createWriteStream(__dirname + '/textcopy.txt');

/* This is a pipe */
readableStream_.on('data', function(chunk){
    writableStream_.write(chunk);
});