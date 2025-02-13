import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./Authentication/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { person , loading} = useContext(AuthContext);
  const location = useLocation();

  if(loading) {
    return <span className="loading loading-infinity loading-lg pt-32"></span>
    }

  if (person) {
    return children;
  }
  return <Navigate to={"/login"} state={location.pathname} ></Navigate>;
};

export default PrivateRoute;
