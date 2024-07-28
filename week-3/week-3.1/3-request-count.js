// request count 

const express = require("express");

const app = express();

//Rate limittig
let numberOfRequest = 0;

function calculateRequest(req, res, next){
  numberOfRequest++;
  console.log(numberOfRequest);
  next();
}

// app.use(calculateRequest); --> for apply to all the routes. 

app.post("/health-checkup", calculateRequest, (req, res) => {
  res.json({msg: "hi there"})
 
})

app.get("/health-checkup2", (req, res) => {
  res.json({msg: "hi there 2"})
})

app.listen(3000);