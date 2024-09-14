import React from 'react';
import { Box, Typography, Button, useTheme } from '@mui/material';
import Image1 from '../../assets/img/feature-1-img.png';

const FeatureSection1 = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        pt: 0,
        pb: { xs: 6, lg: 15 }, // Adjusted padding for better spacing
        display: 'flex',
        flexDirection: { xs: 'column', lg: 'row' },
        gap: { xs: 6, lg: 10 },
        alignItems: 'center',
        textAlign: { xs: 'center', lg: 'left' },
        dataAos: 'fade-right',
        dataAosOffset: 400
      }}
    >
      {/* Text Section */}
      <Box
        sx={{
          maxWidth: { xs: '100%', lg: '454px' }, // Ensure proper width on smaller screens
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
            fontSize: { xs: '2rem', lg: '2.5rem' },
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
            fontSize: { xs: '1rem', lg: '1rem' },
            mb: 2 // Added margin-bottom for spacing
          }}
        >
          Get full statistic information about the behavior of buyers and sellers to help you make informed decisions.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{
            px: 4,
            py: 1,
            mt: { xs: 4, lg: 2 },
            display: 'inline-block',
            mx: { xs: 'auto', lg: 0 } // Center button on small screens
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
          justifyContent: { xs: 'center', lg: 'flex-end' },
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
