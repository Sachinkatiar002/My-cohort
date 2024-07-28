

// real wrapper
function App() {
  
  return <div>
    {/* <CrardWrapper innerComponents={<TextComponent />} />
    <CrardWrapper innerComponents={<TextComponent2 />} /> */}
    <CrardWrapper>
      <div>
         hi there
      </div>    
    </CrardWrapper>
    <CrardWrapper>
      <div>
         hello there
      </div>    
    </CrardWrapper>
  </div>  
 }

// function TextComponent () {
//   return <div>
//     hi there 
//   </div>
// }
// function TextComponent2 () {
//   return <div>
//     hi there 2222
//   </div>
// }

// function CrardWrapper ({innerComponents}) {
//   // create a div which has a border(hint: the way to create border is border:"2px solid black")
//   // and inside the div, render the porp
//   return <div style={{border:"2px solid black", padding:20}}>{innerComponents} 
//   </div>
  
// }

function CrardWrapper ({children}) {
  // create a div which has a border(hint: the way to create border is border:"2px solid black")
  // and inside the div, render the porp
  return <div style={{border:"2px solid black", padding:20}}>{children} 
  </div>
  
}
export default App
