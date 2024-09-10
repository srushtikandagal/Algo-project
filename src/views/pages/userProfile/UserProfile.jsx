// ProfileDashboard.js
import React, { useState } from 'react';
import { Box, Typography, Avatar, Button, Paper, Grid, Link, Tabs, Tab, useMediaQuery } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useTheme } from '@mui/material/styles';
import { Phone, Email, Wallet, CreditScore, Subscript } from '@mui/icons-material';
import UpdateProfile from './updateProfile/updateProfile';
import Person from '@mui/icons-material/Person';

// Example JSON Data
const jsonData = {
  profile: {
    name: 'John Doe',
    id: 'AR220573',
    phone: '+918654464',
    email: 'JohnDoe@gmail.com',
    avatarColor: 'green',
    avatarInitial: 'V'
  },
  wallet: {
    amount: 15000.0
  },
  credit: {
    amount: 7000.0
  },
  subscription: {
    plan: 'Free Plan',
    status: 'Active'
  },
  referral: {
    link: 'https://web.algorooms.com/login?referral_code=AR220573',
    joinedDate: '27/08/2024'
  },
  tabs: [
    { label: 'Notifications', content: 'Notification rack is Empty!' },
    { label: 'Subscriptions', content: 'You have no subscriptions!' },
    { label: 'My Referrals', content: 'You have no referrals!' }
  ]
};

const ProfileDashboard = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [openUpdateProfile, setOpenUpdateProfile] = useState(false);
  const theme = useTheme();
  const downMD = useMediaQuery(theme.breakpoints.down('md'));

  const handleTabChange = (event, newValue) => setActiveTab(newValue);
  const handleOpenUpdateProfile = () => setOpenUpdateProfile(true);
  const handleCloseUpdateProfile = () => setOpenUpdateProfile(false);

  const { profile, wallet, credit, subscription, referral, tabs } = jsonData;

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '1200px',
        mx: 'auto',
        p: 3,
        bgcolor: 'background.paper',
        boxShadow: 3,
        borderRadius: 1
      }}
    >
      {/* Profile Header */}
      <Grid container spacing={2} direction={downMD ? 'column' : 'row'} alignItems={downMD ? 'center' : 'flex-start'} mb={4}>
        {/* Profile Picture */}
        <Grid item>
          <Avatar
            src="http://localhost:3000/src/assets/images/users/user-round.svg"
            sx={{ bgcolor: profile.avatarColor, width: 150, height: 150 }}
          >
            {profile.avatarInitial}
          </Avatar>
        </Grid>
        {/* Profile Info */}
        <Grid item>
          <Typography fontSize={35} textAlign={downMD ? 'center' : 'left'}>
            {profile.name}
          </Typography>
          <Box>
            <Typography
              variant="body3"
              color="text.secondary"
              fontFamily="sans-serif"
              sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
              mt={{ xs: 1, md: 0.5 }}
            >
              <Person fontSize="small" />
              {profile.id}
            </Typography>
            <Typography
              variant="body3"
              color="text.secondary"
              fontFamily="sans-serif"
              sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
              mt={{ xs: 1, md: 0.5 }}
            >
              <Phone fontSize="small" />
              {profile.phone}
            </Typography>
            <Typography
              variant="body3"
              color="text.secondary"
              fontFamily="sans-serif"
              sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
              mt={{ xs: 1, md: 0.5 }}
            >
              <Email fontSize="small" />
              {profile.email}
            </Typography>
          </Box>
        </Grid>
        {/* Edit Button */}
        {!downMD && (
          <Button sx={{ ml: 'auto' }} variant="contained" color="secondary" onClick={handleOpenUpdateProfile}>
            <EditIcon />
          </Button>
        )}
      </Grid>

      {/* Wallet and Plan Info */}
      <Grid container spacing={2} mb={4}>
        <Grid item xs={12} md={4}>
          <Paper elevation={1} sx={{ p: 2, textAlign: 'center', display: 'flex', alignItems: 'center', gap: 2 }}>
            <Wallet fontSize="large" />
            <Box>
              <Typography fontSize={25} fontFamily="sans-serif" color="black">
                ₹ {wallet.amount.toFixed(2)}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Wallet Amount
              </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={1} sx={{ p: 2, textAlign: 'center', display: 'flex', alignItems: 'center', gap: 2 }}>
            <CreditScore fontSize="large" />
            <Box>
              <Typography fontSize={25} fontFamily="sans-serif" color="black">
                ₹ {credit.amount.toFixed(2)}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Credit Amount
              </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={1} sx={{ p: 2, textAlign: 'center', display: 'flex', alignItems: 'center', gap: 2 }}>
            <Subscript fontSize="large" />
            <Box>
              <Typography fontSize={25} fontFamily="sans-serif" color="black">
                {subscription.plan}
              </Typography>
              <Typography variant="body2" color="success.main">
                {subscription.status}
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* Referral Info */}
      <Box mb={4}>
        <Typography variant="body1" color="text.primary" fontFamily="sans-serif">
          Referral Link:{' '}
          <Link href={referral.link} color="primary">
            {referral.link}
          </Link>
        </Typography>
        <Typography variant="body2" color="text.secondary" fontFamily="sans-serif">
          Joined on {referral.joinedDate}
        </Typography>
      </Box>

      {/* Tabs */}
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        textColor="primary"
        indicatorColor="primary"
        sx={{ mb: 4 }}
        variant={downMD ? 'fullWidth' : 'standard'}
      >
        {tabs.map((tab, index) => (
          <Tab key={index} label={tab.label} />
        ))}
      </Tabs>

      {/* Tab Content */}
      {tabs.map((tab, index) => (
        <Box key={index} hidden={activeTab !== index} sx={{ textAlign: 'center', py: 6 }}>
          <img src="https://via.placeholder.com/100" alt="Notification Empty" style={{ marginBottom: '1rem' }} />
          <Typography color="text.secondary">{tab.content}</Typography>
        </Box>
      ))}

      {/* Update Profile Modal */}
      <UpdateProfile open={openUpdateProfile} handleClose={handleCloseUpdateProfile} profile={profile} />
    </Box>
  );
};

export default ProfileDashboard;
