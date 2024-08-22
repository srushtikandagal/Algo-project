import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Component, isAuthenticated, ...rest }) => {
  return isAuthenticated ? Component : <Navigate to="/pages/login/login3" replace />;
};

export default PrivateRoute;
