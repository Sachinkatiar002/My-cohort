const express = require("express");
const mongoose = require('mongoose');
const app = express();

app.use(express.json());


mongoose.connect('mongodb+srv://sachin:Ua2d6FHpt4s3ZoHB@cluster0.gaquagy.mongodb.net/userappnew');

const User = mongoose.model('Users', { name: String, email: String, password: String });

app.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;

 // User.update , User.delete

  const existingUser = await User.findOne({email: username});
  // CRUD => Create, read, update, delete,
  if(existingUser){
    return res.status(400).send("Username already exists");
  }

  const user = new User({ 
    name: name, 
    email: username, 
    password: password,
    asd: "asd"
  });
  user.save();

  res.json({
    msg: "User created successfully"
  })
})

app.listen(3000);
