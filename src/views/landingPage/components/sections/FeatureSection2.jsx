import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Image2 from '../../assets/img/feature-2-img.png';

const FeatureSection2 = () => {
  return (
    <Box
      sx={{
        py: { xs: 6, lg: 15 }, // Adjusted padding for consistency
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
          gap: { xs: 4, lg: 10 }, // Responsive gap
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
            textAlign: { xs: 'center', lg: 'left' },
            mb: { xs: 4, lg: 0 } // Margin bottom for small screens
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
              fontSize: { xs: '2rem', lg: '2.5rem' },
              fontWeight: 'bold',
              mb: 2 // Margin bottom for spacing
            }}
          >
            Detailed Statistics
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            gutterBottom
            sx={{
              fontSize: { xs: '1rem', lg: '1.125rem' },
              mb: 2 // Margin bottom for spacing
            }}
          >
            View all mining-related information in real-time, at any point, and decide which pools you want to mine.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{
              px: 4,
              py: 1,
              mt: { xs: 4, lg: 2 },
              display: 'block',
              mx: { xs: 'auto', lg: 0 }, // Center button on small screens
              mb: { xs: 6, lg: 0 } // Margin bottom for small screens
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
