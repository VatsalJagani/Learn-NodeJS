var fs = require('fs');

// synchronous call of file read
var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
console.log(greet);

// asynchronous call of file read
var greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8', function(err, data) {
	console.log(data);
});

console.log('Done!');


// Reference: https://nodejs.org/api/fs.html

/* Below functions are async but run one by one */

/* Read file */
fs.readFile('files/test.txt', 'utf-8', function(err, data){
    /* by default returns a Buffer, but by adding encoding we can return a string */
    if (err) throw err;
    console.log();
    console.log(typeof(data));
    console.log(data);
});
/* readFileSync */


/* rename a file */
// fs.rename('files/test.txt', 'files/test_rename.txt', (err) => {
//     if (err) throw err;
//     console.log("File renamed successfully.");
// });
/* fs.renameSync */


/* Remove file */
// fs.unlink('files/test_rename.txt', (err) => {
//     if (err) throw err;
//     console.log("test_rename.txt is removed successfully.");
// });
/* fs.unlinkSync */


/* Write file */
// fs.writeFile('files/test.txt',"Hello World from test.txt.", function(err){
//     /* by default returns a Buffer, but by adding encoding we can return a string */
//     if (err) throw err;
//     console.log("test.txt created again.");
// });
/* writeFileSync */
