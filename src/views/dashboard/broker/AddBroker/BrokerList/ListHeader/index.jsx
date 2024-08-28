import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const BrokerHeader = () => {
  const navigate = useNavigate();
  return (
    <Grid item xs={12}>
      <Box display="flex" alignItems="center">
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 40, // Adjust the size as needed
            height: 40, // Adjust the size as needed
            borderRadius: '50%',
            transition: 'background-color 0.3s',
            '&:hover': {
              backgroundColor: 'darkgray' // Change this to the desired hover color
            },
            mr: 2 // Margin to separate the icon from the text
          }}
        >
          <ArrowBack
            onClick={() => {
              navigate(-1);
            }}
          />
        </Box>
        <Typography
          variant="h6"
          sx={{
            fontSize: '1.2rem', // Increase the font size as needed
            fontWeight: 'bold' // Optionally make the text bold
          }}
        >
          Find Your Broker
        </Typography>
      </Box>
    </Grid>
  );
};

export default BrokerHeader;
