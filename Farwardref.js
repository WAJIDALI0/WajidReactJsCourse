
import React,{forwardRef} from "react"
function Farwardref(p,pass)
{
    return(
        <div className="all">
         <h1>
            child component 
            < input type="text" anyparameter={pass}/>
         </h1>
        </div>
    )
}
 export default forwardRef(Farwardref)
// //  import logo from './logo.svg';
// import './App.css'
// import React,{ useRef } from 'react';// import React,{createref} from react; for class
// import Farwardref from './Farwardref';
// function App()
// {
//    const inputref=useRef(null)// this.inputref=createraf(); for class
//    function getvalue()
//    {
//     console.log('function call')
//     inputref.current.value='1110'
//     inputref.current.style.color='red'
//     inputref.current.style.backgroundColor='yellow'
//     // inputref.current.style.display='none'
//     inputref.current.focus(); 
//    }
//     return(
//       <div className='all'>
//         <h1> Farward  UseRef in React JS</h1>
//         <input type='text' ref={inputref}/>
//         {/* ref={this.inputref} && */}
//         <Farwardref ref={inputref} />
//         <button onClick={()=>getvalue()}>UPdate</button>
//       </div>
//     )
//   }


// export default App;