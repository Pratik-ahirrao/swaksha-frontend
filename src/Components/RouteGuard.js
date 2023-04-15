import React from 'react';
import { Route, Navigate } from 'react-router-dom';
 
export const RouteGuard = ({children }) => {
 
   function hasJWT() {
       let flag = false;
 
       //check user has JWT token
       localStorage.getItem("user") ? flag=true : flag=false
       //console.log(localStorage.getItem("user"))
       return flag
   }
  //  console.log(hasJWT())
   
    return hasJWT() ? children : <Navigate to="/" />
   
};
 
// export default RouteGuard;