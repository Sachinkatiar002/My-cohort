//1.Write a program to print all the even numbers in the array.

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let evenNumbers = [];

for(let i = 0; i < arr1.length; i++){
  if(arr1[i] % 2 == 0) {
    evenNumbers.push(arr1[i])
  }
}
console.log(evenNumbers);

//2.Write a program to print the biggest number in the array. 

let biggestNumber;

for(let i = 0; i < arr1.length; i++){
  
  biggestNumber = arr1[0];
  if(biggestNumber < arr1[i]) {
    biggestNumber = arr1[i];
  }
}
console.log(biggestNumber);

//3.Write a program that all the male people's first name given a complex object.

const allUsers = [
  {
    firstName: 'Sachin',
    gender: 'male'
  },
  {
    firstName:'Harkirat',
    gender: 'male',
  },
  {
    firstName: 'Priya',
    gender:'female'
  }
]

for(let i = 0; i < allUsers.length; i++) {
  if(allUsers[i]['gender'] == 'male'){
    console.log(allUsers[i]['firstName']);
  }
}

//4.Write a program that reverse all the elements of the array.

