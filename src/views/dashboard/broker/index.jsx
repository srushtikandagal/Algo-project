import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { gridSpacing } from 'store/constant';
import { useSelector } from 'react-redux';
import { Card, CardActions, CardContent } from '@mui/material';
import { Add, Logout } from '@mui/icons-material';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

const Index = ({ text }) => {
  const [isLoading, setLoading] = useState(true);
  const navigate = useNavigate(); // Hook for navigation

  const brokers = useSelector((state) => state.customization.availableBrokers || []);

  useEffect(() => {
    setLoading(false);
  }, []);

  // Handlers
  const handleAddBroker = () => navigate('/dashboard/broker/add-broker');
  const handleLogout = () => {
    brokerLogoutMutation.mutate();
  };

  const brokerLogoutMutation = useMutation(
    () =>
      axios.delete('https://jetalgosoftware.com/broker/upstox/logout/upstox?uuid=lqjenfljwrben', {
        headers: {
          accesstoken: localStorage.getItem('upstox_access_token')
        }
      }),
    {
      onSuccess: () => {
        dispatch({ type: SET_AVIALABLE_BROKERS, payload: [] });
        localStorage.removeItem('upstox_access_token');
        navigate('/dashboard/broker/add-broker'); // Redirect to login page or any other page
      },
      onError: (error) => {
        console.error('Logout Error:', error);
      }
    }
  );

  return (
    <Grid
      container
      spacing={gridSpacing}
      justifyContent="center"
      alignContent="flex-start"
      sx={{
        minHeight: '80vh',
        pt: 2,
        borderLeft: 1,
        borderColor: 'grey.400', // MUI's color system for a gray color,
        height: 'FitScreen'
      }}
    >
      {' '}
      <Grid
        container
        item
        justifyContent="space-between"
        alignItems="center"
        mb={2}
        px={3}
        sx={{ position: 'sticky', top: 0, zIndex: 1, height: '40px' }}
      >
        <Typography variant="h3" fontWeight="bold" color="primary.main" sx={{ paddingTop: 1 }}>
          Brokers
        </Typography>
        {brokers.length != 0 ? (
          <Button
            variant="contained"
            color="primary"
            startIcon={<Add />}
            onClick={handleAddBroker}
            sx={{
              borderRadius: 2,
              padding: '6px 12px',
              boxShadow: 'none',
              backgroundColor: '#123591',
              '&:hover': {
                backgroundColor: '#0e265a'
              }
            }}
          >
            Add Broker
          </Button>
        ) : null}
      </Grid>
      {brokers.length === 0 ? (
        <NoBrokers handleAddBroker={handleAddBroker} />
      ) : (
        // Brokers List in Grid
        <Grid item xs={12}>
          <Grid container spacing={3}>
            {brokers.map((broker, index) => (
              <Grid item xs={9} sm={6} md={4} key={index}>
                <BrokerCard broker={broker} handleLogout={handleLogout} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default Index;

const NoBrokers = ({ handleAddBroker }) => (
  <Grid item xs={12} md={6} textAlign="center">
    {/* Center the image */}
    <Box display="flex" justifyContent="center" mb={2}>
      <img
        src="https://web.algorooms.com/static/media/broker.f7382bf4a577d51366641db39ab94138.svg"
        alt="No Brokers"
        style={{ maxWidth: '400px', height: 'auto' }}
        loading="lazy"
      />
    </Box>
    {/* Text below the image */}
    <Typography variant="h6" gutterBottom>
      No Brokers found. Please Add brokers!
    </Typography>
    <Button
      sx={{
        border: '2px dashed gray', // Adjust the color and width as needed
        borderRadius: '4px', // Optional: Adjust the border-radius if needed
        padding: '8px 16px', // Optional: Adjust the padding if needed
        '&:hover': {
          borderColor: 'black' // Optional: Change border color on hover
        }
      }}
      onClick={handleAddBroker}
    >
      + Add Broker
    </Button>
  </Grid>
);

const BrokerCard = ({ broker, handleLogout }) => (
  <Card
    sx={{
      borderRadius: 4,
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.2s ease-in-out',
      '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)'
      },
      textAlign: 'center',
      padding: 2,
      height: '200px', // Fixed height for card
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }}
  >
    <CardContent onClick={() => navigate('/dashboard/broker/dashboard')}>
      <Typography
        variant="h6"
        color="primary.main"
        gutterBottom
        sx={{
          fontWeight: 'bold',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        }}
      >
        {broker.broker}
      </Typography>
    </CardContent>
    <CardActions sx={{ justifyContent: 'center' }}>
      <Button
        variant="outlined"
        color="error"
        size="small"
        onClick={() => handleLogout()}
        startIcon={<Logout />}
        sx={{
          borderRadius: 2,
          padding: '6px 12px'
        }}
      >
        Log Out
      </Button>
    </CardActions>
  </Card>
);
