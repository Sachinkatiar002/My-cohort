import React from 'react';
import { Suspense } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
// import { Dashboard } from './components/Dashboard'
// import Landing from './components/Landing';
// lazy loading
const Landing = React.lazy(() => import ('./components/Landing') ) ;
const Dashboard = React.lazy(() => import ("./components/Dashboard"));


function App() {
  //suspense API
  return (
    <div> 
      <BrowserRouter>
        <AppBar/>
        <Routes>
          <Route path='/dashboard' element={
           <Suspense fallback={"loading..."} >  <Dashboard/> </Suspense>
            } />
          <Route path='/' element={
           <Suspense fallback={"loading..."} >  <Landing/> </Suspense> 
            } />
        </Routes>
     </BrowserRouter>
    </div>
  
  )
}

function AppBar () { 
  const navigate = useNavigate();

  return <div>
    <div>

      <button onClick={() => {
        navigate("/");
      }} >Landing</button> 

      <button onClick={() => {
          navigate("/dashboard");
      }}>Dashboard</button>

    </div>
  </div>
}

export default App
