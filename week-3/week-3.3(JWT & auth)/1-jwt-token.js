const jwt = require("jsonwebtoken");

// Decode , verify, Sign.

const value = {
  name: "sachin",
  accountNumber: 123123123
}

// sign
// const token = jwt.sign(value, "secret");s
// console.log(token);

const varifiedValue = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic2FjaGluIiwiYWNjb3VudE51bWJlciI6MTIzMTIzMTIzLCJpYXQiOjE3MTY1NDk0MzB9.heX1wzLDh2weaYXBXbpWUHB_sjw2zKRzxV_odd0hFYE", "secret");
console.log(varifiedValue);


// this token has been generated using this secret, and hence this token can only be varified using this secret.
// this is your checkbook

//  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic2FjaGluIiwiYWNjb3VudE51bWJlciI6MTIzMTIzMTIzLCJpYXQiOjE3MTY1NDk0MzB9.heX1wzLDh2weaYXBXbpWUHB_sjw2zKRzxV_odd0hFYE 


// if you change the "secret" to "secretzzz" it will through error.