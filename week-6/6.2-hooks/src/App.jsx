import { useEffect, useState } from 'react'
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todos")
      .then(function(response){
        setTodos(response.data.todos)
      })
  }, [])

  return (
    <>
     {todos.map(item => <Todo key={item.id} title={item.title} description={item.description} > </Todo> )}
    </>
  )
}

function Todo ({title, description}) {
  return <div>
    <h1>{title} </h1>
    <h5>{description} </h5>
  </div>
}

export default App
