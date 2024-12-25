 import React,{ PureComponent } from "react";
 class Purec extends PureComponent
 {
    render()
    {
        console.warn('childcomponent')
        return(
            <>
            <h1>  Child pure component { this.props.count}</h1>
            </>
        )
    }
 }
 export default Purec;
//   if we used import React,{purecomponent } from ' react' 
// then render fuction call when any value will be update 
// otherwise no render function call if no value update then no call
// 