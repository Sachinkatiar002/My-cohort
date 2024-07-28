const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];

function userExists(username, password){
  let userVal;
  const allUser = ALL_USERS.find(allUser => allUser.username === username && allUser.password === password)

  if(!allUser){
    userVal  = false;
  } else {
    userVal = true;
  }
  return userVal;
}

const fun = userExists("raman@gmail.com","123321")
console.log('find function: ',fun);


function userExistsFor(username, password){
  let userVal = false;
  
  for(let i = 0; i < ALL_USERS.length; i++) {
    if(ALL_USERS[i].username === username && ALL_USERS[i].password === password){
      userVal = true;
    } 
  }
  return userVal;
}

console.log('for :', userExistsFor("raman@gmail.com","123321") );

function userExistsDoubleNegation(username, password) {
  return !!ALL_USERS.find(allUser => allUser.username === username && allUser.password === password);
}


const done = userExistsDoubleNegation("raman@gmail.com","123321");
console.log('using !! to make boolean :',done);

function f(username, password){
let userExists = false;
  if (ALL_USERS.find(allUser => allUser.username === username && allUser.password === password)){
    userExists = true;
  }
  return userExists;
}

console.log("find and !! double negation:  ",f("raman@gmail.com","12332"));