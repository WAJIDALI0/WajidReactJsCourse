import logo from './logo.svg';
import './App.css'
import React from 'react';
import { Link, BrowserRouter as Router,Routes,Route} from 'react-router-dom';
function App()
{
  return(
    <div className='404'>
     <h1> 404 - PAGE NOT FOUND</h1>
     <Link to='/home'>Home</Link>
     <br/><br/>
     <Link to='/about'>ABOUT</Link>
     <br/><br/>
     <Link to='login'> (LOGIN.. .: ...!) this is not avilable not click</Link>
     
     <Routes>
<Route path='/home' element={<Home />}></Route>
<Route path='/about' element={< About/>}></Route>
<Route path='*' element={<Pagenotfound/>}></Route>
     </Routes>
    </div>
  )
}
 function Home()
 {
  return(
    <div>
      <h1> HOME PAGE</h1>
      <p> This is a HOME PAGE</p>
    </div>
  )
 }
 function About()
 {
  return(
    <div>
      <h1>ABOUT PAGE</h1>
      <p> This is a About PAGE</p>
    </div>
  )
 }
 function Pagenotfound()
 {
  return(
    <div>
      <h1> 404 error</h1>
      <p>  PAGE NOT FOUND </p>
    </div>
  )
 }
export default App;
