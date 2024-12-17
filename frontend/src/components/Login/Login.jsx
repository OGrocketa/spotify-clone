import React from "react";
import './Login.css'
import { GrClose } from "react-icons/gr";


const Login = ({isVisible, onClose}) => {
    if (!isVisible) return null;

    const handleSubmit = () => {

    }

    return(
      <div className="overlay">
            <div className="popup-login-window">

                <button className="close-button" onClick={onClose}>
                  <GrClose size={24} />
                </button>

                <img src="/images/logo.png" alt="" />
                <p>Login into Spotify</p>
               
                <hr />
                <div className="login-form">
                  <form onSubmit={handleSubmit}>
                    <p>Email or username</p>
                    <input type="text" placeholder="Enter email or username" />
                    <p>Password</p>
                    <input type="text" placeholder="Enter password" />
                  </form>
                  <button type="submit" className="submit-button">
                    Login
                  </button>
                </div>
                

            </div>
       </div>
    );
}

export default Login