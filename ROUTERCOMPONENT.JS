import logo from './logo.svg';
import './App.css'
import React from 'react';
 import {BrowserRouter as Router,Link ,Route} from 'react-router-dom'
function App()
{
return(
  <div>
  {/* routing means to convert the hmy different different functionalities k liye diffent pages chaye hoty hn
  components ko pages mein convert krna or on ko ik specific URL k oper  open krna */}

  {/* <h1>ROUTING  SETUP</h1> */}
  <Router>
  <Link to='/hOME'> Home page</Link>
  <br/><br/>
  <Link to='/aBOUT'>Website page</Link>
  <Route path='/hOME'> <Home /> </Route>
  <Route path='/aBOUT'><About /></Route>
  {/* <Route path='hOME'> </Route> */}
  <Home /><Home />
  </Router>
  
  </div>
)
}
 function Home()
 {
  return(
    <div>
    <h1>ROUATING COMPONENT</h1>
    <p> home page </p>
    </div>
  )

 }
 function About()
 {
  return(
    <div>
    <h1> ROUTER 2 COMPONENT</h1>
    <p> website page</p>
    </div>
  )
 }
 
export default App;
