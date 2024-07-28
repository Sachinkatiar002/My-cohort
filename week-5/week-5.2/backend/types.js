
/*
  {
    title: string,
    description : string
  }
  {
    id: string
  }
 */
const zod = require("zod");

const createTodo = zod.object({
  title: zod.string(),
  description: zod.string()
})


const updateTodo = zod.object({
  id: zod.string()
})

// Export
module.exports = {
  createTodo: createTodo,
  updateTodo: updateTodo
}