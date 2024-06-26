import React from 'react'; import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ Component }) => { const isAuth = localStorage.getItem('token');


return isAuth ? <Component /> : <Navigate to="/login" />;
}
export default PrivateRoute;