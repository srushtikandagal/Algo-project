import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Box, Typography, CircularProgress, Alert, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { match } from 'ts-pattern';

// Type for API response
interface FundResponse {
  data: {
    availableMargin: number;
    usedMargin: number;
    // Add other fields as needed
  };
}

const fetchUserFunds = async (fundType: 'equity' | 'commodity') => {
  const accessToken = localStorage.getItem('upstox_access_token');
  if (!accessToken) throw new Error('Access token not found');

  const response = await axios.get<FundResponse>(
    `https://jetalgosoftware.com/broker/upstox/fund/margin/upstox?uuid=wrebgdf&type=${fundType}`,
    {
      headers: { Authorization: `Bearer ${accessToken}` }
    }
  );

  return response.data;
};

const UserFunds: React.FC = () => {
  const { type } = useParams<{ type: 'equity' | 'commodity' }>();
  const [fundType, setFundType] = useState<'equity' | 'commodity'>(type ?? 'equity');

  const { data, error, isLoading, refetch } = useQuery(['userFunds', fundType], () => fetchUserFunds(fundType), {
    retry: false,
    refetchOnWindowFocus: false
  });

  useEffect(() => {
    // Refetch data whenever fundType changes
    refetch();
  }, [fundType, refetch]);

  const handleFundTypeChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setFundType(event.target.value as 'equity' | 'commodity');
  };

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        User Funds
      </Typography>
      <FormControl fullWidth margin="normal">
        <InputLabel id="fund-type-label">Fund Type</InputLabel>
        <Select labelId="fund-type-label" value={fundType} onChange={handleFundTypeChange} label="Fund Type">
          <MenuItem value="equity">Equity</MenuItem>
          <MenuItem value="commodity">Commodity</MenuItem>
        </Select>
      </FormControl>
      {match({ isLoading, error, data })
        .with({ isLoading: true }, () => <CircularProgress />)
        .with({ error: (e: Error) => !!e }, () => <Alert severity="error">{error?.message}</Alert>)
        .with({ data: (d) => !!d }, () => (
          <Box>
            <Typography variant="h6">Available Margin: {data?.data?.availableMargin}</Typography>
            <Typography variant="h6">Used Margin: {data?.data?.usedMargin}</Typography>
            {/* Render other fund details as needed */}
          </Box>
        ))
        .otherwise(() => (
          <Typography>No data available</Typography>
        ))}
    </Box>
  );
};

export default UserFunds;
