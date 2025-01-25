import { useLocation, Navigate, Outlet} from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";

const RequireAuth = ({allowedRoles}) =>{
    const {auth} = useAuth();
    const location = useLocation();
    const role = jwtDecode(auth?.access_token).role;

    useEffect(() => {
        console.log("Auth value:", auth);
        console.log("Role:", role);
    }, [auth]);

    return(
        allowedRoles?.includes(role)
        ?
        <Outlet/>
        :
            auth?.access_token
            ?
            <Navigate to="/unauthorized" state={{from: location}} replace/>
            :
            <Navigate to="/" state={{from: location}} replace/> 
        
        );
}

export default RequireAuth;