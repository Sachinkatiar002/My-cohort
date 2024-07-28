// state, components
//hook
import { useState } from "react";

// any time a parent re-render, its childs re-renders as well


function App() {
  // const [ count, setCount]  = useState(0);
  //state
  const [ todos, setTodos]  = useState([{
    title: "Go to gym",
    description: "Gym from 7-9",
    completed: false
  },{
    title: "Study DSA",
    description: "Study DSA from 7-9",
    completed: true
  }]);
 
  function addTodo(){
    setTodos([...todos,{
      title: "new todo",
      description: "desc.. for new todo"
    }])
  }

  return ( 
   <div>
      <button onClick={addTodo}>Add a random todo</button>
      {todos.map( (todo) => {
        return <Todo title={todo.title} description={todo.description} ></Todo>
      })} 
     
   </div>
  )
}

// components
function Todo(props){

  // function onClickHandler(){
  //   props.setCount(props.count + 1);
  // }

  // return <button onClick = {onClickHandler} >Counter {props.count} 
  // </button>
  
  return <div>
    <h1>{props.title} </h1>
    <h2>{props.description} </h2>
  </div>
}



export default App
