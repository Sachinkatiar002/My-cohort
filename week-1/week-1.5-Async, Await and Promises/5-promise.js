
// function that resolve quickly.
function sachinAsyncFunction() {
  let  p = new Promise(function(resolve){
    setTimeout(resolve, 2000)
  });
  return p;
}

const value = sachinAsyncFunction();
  value.then(function(){
    console.log("hi there");
  });


