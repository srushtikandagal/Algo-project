import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import Loader from 'ui-component/Loader';

const PrivateRoute = ({ element: Component, ...rest }) => {
  const [loading, setLoading] = useState(true);
  const isUserAuthenticated = useSelector((state) => state.customization.isUserAuthenticated);

  useEffect(() => {
    // Simulate async logic or other side effects
    const checkAuth = async () => {
      // Simulate an async operation
      await new Promise((resolve) => setTimeout(resolve, 500));
      setLoading(false); // Set loading to false after async logic
    };

    checkAuth();
  }, []);

  if (loading) {
    return <Loader />; // Optional: Render loading state
  }

  return isUserAuthenticated ? Component : <Navigate to="/landingpage" replace />;
};

export default PrivateRoute;
