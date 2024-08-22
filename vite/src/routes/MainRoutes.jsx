import { lazy } from 'react';
import { useSelector } from 'react-redux';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import PrivateRoute from './privateRoute';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

const MainRoutes = () => {
  const isUserAuthenticated = useSelector((state) => state.customization.isUserAuthenticated);

  console.log('isUserAuthenticated', isUserAuthenticated);
  console.log('hello');

  return {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <PrivateRoute isAuthenticated={true} element={<DashboardDefault />} />
      },
      {
        path: 'dashboard',
        children: [
          {
            path: 'default',
            element: <PrivateRoute isAuthenticated={true} element={<DashboardDefault />} />
          }
        ]
      },
      {
        path: 'utils',
        children: [
          {
            path: 'util-typography',
            element: <PrivateRoute isAuthenticated={true} element={<UtilsTypography />} />
          }
        ]
      },
      {
        path: 'utils',
        children: [
          {
            path: 'util-color',
            element: <PrivateRoute isAuthenticated={true} element={<UtilsColor />} />
          }
        ]
      },
      {
        path: 'utils',
        children: [
          {
            path: 'util-shadow',
            element: <PrivateRoute isAuthenticated={true} element={<UtilsShadow />} />
          }
        ]
      },
      {
        path: 'sample-page',
        element: <PrivateRoute isAuthenticated={true} element={<SamplePage />} />
      }
    ]
  };
};

export default MainRoutes;
