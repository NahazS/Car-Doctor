import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {user,loading,currentSlide} = useContext(AuthContext)
    const imageNum = currentSlide + 1
    if(loading){
        return <h1>nahaz</h1>
    }
    else if(user){
        return children
    } else{ 
        return <Navigate to="/logIn" state={{ from: location.pathname }} />
    }
};

export default PrivateRoute;