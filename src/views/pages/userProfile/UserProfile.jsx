import React, { useState, useEffect } from 'react';
import { Box, Typography, Avatar, Button, Paper, Grid, Link, Tabs, Tab, useMediaQuery, CircularProgress } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useTheme } from '@mui/material/styles';
import { Phone, Email, Wallet, CreditScore, Subscript, Person } from '@mui/icons-material';
import UpdateProfile from './updateProfile/updateProfile';
import Loader from 'ui-component/Loader';
import Loadable from 'ui-component/Loadable';

// API endpoint and local storage key
const API_URL = 'https://jetalgosoftware.com/user/details?uuid=fqewrbet';
const LOCAL_STORAGE_KEY = 'authToken';

const tabs = [
  { label: 'Notifications', content: 'Notification rack is Empty!' },
  { label: 'Subscriptions', content: 'You have no subscriptions!' },
  { label: 'My Referrals', content: 'You have no referrals!' }
];
const ProfileDashboard = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const [openUpdateProfile, setOpenUpdateProfile] = useState(false);
  const theme = useTheme();
  const downMD = useMediaQuery(theme.breakpoints.down('md'));

  // Fetch user data from API
  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      setError(null);

      try {
        const Token = localStorage.getItem(LOCAL_STORAGE_KEY);
        const response = await fetch(API_URL, {
          headers: {
            token: Token
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }

        const data = await response.json();
        setUserData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleTabChange = (event, newValue) => setActiveTab(newValue);
  const handleOpenUpdateProfile = () => setOpenUpdateProfile(true);
  const handleCloseUpdateProfile = () => setOpenUpdateProfile(false);

  if (loading) {
    return (
      <>
        <Loader />
        {/* <Loadable / */}
      </>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
        <Typography color="error">Error: {error}</Typography>
      </Box>
    );
  }

  const { firstName, lastName, email_id, contactNumber, createdAt, middleName, _id } = userData;

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
          <Avatar src="http://localhost:3000/src/assets/images/users/user-round.svg" sx={{ width: 150, height: 150 }}></Avatar>
        </Grid>
        {/* Profile Info */}
        <Grid item>
          <Typography fontSize={35} textAlign={downMD ? 'center' : 'left'}>
            {firstName} {lastName}
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
              {_id}
            </Typography>
            <Typography
              variant="body3"
              color="text.secondary"
              fontFamily="sans-serif"
              sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
              mt={{ xs: 1, md: 0.5 }}
            >
              <Phone fontSize="small" />
              {contactNumber}
            </Typography>
            <Typography
              variant="body3"
              color="text.secondary"
              fontFamily="sans-serif"
              sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
              mt={{ xs: 1, md: 0.5 }}
            >
              <Email fontSize="small" />
              {email_id}
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
                ₹ 15000
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
                ₹ 5524
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
                Free
              </Typography>
              <Typography variant="body2" color="success.main">
                Active
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* Referral Info */}
      <Box mb={4}>
        <Typography variant="body1" color="text.primary" fontFamily="sans-serif">
          Referral Link:{' '}
          <Link href="#" color="primary">
            http://jwhjdbwndbdqkwujdhd/qwduid
          </Link>
        </Typography>
        <Typography variant="body2" color="text.secondary" fontFamily="sans-serif">
          Joined on {createdAt}
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
      <UpdateProfile
        open={openUpdateProfile}
        handleClose={handleCloseUpdateProfile}
        profile={{ firstName, lastName, email_id, contactNumber, middleName }}
      />
    </Box>
  );
};

export default ProfileDashboard;
