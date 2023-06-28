import { useRef, useContext } from "react";
import { NavLink } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';

import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import "./login.scss";

export default function Login() {
    const email = useRef();
    const password = useRef();
    const { isFetching, dispatch } = useContext(AuthContext);

    const handleClick = (e) => {
        e.preventDefault();
        loginCall({ email: email.current.value, password: password.current.value }, dispatch);
    };

    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">TugceSocial</h3>
                    <span className="loginDesc">Connect with friends and the world around you on TugceSocial.</span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input
                            type="email"
                            className="loginInput"
                            placeholder="E-mail"
                            ref={email}
                            required
                        />
                        <input
                            type="password"
                            className="loginInput"
                            placeholder="Password"
                            ref={password}
                            minLength="6"
                            required
                        />
                        <button
                            type="submit"
                            className="loginButton"
                            disabled={isFetching}
                        >
                            {
                                isFetching
                                    ? <CircularProgress color="inherit" size="20px" />
                                    : "Log In"
                            }
                        </button>
                        <span className="loginForgot">Forgot password?</span>
                        <hr className="loginHr" />
                        <NavLink to="/register" className="loginRegisterButton">
                            {
                                isFetching
                                    ? <CircularProgress color="inherit" size="20px" />
                                    : "Create a New Account"
                            }
                        </NavLink>
                    </form>
                    <span className="loginRightDesc"><b>Create a Page</b> for a celebrity, brand or business.</span>
                </div>
            </div>
        </div>
    )
}
