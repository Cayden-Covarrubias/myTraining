import "./login.css"
import { Link } from "react-router-dom"

export default function Login(){
    return(
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm">
                <label>Username</label>
                <input className="loginInput" type="text" placeholder="username" ></input>
                
                <label>Password</label>
                <input className="loginInput" type="password" placeholder="password"></input>
                <button className="loginButton" type="submit">Login</button>

            </form>
            <button className="createAccountLoginButton">
            <Link className="link" to="/createAccount">
                        Create an Account 
                    </Link></button>
        </div>
    )
}