import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Material-UI Components
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { gridSpacing } from 'store/constant';
import { FitScreen } from '@mui/icons-material';

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
      container
      spacing={gridSpacing}
      justifyContent="center"
      sx={{
        minHeight: '80vh',
        pt: 5,
        borderLeft: 1,
        borderColor: 'grey.400', // MUI's color system for a gray color,
        height: 'FitScreen'
      }}
    >
      {' '}
      <Typography textAlign={'left'} px={5} fontSize={20} fontWeight={500} color={'#123591'} width={'100%'}>
        Broker
      </Typography>
      <Grid item xs={12} md={6} textAlign="center">
        {/* Center the image */}
        <Box display="flex" justifyContent="center" mb={2}>
          <img
            src="https://web.algorooms.com/static/media/broker.f7382bf4a577d51366641db39ab94138.svg"
            alt="No Brokers"
            style={{ maxWidth: '400px', height: 'auto' }}
            loading="lazy"
          />
        </Box>
        {/* Text below the image */}
        <Typography variant="h6" gutterBottom>
          No Brokers found. Please Add brokers!
        </Typography>
        {/* Button to add a broker */}
        <Button
          sx={{
            border: '2px dashed gray', // Adjust the color and width as needed
            borderRadius: '4px', // Optional: Adjust the border-radius if needed
            padding: '8px 16px', // Optional: Adjust the padding if needed
            '&:hover': {
              borderColor: 'black' // Optional: Change border color on hover
            }
          }}
          onClick={handleAddBroker}
        >
          + Add Broker
        </Button>
      </Grid>
    </Grid>
  );
};

export default Index;
