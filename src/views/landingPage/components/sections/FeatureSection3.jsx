import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Image3 from '../../assets/img/feature-3-img.png';

const FeatureSection3 = () => {
  return (
    <Box
      sx={{
        paddingY: { xs: '30px', lg: '120px' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column-reverse', lg: 'row' },
          alignItems: 'center',
          justifyContent: 'center',
          gap: { xs: 4, lg: 10 }, // Gap between text and image
          maxWidth: '1200px', // Adjust max width if needed
          width: '100%'
        }}
      >
        {/* Text Section */}
        <Box
          sx={{
            flex: 1,
            order: { xs: 2, lg: 1 }, // Text on the left on larger screens
            textAlign: { xs: 'center', lg: 'left' },
            dataAos: 'fade-right',
            dataAosOffset: 400
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
            Grow your profit and track your investments
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            gutterBottom
            sx={{
              fontSize: { xs: '1rem', lg: '1.125rem' } // Increased body text size
            }}
          >
            Use advanced analytical tools. Clear TradingView charts let you track current and historical profit investments.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{
              paddingX: 8,
              display: 'block',
              margin: { xs: '0 auto', lg: 0 }, // Center button on small screens
              marginBottom: { xs: 6, lg: 0 } // Margin adjustments
            }}
          >
            Learn More
          </Button>
        </Box>

        {/* Image Section */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center', // Center the image horizontally
            order: { xs: 1, lg: 2 }, // Image on the right on larger screens
            dataAos: 'fade-left',
            dataAosOffset: 450
          }}
        >
          <img src={Image3} alt="Investment Tracking" style={{ width: '100%', height: 'auto' }} />
        </Box>
      </Box>
    </Box>
  );
};

export default FeatureSection3;
