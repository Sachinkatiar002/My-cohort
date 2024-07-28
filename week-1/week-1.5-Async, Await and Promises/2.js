const fs = require("fs");
// filesystem module

fs.readFile("week-1\\week-1.5\\2.txt" , "utf-8", function(err, data) {
  console.log(data);
})

console.log("hi there");

let a = 0;
// takes very long, longer than the file read
for (let i = 0; i < 1000000000; i++) {
  a++;
}

console.log ("hi there two 2");