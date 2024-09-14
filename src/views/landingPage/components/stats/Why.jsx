import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import Image from '../../assets/img/why-img.png';

const Why = () => {
  return (
    <Box component="section" sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center" direction={{ xs: 'column-reverse', lg: 'row' }}>
          {/* Image */}
          <Grid item xs={12} lg={6} data-aos="fade-right" data-aos-offset="100">
            <Box sx={{ textAlign: { xs: 'center', lg: 'left' } }}>
              <img src={Image} alt="why choose" style={{ maxWidth: '100%' }} />
            </Box>
          </Grid>

          {/* Text */}
          <Grid item xs={12} lg={6} data-aos="fade-left" data-aos-offset="100">
            <Typography variant="h1" component="h1" sx={{ mb: 2, fontWeight: 'bold' }}>
              Why You Should Choose Jet Algo Trading
            </Typography>
            <Typography variant="body1" component="p" sx={{ mb: 4, color: 'text.secondary' }}>
              Experience the next generation cryptocurrency platform. No financial borders, extra fees, and fake reviews.
            </Typography>
            <Button variant="contained" color="primary" size="large">
              Learn More
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Why;
