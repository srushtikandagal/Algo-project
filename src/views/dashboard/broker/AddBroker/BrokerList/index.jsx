import React from 'react';
import { Grid, Box, Typography, TextField, Avatar, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ListHeader from './ListHeader'; // Assume ListHeader component is correctly implemented

const brokers = [
  { id: 1, name: 'STOXKART', icon: '/src/assets/images/brokers/stoxKart.png' },
  { id: 2, name: 'Alice', icon: '/src/assets/images/brokers/alice.png' },
  { id: 3, name: 'Zerodha', icon: '/src/assets/images/brokers/zerodha.png' },
  { id: 4, name: 'Angel', icon: '/src/assets/images/brokers/angel.png' },
  { id: 5, name: 'FINVISA', icon: '/src/assets/images/brokers/finvasia.png' },
  { id: 6, name: 'FYERS', icon: '/src/assets/images/brokers/fyers.png' },
  { id: 7, name: 'XTS', icon: '/src/assets/images/brokers/xts.png' },
  { id: 8, name: 'Upstox', icon: '/src/assets/images/brokers/upstox.png' },
  { id: 9, name: 'IIFL', icon: '/src/assets/images/brokers/iifl.png' },
  { id: 10, name: 'Master trust', icon: '/src/assets/images/brokers/MasterTrust.png' }
  // Add more brokers as needed
];

const BrokerList = ({ onSelectBroker, selectedBrokerId }) => {
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
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            sx: {
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: 'primary.main' // Change the focus border color
              }
            }
          }}
        />
      </Grid>

      {/* Brokers List */}
      <Grid item xs={12}>
        <Typography variant="h4" color={'gray'}>
          Popular Brokers
        </Typography>
        <Box display="flex" flexWrap="wrap" gap={3}>
          {brokers.map((broker) => (
            <Box
              key={broker.id}
              onClick={() => onSelectBroker(broker)}
              sx={{
                cursor: 'pointer',
                textAlign: 'center',
                width: 90,
                height: 120,
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
                  border: `3.5px solid ${selectedBrokerId === broker.id ? 'blue' : 'gray'}`,
                  borderRadius: '100%', // Ensure the avatar is rounded
                  objectFit: 'cover' // Make sure the image covers the entire avatar
                }}
              />
              <Typography variant="subtitle2" color={'black'} fontWeight={'500'} fontSize={14}>
                {broker.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default BrokerList;
