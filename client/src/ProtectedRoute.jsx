import React, { useState, useEffect } from 'react';
import { useAuth } from './context/AuthContext'
import { Navigate, Outlet } from 'react-router-dom';


export const ProtectedRoute = () => {

  const {isAuthenticated,loading}= useAuth();

  useEffect(() => {
    

  }, [isAuthenticated]);


  if(loading) return <h1>Loading...</h1>
  if(!isAuthenticated && !loading) return <Navigate to='/login' replace/>;

  return <Outlet/> 
};