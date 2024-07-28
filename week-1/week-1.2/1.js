//1.Write the program to greet a person given their first and last name.

const firstName = "Sachin";
const lastName = "Mahato";
console.log(firstName + " " + lastName);

//2.Write a program that greets a person based on their gender.(if else)

const gender = 'male';

if(gender == 'male') {
  console.log('Hey boy welcome');
} else {
  console.log('hey girl welcome')
}

//3.Write a program that counts from 0 - 1000 and prints (for loop). 
let answer = 0;
for(let i = 0; i <= 1000; i++){
 answer += i;
} 
console.log(answer);
