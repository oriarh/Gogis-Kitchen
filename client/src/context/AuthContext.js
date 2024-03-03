import { createContext, useState, useContext, useSyncExternalStore, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(() => {
  const savedUserData = localStorage.getItem('userData');
  return savedUserData ? JSON.parse(savedUserData) : { name: '', email: '', phone: '' };
  });
  
  useEffect(() => {
    // Store userData in localStorage whenever it changes
    localStorage.setItem('userData', JSON.stringify(userData));
  }, [userData]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);