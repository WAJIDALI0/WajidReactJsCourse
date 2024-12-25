function Datapasstochild(p)
{
    const data='MY NAME IS WAJID ALI '
    const obj={
        name:'WAJID KHOKHAR',
        Email:'@WAJID44'
    }
    return(
        <>
       {/* data from parent component  */}
        {/* <h1> USER NAME :{p.data} </h1> */}
        {/* here data send from child to parent component */}
        <button onClick={()=>p.send(obj)}> CLICK ON ME</button>
        </>
    )
}
export default Datapasstochild;
// import logo from './logo.svg';
// import './App.css'
// import Datapasstochild from './Datapasstochild';
// function App()
// { 
//   // const name='WAJID ALI'
//   function parent(datachild)
//   {
//     // console.log('Parent Function Called');
//     // /alert('parent alert function')
//     alert(datachild.Email)
//   }
//   return(
//     <>
//     <h1>
//       Sent Data Child TO Parent Component // Lifting  State Up
//       {/* < Datapasstochild data={name}/> */}
//     <Datapasstochild send={parent}/>
//     </h1>
//     </>

//   )
// }
// export default App;