import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import GroupAddIcon from '@mui/icons-material/GroupAdd'; // Icon for referrals
import { useTheme } from '@mui/material/styles';

const TotalReferralsCard = () => {
  const theme = useTheme();

  // Styles for the Paper component and icon
  const paperStyle = {
    p: 3,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundImage: 'linear-gradient(135deg, #eceff1, #cfd8dc)', // Soft gradient background
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[4]
  };

  const iconStyle = {
    fontSize: 60,
    color: theme.palette.primary.main,
    mr: 2
  };

  return (
    <Paper sx={paperStyle}>
      <Box display="flex" alignItems="center">
        <GroupAddIcon sx={iconStyle} />
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
            Total Referrals
          </Typography>
          <Typography variant="body1" sx={{ mt: 0.5, color: theme.palette.text.secondary }}>
            Grow your network and see the impact.
          </Typography>
        </Box>
      </Box>
      <Box sx={{ textAlign: 'right' }}>
        <Typography variant="h2" sx={{ fontWeight: 'bold', color: 'secondary.main' }}>
          300
        </Typography>
        <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
          Referrals this month!
        </Typography>
      </Box>
    </Paper>
  );
};

export default TotalReferralsCard;
