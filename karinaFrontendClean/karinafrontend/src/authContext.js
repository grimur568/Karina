import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

// Hook for child components to get the auth object and re-render when it changes
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Check for token in sessionStorage or any logic to ascertain login status
        const token = localStorage.getItem('jwtToken');
        setIsLoggedIn(!!token);
    }, []);

    // Value to be passed to all children
    const auth = { isLoggedIn, setIsLoggedIn };

    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};
