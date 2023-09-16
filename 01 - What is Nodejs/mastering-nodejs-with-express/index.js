console.log("Hello Node.js");
console.log(global);
console.log(__dirname);
console.log(__filename);
console.log(module);
console.log(exports);
console.log(module.exports === exports);

console.log("<<<< Blocking >>>>"); //อะไรที่ใช้เร็วๆ
const fs = require("fs");
const content = fs.readFileSync("./data.js", "utf8");
console.log(content);

console.log("<<<< Non Blocking >>>>"); //ไฟล์ใหญ่ โหลดนาน
fs.readFile("./data.js", "utf8", function (err, content) {
  console.log(content);
});
