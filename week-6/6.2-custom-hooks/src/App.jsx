import { useEffect, useState } from 'react'
// creating custom hook useTodos(){}

function useTodos () {
  const [todos, setTodos] = useState([])

  useEffect(()=>{
    setInterval(() => {
      fetch("https://sum-server.100xdevs.com/todos")
      .then(async function(res){
        const json = await res.json();
        setTodos(json.todos);
      })
    }, 2000);
    
  }, [])

  return todos;

}


// using custom hook useTodos()
function App() {
  const todos = useTodos();

  return (
    <>
      {todos.map(todo => <Todo key ={todo.id} title={todo.title} description={todo.description} />)}
     
    </>
  )
}

function Todo ({title, description}){
  return <div>
    <h1>{title}</h1>
    <h4>{description}</h4>
  </div>
  
}

export default App
  