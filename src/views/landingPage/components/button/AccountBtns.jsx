import React from 'react';
import { Box, Typography, Link, useTheme } from '@mui/material';
import Login from './Login';

const navData = [
  { name: 'Products', href: '#/' },
  { name: 'Features', href: '#/' },
  { name: 'About', href: '#/' },
  { name: 'Contact', href: '#/' }
];

const AccountBtns = () => {
  const theme = useTheme();

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
      <Box sx={{ display: 'flex', gap: 3 }}>
        {navData.map((item) => (
          <Link
            href={item.href}
            key={item.name}
            sx={{
              display: 'block',
              borderBottom: `2px solid transparent`,
              '&:hover': {
                borderBottom: `2px solid ${theme.palette.primary.main}`,
                transition: 'border-bottom 0.3s ease'
              },
              color: theme.palette.text.primary,
              textDecoration: 'none',
              padding: '0.5rem'
            }}
          >
            <Typography variant="body1">{item.name}</Typography>
          </Link>
        ))}
      </Box>
      <Login />
    </Box>
  );
};

export default AccountBtns;
