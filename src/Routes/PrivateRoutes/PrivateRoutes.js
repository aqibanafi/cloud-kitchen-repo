import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { RevolvingDot } from 'react-loader-spinner'

const PrivateRoutes = ({ children }) => {

    //Import User
    const { user, loading } = useContext(AuthContext)

    //Location
    const location = useLocation()

    if (loading) {
        return <div className='flex justify-center mt-40 mb-40'>
            <RevolvingDot
                height="100"
                width="100"
                radius="40"
                color="#FFA500"
                secondaryColor=''
                ariaLabel="revolving-dot-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    }

    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoutes;