import logo from './logo.svg';
import './App.css'
import React,{ useState } from 'react';
function App()
{
  return(
    <div className=''>
      <h1> SIMPLE HOC (High Order Component)</h1>
      {/* hoc always take input as component and alway give us output  component */}
      {/* < Counter/>  */}
    
    {/* < Counter/> */}
      <HOCred cmd={Counter}/>
      < HOCgreen cmd={Counter}/>
      < HOCblue cmd={Counter}/>
    </div>
  )
  
}
function HOCred(p)
{
  return(
    <>
      <h1> HOC RED Component</h1>
      <h2 style={{backgroundColor:'red', width:122}}>RED<p.cmd/></h2>
      </>
  )
}
function HOCgreen(p)
{
  return(
    <>
      <h1> HOC Green Component</h1>
      <h2 style={{backgroundColor:'green', width:122}}>GREEN<p.cmd/></h2>
      </>
  )
}
 function HOCblue(parameter)
 {
  return(
    <div>
      <h1>HOC Blue Counter</h1>
      <h2 style={{backgroundColor:'blue',width:122, color:'peru'}}> BLUE<parameter.cmd/></h2>
    </div>
  )
 }

 function Counter()
 
 {
  const [count,setcount]=useState(0);
  return(
    <div className='counter'>
      <h1>{count}</h1>
      <button onClick={()=>setcount(count+1)}> COUNT</button>
    </div>
  )
 }

export default App;