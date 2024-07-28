
// export function Todos() {
//   return <div>
//     <h1>Go to gym</h1>
//     <h2>You need to go gym</h2>
//     <button>Mark as completed</button>
//   </div>
// }

/**
 * const todos = {
 *   title: "go to gym",
 *   description: " please work hard"
 * }
 */

export function Todos({todos}) {

  return <div>
    {todos.map(function(todo) {
      return <div> 
        <h1>{todo.title}</h1>
        <h2>{todo.description}</h2>
        <button>{todo.completed == true ? "Completed" :"Mark as completed" }</button>
      </div>

    })}
    
  </div>
}