// input Vallidation using zod library

const express = require("express");

const app = express();

const zod = require("zod");

// const schema = zod.array (zod.number()); ==> for validating input is array

//
// {
//    email: string => email
//    password: atleast 8 letters
//    country: "IN" , "US"
// }

// like this
// {
//   "email": "test@example.com",
//   "password": "password123",
//   "country": "IN",
//   "kidneys": [1, 2]
// }


const schema = zod.object({
  email: zod.string().email(),// write in email formate abc@gmail.com
  password: zod.string().min(8), // .min() used for atleat 8 letters
  country: zod.literal("IN").or(zod.literal("US")),
  kidneys: zod.array(zod.number())
})




app.use(express.json());


app.post("/health-checkup", (req, res) => {
  //kidneys = [1, 2]
  // const kidneys = req.body.kidneys;
  // const response = schema.safeParse(kidneys);
   const response = schema.safeParse(req.body);

  if(!response.success) {
    res.status(411).json({
      msg: "input is invalid"
    })
  } else {
    res.send({
      response
    })
  } 
});

app.listen(3000);