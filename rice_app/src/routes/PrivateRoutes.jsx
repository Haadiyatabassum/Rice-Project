import React from "react";
import { useNavigate, useLocation, Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../store/context/AuthContext";

const PrivateRoutes = ({ allowedUser }) => {
  console.log("alloweduser", allowedUser)
  let { isAuthenticated, role, loading } = useAuth() //accessing the data element from the centralized store

  //accessing the current url to redirect the user to different page
  let location = useLocation();

  //making the app wait until auth checks are done
  if (loading) return null;

  //if not logged in redirect
  if (!isAuthenticated) {
    return <Navigate to={'/auth'} state={{from: location}} replace />;
  }

  //role verification
  if (allowedUser&&!allowedUser.includes(role)) {
    return <Navigate to='/unauthorized' replace/>;
  }
  return <Outlet/>; //renders display the children element based on auth
};

export default PrivateRoutes;
