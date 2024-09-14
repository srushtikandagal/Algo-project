import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';

import Intraday from '../../assets/img/Trading/intraday.png';
import Swing from '../../assets/img/Trading/swing.png';
import Long from '../../assets/img/Trading/longTerm.png';

// Data for trading cards
const currency = [
  {
    image: Intraday,
    name: 'Intraday Trading',
    description: 'Unlock High-Potential Intraday Trading Opportunities in the Indian Stock Market.'
  },
  {
    image: Swing,
    name: 'Swing Trading',
    description: 'Swing Trading Made Easy: Tap into India’s Stock Market for Short-Term Gains.'
  },
  {
    image: Long,
    name: 'Long Term Investment',
    description: 'Secure Your Future: Long-Term Stock Investments in India’s Thriving Market.'
  }
];

const Trade = () => {
  const [itemName, setItemName] = useState('Intraday Trading');

  return (
    <Box
      component="section"
      sx={{
        pt: { lg: '320px' },
        color: 'text.secondary',
        mt: { lg: '-350px' }
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h1" component="h2" align="center" sx={{ mb: 8, pt: 4 }} data-aos="fade-up" data-aos-offset="100">
          Trade Securely and Market High-Growth Assets
        </Typography>
        <Grid container spacing={4} direction={{ xs: 'column', lg: 'row' }} data-aos="fade-up" data-aos-offset="100">
          {currency.map((item, index) => {
            const { image, name, description } = item;
            return (
              <Grid item xs={12} lg={4} key={index}>
                <Paper
                  onClick={() => setItemName(name)}
                  sx={{
                    backgroundColor: 'background.paper',
                    color: 'text.primary',
                    borderRadius: '16px',
                    py: 4,
                    px: 2,
                    boxShadow: 3,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    minHeight: '450px', // Ensure the card has a fixed height
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    '&:hover': {
                      backgroundColor: 'primary.main', // Hover background color
                      color: 'white', // Hover text color change to white
                      boxShadow: 6
                    }
                  }}
                >
                  {/* Image section with fixed size */}
                  <Box textAlign="center" sx={{ mb: 4 }}>
                    <img
                      src={image}
                      alt={name}
                      style={{
                        width: '140px', // Fixed image size
                        height: '140px', // Fixed image height
                        objectFit: 'cover',
                        marginBottom: '24px'
                      }}
                    />
                  </Box>

                  {/* Text section with fixed height */}
                  <Box
                    textAlign="center"
                    sx={{
                      flexGrow: 1, // Ensures even distribution of space for text
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-start',
                      minHeight: '100px' // Fixed height for text section
                    }}
                  >
                    <Typography variant="h2" sx={{ fontWeight: 'bold', fontSize: '1.75rem', mb: 2 }}>
                      {name}
                    </Typography>
                    <Typography variant="body2">{description}</Typography>
                  </Box>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default Trade;
