import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import useRefreshToken from "../hooks/useRefreshToken";
import useAuth from "../hooks/useAuth";
import { jwtDecode } from "jwt-decode";
const PersistLogin = () =>{
    const [isLoading, setIsLoading] = useState(true);
    const [expired, setExpired] = useState(true);
    const refresh = useRefreshToken();
    const {auth,setAuth} = useAuth();


    useEffect(()=>{
        const verifyRefreshToken = async() =>{
            try{
                await refresh();
            }catch(error){
                console.error(error);
                setAuth(prev => ({...prev,access_token: null}));
            }finally{
                setIsLoading(false);
            }
        }
        const decoded = jwtDecode(auth.access_token);
        const currentTime = Date.now() / 1000;
        setExpired(decoded.exp < currentTime);
        expired ? verifyRefreshToken() : setIsLoading(false);
    },[]);

    return(
        <>
        {
            isLoading
            ?
            <p>Loading ...</p>
            :
            <Outlet/>
        }
        </>
    );

}

export default PersistLogin;