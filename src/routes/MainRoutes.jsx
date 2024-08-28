import { lazy } from 'react';
import { useSelector } from 'react-redux';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import PrivateRoute from './privateRoute';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard')));

// broker routing
const BrokerDefault = Loadable(lazy(() => import('views/dashboard/broker')));
const AddBroker = Loadable(lazy(() => import('../views/dashboard/broker/AddBroker')));

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
          path: 'default',
          element: <DashboardDefault />
        },
        {
          path: 'broker',
          children: [
            {
              path: '',
              element: <BrokerDefault />
            },
            {
              path: 'add-broker',
              element: <AddBroker />
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
