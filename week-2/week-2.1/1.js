function square(n) {
  return n * n;
}

function cube(n) {
  return n * n * n;
}

function quad (n) {
  return n * n * n * n;
}

function sumOfSquares(a, b) {
  let square1 = square(a);
  let square2 = square(b);
  return square1 + square2;
}

function sumOfCube(a, b) {
  let cube1 = cube(a);
  let cube2 = cube(b);
  return cube1 + cube2;
}

function sumOfSomething (a, b, fn) {
  let fn1 = fn(a);
  let fn2 = fn(b);
  return fn1 + fn2 ;
}

// functional arguments
let ans = sumOfSomething(1, 2, square );
console.log(ans);