import { useRef, useContext } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

import { AuthContext } from "../../context/AuthContext";
import { LoginSuccess } from "../../context/AuthActions"
import "./register.scss";

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
                        <input
                            className="loginInput"
                            placeholder="Username"
                            ref={username}
                            required
                        />
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
                        <input
                            type="password"
                            className="loginInput"
                            placeholder="Password Again"
                            ref={passwordAgain}
                            required
                        />
                        <button type="submit" className="loginButton">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
