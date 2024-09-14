import React, { useState } from 'react';
import { AppBar, Box, Container, IconButton, Toolbar, Button, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = ({ setNavMobile }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
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
          <Box component="a" href="#home" sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center', textDecoration: 'none' }}>
            <Box component="span" sx={{ fontSize: { md: '24px', xs: '18px' }, fontWeight: 'bold', color: 'text.primary' }}>
              Jet Algo Trading
            </Box>
          </Box>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
            <Button
              href="#home"
              sx={{
                color: 'text.primary',
                '&:hover': {
                  color: 'primary.main'
                },
                borderRadius: 1,
                px: 2,
                py: 1,
                textTransform: 'none',
                '&:focus': {
                  outline: 'none',
                  borderBottom: '2px solid primary.main',
                  color: 'primary.main'
                }
              }}
            >
              Home
            </Button>
            <Button
              href="#why"
              sx={{
                color: 'text.primary',
                '&:hover': {
                  color: 'primary.main'
                },
                borderRadius: 1,
                px: 2,
                py: 1,
                textTransform: 'none',
                '&:focus': {
                  outline: 'none',
                  borderBottom: '2px solid primary.main',
                  color: 'primary.main'
                }
              }}
            >
              Why
            </Button>
            <Button
              href="#trade"
              sx={{
                color: 'text.primary',
                '&:hover': {
                  color: 'primary.main'
                },
                borderRadius: 1,
                px: 2,
                py: 1,
                textTransform: 'none',
                '&:focus': {
                  outline: 'none',
                  borderBottom: '2px solid primary.main',
                  color: 'primary.main'
                }
              }}
            >
              Trade
            </Button>
            <Button
              href="#features"
              sx={{
                color: 'text.primary',
                '&:hover': {
                  color: 'primary.main'
                },
                borderRadius: 1,
                px: 2,
                py: 1,
                textTransform: 'none',
                '&:focus': {
                  outline: 'none',
                  borderBottom: '2px solid primary.main',
                  color: 'primary.main'
                }
              }}
            >
              Features
            </Button>
            <Button
              href="#newsletter"
              sx={{
                color: 'text.primary',
                '&:hover': {
                  color: 'primary.main'
                },
                borderRadius: 1,
                px: 2,
                py: 1,
                textTransform: 'none',
                '&:focus': {
                  outline: 'none',
                  borderBottom: '2px solid primary.main',
                  color: 'primary.main'
                }
              }}
            >
              NewsLetter
            </Button>
            <Button
              href="#footer"
              sx={{
                color: 'text.primary',
                '&:hover': {
                  color: 'primary.main'
                },
                borderRadius: 1,
                px: 2,
                py: 1,
                textTransform: 'none',
                '&:focus': {
                  outline: 'none',
                  borderBottom: '2px solid primary.main',
                  color: 'primary.main'
                }
              }}
            >
              Footer
            </Button>
            <Button
              href="#login"
              sx={{
                color: 'white',
                backgroundColor: 'primary.main',
                '&:hover': {
                  backgroundColor: 'primary.dark'
                },
                borderRadius: '50px',
                px: 3,
                py: 1,
                textTransform: 'none',
                '&:focus': {
                  outline: 'none'
                }
              }}
            >
              Register
            </Button>
          </Box>

          {/* Mobile Menu Button */}
          <IconButton edge="end" onClick={handleMenuOpen} sx={{ display: { md: 'none' }, color: 'text.primary' }} aria-label="open menu">
            <MenuIcon />
          </IconButton>

          {/* Mobile Menu */}
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose} sx={{ display: { md: 'none' } }}>
            <MenuItem
              onClick={handleMenuClose}
              component="a"
              href="#home"
              sx={{
                '&:hover': {
                  color: 'primary.main'
                },
                '&:focus': {
                  borderColor: 'primary.main',
                  outline: 'none'
                }
              }}
            >
              Home
            </MenuItem>
            <MenuItem
              onClick={handleMenuClose}
              component="a"
              href="#why"
              sx={{
                '&:hover': {
                  color: 'primary.main'
                },
                '&:focus': {
                  borderColor: 'primary.main',
                  outline: 'none'
                }
              }}
            >
              Why
            </MenuItem>
            <MenuItem
              onClick={handleMenuClose}
              component="a"
              href="#trade"
              sx={{
                '&:hover': {
                  color: 'primary.main'
                },
                '&:focus': {
                  borderColor: 'primary.main',
                  outline: 'none'
                }
              }}
            >
              Trade
            </MenuItem>
            <MenuItem
              onClick={handleMenuClose}
              component="a"
              href="#features"
              sx={{
                '&:hover': {
                  color: 'primary.main'
                },
                '&:focus': {
                  borderColor: 'primary.main',
                  outline: 'none'
                }
              }}
            >
              Features
            </MenuItem>
            <MenuItem
              onClick={handleMenuClose}
              component="a"
              href="#newsletter"
              sx={{
                '&:hover': {
                  color: 'primary.main'
                },
                '&:focus': {
                  borderColor: 'primary.main',
                  outline: 'none'
                }
              }}
            >
              NewsLetter
            </MenuItem>
            <MenuItem
              onClick={handleMenuClose}
              component="a"
              href="#footer"
              sx={{
                '&:hover': {
                  color: 'primary.main'
                },
                '&:focus': {
                  borderColor: 'primary.main',
                  outline: 'none'
                }
              }}
            >
              Footer
            </MenuItem>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
