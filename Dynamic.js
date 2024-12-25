//  import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
//  function Dynamic()
//  {
//     return(
//         <div>
 
//         </div>
//     )
//  }
//  export default Dynamic



import logo from './logo.svg';
import './App.css'
import { useEffect, useState } from 'react';
// import React from 'react';
// import { Link, BrowserRouter as Router,Routes,Route} from 'react-router-dom';
// import User from './User';
// import Dynamic from "./Dynamic"
function App()
{
  const [data,setdata]=useState([])
  // const arr=[
  //   {name:'WAJID',email:'@wajidgmail',mob:'343'},
  //   {name:'SAJID',email:'@sajidgmail',mob:'534'},
  //   {name:'ABID',email:'@abidgmail',mob:'595'},
  //   {name:'FARHAN',email:'@farhan',mob:'9595'}
  // ]
  // fetch('http://localhost:400/toda').then((result)=>{
  //   result.json().then((red)=>{
  //     console.log(' API GET DATA', red)
  //   })

  // })
  useEffect(()=>
  {
   fetch('https://simple-books-api.glitch.me/').then((resutl)=>{
    resutl.json().then((res)=>{
      console.warn(res)
    })
   })
  },[])
//  console.log(res)
  return(
    <div className=' WAJID'>
      <h1>  GET API CALL </h1>
    {/* <table border={'1'}>
      <tbody>
        <tr>
          <td>ID</td>
          <td>NAME</td>
          <td>EMAIL</td>
          <td>MOBILE</td>
        </tr>
        {
          arr.map((data,kv)=>
            <tr key={kv+1}>
            <td>{kv+1}</td>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>{data.mob}</td>
          </tr>
          
          )
         
        }
      </tbody>
      </table>     */}
    </div>
  )
}

export default App;
