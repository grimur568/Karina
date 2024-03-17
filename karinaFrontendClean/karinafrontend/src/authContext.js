import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!sessionStorage.getItem('jwtToken'));

  useEffect(() => {
    // Function to update isLoggedIn based on sessionStorage
    const syncLoginState = () => {
      setIsLoggedIn(!!sessionStorage.getItem('jwtToken'));
    };

    // Listen for custom event to update isLoggedIn when token changes
    window.addEventListener('authChange', syncLoginState);

    // Initial sync in case of page reloads
    syncLoginState();

    // Cleanup listener on component unmount
    return () => window.removeEventListener('authChange', syncLoginState);
  }, []);

  const updateToken = (token) => {
    if (token) {
      sessionStorage.setItem('jwtToken', token);
    } else {
      sessionStorage.removeItem('jwtToken');
    }
    // Trigger custom event to update isLoggedIn across components
    window.dispatchEvent(new CustomEvent('authChange'));
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, updateToken }}>
      {children}
    </AuthContext.Provider>
  );
};

// Export the hook for accessing the auth context
export const useAuth = () => useContext(AuthContext);
