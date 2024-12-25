import React from "react";
import { Link } from "react-router-dom";
 function Nav()
 {
    return(
        <div className="navbar">
            <Link to='/HOME'> Home page</Link>
  <br/><br/>
  <Link to='/aBOUT'>Website page</Link>
  <a href="/home2"> HOME =2</a>
        </div>
    )

 }
 export default Nav
