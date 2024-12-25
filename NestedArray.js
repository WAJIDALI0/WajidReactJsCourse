import logo from './logo.svg';
import './App.css';
// how to we can import bootstrap
import {Table} from 'react-bootstrap';


function App() {
  // create nested array list 
  const student=[
    {  name:'WAJID', email:'@WAJID ALI', phone:344 ,address:[
      {hn:'44',city:'Okara',country:'PAKISTAN'},
      {hn:'45',city:'Peshawar',country:'PAKISTAN'},
      {hn:'46',city:'Multan',country:'PAKISTAN'},
      {hn:'47',city:'Sahiwal',country:'PAKISTAN'},
    ] },

    {  name:'FARHAN', email:'@FARHAN ALI', phone:318 ,address:[
      {hn:'44',city:'Okara',country:'PAKISTAN'},
      {hn:'45',city:'Peshawar',country:'PAKISTAN'},
      {hn:'46',city:'Multan',country:'PAKISTAN'},
      {hn:'47',city:'Sahiwal',country:'PAKISTAN'},
    ] },

    {  name:'ABID', email:'@ABID ALI', phone:341, address:[
      {hn:'44',city:'Okara',country:'PAKISTAN'},
      {hn:'45',city:'Peshawar',country:'PAKISTAN'},
      {hn:'46',city:'Multan',country:'PAKISTAN'},
      {hn:'47',city:'Sahiwal',country:'PAKISTAN'},
    ] },

    {  name:'SAJID', email:'@SAJID ALI', phone:342 ,address:[
      {hn:'44',city:'Okara',country:'PAKISTAN'},
      {hn:'45',city:'Peshawar',country:'PAKISTAN'},
      {hn:'46',city:'Multan',country:'PAKISTAN'},
      {hn:'47',city:'Sahiwal',country:'PAKISTAN'},
    ] },
  ]
  return (
    <div className="App">
      <h1>Nested Array List And Nested Map function</h1>
      <Table variant='dark' striped bordered hover>
        <tbody>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Email</td>
            <td>phone</td>
            <td>Address</td>
          </tr>
                 
          {
          student.map((parameter,kval)=>
          <tr key={kval}>
            <td>{kval+1}</td>
            <td>{parameter.name}</td>
            <td>{parameter.email}</td>
            <td>{parameter.phone}</td>
            <td>
              <Table variant='dark' striped bordered hover>
                <tbody>
              {
              // /* { NESTED MAP FUNCTION */}
                parameter.address.map((pa)=>
                  <tr>
                    <td>{pa.hn}</td>
                    <td>{pa.city}</td>
                    <td>{pa.country}</td>
                  </tr>
                )
              }
              </tbody>
              </Table>
            </td>
            
          </tr>
          )
}
</tbody>
      </Table>
    </div> 
  );
}
export default App;
