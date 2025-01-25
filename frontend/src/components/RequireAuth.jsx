import { useLocation, Navigate, Outlet} from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect,useState } from "react";
import  {jwtDecode}  from "jwt-decode";

const RequireAuth = ({allowedRoles}) =>{
    const {auth} = useAuth();
    const location = useLocation();
    const [role, setRole] = useState(null);
    const [expired, setExpired] = useState(true);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log("Auth value:", auth);
        console.log("Role:", role);
    }, [auth]);

    

    
    useEffect(() => {
        const checkToken = async () => {
            if (auth?.access_token) {
                try {
                    const decoded = jwtDecode(auth.access_token);
                    setRole(decoded.role);
                    const currentTime = Date.now() / 1000;
                    setExpired(decoded.exp < currentTime);
                } catch (e) {
                    console.error("Failed to decode token", e);
                    setExpired(true);
                }
            } else {
                setExpired(true);
            }
            setLoading(false);
        };

        checkToken();
    }, [auth]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (expired) {
        alert("Your session has expired. Please log in again.");
        return <Navigate to="/" state={{ from: location }} replace />;
    }

    return (
        allowedRoles?.includes(role)
            ? <Outlet />
            : <Navigate to="/unauthorized" state={{ from: location }} replace />
    );
}

export default RequireAuth;