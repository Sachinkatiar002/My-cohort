const input = [1,2,3,4,5]

const newArr = [];

for(let i = 0; i < input.length; i++){
  newArr.push(input[i] * 3)
}

// console.log(newArr);


map(input, function(i){
  return i * 1;
})

input.map(function(i){
return i * 2;
})

const ans = input.map((i) => {
  return i * 3;
});

console.log(ans);