import logo from './logo.svg';
import './App.css'
import React,{ useMemo, useState } from 'react';


function App()
{
  const [count,setcount]=useState(0)
  const[data,setdata]=useState(10)
  // why we used memo 
  // because when we used memo for only selected condition
  // if we not used memo then 
  // function will be call with every update value
   const multicount=useMemo(function multivalue()
  {
    console.log('multicount value')
    return count*3
  },[count])
   
  return(
    <div className='all'>
      <h1> UseMemo Hook in React js</h1>
      <h1> Count  !{count}</h1>
      <h1> Data   ! {data}</h1>
      <h1>multicount!{multicount}</h1>
      <button onClick={()=> {setcount(count+1)}}>Update Count</button>
      <button onClick={()=> {setdata(data*10)}}>Update Data</button>
    </div>
  )
}

export default App;