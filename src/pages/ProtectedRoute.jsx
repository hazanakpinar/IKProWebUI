import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";


const ProtectedRoute = ({ roles, children }) => {
  const { user, token } = useContext(AuthContext);

  if (token === null) {    
    return <p>Yükleniyor...</p>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (roles && !roles.includes(user.role)) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
};

export default ProtectedRoute;
