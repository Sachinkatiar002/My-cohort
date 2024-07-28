// Right way to code using Middlewares

const express = require("express");
const app = express();



function userMiddleware(req, res, next) {

  const username = req.headers.username;
  const password = req.headers.password;
  
  if(username !== "sachin" && password !== "pass") {
    res.status(403).json({
      msg: "Incorrect input"
    })
  } else {
    next();
  } 
};

function kidneyMiddleware(req, res, next) {

  const kidneyId = req.query.kidneyId;

  if(kidneyId != 1 && kidneyId != 2) {
    res.status(403).json({
      msg: "Incorrect input"
    })
  } else {
    next();
  } 
};

app.get("/health-checkup", userMiddleware, kidneyMiddleware,  function(req, res){
 
  res.send({
    "msg": "Your health is fine!"
  })
});

app.get("/kidney-checkup", userMiddleware, kidneyMiddleware,  function(req, res){
 
  res.send({
    "msg": "Your kidney is fine!"
  })
});

app.get("/heart-checkup", userMiddleware, function(req, res){
 
  res.send({
    "msg": "Your heart is fine!"
  })
});

app.listen(3000);