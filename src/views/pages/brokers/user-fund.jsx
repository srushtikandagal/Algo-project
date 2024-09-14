import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {
  Box,
  Typography,
  CircularProgress,
  Alert,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Grid,
  Card,
  CardContent,
  Divider
} from '@mui/material';

// Fetch user funds based on fund type (equity or commodity)
const fetchUserFunds = async (fundType) => {
  const accessToken = localStorage.getItem('upstox_access_token');
  if (!accessToken) throw new Error('Access token not found');

  const response = await axios.get(`https://jetalgosoftware.com/broker/upstox/fund/margin/upstox?uuid=wrebgdf&type=${fundType}`, {
    headers: { accesstoken: accessToken }
  });

  return response.data.response.data; // Adjusted to match the new data structure
};

const UserFunds = () => {
  const { type } = useParams();
  const [fundType, setFundType] = useState(type ?? 'equity');

  const { data, error, isLoading, refetch } = useQuery(['userFunds', fundType], () => fetchUserFunds(fundType), {
    retry: false,
    refetchOnWindowFocus: false
  });

  useEffect(() => {
    refetch(); // Refetch data when fundType changes
  }, [fundType, refetch]);

  const handleFundTypeChange = (event) => {
    setFundType(event.target.value);
  };

  // Extract the margin data for the selected fund type
  const marginData = data ? data[fundType] : {};

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Funds
      </Typography>
      <Divider sx={{ my: 2 }} />
      <FormControl fullWidth margin="normal">
        <InputLabel id="fund-type-label">Fund Type</InputLabel>
        <Select labelId="fund-type-label" value={fundType} onChange={handleFundTypeChange} label="Fund Type">
          <MenuItem value="equity">Equity</MenuItem>
          <MenuItem value="commodity">Commodity</MenuItem>
        </Select>
      </FormControl>
      {isLoading && <CircularProgress color="primary" />}
      {error && <Alert severity="error">{error.message}</Alert>}
      {data ? (
        <Grid container spacing={3} mt={2}>
          {Object.entries(marginData).map(([key, value]) => (
            <Grid item xs={12} sm={6} md={4} key={key}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6" component="div">
                    {key.replace(/_/g, ' ').toUpperCase()}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {value.toFixed(2)}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography mt={2}>No data available</Typography>
      )}
    </Box>
  );
};

export default UserFunds;
