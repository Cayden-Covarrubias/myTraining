import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css"

export default function NavBar(){
    return( 
    <div className = "topNav">
        <div className="topLeft"></div>
        <div className="topCenter">
        <ul className="topNavList">
            <li className="navListItem Home">
                <Link className="link" to="/">
                    Home
                </Link>
                
            </li>
            <li className="navListItem About">
                About
            </li>
            <li className="navListItem ContactUs">
                Contact Us
            </li>
            <li className="navListItem Write">
            <Link className="link" to="/write">
                    Write
                </Link>
            
            </li>
            <li className="navListItem LogOut">
                Log Out
            </li>
        </ul>
        </div>
        <div className="topRight">
            <Link className="link" to="/settings">
              <img className="topPfpImg" src="/images/default_pfp.png"alt="/images/icons/default_pfp.png"></img>
            </Link>
        
        <ul className="topList">
            <li className="navListItem Logout">
                Login
            </li>
            <li className="NavListItem Write">
                Create Account
            </li>
        </ul>

        </div>
        
    </div>)
    

}