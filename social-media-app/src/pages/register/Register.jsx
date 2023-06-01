import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router";
import "./register.css";

export default function Register() {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const navigate = useNavigate();

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
                await axios.post("/auth/register", user);
                navigate('/login');
            } catch (err) {
                console.log(err)
            }
        }
    }


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
                        <button className="loginRegisterButton">Log into Account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
