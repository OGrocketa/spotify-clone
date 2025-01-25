import {axiosPrivate} from "../api/axios.js";
import useAuth from "./useAuth";

const useRefreshToken = () =>{
    const {setAuth} = useAuth();

    const refresh = async () =>{
        const response = await axiosPrivate.post('refresh_access_token',{
            withCredentials: true
        });
        setAuth(prev =>{
            return{
                ...prev,
                access_token: response.data.access_token,
            }
        })
        return response.data.access_token
    }
    return refresh;
}   

export default useRefreshToken;