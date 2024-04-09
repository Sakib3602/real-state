import { useContext } from "react";

import { Navigate ,  useLocation } from "react-router-dom";
import { AuthContext } from "./Authentication/AuthProvider";


const PrivateRoute = ({children}) => {
    const {person} = useContext(AuthContext)
    const location = useLocation()
    console.log(person,location)
    if(person){
        return children
    }
   else <Navigate to={"/login"} state={location.pathname}></Navigate>
};

export default PrivateRoute;