import React, { useContext } from 'react';
import { AuthConext } from '../Providers/AuthProviders';
import { useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthConext)
    const location = useLocation()
    if(user){
        return children
    }
    return (
        <Navigate to='/login' state={{from:location}} replace ></Navigate>
    );
};

export default PrivateRoute;