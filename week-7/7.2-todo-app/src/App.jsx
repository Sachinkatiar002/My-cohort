import {RecoilRoot, useRecoilValue, useRecoilState, useSetRecoilState} from 'recoil';
import { useState } from 'react';
import { todosAtom , filterAtom} from './store/atoms/atoms';
import { filteredTodos } from './store/selectors/selectors';

function App() {
  

  return (
    <>
      <RecoilRoot>
         <Todo />       
      </RecoilRoot>    
      
    </>
  )
}

function Todo() {
 
  const [filter , setFilter] = useRecoilState(filterAtom);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const filteredTodo = useRecoilValue(filteredTodos);

  // Function to update the todosAtom
  const setTodos = useSetRecoilState(todosAtom);

  const addTodo = () => {
      //Creating a new todo object
    const newTodo = {
      title: newTitle,
      description: newDescription,
    };

    // Add new todo to the existing list
    setTodos(prevTodos => [...prevTodos, newTodo]);

    //Clear input fields
    setNewTitle("");
    setNewDescription("");
  };
  return (
    <div>
      <h1>Todo List</h1>
      <input 
        type="text" 
        placeholder="Filter todos by title"
        value={filter}
        onChange={(e) => setFilter(e.target.value)} 
      />
      <h2>Add a new todo</h2>
      <input 
        type="text" 
        placeholder="Title" 
        value={newTitle} 
        onChange={(e) => setNewTitle(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Description" 
        value={newDescription} 
        onChange={(e) => setNewDescription(e.target.value)} 
      /> <br></br> <br></br>
      <button onClick={addTodo}>Add Todo</button>  
      
          
      {filteredTodo.map((todo, index) => (
        <div key={index}>
          <h2>{todo.title}</h2>
          <p>{todo.description}</p>
        </div>
      ))}

 
    </div>
  );
}

export default App
