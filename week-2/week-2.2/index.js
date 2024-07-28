
// const express = require('express')
// const bodyParser = require('body-parser');
// const app = express()
// const port = 3000

// app.use(bodyParser.json());

// // Create a todo app that lets users store todos on the server or in the file.

// // app.get("/route-handler", function (req, res) {
// //   // Send JSON response
// //   res.json({
// //     name: "sachin",
// //     age: 21
// //   });
// // })


// // app.get("/", function (req, res) {
// //   // Send JSON response
// //   res.send('<b>hi there!</b>');
// // })

// //middleware
// app.post("/conversation",  (req, res) => {
//   console.log(req.body);
//   res.json({
//     name: "sachin",
//     age: 21
//   });
// })


// // app.post("/conversation", (req, res) => {
// //   res.send('<b>hi there!</b>');
// // })


// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Parse JSON bodies
app.use(bodyParser.json());

// Route handler
app.post("/conversation", (req, res) => {
  console.log(req.body);
  res.send({
    msg: '2 + 2 = 4'
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
