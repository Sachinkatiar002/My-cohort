import { useContext } from 'react'
import { CountContext } from './Context';
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from './store/atoms/count';

function App() {
  
  return (
    <>
      <RecoilRoot>
         <Count />
      </RecoilRoot>
     
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
  
  const count = useRecoilValue(countAtom);
return <div>
  {count} 
  <EvenCountRenderer />
</div>
}


function EvenCountRenderer () {

  const isEven = useRecoilValue(evenSelector);

  return <div>
    {isEven  ? "It is even" : null}
  </div>
}


function Buttons () {

  // const [count , setCount] = useRecoilState(countAtom);
  const setCount = useSetRecoilState(countAtom);

  //  setCount(function(c) {
 //   retun c + 1
//    })

  return <div>
    
  <button onClick={() => {setCount(c => c + 1)}} >increase</button>
  <button onClick={() => {setCount(c => c - 1)}} >decrease</button>
 </div>
} 

export default App
