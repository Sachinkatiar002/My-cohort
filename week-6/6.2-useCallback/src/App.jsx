import { useState, memo, useCallback } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const inputFunction = useCallback(() => {
    console.log("hi there");
    
  }, [])

  return (
    <>
      <ButtonComponent inputFunction= {inputFunction} />
      <button onClick={() => {
        setCount(count + 1);
      }}  >Click me {count} </button>
    </>
  )
}

const ButtonComponent = memo(({inputFunction}) => {
  console.log("child render");
  return <div>
    <button> Button clicked </button>
  </div>
})

export default App
