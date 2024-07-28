// Promise Class


const fs = require('fs');

// my own asynchronous function
function sachinReadFile() {
  console.log("inside sachinReadFile");
  
  return new Promise (function(resolve) {
    console.log("inside promise");

    fs.readFile("week-1\\week-1.5-Async, Await and Promises\\2.txt" , "utf-8", function(err, data) {
      console.log("before resolve");

      resolve(data);
    });
  });
}

// callback function to call
function onDone (data) {
  console.log(data);
}
// var a = sachinReadFile();
// console.log(a);
sachinReadFile().then(onDone);