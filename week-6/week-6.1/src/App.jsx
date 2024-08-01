// import { useState } from "react"
// import React , {Fragment} from "react"

// function App() {
// // title is a state variable that holds the current state value.
// // Initially, title is set to "My name is sachin".
// // State Update Function (setTitle):

// // setTitle is a function that you call to update the value of title.
// // Calling setTitle with a new value causes the component to re-render with the updated state.

//   const [title , setTitle] = useState("My name is sachin");

//  //Updating the State:

//  // The updateTitle function updates the title state with a new value that includes a random number:

//  function updateTitle (){
//   setTitle ("My name is " + Math.random());
// }

//  //<> or Fragment for group elements without adding node like div

//   return (
     
//       <div>
//         {/* <HeaderWithButton /> */}
//         <button onClick={updateTitle}>Click me to change the title </button> 
//         <Header title={title}></Header>
//         <Header title= "My name is harkirat1"></Header>
//         <Header title= "My name is harkirat2"></Header>
//         <Header title= "My name is harkirat1"></Header>
//         <Header title= "My name is harkirat2"></Header>
//         <Header title= "My name is harkirat1"></Header>
//         <Header title= "My name is harkirat2"></Header>
    
//       </div>
      
    
//   )
// }

// // function HeaderWithButton (){
// //   const [title , setTitle] = useState("My name is sachin");
  
// //   function updateTitle (){
// //     setTitle ("My name is " + Math.random());
// //   }

// //   return <div>
// //     <button onClick={updateTitle}>Click me to change the title </button> 
// //     <Header title={title}></Header>
// //   </div>
// // }


//   // Using the State:

//   // The title state is used as a prop in the Header component
//   //Initially, the Header component will display "My name is sachin".

// //  function Header({title}) {
// //     return <div>
// //       {title}
// //     </div>

// //   }
 
// const Header = React.memo(function Header({title}) {
//   return <div>
//     {title}
//   </div>

// })


// export default App


// key i React

import React , { useState } from "react"
let counter = 4;
function App(){

  const [todos, setTodos] = useState([{
    id:1,
    title: " go to gym",
    description: "go to gym today"
  },{
    id:2,
    title: " go to study",
    description: "go to study today"
  },{
    id:3,
    title: " go to gym",
    description: "go to gym today"
  }]);

  function addTodo() {
    setTodos([...todos,{
      id:counter++,
      title: Math.random(),
      description: Math.random()
    }])
    // const newTodos = [];
    // for(let i = 0; i < todos.length; i++){
    //   newTodos.push(todos[i]);
    // }
    // // newTodos == todos
    // newTodos.push({
    //   id:5,
    //   title: Math.random(),
    //   description: Math.random()
    // })
    // // existing ones + 1
    // setTodos(newTodos);
  }

  // {todos.map(todo =><Todo title={todo.title} description={todo.description}/>)}
  return(
    <div>    
      <button onClick={addTodo} >Add a todo</button>  
      {todos.map(function(todo){
        return <Todo key={todo.id} title={todo.title} description={todo.description} />
      })}
      
    </div>
  )
}


function Todo ({title, description}){
  return <div>
   <h1>
      {title}
   </h1>
   <h2>
     {description}
   </h2>
  </div>
}


export default App
