function sum(num1, num2, fnToCall) { //fnToCall is added
  let result = num1 + num2;
  fnToCall(result); // fnToCall result is added
}
function displayResult(data){
  console.log('Result of the sum is: ' + data);
}
function displayResultPassive(data) {
  console.log("sum's result is : " + data);
}

//You are only allowed to call one function after this 
//How will you displayResult of a sum
const ans = sum (1, 2, displayResult);
//callbacks