import React, { useState } from 'react';
import { Grid, Box, Typography, TextField, Button, Avatar } from '@mui/material';
import { YouTube } from '@mui/icons-material';

const BrokerForm = ({ selectedBroker }) => {
  const [clientId, setClientId] = useState('');
  const [formFields, setFormFields] = useState({});

  const handleInputChange = (field, value) => {
    setFormFields((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log('Form Data:', formFields);
  };

  return (
    <Grid
      container
      direction="column"
      spacing={2}
      sx={{
        width: '100%',
        px: { md: 3 },
        minHeight: '82vh',
        borderLeft: 1,
        borderColor: '#e0e0e0',
        pt: { xs: 3, md: 0 }
      }}
    >
      {/* Title and Broker Info */}
      <Grid item xs={12}>
        <Typography variant="h6" gutterBottom fontSize={18} fontWeight={700}>
          Add New Broker
        </Typography>
        <Box display="flex" alignItems="center" gap={2}>
          <Avatar
            src={selectedBroker.icon}
            alt={selectedBroker.name}
            sx={{ bgcolor: 'white', width: 60, height: 60, mb: 1, border: '2px solid gray' }}
          />
          <Box fontWeight={700}>
            <Typography fontSize={19} fontWeight={500}>
              {selectedBroker.name}
            </Typography>
            <Typography fontSize={13} display={'flex'} alignItems={'center'} gap={1}>
              How to Add {selectedBroker.name} broker? <YouTube color="error" />
            </Typography>
          </Box>
        </Box>
      </Grid>

      {/* Dynamic Input Fields */}
      <Grid item xs={12}>
        {selectedBroker.requiredFields.map((field, index) => (
          <TextField key={index} fullWidth label={field} sx={{ mt: 2 }} onChange={(e) => handleInputChange(field, e.target.value)} />
        ))}
      </Grid>

      {/* Submit Button */}
      <Grid item xs={12} mt={3}>
        <Box display="flex" justifyContent="center">
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSubmit}
            sx={{
              borderRadius: '10px', // Rounded button
              py: 1 // Padding on the y-axis
            }}
          >
            Submit
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default BrokerForm;
