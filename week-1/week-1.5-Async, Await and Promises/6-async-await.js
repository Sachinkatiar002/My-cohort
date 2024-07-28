

function sachinAsyncFunction() {
  let p = new Promise(function(reaolve) {
    // do some async logic here
    setTimeout(function() {
      reaolve("hi there");
    } , 3000)
  });
  return p;
}

 async function main() {
  // no callbacks, no .then syntax
  //  sachinAsyncFunction().then(function(value) {
  //   console.log(value);
  //  })
  let value = await sachinAsyncFunction();
  console.log("hi there1");
}

main();
console.log("after main");

// Async await syntax
// Again, it is just syntactic sugar. Still uses callbacks/promises under the hood. Makes code much more readable than callbacks/Promises. Usally used on the ca;;er side , not on thr side where you define an async function