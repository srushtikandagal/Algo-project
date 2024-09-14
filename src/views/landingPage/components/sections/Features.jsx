import React from 'react';
import { Box, Container, Typography } from '@mui/material';

// Importing components
import FeatureSection1 from './FeatureSection1';
import FeatureSection2 from './FeatureSection2';
import FeatureSection3 from './FeatureSection3';

const Features = () => {
  return (
    <Box
      component="section"
      sx={{
        pt: { xs: 6, lg: 12 },
        pb: { xs: 6, lg: 12 },
        backgroundColor: 'background.default'
      }}
    >
      <Container maxWidth="lg">
        <Box textAlign="center" mb={6}>
          <Typography variant="h1" component="h2" sx={{ mb: 6 }} data-aos="fade-up" data-aos-offset="100">
            Market Sentiments, Portfolio Management, and Infrastructure Control
          </Typography>
        </Box>
        <FeatureSection1 />
        <FeatureSection2 />
        <FeatureSection3 />
      </Container>
    </Box>
  );
};

export default Features;
