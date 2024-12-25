import logo from './logo.svg';
import './App.css';
// how to we can import bootstrap
import {Table} from 'react-bootstrap';


function App() {
  // Create array 
 
  // const arr=['WAJID ' , 'SAJID','FARHAN ','ABID ']
 
  // using for loop for display array 

  // 
  
  //using map function  for display array 

  // arr.map((passanyparameter)=>{
  //   console.log(passanyparameter)

  // })
  const student=[
    {  name:'WAJID', email:'@WAJID ALI', phone:344  },
    {  name:'FARHAN', email:'@FARHAN ALI', phone:344  },
    {  name:'ABID', email:'@ABID ALI', phone:344  },
    {  name:'SAJID', email:'@SAJID ALI', phone:344  },
  ]
  return (
    <div className="App">
      <h1> HANDLE ARRAY WITH LIST !</h1>
      <h1>  .........  </h1>
      <Table border='4'striped bordered hover  variant='dark'>
        <tbody>
      <tr>
          
          <td>NAME</td>
          <td>EMAIL</td>
          <td>PHONE</td>
          
        </tr>
      {
       
        student.map((parameter,childkey)=>
          // <tr key={childkey}>
          // <td>{parameter.name}</td>
          // <td>{parameter.email}</td>
          // <td>{parameter.phone}</td>
          // </tr>
          //.. this is used  for condition 
    
          parameter.phone=== 344?
          
           <tr key={childkey}>
           <td>{parameter.name}</td>
           <td>{parameter.email}</td>
           <td>{parameter.phone}</td>
           </tr>
           :null
        )
      }
      </tbody>
      </Table>
      {/* {
        arr.map((parameter)=>
          <h1> my brother names :{parameter}</h1>
        )
      } */}
      {/* we cannot used for loop in return function and we can used only map function in return function */}
      {/* {
      for(let j=0; j<arr.length; j++)
      {
      <h1>{arr[j]}</h1>
      }
    }     */}
    </div> 
  );
}

export default App;
