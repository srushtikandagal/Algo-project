import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import Image from '../../assets/img/hero-img.jpg'; // Ensure this path is correct
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" sx={{ py: 4, pt: { xs: 8, lg: 4 } }}>
      <Box display="flex" flexDirection={{ xs: 'column', lg: 'row' }} alignItems="center" sx={{ gap: { xs: 4, lg: 0 } }}>
        {/* Hero text section */}
        <Box flex={1}>
          {/* Badge text */}
          <Box
            sx={{
              backgroundColor: 'background.paper',
              p: 1,
              mb: 3,
              borderRadius: '50px',
              pl: 1,
              pr: 3,
              maxWidth: 365
            }}
            data-aos="fade-down"
            data-aos-delay="400"
          >
            <Box display="flex" alignItems="center" justifyContent="space-between" sx={{ typography: { xs: 'body2', lg: 'body1' } }}>
              <Box
                sx={{
                  backgroundColor: 'primary.main',
                  color: 'white',
                  borderRadius: '50px',
                  p: 1,
                  px: 2,
                  fontWeight: 'medium'
                }}
              >
                75% SAVE
              </Box>
            </Box>
          </Box>

          {/* Title */}
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: 32, lg: 64 },
              lineHeight: 1.2,
              mb: 2
            }}
            data-aos="fade-down"
            data-aos-delay="500"
          >
            Fast & Secure Asset Trading Platform
          </Typography>

          {/* Subtitle */}
          <Typography
            sx={{
              maxWidth: 440,
              lineHeight: 1.6,
              mb: 4
            }}
            data-aos="fade-down"
            data-aos-delay="600"
          >
            Buy and Sell Assets with Confidence—Trusted by 7.7M+ Users and Over ₹100 cr in Transactions
          </Typography>

          {/* Button */}
          <Button
            variant="contained"
            color="primary"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              px: 4,
              py: 2,
              borderRadius: '50px',
              textTransform: 'none',
              fontWeight: 'bold',
              fontSize: { xs: 14, lg: 16 }
            }}
            data-aos="fade-down"
            data-aos-delay="700"
            onClick={() => navigate('/register')}
          >
            Try for Free
            <IoIosArrowDroprightCircle size={24} />
          </Button>
        </Box>

        {/* Hero image section */}
        <Box flex={1} display="flex" justifyContent="center" sx={{ maxWidth: '100%' }}>
          <img
            src={Image}
            alt="Trading platform banner"
            style={{ maxWidth: '100%', height: 'auto' }}
            data-aos="fade-up"
            data-aos-delay="600"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Hero;
