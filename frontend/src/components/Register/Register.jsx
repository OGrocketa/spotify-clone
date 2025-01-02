import React from "react";
import "./Register.css";
import {useState} from "react";
import { GrClose } from "react-icons/gr";
import { FaRegEye,FaRegEyeSlash } from "react-icons/fa6";
import {registerUser} from "../../api/login";

const Register = ({isVisible, onClose, setRegisterVisible,setLoginVisible}) =>{
    if (!isVisible) return null;

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [loginData, setLoginData] = useState({
      username: '',
      password: '',
      confirmPassword: '',
      email: '',
    });

    const [error, setError] = useState(null);

    const checkPasswordsMatching = (password, confirmPassword) =>{
        return password == confirmPassword;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!checkPasswordsMatching(loginData.confirmPassword, loginData.password)){
            setError('Passwords do not match');
        }
        else{
            
            setError(null);

            const response = await registerUser(loginData);
            if (response) {
                alert(response.message); 
                setRegisterVisible(false);
                setLoginVisible(true);

            } else {
                setError("Failed to register. Something went wrong!.");
            }
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
    return (
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
                    <p>Username</p>
                    <input name="username" type="text" placeholder="Enter email or username" value={loginData.username} onChange={handleChange}/>
                    <p>Password</p>
                    <input name="password" type={passwordVisible? "text" : "password"} placeholder="Enter password" value={loginData.password} onChange={handleChange}/>
                    <span className="eye-icon" onClick={togglePasswordVisibility}>
                      {passwordVisible ? <FaRegEye /> : <FaRegEyeSlash />}
                    </span>
                    <input name="confirmPassword" type="password" placeholder="Enter password again" value={loginData.confirmPassword} onChange={handleChange}/>
                    <p>Email</p>
                    <input name="email" type="email" placeholder="Enter email" value={loginData.email} onChange={handleChange}/>
                    <button type="submit" className="submit-button">
                        Register
                    </button>
                  </form>
                  
                </div>
                {error && <p>{error}</p>}

            </div>
       </div>
    );
};

export default Register;
