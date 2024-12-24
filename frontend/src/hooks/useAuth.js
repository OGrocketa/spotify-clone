import { useState, useEffect, useLayoutEffect, createContext, useContext } from "react";
import axios from "axios";

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(); // undefined = not checked, null = logged out, token = logged in

    // Fetch user status on mount
    useEffect(() => {
        const fetchMe = async () => {
            try {
                const response = await axios.get("/check_logged_in", { headers: { Authorization: `Bearer ${token}` } });
                setToken(response.data.accessToken);
            } catch {
                setToken(null); // No valid token or user is logged out
            }
        };
        fetchMe();
    }, []);

    // Add token to request headers using axios interceptor
    useLayoutEffect(() => {
        const authInterceptor = axios.interceptors.request.use((config) => {
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        });

        return () => {
            axios.interceptors.request.eject(authInterceptor);
        };
    }, [token]);

    // Refresh token on access token expiration
    useLayoutEffect(() => {
        const refreshInterceptor = axios.interceptors.response.use(
            (response) => response,
            async (error) => {
                const originalRequest = error.config;
                if (error.response?.status === 401 && error.response?.data?.message === "Token expired") {
                    try {
                        const response = await axios.post("/refresh_access_token", {}, { withCredentials: true });
                        setToken(response.data.accessToken);
                        originalRequest.headers.Authorization = `Bearer ${response.data.accessToken}`;
                        return axios(originalRequest); // Retry the original request
                    } catch (refreshError) {
                        setToken(null); // Clear token on failure
                    }
                }
                return Promise.reject(error);
            }
        );

        return () => {
            axios.interceptors.response.eject(refreshInterceptor);
        };
    }, [token]);

    return <AuthContext.Provider value={{ token, setToken }}>{children}</AuthContext.Provider>;
};
