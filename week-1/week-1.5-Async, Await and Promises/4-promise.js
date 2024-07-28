// => pending, resolved
var d = new Promise(function(resolve){
  setTimeout(function() {
    resolve("food");
  }, 1000)
});

function callback() {
  console.log(d);
}

console.log(d);
d.then(callback); // .then is called async function is resolve.

// what even is a promise?
// it is just a class that makes callbacks and async functions slightly more readable. Whenever u create it, you need to pass in a function as the first argument which has resolve as the first argument.



