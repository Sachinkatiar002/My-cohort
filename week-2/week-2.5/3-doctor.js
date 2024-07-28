const express = require('express');

const app = express();

app.use(express.json());

var user = [{
  name: "jhon",
  kidneys: [{
    healthy: false
  }]
}];

app.get('/', function (req,res){
  // write logic
  const johnKidneys = user[0].kidneys;
  const numberOfKidneys = johnKidneys.length;
  let numbersOfHealthyKidneys = 0;
  for(let i = 0; i < johnKidneys.length; i++) {
    if(johnKidneys[i].healthy) {
      numbersOfHealthyKidneys += 1; 
    }
  }
  const numberOfUnhealthyKidneys = numberOfKidneys - numbersOfHealthyKidneys;

  res.json({
    numberOfKidneys,
    numbersOfHealthyKidneys,
    numberOfUnhealthyKidneys
  })

})

//post kidneys
app.post("/", function(req, res){
  const isHealthy = req.body.isHealthy;
  user[0].kidneys.push({
    healthy: isHealthy
  })
  res.json({
    msg: "done"
  })
})

// update the kidneys with healthy kidneys
app.put("/", function(req, res) {

  if (isThereAtleastOneUnhealthyKidney()) {

    for(let i = 0; i < user[0].kidneys.length; i++) {
      user[0].kidneys[i].healthy = true;
    }
    res.json({
      msg: "done"
    })
  } else {
    res.status(411).json({
      msg: "You have no bad kidneys"
     });
  }
})

//remove all the unhealthy kidneys
app.delete("/", function(req, res) {
  
  if (isThereAtleastOneUnhealthyKidney()) {
   
    let newKidneys = [];
    for(let i = 0; i < user[0].kidneys.length; i++) {
      if (user[0].kidneys[i].healthy) {
          newKidneys.push({
          healthy: true
        })
      }
    }
    user[0].kidneys = newKidneys;
    res.json({
      msg: "done"
    })
   
  } else {
     res.status(411).json({
      msg: "You have no bad kidneys"
     });
  }
});

function isThereAtleastOneUnhealthyKidney () {
  let atleastOneUnhealthyKidney = false;
  for(let i = 0; i < user[0].kidneys.length; i++){
    if(!user[0].kidneys[i].healthy){
      atleastOneUnhealthyKidney = true;
    };
  }
  return atleastOneUnhealthyKidney;
}

app.listen(3000);