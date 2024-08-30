import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Material-UI Components
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { gridSpacing } from 'store/constant';
import { CorporateFareOutlined } from '@mui/icons-material';

const Index = ({ text }) => {
  const [isLoading, setLoading] = useState(true);
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    setLoading(false);
  }, []);

  // Handler for button click
  const handleAddBroker = () => {
    navigate('/dashboard/broker/add-broker');
  };

  return (
    <Grid
      spacing={gridSpacing}
      justifyContent="center"
      sx={{
        minHeight: '82vh',
        borderLeft: 1,
        borderColor: '#e0e0e0', // MUI's color system for a gray color,
        display: { xs: 'none', sm: 'none', md: 'block' }
      }}
    >
      {' '}
      <Typography textAlign={'left'} px={5} fontSize={20} fontWeight={500} width={'100%'}>
        {text || ''}
      </Typography>
      <Grid item xs={12} textAlign={'center'}>
        {/* Center the image */}
        <Box mb={2}>
          <img
            src="https://web.algorooms.com/static/media/broker.f7382bf4a577d51366641db39ab94138.svg"
            alt="No Brokers"
            style={{ maxWidth: '350px' }}
            loading="lazy"
          />
        </Box>
        {/* Text below the image */}
        <Typography variant="h6" gutterBottom>
          No Brokers found. Please Add brokers!
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Index;
