import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [isAuthenticate, setIsAuthenticate] = useState(false);
  const navigate = useNavigate();

  // Check if token is available in localStorage when app loads
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
      setIsAuthenticate(true);
    }
  }, []);  // Empty dependency array to ensure this runs only once

  // Login function to set the token and mark the user as authenticated
  const login = (newToken) => {
    console.log('Login successful, token:', newToken);
    setToken(newToken);
    localStorage.setItem('token', newToken);
    setIsAuthenticate(true);
    navigate("/dashboard");  // Redirect to a protected route after login
  };

  // Logout function to remove token and reset authentication
  const logout = () => {
    setToken(null);
    localStorage.removeItem('token');
    setIsAuthenticate(false);
    navigate("/login");  // Redirect to login after logout
  };

  return (
    <AuthContext.Provider value={{ token, isAuthenticate, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
