import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); 
    localStorage.removeItem('user'); 

    navigate('/login');
  };

  useEffect(() => {
    handleLogout();
  }, []);

  return (
    <div>
      <h2>Logging Out...</h2>
    </div>
  );
};

export default Logout;
