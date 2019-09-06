// Customer emitter
var CustomEmitter = require('./custom_emitter');
var emtr = new CustomEmitter();

emtr.on('greet', function() {
	console.log('Somewhere, someone said hello.');
});
emtr.on('greet', function() {
	console.log('A greeting occurred!');
});
// Manually emitted the event
emtr.emit('greet');


// Node's builtin EventEmitter
var NodeEmitter = require('events');
emtr = new NodeEmitter();

emtr.on('greet', function() {
	console.log('Somewhere, someone said hello.');
});
emtr.on('greet', function() {
	console.log('A greeting occurred!');
});
// Manually emitted the event
emtr.emit('greet');