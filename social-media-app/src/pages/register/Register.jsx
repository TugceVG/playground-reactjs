import { useRef, useContext } from "react";
import { useNavigate } from "react-router";
import { NavLink } from 'react-router-dom';
import axios from "axios";

import { AuthContext } from "../../context/AuthContext";
import { LoginSuccess } from "../../context/AuthActions"
import "./register.css";

export default function Register() {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const navigate = useNavigate();
    const { dispatch } = useContext(AuthContext);

    const handleClick = async (e) => {
        e.preventDefault();
        if (passwordAgain.current.value !== password.current.value) {
            passwordAgain.current.setCustomValidity("Password don't match.");
        } else {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            }

            try {
                const registeredUser = await axios.post("/auth/register", user);
                dispatch(LoginSuccess(registeredUser.data));
                navigate('/');
            } catch (err) {
                console.log(err)
            }
        }
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
                        <input ref={username} required placeholder="Username" className="loginInput" />
                        <input ref={email} required placeholder="E-mail" type="email" className="loginInput" />
                        <input ref={password} required placeholder="Password" type="password" className="loginInput" minLength="6" />
                        <input ref={passwordAgain} required placeholder="Password Again" type="password" className="loginInput" />
                        <button type="submit" className="loginButton">Sign Up</button>
                        <NavLink to="/login" className="loginRegisterButton">
                            Log into Account
                        </NavLink>
                    </form>
                </div>
            </div>
        </div>
    )
}
