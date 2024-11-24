import React from 'react';
import { Navigate } from 'react-router-dom';

// A mock hook to simulate authentication status
function useAuth() {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  return { isAuthenticated };
}

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();

  // If not authenticated, redirect to the login page
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Otherwise, render the protected children
  return children;
}

export default ProtectedRoute;
