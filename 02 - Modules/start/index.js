const fs = require("fs");

console.log("Hello Node.js");

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

const os = require("os");
const realdata = require("./data.js"); //CommonJS //ทุกอย่างที่ export
//const {data} = require("./data.js"); //เฉพาะ variable ที่ exportมา ที่ชื่อ data 
//การนำเข้าโมดูล data.js แบบการแยกค่า (destructuring) โดยใช้ { data }:
console.log(realdata); 

const http = require("http");

http.createServer(function (req, res) {
    const jsonData = JSON.stringify(realdata); //แปลงอ็อบเจ็กต์ JavaScript เป็นรูปแบบ JSON
    res.writeHead(200);
    res.write(jsonData);
    res.end();
  })
  .listen(3000);
console.log("Listening on port 3000");
