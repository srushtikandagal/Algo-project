import React from 'react';
import { Box, TextField, MenuItem, Button, Typography, useTheme } from '@mui/material';

const CalcForm = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '942px',
        margin: '0 auto',
        backgroundColor: theme.palette.background.paper,
        borderRadius: '16px',
        padding: '24px',
        boxShadow: theme.shadows[5],
        color: theme.palette.text.primary,
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
        dataAos: 'fade-up',
        dataAosOffset: 500
      }}
    >
      <form
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
          gap: 3,
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Enter your hash rate"
          InputProps={{
            sx: {
              color: theme.palette.text.secondary,
              '&::placeholder': {
                color: theme.palette.text.secondary
              }
            }
          }}
        />
        <TextField select fullWidth variant="outlined" sx={{ backgroundColor: theme.palette.background.paper }}>
          <MenuItem value="TH/s">TH/s</MenuItem>
          <MenuItem value="H/s">H/s</MenuItem>
          <MenuItem value="KH/s">KH/s</MenuItem>
          <MenuItem value="MH/s">MH/s</MenuItem>
          <MenuItem value="GH/s">GH/s</MenuItem>
        </TextField>
        <Button
          variant="contained"
          color="primary"
          sx={{
            paddingX: 4,
            textTransform: 'none',
            alignSelf: 'flex-start',
            '&:hover': {
              backgroundColor: theme.palette.primary.dark
            }
          }}
        >
          Calculate
        </Button>
      </form>
      <Box sx={{ marginTop: 6 }}>
        <Typography variant="subtitle1" color="primary" fontWeight="medium" mb={2}>
          ESTIMATED 24 HOUR REVENUE:
        </Typography>
        <Typography variant="h4" fontWeight="bold" mb={2}>
          0.055 130 59 ETH <span style={{ color: theme.palette.primary.main }}>($1275)</span>
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ letterSpacing: '0.1em' }}>
          Revenue will change based on mining difficulty and Ethereum price.
        </Typography>
      </Box>
    </Box>
  );
};

export default CalcForm;
