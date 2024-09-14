import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { CircularProgress, Alert, Card, CardContent, Divider, Chip } from '@mui/material';
import axios from 'axios';

const fetchUserProfile = async (accessToken) => {
  const { data } = await axios.get('https://jetalgosoftware.com/broker/upstox/user/profile/upstox?uuid=lqjenfljwrben', {
    headers: {
      accesstoken: accessToken
    }
  });
  return data;
};

const UserProfile = () => {
  const accessToken = localStorage.getItem('upstox_access_token') || '';

  const { data, error, isLoading } = useQuery(['userProfile', accessToken], () => fetchUserProfile(accessToken), {
    enabled: !!accessToken
  });

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <CircularProgress color="primary" />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <Alert severity="error">{error.message}</Alert>
      </Box>
    );
  }

  if (!data || !data.response || !data.response.data) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <Typography>No user profile data available</Typography>
      </Box>
    );
  }

  const user = data.response.data;

  return (
    <Box p={3}>
      <Card>
        <CardContent>
          <Typography variant="h4" gutterBottom align="center">
            Profile
          </Typography>

          <Divider sx={{ my: 2 }} />

          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" color="textSecondary">
                Name:
              </Typography>
              <Typography variant="body1">{user.user_name}</Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="h6" color="textSecondary">
                Email:
              </Typography>
              <Typography variant="body1">{user.email}</Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="h6" color="textSecondary">
                Broker:
              </Typography>
              <Typography variant="body1">{user.broker}</Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="h6" color="textSecondary">
                User Type:
              </Typography>
              <Typography variant="body1">{user.user_type}</Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="h6" color="textSecondary">
                User ID:
              </Typography>
              <Typography variant="body1">{user.user_id}</Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="h6" color="textSecondary">
                POA Status:
              </Typography>
              <Typography variant="body1">{user.poa ? 'Enabled' : 'Disabled'}</Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="h6" color="textSecondary">
                Active Status:
              </Typography>
              <Typography variant="body1" color={user.is_active ? 'green' : 'red'}>
                {user.is_active ? 'Active' : 'Inactive'}
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Divider sx={{ my: 2 }} />

              <Typography variant="h6" color="textSecondary" gutterBottom>
                Exchanges:
              </Typography>
              <Box display="flex" flexWrap="wrap" gap={1}>
                {(user.exchanges || []).map((exchange) => (
                  <Chip key={exchange} label={exchange} color="primary" />
                ))}
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h6" color="textSecondary" gutterBottom>
                Products:
              </Typography>
              <Box display="flex" flexWrap="wrap" gap={1}>
                {(user.products || []).map((product) => (
                  <Chip key={product} label={product} color="secondary" />
                ))}
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h6" color="textSecondary" gutterBottom>
                Order Types:
              </Typography>
              <Box display="flex" flexWrap="wrap" gap={1}>
                {(user.order_types || []).map((type) => (
                  <Chip key={type} label={type} />
                ))}
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default UserProfile;
