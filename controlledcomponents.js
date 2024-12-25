import logo from './logo.svg';
import './App.css'
import React,{ useState } from 'react';
function App()
{
  let [val,setval]=useState('')
  let [item,setitem]=useState('')
  return(
    <>
    <h1>  CONtrolled component</h1>
    {/* if we used value={2222} we cannot change and remove  */}
    <input type='text' value={val} onChange={(e)=>setval(e.target.value)}/> 
    {/* in this way we can controll component using state */}
    <button onClick={(e)=>setval(e.target.value)}> onclick</button>
    { 
    val?
    <h1>{val}</h1>
    :null
     }
  <input type='text' value={item} onChange={(e)=>setitem(e.target.value)}/>
    </>
  )
}


export default App;