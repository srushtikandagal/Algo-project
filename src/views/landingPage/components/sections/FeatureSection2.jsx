import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Image2 from '../../assets/img/feature-2-img.png';

const FeatureSection2 = () => {
  return (
    <Box
      sx={{
        paddingY: { xs: '20px', lg: '120px' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
          alignItems: 'center',
          justifyContent: 'center',
          gap: 10,
          maxWidth: '1200px', // Adjust max width if needed
          width: '100%',
          textAlign: { xs: 'center', lg: 'left' }
        }}
      >
        {/* Image Section */}
        <Box
          sx={{
            flex: 1,
            order: { xs: 2, lg: 1 },
            textAlign: { xs: 'center', lg: 'left' }
          }}
        >
          <img src={Image2} alt="Detailed Statistics" style={{ width: '100%', height: 'auto' }} />
        </Box>

        {/* Text Section */}
        <Box
          sx={{
            flex: 1,
            maxWidth: '500px',
            order: { xs: 1, lg: 2 }
          }}
        >
          <Typography
            variant="h4"
            component="h4"
            gutterBottom
            sx={{
              fontSize: { xs: '2rem', lg: '2.5rem' }, // Increased text size
              fontWeight: 'bold'
            }}
          >
            Detailed Statistics
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            gutterBottom
            sx={{
              fontSize: { xs: '1rem', lg: '1.125rem' } // Increased body text size
            }}
          >
            View all mining related information in real-time, at any point at any location and decide which polls you want to mine in.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{
              paddingX: 8,
              marginTop: { xs: 4, lg: 2 },
              display: 'block',
              margin: { xs: '0 auto', lg: 0 }, // Centers button on small screens
              marginBottom: { xs: 6, lg: 0 }
            }}
          >
            Learn More
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default FeatureSection2;
