import React, { useState } from 'react';
import { AppBar, Box, Container, IconButton, Toolbar, Button, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

const Header = ({ setNavMobile }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const navButtonStyles = {
    color: 'text.primary',
    borderRadius: 1,
    px: 2,
    py: 1,
    textTransform: 'none',
    '&:hover': {
      color: 'primary.main'
    },
    '&:focus': {
      outline: 'none',
      borderBottom: '2px solid',
      borderColor: 'primary.main',
      color: 'primary.main'
    }
  };

  const navMenuItemStyles = {
    '&:hover': {
      color: 'primary.main'
    },
    '&:focus': {
      borderColor: 'primary.main',
      outline: 'none'
    }
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: 'white',
        boxShadow: 'none',
        zIndex: 20,
        top: 0
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo */}
          <Box
            component="a"
            href="#home"
            sx={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              fontSize: { md: '24px', xs: '18px' },
              fontWeight: 'bold',
              color: 'text.primary'
            }}
          >
            Jet Algo Trading
          </Box>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
            <Button href="#home" sx={navButtonStyles}>
              Home
            </Button>
            <Button href="#why" sx={navButtonStyles}>
              Why
            </Button>
            <Button href="#trade" sx={navButtonStyles}>
              Trade
            </Button>
            <Button href="#features" sx={navButtonStyles}>
              Features
            </Button>
            <Button href="#newsletter" sx={navButtonStyles}>
              NewsLetter
            </Button>
            <Button
              sx={{
                color: 'white',
                backgroundColor: 'primary.main',
                borderRadius: '50px',
                px: 3,
                py: 1,
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: 'primary.dark'
                },
                '&:focus': {
                  outline: 'none'
                }
              }}
              onClick={() => navigate('/login')}
            >
              Login
            </Button>
          </Box>

          {/* Mobile Menu Button */}
          <IconButton edge="end" onClick={handleMenuOpen} sx={{ display: { md: 'none' }, color: 'text.primary' }} aria-label="open menu">
            <MenuIcon />
          </IconButton>

          {/* Mobile Menu */}
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose} sx={{ display: { md: 'none' } }}>
            <MenuItem onClick={handleMenuClose} component="a" href="#home" sx={navMenuItemStyles}>
              Home
            </MenuItem>
            <MenuItem onClick={handleMenuClose} component="a" href="#why" sx={navMenuItemStyles}>
              Why
            </MenuItem>
            <MenuItem onClick={handleMenuClose} component="a" href="#trade" sx={navMenuItemStyles}>
              Trade
            </MenuItem>
            <MenuItem onClick={handleMenuClose} component="a" href="#features" sx={navMenuItemStyles}>
              Features
            </MenuItem>
            <MenuItem onClick={handleMenuClose} component="a" href="#newsletter" sx={navMenuItemStyles}>
              NewsLetter
            </MenuItem>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
