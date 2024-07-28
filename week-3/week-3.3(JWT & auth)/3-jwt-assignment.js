const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';
const zod = require("zod");


const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

function signJwt(username, password) {
  // Your code here
  const emailResponse = emailSchema.safeParse(username);
  const passwordResponse = passwordSchema.safeParse(password);

  if(!emailResponse.success || !passwordResponse.success) {
    return null;
  }

  const signature = jwt.sign({
    username
  }, jwtPassword);
  return signature;
}

const token = signJwt("mahatosachin@gmail.com", "123456");
// console.log(token);


function verifyJwt(token) {
    // Your code here
    let ans = true;
    try {
      jwt.verify(token, jwtPassword);
    } catch(e) {
      ans = false;
    }
    return ans;
}

// console.log(verifyJwt("jhjshjh"));

function decodeJwt(token) {
  // Your code here 
  // true false
  const decodeed = jwt.decode(token);
  if(decodeed){
    return true;
  } else {
    return false;
  }
}
// const ans = decodeJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic2FjaGluIiwiYWNjb3VudE51bWJlciI6MTIzMTIzMTIzLCJpYXQiOjE3MTY1NDk0MzB9.heX1wzLDh2weaYXBXbpWUHB_sjw2zKRzxV_odd0hFYE");

// console.log(ans);


module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};