import React from 'react';
import { Box, Button, Link, Typography, useTheme } from '@mui/material';

const Login = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        fontWeight: 'medium',
        gap: 2
      }}
    >
      {/* Login link */}
      <Link
        href="/login"
        sx={{
          color: theme.palette.text.primary,
          '&:hover': {
            color: theme.palette.primary.main,
            transition: 'color 0.3s'
          },
          textDecoration: 'none'
        }}
      >
        <Typography variant="body1">Login</Typography>
      </Link>
      {/* Separator */}
      <Typography
        variant="body1"
        sx={{
          color: theme.palette.text.secondary,
          fontWeight: 'thin'
        }}
      >
        |
      </Typography>
      {/* Register button */}
      <Button
        variant="contained"
        color="primary"
        sx={{
          borderRadius: '9999px',
          textTransform: 'none',
          paddingX: 4,
          paddingY: 1,
          '&:hover': {
            backgroundColor: theme.palette.primary.dark,
            transition: 'background-color 0.3s'
          }
        }}
      >
        Register
      </Button>
    </Box>
  );
};

export default Login;
