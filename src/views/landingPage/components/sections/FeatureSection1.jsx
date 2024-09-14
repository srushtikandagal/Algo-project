import React from 'react';
import { Box, Typography, Button, useTheme } from '@mui/material';
import Image1 from '../../assets/img/feature-1-img.png';

const FeatureSection1 = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        paddingBottom: { xs: '30px', lg: '120px' },
        paddingTop: 0,
        display: 'flex',
        flexDirection: { xs: 'column', lg: 'row' },
        gap: { xs: 6, lg: 10 },
        alignItems: 'center', // Ensures vertical centering
        textAlign: { xs: 'center', lg: 'left' },
        dataAos: 'fade-right',
        dataAosOffset: 400
      }}
    >
      {/* Text Section */}
      <Box
        sx={{
          maxWidth: '454px',
          marginBottom: { xs: 6, lg: 0 }, // Ensure proper margin
          textAlign: { xs: 'center', lg: 'left' },
          'data-aos': 'fade-right',
          'data-aos-offset': 400
        }}
      >
        <Typography
          variant="h4"
          component="h3"
          gutterBottom
          sx={{
            fontSize: { xs: '2rem', lg: '2.5rem' }, // Increased text size for heading
            fontWeight: 'bold'
          }}
        >
          Invest Smart
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          gutterBottom
          sx={{
            fontSize: { xs: '1rem', lg: '1rem' } // Increased body text size
          }}
        >
          Get full statistic information about the behaviour of buyer and seller will help you to make the decision.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{
            paddingX: 8,
            marginTop: { xs: 4, lg: 2 },
            display: { xs: 'block', lg: 'inline-block' }, // Ensures it centers on small screens
            margin: { xs: '0 auto', lg: 0 } // Centers the button on small screens
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
          justifyContent: { xs: 'center', lg: 'flex-end' }, // Center image on smaller screens
          'data-aos': 'fade-left',
          'data-aos-offset': 400
        }}
      >
        <img src={Image1} alt="Invest Smart" style={{ maxWidth: '100%', height: 'auto' }} />
      </Box>
    </Box>
  );
};

export default FeatureSection1;
