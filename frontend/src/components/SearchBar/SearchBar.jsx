import React, { useState, useEffect } from "react";
import './SearchBar.css'
import { GoHome,GoHomeFill  } from "react-icons/go";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Login from "../Login/Login";
import Register from "../Register/Register";
import {jwtDecode} from "jwt-decode";
import useAuth from "../../hooks/useAuth";
import { axiosPrivate } from "../../api/axios";
import useRefreshToken from "../../hooks/useRefreshToken";
import { useNavigate } from "react-router-dom";


const SearchBar = () =>{

    const refresh = useRefreshToken();
    const navigate = useNavigate();
    const path = useLocation();
    const isOnMainPage = path.pathname == '/';

    const [loginVisible, setLoginVisible] = useState(false);
    const displayLogin = () => setLoginVisible(true);
    const hideLogin = () => setLoginVisible(false);

    const [registerVisible, setRegisterVisible] = useState(false);
    const displayRegister = () => setRegisterVisible(true);
    const hideRegister = () => setRegisterVisible(false);

    const { auth, setAuth } = useAuth();
    const [data, setData] = useState(null);

    useEffect(() => {
        if (auth?.access_token) {
            try {
                const decoded = jwtDecode(auth.access_token);
                setData(decoded);
                const currentTime = Date.now() / 1000;
                setIsTokenExpired(decoded.exp < currentTime);
                
            } catch (e) {
                console.error("Failed to decode token", e);
            }
        } else {
            setData(null);
            setIsTokenExpired(true);
        }
    }, [auth]);

    useEffect(()=>{
        const verifyRefreshToken = async() =>{
            try{
                await refresh();
            }catch(error){
                console.error(error);
            }
        }
        if(!auth?.access_token){
            verifyRefreshToken();
        }
        
    },[]);

    const [isTokenExpired, setIsTokenExpired] = useState(true);

    const handleLogout = async () => {
        try {
            const response = await axiosPrivate.post("logout");
    
            if (response.status === 200) {
                setAuth(null);
                navigate("/", {replace:true});
            }
        } catch (error) {
            console.error("Failed to logout:", error);
        }
    };
    
        

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
            
            <div>
                {isTokenExpired ? (
                    <div className="register-login-container">
                         <button className="register-button" onClick={displayRegister}>
                            Register
                        </button>
                        <Register isVisible={registerVisible} onClose={hideRegister} setRegisterVisible={setRegisterVisible} setLoginVisible={setLoginVisible} />
                        <button className="login-button" onClick={displayLogin}>
                            Login
                        </button>
                        <Login isVisible={loginVisible} onClose={hideLogin} setLoginVisible={setLoginVisible} />
                    </div>
                       
                ) : (
                    <div className="user-info">
                        <Link to={'/user'}>
                            <img src={data?.avatar_url} alt="User Avatar"/>
                        </Link>
                        
                        <button className="login-button" onClick={handleLogout}>
                            Logout
                        </button>
                        
                       
                    </div>
                )}
            </div>
        </div>
    );
}

export default SearchBar