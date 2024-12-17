import React, { useState } from "react";
import './Login.css'
import { GrClose } from "react-icons/gr";
import { FaRegEye,FaRegEyeSlash } from "react-icons/fa6";
import { sendUserLoginAndPassword } from "../../api/login";



const Login = ({isVisible, onClose}) => {
    if (!isVisible) return null;

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [loginData, setLoginData] = useState({
      username: '',
      password: ''
    });

    const [error, setError] = useState(null);


    const handleSubmit = async (e) => {
      e.preventDefault();
      setError(null);

      const repsonse = await sendUserLoginAndPassword(loginData);
      if (repsonse) {
        alert("Login successful! Access Token: " + repsonse.access_token);
      } else {
        setError("Failed to login. Please check your credentials.");
      }
    };

    const handleChange = e =>{
      setLoginData({
        ...loginData,
        [e.target.name]: e.target.value,
      });
    };

    const togglePasswordVisibility = ()=>{
      setPasswordVisible(!passwordVisible)
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
                    <input name="username" type="text" placeholder="Enter email or username" value={loginData.username} onChange={handleChange}/>
                    <p>Password</p>
                    <input name="password" type={passwordVisible? "text" : "password"} placeholder="Enter password" value={loginData.password} onChange={handleChange}/>
                    <span className="eye-icon" onClick={togglePasswordVisibility}>
                      {passwordVisible ? <FaRegEye /> : <FaRegEyeSlash />}
                    </span>
                    <button type="submit" className="submit-button">
                    Login
                    </button>
                  </form>
                  
                </div>
                {error && <p>{error}</p>}

            </div>
       </div>
    );
}

export default Login