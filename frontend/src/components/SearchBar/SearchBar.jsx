import React, { useState, useEffect } from "react";
import './SearchBar.css'
import { GoHome,GoHomeFill  } from "react-icons/go";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Login from "../Login/Login";
import Register from "../Register/Register";
import {jwtDecode} from "jwt-decode";
import useAuth from "../../hooks/useAuth";

const SearchBar = () =>{

    const path = useLocation();
    const isOnMainPage = path.pathname == '/';

    const [loginVisible, setLoginVisible] = useState(false);
    const displayLogin = () => setLoginVisible(true);
    const hideLogin = () => setLoginVisible(false);

    const [registerVisible, setRegisterVisible] = useState(false);
    const displayRegister = () => setRegisterVisible(true);
    const hideRegister = () => setRegisterVisible(false);

    const { auth } = useAuth();
    const [data, setData] = useState(null);

    useEffect(() => {
        if (auth) {
            try {
                const decoded = jwtDecode(auth);
                setData(decoded);
                console.log(data);
                
            } catch (e) {
                console.error("Failed to decode token", e);
            }
        } else {
            setData(null);
        }
    }, [auth]);

    return(
        <div className="search-bar-container">
            
            <div className="logo-container">
                <Link to={`/`}>
                    <img src="/images/logo.png" alt="" />   
                </Link>
            </div>
           
            
            <div className="center-of-sbc">
                <Link to={`/`}>
                    <button className="go-home-button" title="Go to Home">
                        {isOnMainPage? <GoHomeFill size={30}/> : <GoHome size={30}/> }
                    </button>
                </Link>

            <input type="text" className="search-input" placeholder="Search for songs, artists, albums..." />
            </div>
            
            <button className="register-button" onClick={displayRegister}>
                Register
            </button>
            <Register isVisible={registerVisible} onClose={hideRegister} setRegisterVisible={setRegisterVisible} setLoginVisible={setLoginVisible}/>
            
                <button className="login-button" onClick={displayLogin}>
                    Login
                </button>
            
            <Login isVisible={loginVisible} onClose={hideLogin} setLoginVisible={setLoginVisible}/>
        </div>
    );
}

export default SearchBar