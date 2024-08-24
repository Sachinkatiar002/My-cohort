import { useContext, useState } from 'react'
import { CountContext } from './context';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
     <CountContext.Provider value = {{count , setCount}}>
        <Count  />
     </CountContext.Provider>
    </>
  )
}

function Count () {
  return <div>
     <CountRenderer />
     <Buttons  />
  </div>
}

function CountRenderer () {
  const {count} = useContext(CountContext);
return <div>
  {count}
</div>
}

function Buttons () {
  const {count, setCount} = useContext(CountContext);
  return <div>
  <button onClick={() => {setCount(count + 1)}} > increase</button>
  <button onClick={() => {setCount(count - 1)}} > decrease</button>
 </div>
}

export default App
