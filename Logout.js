// src/pages/Logout.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure bootstrap is available

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear session or login status
    localStorage.removeItem("isLoggedIn"); // or sessionStorage.removeItem(...)

    // Redirect to login page after 2 seconds
    const timeout = setTimeout(() => {
      navigate('/login');
    }, 2000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
        <h2 className="mb-3">You have been logged out</h2>
        <p className="text-muted">Redirecting to login page...</p>
        <div className="spinner-border text-secondary mt-3" role="status">
          <span className="visually-hidden">Logging out...</span>
        </div>
      </div>
    </div>
  );
}

export default Logout;
