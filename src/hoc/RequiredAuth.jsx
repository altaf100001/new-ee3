import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
const RequiredAuth = ({ children }) => {
const {isAuth} = useContext(AuthContext)
if(isAuth){
  return children;
}
else{
  <Navigate to ='/login'/>
}
  
};

export default RequiredAuth;
