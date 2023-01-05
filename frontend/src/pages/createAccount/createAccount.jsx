import "./createAccount.css"
import { Link } from "react-router-dom"
import React, { Component }  from 'react';
export default function CreateAccount(){
    return(
        <div className="createAccount">
            <span className="createaccountTitle">Register</span>
            <form className="createAccountForm">
                <label>Username</label>
                <input className="createAccountInput" type="text" placeholder="username" ></input>
                <label>Email</label>
                <input className="createAccountInput" type="text" placeholder="email" ></input>
                <label>Password</label>
                <input className="createAccountInput" type="password" placeholder="password"></input>
                <button className="createAccountButton" type="submit">Create Account</button>

            </form>
            <button className="createAccountLoginButton">
                    <Link className="link" to="/login">
                        Login 
                    </Link></button>
        </div>
    )
}