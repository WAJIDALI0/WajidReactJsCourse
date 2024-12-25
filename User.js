import React from "react"
import { BrowserRouter } from "react-router-dom"
import { useParams } from "react-router-dom"

// import {withRouter} from 'react-router-dom'
function User()
{
    const prm=useParams();
    const {id,name,email,}=prm

    console.warn('id :',id)
    return(
        <div className="us">
            <h1>USER COMPONENT ID: {id}</h1>
            <h2>USER NAME: {name}</h2>
            <h2> USER EMAIL :{email}</h2>
        </div>
    )
}
export default User