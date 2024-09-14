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
              <img src={Image} alt="Why choose Jet Algo Trading" style={{ maxWidth: '100%' }} />
            </Box>
          </Grid>

          {/* Text */}
          <Grid item xs={12} lg={6} data-aos="fade-left" data-aos-offset="100">
            <Typography
              variant="h1"
              component="h1"
              sx={{
                mb: 2,
                fontWeight: 'bold',
                fontSize: { xs: '1.5rem', lg: '2rem' } // Responsive font size
              }}
            >
              Why You Should Choose Jet Algo Trading
            </Typography>
            <Typography
              variant="body1"
              component="p"
              sx={{
                mb: 4,
                color: 'text.secondary',
                fontSize: { xs: '1rem', lg: '1.125rem' } // Responsive font size
              }}
            >
              "Experience the Next Generation of Trading: No Financial Borders, No Extra Fees, No Fake Reviews"
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              aria-label="Learn more about Jet Algo Trading" // Added aria-label for accessibility
            >
              Learn More
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Why;
