import React from 'react';
import { Box, Container, Typography, Link, IconButton, useTheme, useMediaQuery } from '@mui/material';
import { YouTube, Instagram, Twitter, LinkedIn } from '@mui/icons-material';
import Logo from '../../assets/img/crypto.jpg';
import VisaImg from '../../assets/img/visa.png';
import MastercardImg from '../../assets/img/mastercard.png';
import BitcoinImg from '../../assets/img/bitcoin.png';

const Footer = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Box
      component="footer"
      sx={{
        pt: { xs: 0, lg: 6 },
        backgroundColor: theme.palette.background.paper,
        mt: { xs: 0, lg: -10 }
      }}
      data-aos="fade-up"
      data-aos-offset="400"
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', lg: 'row' },
            gap: 4,
            mb: 6
          }}
        >
          {/* Logo */}
          <Box sx={{ flex: 1, textAlign: 'center', mb: 6 }}>
            <Link href="#/" underline="none">
              <img
                src={Logo}
                alt="Logo"
                style={{
                  border: '1px solid',
                  borderRadius: theme.shape.borderRadius,
                  boxShadow: theme.shadows[3],
                  width: '100%',
                  maxWidth: 285
                }}
              />
            </Link>
          </Box>

          {/* Quick Links and Resources Links */}
          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4, textAlign: { xs: 'center', lg: 'left' } }}>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, gap: 4 }}>
              {/* Quick Links */}
              <Box>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Quick Links
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Link href="#/" variant="body2" color="text.secondary">
                    Home
                  </Link>
                  <Link href="#/" variant="body2" color="text.secondary">
                    Products
                  </Link>
                  <Link href="#/" variant="body2" color="text.secondary">
                    About
                  </Link>
                  <Link href="#/" variant="body2" color="text.secondary">
                    Features
                  </Link>
                  <Link href="#/" variant="body2" color="text.secondary">
                    Contact
                  </Link>
                </Box>
              </Box>

              {/* Resources Links */}
              <Box>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Resources Links
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Link href="#/" variant="body2" color="text.secondary">
                    Download Whitepaper
                  </Link>
                  <Link href="#/" variant="body2" color="text.secondary">
                    Smart Token
                  </Link>
                  <Link href="#/" variant="body2" color="text.secondary">
                    Blockchain Explorer
                  </Link>
                  <Link href="#/" variant="body2" color="text.secondary">
                    Crypto API
                  </Link>
                  <Link href="#/" variant="body2" color="text.secondary">
                    Interest
                  </Link>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Payment Systems */}
          <Box sx={{ flex: 1, textAlign: 'center' }}>
            <Typography variant="h6" sx={{ mb: 2, fontSize: '2rem' }}>
              We accept the following payment systems
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
              <img src={VisaImg} alt="Visa" style={{ width: 80 }} />
              <img src={MastercardImg} alt="Mastercard" style={{ width: 80 }} />
              <img src={BitcoinImg} alt="Bitcoin" style={{ width: 80 }} />
            </Box>
          </Box>
        </Box>
      </Container>

      {/* Footer Bottom */}
      <Box
        sx={{
          py: 3,
          borderTop: `1px solid ${theme.palette.divider}`,
          backgroundColor: theme.palette.background.paper,
          textAlign: 'center'
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              // flexDirection: 'column'
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 2
            }}
          >
            {/* Copy Text */}
            <Typography variant="body2" color="text.secondary">
              &copy; 2024 Jet Algo trading. All rights reserved.
            </Typography>

            {/* Social Icons */}
            <Box sx={{ display: 'flex', gap: 2 }}>
              <IconButton href="#/" color="inherit">
                <YouTube />
              </IconButton>
              <IconButton href="#/" color="inherit">
                <Instagram />
              </IconButton>
              <IconButton href="#/" color="inherit">
                <Twitter />
              </IconButton>
              <IconButton href="#/" color="inherit">
                <LinkedIn />
              </IconButton>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
