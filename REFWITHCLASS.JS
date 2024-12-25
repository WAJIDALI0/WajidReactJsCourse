import logo from './logo.svg';
import './App.css'
import React,{ Component, createRef } from 'react';
// Ref always used in emergency other wise not used
// it automatically add something in dom as color ,hide and show properties
// React always tell us use Ref for emergency not every time
class App extends Component
{
  constructor()
  {
    super();
    this.inputref=createRef();
  }
  componentDidMount()
  {
    // console.warn(this.inputref.current.value='1000')
    //console.log(' it ready when dom is ready it call after dom')
  }
  getvalue()
  {
   console.warn(this.inputref.current.value)
    this.inputref.current.style.color='red';
    this.inputref.current.style.backgroundColor='navy'
  }
  render()
  {
    return(
      <div className='all'>
        <h1> Ref in React JS</h1>
        <input type='text' ref={this.inputref}/>
        <button onClick={()=>this.getvalue()}>Check Ref</button>
      </div>
    )
  }
}

export default App;