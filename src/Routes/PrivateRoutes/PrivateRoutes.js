import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const PrivateRoutes = ({ children }) => {

    //Import User
    const { user, loading } = useContext(AuthContext)

    //Location
    const location = useLocation()

    if(loading) {
        return <div className='flex justify-center'><div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-orange-600"></div></div> 
    }

    if(user) {
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoutes;