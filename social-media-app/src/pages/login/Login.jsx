import { useRef, useContext } from "react";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";
import CircularProgress from '@mui/material/CircularProgress';



export default function Login() {
    const email = useRef();
    const password = useRef();
    const { user, isFetching, error, dispatch } = useContext(AuthContext);

    const handleClick = (e) => {
        e.preventDefault();
        loginCall({ email: email.current.value, password: password.current.value }, dispatch);
    }
    console.log(isFetching)
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">TugceSocial</h3>
                    <span className="loginDesc">Connect with friends and the world around you on TugceSocial.</span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input placeholder="E-mail" type="email" className="loginInput" ref={email} required />
                        <input placeholder="Password" type="password" className="loginInput" ref={password} minLength="6" required />
                        <button className="loginButton" type="submit" disabled={isFetching}>{isFetching ? <CircularProgress color="inherit" size="20px" /> : "Log In"}</button>
                        <span className="loginForgot">Forgot password?</span>
                        <hr className="loginHr" />
                        <button className="loginRegisterButton">
                            {isFetching ? <CircularProgress color="inherit" size="20px" /> : "Create a New Account"}
                        </button>
                    </form>
                    <span className="loginRightDesc"><b>Create a Page</b> for a celebrity, brand or business.</span>
                </div>
            </div>
        </div>
    )
}
