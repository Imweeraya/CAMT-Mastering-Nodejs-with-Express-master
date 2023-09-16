const fs = require('fs');

console.log('Hello Node.js');

// Logging global objects
console.log(global);
console.log(__dirname);
console.log(__filename);
console.log(module);
console.log(exports);
console.log(module.exports === exports);

// Blocking vs Non-blocking IO
// const content = fs.readFileSync('./data.js', 'utf8');
// console.log(content);

// fs.readFile('./data.js', 'utf8', (err, content) => { 
//   console.log(content);
// });
  
const {realdata} = require('./data.js'); //CommonJS
console.log(realdata);

const http = require('http');
http
 .createServer(function (req, res) {
 res.writeHead(200);
 res.write('Hello World');
 res.end();
 })
 .listen(3000);
console.log('Listening on port 3000');

