function calculatorArithmatic(a, b, arithmaticFinalFunction) {
  const ans = arithmaticFinalFunction(a, b);
  return ans;
}

function sum(a, b) {
  return a + b;
}

const value = calculatorArithmatic(1, 2, sum);
console.log(value);