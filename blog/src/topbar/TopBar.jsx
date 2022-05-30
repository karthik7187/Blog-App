import "./topbar.css"
import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Context } from "../context/Context";






export default function Topbar() {
  
  
  return (
    <div class="top">
        
        <div className="topleft">
            
            <i className="topIcon fab fa-facebook-square"></i>
            <i className="topIcon fab fa-twitter-square"></i>
            <i className="topIcon fab fa-pinterest-square"></i>
            <i className="topIcon fab fa-instagram-square"></i>
            
             </div>
        <div className="topcenter">
            <ul className="toplist">

                <li className="topListItem"><Link className="link" to="/"> HOME</Link></li>
                <li className="topListItem"><Link className="link" to="/sample" >ABOUT</Link></li>
                <li className="topListItem"><Link className="link" to="/settings"> SETTINGS</Link></li>
                <li className="topListItem"><Link className="link" to="/write" >WRITE</Link></li>

                <li className="topListItem"><Link className="link" to="/login">LOGOUT</Link></li>
            </ul>
                
             </div>

       <div className="topright">  


        <img 

        className="topImg"

        src="https://neilpatel.com/wp-content/uploads/2017/02/blogging.jpg"
        />
         
        {/* <i className="topsearch fa-solid fa-magnifying-glass"></i> */}
        
        <li className="topListItem"><Link className="link" to="/login">LOGIN</Link></li>
         <li className="topListItem"><Link className="link" to="/register" >REGISTER</Link></li>
        </div>

        
        </div>
  )
}
