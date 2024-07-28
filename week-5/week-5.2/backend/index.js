 // write basic express boilerplate code,
 // with express.json() middleware

const express = require("express");
//Import
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const app = express();
const port = 3000;
const cors = require("cors");


app.use(express.json());
app.use(cors());

// body {
//  title: string,
//  description: string
// }

app.post("/todos", async (req, res)=>{
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);

  if(!parsedPayload.success){
      res.status(411).json({
      msg: "Invalid Input"
    })
    return;
    
  }
  // put it in mongodb
  // await todo.create({
  //   title: createPayload.title,
  //   description: createPayload.description,
  //   completed: false
  // })

  res.json({
    msg: "Todo created"
  })
})

app.get("/todos", async(req, res)=>{
  // const todos = await todo.find({})
  res.json({
    todos: []
  })
})

app.put("/completed", async(req, res)=>{
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload)

  if(!parsedPayload.success){
    res.status(411).json({
      msg: "Invalid Input"
    })
    return;  
  }
  
   await todo.update({
    _id: req.body.id
   },{
      completed:true
   })

   res.json({
    msg: "Todo marked as completed"
   })
})


app.listen(port, ()=>{
  console.log(`app listening on port ${port}`);
})
 