import "./login.css";

export default function Login() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">TugceSocial</h3>
                    <span className="loginDesc">Connect with friends and the world around you on TugceSocial.</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="E-mail" type="email" className="loginInput" />
                        <input placeholder="Password" type="password" className="loginInput" />
                        <button className="loginButton">Log In</button>
                        <span className="loginForgot">Forgot password?</span>
                        <hr className="loginHr" />
                        <button className="loginRegisterButton">Create a New Account</button>
                    </div>
                    <span className="loginRightDesc"><b>Create a Page</b> for a celebrity, brand or business.</span>
                </div>
            </div>
        </div>
    )
}
