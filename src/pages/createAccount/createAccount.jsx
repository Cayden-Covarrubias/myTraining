import "./createAccount.css"

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
                    Login </button>
        </div>
    )
}