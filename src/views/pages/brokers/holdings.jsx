import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import {
  Box,
  Typography,
  CircularProgress,
  Alert,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Divider
} from '@mui/material';

// Fetch holdings data
const fetchHoldings = async () => {
  const accessToken = localStorage.getItem('upstox_access_token');
  if (!accessToken) throw new Error('Access token not found');

  const response = await axios.get('https://jetalgosoftware.com/broker/upstox/get/holdings/upstox?uuid=lqjenfljwrben', {
    headers: { accesstoken: accessToken }
  });

  return response.data.response.data; // Adjusted to match the new data structure
};

const Holdings = () => {
  const { data, error, isLoading } = useQuery(['holdings'], fetchHoldings, {
    retry: false,
    refetchOnWindowFocus: false
  });

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Holdings
      </Typography>
      <Divider sx={{ my: 2 }} />
      {isLoading && <CircularProgress color="primary" />}
      {error && <Alert severity="error">{error.message}</Alert>}
      {data?.length === 0 && !isLoading && <Typography>No holdings data available</Typography>}
      {data?.length > 0 && (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="h6">Company Name</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6">Trading Symbol</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6">Quantity</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6">Last Price</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6">Average Price</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6">PNL</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6">Day Change (%)</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((holding) => (
                <TableRow key={holding.isin}>
                  <TableCell>
                    <Typography>{holding.company_name}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{holding.trading_symbol}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{holding.quantity}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{holding.last_price.toFixed(2)}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{holding.average_price.toFixed(2)}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{holding.pnl.toFixed(2)}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{holding.day_change_percentage.toFixed(2)}%</Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default Holdings;
