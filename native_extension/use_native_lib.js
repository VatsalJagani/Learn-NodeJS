/*
Reference: https://medium.com/@marcinbaraniecki/extending-node-js-with-native-c-modules-63294a91ce4

Initialize node project in the same directory as hello_world.cpp file
`npm init -y`

Install Nan and node-gyp
`npm install nan node-gyp --save`


package.json should look like:
```
{
  "name": "node-native-addons-example",
  "version": "1.0.0",
  "dependencies": {
    "nan": "^2.6.1",
    "node-gyp": "^3.6.0"
  },
  "scripts": {
    "compile": "node-gyp rebuild",
    "start": "node main.js"
  },
  "gypfile": true
}
```
 - In scripts:
   - `"compile": "node-gyp rebuild"` - C++ code compilation
   - `"start": "node main.js"` - For our main executable script

create a bindings.gyp file — it’s a sort of configuration file for node-gyp.
```
{
  "targets": [
    {
      "include_dirs": [
        "<!(node -e \"require('nan')\")"
      ],
      "target_name": "addon",
      "sources": [ "main.cpp" ]
    }
  ]
}
```
 - sources - C++ native extension files


Following dependencies are required on the machine:
- make
- g++
- python 2.7


Compile the source
`npm run compile`


Test node js file
```
const {HelloWorld} = require('./build/Release/addon');
console.log(HelloWorld());
```
*/


const {HelloWorld} = require('./build/Release/addon');
console.log(HelloWorld());
