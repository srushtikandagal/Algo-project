// Dashboard.js
import React from 'react';
import { Grid, Box } from '@mui/material';
import MetricsCard from './components/MetricsCard';
import ActiveVsTotalUsersChart from './components/ActiveVaTotalChart';
import TotalRevenueChart from './components/TotalRevenueChart';
import TopUsersTable from './components/TopUsersTable';
import TotalReferralsCard from './components/RefrealCard';

import GetAppOutlinedIcon from '@mui/icons-material/GetAppOutlined';
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';

const Dashboard = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <MetricsCard
            title="Active Users"
            value="1,200"
            icon={<GetAppOutlinedIcon />}
            colorSchemeIndex={0}
            background="linear-gradient(135deg, #2196F3 30%, #1976D2 90%)"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <MetricsCard
            title="Total Users"
            value="5,000"
            icon={<FileCopyOutlinedIcon />}
            colorSchemeIndex={1}
            background="linear-gradient(135deg, #2196F3 30%, #1976D2 90%)"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <MetricsCard
            title="Total Revenue"
            value="₹150,0000"
            icon={<PictureAsPdfOutlinedIcon />}
            colorSchemeIndex={2}
            background="linear-gradient(135deg, #2196F3 30%, #1976D2 90%)"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <MetricsCard
            title="Referrals"
            value="300"
            icon={<ArchiveOutlinedIcon />}
            colorSchemeIndex={3}
            background="linear-gradient(135deg, #2196F3 30%, #1976D2 90%)"
          />
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12} md={6}>
          <ActiveVsTotalUsersChart />
        </Grid>
        <Grid item xs={12} md={6}>
          <TopUsersTable />
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12}>
          <TotalRevenueChart />
        </Grid>
      </Grid>

      <TotalReferralsCard />
    </Box>
  );
};

export default Dashboard;
