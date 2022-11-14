import "./login.css"

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
                    Create An Account </button>
        </div>
    )
}