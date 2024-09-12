import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { CircularProgress } from '@mui/material';
import { tsPattern, match } from 'ts-pattern';
import axios from 'axios';

const fetchUserProfile = async (accessToken) => {
  const { data } = await axios.get('https://jetalgosoftware.com/broker/upstox/user/profile/upstox?uuid=lqjenfljwrben', {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });
  return data;
};

const UserProfile = () => {
  const accessToken = localStorage.getItem('upstox_access_token') || '';

  const { data, error, isLoading } = useQuery(['userProfile', accessToken], () => fetchUserProfile(accessToken), {
    enabled: !!accessToken // Only fetch if token exists
  });

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box display="flex" flexDirection="column" alignItems="center" p={3}>
          {match({ isLoading, error, data })
            .with({ isLoading: true }, () => <CircularProgress color="primary" />)
            .with({ error: tsPattern.object }, ({ error }) => <Typography color="error">{error.message}</Typography>)
            .with({ data: tsPattern.object }, ({ data }) => (
              <Box>
                <Typography variant="h4" gutterBottom>
                  User Profile
                </Typography>
                <Typography variant="h6">Name: {data.name}</Typography>
                <Typography variant="h6">Email: {data.email}</Typography>
                {/** Others Field */}
              </Box>
            ))
            .exhaustive()}
        </Box>
      </Grid>
    </Grid>
  );
};

export default UserProfile;
