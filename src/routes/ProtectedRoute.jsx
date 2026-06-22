import React, { children } from 'react'
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router';

const ProtectedRoute = ({children}) => {
    const {user} = useAuth();
    if(!user){
        return <Navigate to="/" replace />;
    }
  return children;
}

export default ProtectedRoute