// assets
import { IconDashboard } from '@tabler/icons-react';
import { Business } from '@mui/icons-material';

// constant
const icons = { IconDashboard };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
  id: 'dashboard',
  title: 'Dashboard',
  type: 'group',
  children: [
    {
      id: 'default',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard',
      icon: icons.IconDashboard,
      breadcrumbs: false
    },
    {
      id: 'broker',
      title: 'Brokers',
      type: 'item',
      url: '/dashboard/broker',
      icon: Business,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
