import logo from './logo.svg';
import './App.css'
import React,{ useRef } from 'react';
function App()
{
  const inputref=useRef(null)
  const inputref1=useRef(null)
   function submitfun(e)
   {
    e.preventDefault()
    console.log('inputref value here',inputref.current.value)
     console.log('inputref1 value here' ,inputref1.current.value) 
    let va=document.getElementById('name').value
    console.log( ' value get by id :',va) 

    }
  return(
    <>
    <h1>  UNCONtrolled component 
      it is handle with ID AND Ref
    </h1>
  <form onSubmit={submitfun}>
    <input type='text' ref={inputref}/> <br/><br/>
  <input type='text' ref={inputref1} />
  <br/><br/>
<input type='text ' id='name'/>
<br/><br/>
   <button>Submit</button>
   </form>
    </>
  )
}


export default App;