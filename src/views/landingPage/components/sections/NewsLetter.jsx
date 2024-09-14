import React from 'react';
import { Box, Container, Typography, useTheme, useMediaQuery, TextField, Button } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import NewsImage from '../../assets/img/newsletter-bg.png'; // Import the image

const NewsLetter = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 5, lg: 11 },
        pb: { lg: 20 },
        backgroundImage: `url(${NewsImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        overflow: 'hidden' // Ensure the overlay does not exceed the container
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', lg: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'primary.main',
            p: 6,
            borderRadius: 2,
            height: isLargeScreen ? 216 : 'auto',
            color: 'common.white',
            position: 'relative', // Position for the overlay
            zIndex: 1, // Ensure it is above the overlay
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: theme.palette.primary.main,
              opacity: 0.8, // Adjust the opacity as needed
              zIndex: -1 // Place the overlay behind content
            }
          }}
        >
          {/* Text Section */}
          <Box
            sx={{
              flex: 1,
              textAlign: { xs: 'center', lg: 'left' },
              mb: { xs: 4, lg: 0 }
            }}
          >
            <Typography
              variant="h3"
              component="h3"
              sx={{
                mb: 2,
                fontSize: { xs: '2rem', lg: '3rem' }, // Increased title size
                fontWeight: 'bold',
                color: 'common.white'
              }}
            >
              Start Mining Now
            </Typography>
            <Typography
              variant="body1"
              sx={{
                maxWidth: { xs: '100%', lg: 348 },
                mb: 4,
                color: 'common.white'
              }}
            >
              Join now with Jet Algo Trading to get the latest news and start mining now.
            </Typography>
          </Box>

          {/* Input and Button Section */}
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              gap: 2, // Space between input and button
              flexDirection: { xs: 'column', lg: 'row' },
              textAlign: { xs: 'center', lg: 'right' },
              justifyContent: 'end'
            }}
          >
            <TextField
              variant="standard"
              placeholder="Your email"
              sx={{
                input: {
                  borderBottom: `1px solid ${theme.palette.common.white}`,
                  color: 'common.white'
                },
                mb: { xs: 2, lg: 0 },
                width: { xs: '100%', lg: 'auto' }
              }}
            />
            <Button
              variant="contained"
              color="secondary"
              sx={{
                px: 8,
                py: 2,
                borderRadius: '20px', // Rounded corners
                backgroundColor: 'common.white',
                color: 'primary.main',
                width: { xs: '100%', lg: 'auto' }
              }}
            >
              Subscribe
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default NewsLetter;
