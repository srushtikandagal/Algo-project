import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Component, ...rest }) => {
  const isUserAuthenticated = useSelector((state) => state.customization.isUserAuthenticated);
  return isUserAuthenticated ? Component : <Navigate to="/pages/login/login3" replace />;
};

export default PrivateRoute;
