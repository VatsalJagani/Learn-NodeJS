/*
In stream.js we have written readableStream and writableStream
Get data from readable and written to writable
*/

let fs = require('fs');

let readableStream = fs.createReadStream(__dirname + '/text.txt', { encoding: 'utf8' });
let writableStream = fs.createWriteStream(__dirname + '/textcopy2.txt');


/*
In writable pipe is an event that call the call back function when there is something incoming in the stream.
*/
writableStream.on('pipe', function(chunk){
    console.log("Something is being written to writableStream.");
});


/*
In readable pipe is a function that takes argument as the stream to send the data in.
*/
readableStream.pipe(writableStream);