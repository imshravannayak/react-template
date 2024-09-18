import { useContext } from "react";
import { AuthContext } from "../providers/AuthContext";
import { Navigate, Outlet, useLocation} from "react-router-dom";

const PrivateRoute = () => {
    const location = useLocation();
  const { isAuthenticate ,token} = useContext(AuthContext);

  console.log('auth var private', isAuthenticate);
  if (token === null && localStorage.getItem('token')) {
    return <div>Loading...</div>;  // Show a loading message until token is restored
  }
 
  if (!isAuthenticate) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;
