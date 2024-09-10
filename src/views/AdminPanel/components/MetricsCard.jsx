import PropTypes from 'prop-types';
import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Avatar, Box, Grid, Typography, Menu, MenuItem } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import SkeletonEarningCard from 'ui-component/cards/Skeleton/EarningCard';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import GetAppTwoToneIcon from '@mui/icons-material/GetAppOutlined'; // Icon for Export
import ArchiveTwoToneIcon from '@mui/icons-material/ArchiveOutlined'; // Icon for Archive
import SaveTwoToneIcon from '@mui/icons-material/SaveOutlined'; // Icon for Save

// Define default color schemes for the component
const defaultColorSchemes = [
  { light: '#42A5F5', dark: '#0D47A1' },
  { light: '#42A5F5', dark: '#0D47A1' },
  { light: '#42A5F5', dark: '#0D47A1' },
  { light: '#42A5F5', dark: '#0D47A1' }
];

const MetricsCard = ({ title, value, isLoading, icon, colorSchemeIndex, background }) => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);

  // Select the color scheme based on the index provided or fallback to the first one
  const colorScheme = defaultColorSchemes[colorSchemeIndex] || defaultColorSchemes[0];

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {isLoading ? (
        <SkeletonEarningCard />
      ) : (
        <MainCard
          border={false}
          content={false}
          sx={{
            background: background || 'linear-gradient(45deg, #6a11cb 30%, #2571fc 90%)',
            color: '#fff',
            overflow: 'hidden',
            position: 'relative',
            '&:after': {
              content: '""',
              position: 'absolute',
              width: 210,
              height: 210,
              background: colorScheme.light,
              borderRadius: '50%',
              top: { xs: -105, sm: -85 },
              right: { xs: -140, sm: -95 },
              opacity: 0.3
            },
            '&:before': {
              content: '""',
              position: 'absolute',
              width: 210,
              height: 210,
              background: colorScheme.dark,
              borderRadius: '50%',
              top: { xs: -155, sm: -125 },
              right: { xs: -70, sm: -15 },
              opacity: 0.5
            }
          }}
        >
          <Box sx={{ p: 2.25 }}>
            <Grid container direction="column">
              <Grid item>
                <Grid container justifyContent="space-between">
                  <Grid item>
                    <Avatar
                      variant="rounded"
                      sx={{
                        color: '#fff', // Set icon color to white
                        bgcolor: colorScheme.dark, // Background color
                        mt: 1
                      }}
                    >
                      {typeof icon === 'string' ? <img src={icon} alt={title} style={{ width: 32, height: 32 }} /> : icon}
                    </Avatar>
                  </Grid>
                  <Grid item>
                    <Avatar
                      variant="rounded"
                      sx={{
                        color: '#fff',
                        bgcolor: colorScheme.dark,
                        zIndex: 1
                      }}
                      aria-controls="menu-metrics-card"
                      aria-haspopup="true"
                      onClick={handleClick}
                    >
                      <MoreHorizIcon fontSize="inherit" />
                    </Avatar>
                    <Menu
                      id="menu-metrics-card"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                      variant="selectedMenu"
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right'
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right'
                      }}
                    >
                      <MenuItem onClick={handleClose}>
                        <GetAppTwoToneIcon sx={{ mr: 1.5 }} /> Export
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <ArchiveTwoToneIcon sx={{ mr: 1.5 }} /> Archive
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <SaveTwoToneIcon sx={{ mr: 1.5 }} /> Save
                      </MenuItem>
                    </Menu>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container alignItems="center">
                  <Grid item>
                    <Typography sx={{ fontSize: '2.125rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>{value}</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ mb: 1.25 }}>
                <Typography
                  sx={{
                    fontSize: '1rem',
                    fontWeight: 500,
                    color: '#000' // Set title text color to black
                  }}
                >
                  {title}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </MainCard>
      )}
    </>
  );
};

MetricsCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  colorSchemeIndex: PropTypes.number,
  background: PropTypes.string
};

MetricsCard.defaultProps = {
  isLoading: false,
  icon: <ArchiveOutlinedIcon />,
  colorSchemeIndex: 0
};

export default MetricsCard;
