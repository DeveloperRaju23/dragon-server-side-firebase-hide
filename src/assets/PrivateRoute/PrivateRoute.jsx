import React, { Children, useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return (
            <Spinner className='text-center'  animation="border" role="status">
              <span className="visually-hidden text-center mx-auto">Loading...</span>
            </Spinner>
          );
    }
    if(user){
        return children
    }
    return <Navigate to="/login" state={{from:location}}  replace></Navigate>;
};

export default PrivateRoute;