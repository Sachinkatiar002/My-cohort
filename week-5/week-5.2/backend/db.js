/*
 * Todo {
    title: ssting,
    description: string,
    completed: boolean
 }
 */

const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://sachin:Ua2d6FHpt4s3ZoHB@cluster0.gaquagy.mongodb.net/todos"
);

const todosSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean
})

const todo = mongoose.model("todos", todosSchema);

module.exports = {
  todo: todo
}