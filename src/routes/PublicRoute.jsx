import React from 'react'
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router';

const PublicRoute = ({children}) => {
    const {user} = useAuth();
    if(user) {
       return <Navigate to="/dashboard" replace />;
    }
  return  children;
}

export default PublicRoute