import logo from './logo.svg';
import './App.css'
import React,{ useRef } from 'react';// import React,{createref} from react; for class
function App()
{
   const inputref=useRef(null)// this.inputref=createraf(); for class
   function getvalue()
   {
    console.log('function call')
    console.warn(inputref.current.value)
   // inputref.current.value='100'
    // inputref.current.focus()
    inputref.current.style.color='red'
    inputref.current.style.backgroundColor='yellow'
    inputref.current.style.display='none'
   }
    return(
      <div className='all'>
        <h1> UseRef in React JS</h1>
        <input type='text' ref={inputref}/>
        {/* ref={this.inputref} && */}
        <button onClick={()=>getvalue()}>Check Ref</button>
      </div>
    )
  }


export default App;