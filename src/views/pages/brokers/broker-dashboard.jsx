import React, { useState } from 'react';
import { Box, Tabs, Tab, Typography, AppBar, Paper, CircularProgress, Alert } from '@mui/material';
import { useQuery } from '@tanstack/react-query'; // Import your existing components
import Holdings from './holdings';
import Positions from './positions';
import UserFunds from './user-fund';
import Profile from './user-profile';

const BrokerDashboard = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Demat Details
      </Typography>
      <AppBar position="static" color="default">
        <Tabs value={activeTab} onChange={handleChange} indicatorColor="primary" textColor="primary" variant="fullWidth" centered>
          <Tab label="Profile" />
          <Tab label="Holdings" />
          <Tab label="Positions" />
          <Tab label="Margin" />
        </Tabs>
      </AppBar>
      <Paper elevation={3} sx={{ p: 2, mt: 2 }}>
        {activeTab === 0 && <Profile />}
        {activeTab === 1 && <Holdings />}
        {activeTab === 2 && <Positions />}
        {activeTab === 3 && <UserFunds />}
      </Paper>
    </Box>
  );
};

export default BrokerDashboard;
