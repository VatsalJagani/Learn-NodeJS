/*
npmjs.com


// Initializing App
npm init
package name: (npm) nodejs-test-app
version
description
entry point: (npm.js) app.js
// and more


// installing dependencies
npm install moment
// - install package
// - add dependency to package.json into the app

In the dependencies:
^2.1.0 - ^ means allowing to update minor or patch release automatically
~2.1.0 - ~ means allowing only patch update


// scripts portion in the package.json
npm test
// allows to create commands

*/

let moment = require('moment');
// if dependencies not installed just say `npm install`



/*
npm install -g <module>
// global installation
*/