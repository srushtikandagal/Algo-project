import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';
import ResetPassword from 'views/pages/forgetPassword/ResetPassword';

// login option 3 routing
const AuthLogin3 = Loadable(lazy(() => import('views/pages/authentication3/Login3')));
const AuthRegister3 = Loadable(lazy(() => import('views/pages/authentication3/Register3')));

const LandingPage = Loadable(lazy(() => import('../views/landingPage/index')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: '/login/',
      element: <AuthLogin3 />
    },
    {
      path: '/register',
      element: <AuthRegister3 />
    },
    {
      path: '/reset/:resetToken',
      element: <ResetPassword />
    },
    {
      path: '/landingpage',
      element: <LandingPage />
    }
  ]
};

export default AuthenticationRoutes;
