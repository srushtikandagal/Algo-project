import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';

import BitconImg from '../../assets/img/bitcoin.png';
import EthereumImg from '../../assets/img/ethereum.png';
import LitecoinImg from '../../assets/img/litecoin.png';

// Importing data
const currency = [
  {
    image: BitconImg,
    name: 'Bitcoin',
    abbr: 'BTC',
    description: 'Digital currency in which a record of transactions is maintained.'
  },
  {
    image: EthereumImg,
    name: 'Ethereum',
    abbr: 'ETH',
    description: 'Blockchain technology to create and run decentralized digital applications.'
  },
  {
    image: LitecoinImg,
    name: 'Litecoin',
    abbr: 'LTC',
    description: 'Cryptocurrency that enables instant payments to anyone in the world.'
  }
];
('../../data');

const Trade = () => {
  const [itemName, setItemName] = useState('Bitcoin');

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
          Trade securely and market the high growth cryptocurrencies.
        </Typography>
        <Grid container spacing={4} direction={{ xs: 'column', lg: 'row' }} data-aos="fade-up" data-aos-offset="100">
          {currency.map((item, index) => {
            const { image, name, abbr, description } = item;
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
                    minHeight: '400px', // Increased card height
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
                  <Box textAlign="center">
                    {/* Increased the image size */}
                    <img
                      src={image}
                      alt={name}
                      style={{
                        marginBottom: '24px',
                        width: '80px', // Increased image size
                        height: 'auto'
                      }}
                    />
                    <Box
                      sx={{
                        mb: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                      }}
                    >
                      {/* Increased the name size */}
                      <Typography variant="h2" sx={{ fontWeight: 'bold', fontSize: '1.75rem' }}>
                        {name}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {abbr}
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ mb: 2 }}>
                      {description}
                    </Typography>
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
