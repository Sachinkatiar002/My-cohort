import { useEffect, useState , useMemo} from 'react'



function App() {

 const [counter , setCounter] = useState(0)
 const [inputValue, setInputValue] = useState(1);

 let count = useMemo(() => {
    let finalcount = 0;
    for(let i = 1; i <= inputValue; i++) {
      finalcount = finalcount + i;
    }
    return finalcount;
 }, [inputValue])

 
 
 
  return (
    <>
      <input onChange={(e) => {
        setInputValue(e.target.value);
      }} type="number" placeholder='Enter Number' />  

      <br></br>
      Sum from 1 to {inputValue} is {count}
      <br></br>
      <button onClick={() => {
        setCounter (counter + 1);
      }} >counter ({counter}) </button>
      
    </>
  )
}





export default App
