import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import PrivateRoute from './privateRoute';
import UpstoxIntegration from 'views/pages/brokers/upstox-integration';
import BrokerDashboard from 'views/pages/brokers/broker-dashboard';

const DashboardDefault = Loadable(lazy(() => import('views/dashboard')));

// broker routing
const BrokerDefault = Loadable(lazy(() => import('views/dashboard/broker')));
const AddBroker = Loadable(lazy(() => import('views/dashboard/broker/AddBroker')));

// User Profile
const UserProfile = Loadable(lazy(() => import('../views/pages/userProfile/UserProfile')));

// Admin panel
const Adminpanel = Loadable(lazy(() => import('../views/AdminPanel')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <PrivateRoute element={<DashboardDefault />} />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: '',
          element: <PrivateRoute element={<DashboardDefault />} />
        },
        {
          path: 'admin',
          element: <PrivateRoute element={<Adminpanel />} />
        },
        {
          path: 'broker',
          children: [
            {
              path: '',
              element: <PrivateRoute element={<BrokerDefault />} />
            },
            {
              path: 'add-broker',
              element: <PrivateRoute element={<AddBroker />} />
            },
            {
              path: 'upstox-integration',
              element: <PrivateRoute element={<UpstoxIntegration />} />
            },
            {
              path: 'dashboard',
              element: <PrivateRoute element={<BrokerDashboard />} />
            }
          ]
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-typography',
          element: <PrivateRoute element={<UtilsTypography />} />
        }
      ]
    },
    {
      path: 'profile',
      children: [
        {
          path: '',
          element: <UserProfile />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-color',
          element: <PrivateRoute element={<UtilsColor />} />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-shadow',
          element: <PrivateRoute element={<UtilsShadow />} />
        }
      ]
    },
    {
      path: 'sample-page',
      element: <PrivateRoute element={<SamplePage />} />
    }
  ]
};

export default MainRoutes;
