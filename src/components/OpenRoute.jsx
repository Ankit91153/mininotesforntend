import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate,useNavigate } from 'react-router-dom';

const OpenRoute = ({ children }) => {
    const navigate=useNavigate()
    const { token } = useSelector(state => state.auth);

    useEffect(() => {
        if (!token) {
            navigate('/login');
        }
    }, [token]);

    return token ? children : <Navigate to="/login" />;
};

export default OpenRoute;