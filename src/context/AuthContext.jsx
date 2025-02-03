import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Verifica se há um token ao carregar a página
    useEffect(() => {
        const token = localStorage.getItem("access_token");
        if (token) setIsAuthenticated(true);
    }, []);

    const login = (token) => {
        localStorage.setItem("access_token", token);
        setIsAuthenticated(true);
    };

    const logout = () => {
        localStorage.removeItem("access_token");
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);