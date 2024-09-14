import React, { useState } from 'react';
import { Grid, Box, Typography, TextField, Avatar, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ListHeader from './ListHeader'; // Assume ListHeader component is correctly implemented

const brokers = [
  { id: 1, name: 'STOXKART', icon: '/src/assets/images/brokers/stoxKart.png', requiredFields: ['Enter Broker ID'] },
  { id: 2, name: 'Alice', icon: '/src/assets/images/brokers/alice.png', requiredFields: ['Enter Broker ID'] },
  {
    id: 3,
    name: 'Zerodha',
    icon: '/src/assets/images/brokers/zerodha.png',
    requiredFields: ['Enter Broker ID', 'App Name (Any)', 'API Key', 'API Secret Key']
  },
  { id: 4, name: 'Angel', icon: '/src/assets/images/brokers/angel.png', requiredFields: ['Enter Broker ID'] },
  {
    id: 5,
    name: 'FINVISA',
    icon: '/src/assets/images/brokers/finvasia.png',
    requiredFields: ['Enter Broker ID', 'App Name (Any)', 'API Key', 'API Secret Key']
  },
  { id: 6, name: 'FYERS', icon: '/src/assets/images/brokers/fyers.png', requiredFields: ['Enter Broker ID'] },
  {
    id: 7,
    name: 'XTS',
    icon: '/src/assets/images/brokers/xts.png',
    requiredFields: ['Enter Broker ID', 'App Name (Any)', 'API Key', 'API Secret Key']
  },
  {
    id: 8,
    name: 'Upstox',
    icon: '/src/assets/images/brokers/upstox.png',
    requiredFields: ['ClientID']
  },
  { id: 9, name: 'IIFL', icon: '/src/assets/images/brokers/iifl.png', requiredFields: ['Enter Broker ID'] },
  { id: 10, name: 'Master trust', icon: '/src/assets/images/brokers/MasterTrust.png', requiredFields: ['Enter Broker ID'] }
];

const BrokerList = ({ onSelectBroker, selectedBrokerId }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter brokers based on the search term
  const filteredBrokers = brokers.filter((broker) => broker.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <Grid container direction="column" spacing={3} sx={{ width: '100%' }}>
      {/* Broker List Header */}
      <Grid item xs={12}>
        <ListHeader />
      </Grid>

      {/* Search Field */}
      <Grid item xs={12}>
        <TextField
          placeholder="Search Brokers"
          fullWidth
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            )
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused fieldset': {
                borderColor: 'primary.main' // Change focus border color
              }
            }
          }}
        />
      </Grid>

      {/* Brokers List */}
      <Grid item xs={12}>
        {filteredBrokers.length === 0 ? (
          <Typography variant="h6" color="textSecondary" align="center">
            No brokers found
          </Typography>
        ) : (
          <>
            <Typography variant="h5" color="textSecondary" sx={{ mb: 2 }}>
              Popular Brokers
            </Typography>
            <Box
              display="grid"
              gap={2}
              sx={{
                gridTemplateColumns: {
                  xs: 'repeat(3, 1fr)', // 2 columns on extra-small screens
                  sm: 'repeat(4, 1fr)', // 3 columns on small screens
                  md: 'repeat(5, 1fr)', // 4 columns on medium screens
                  lg: 'repeat(6, 1fr)' // 5 columns on large screens
                }
              }}
            >
              {filteredBrokers.map((broker) => (
                <Box
                  key={broker.id}
                  onClick={() => onSelectBroker(broker)}
                  sx={{
                    cursor: 'pointer',
                    textAlign: 'center',
                    width: 70,
                    height: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%'
                  }}
                >
                  <Avatar
                    alt={broker.name}
                    src={broker.icon}
                    sx={{
                      bgcolor: 'white',
                      width: 60,
                      height: 60,
                      mb: 1,
                      p: 1,
                      borderRadius: '50%', // Ensure the avatar is rounded
                      objectFit: 'cover', // Make sure the image covers the entire avatar
                      border: `3.5px solid ${selectedBrokerId === broker.id ? 'skyblue' : 'gray'}`,
                      transition: 'border-color 0.3s ease', // Smooth transition effect
                      '&:hover': {
                        borderColor: 'primary.main' // Change border color on hover
                      }
                    }}
                  />
                  <Typography variant="subtitle2" color="textPrimary" fontWeight="500" fontSize={14}>
                    {broker.name}
                  </Typography>
                </Box>
              ))}
            </Box>
          </>
        )}
      </Grid>
    </Grid>
  );
};

export default BrokerList;
