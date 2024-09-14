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

// Fetch positions data from API
const fetchPositions = async () => {
  const accessToken = localStorage.getItem('upstox_access_token');
  if (!accessToken) throw new Error('Access token not found');

  const response = await axios.get('https://jetalgosoftware.com/broker/upstox/get/positions/upstox?uuid=lqjenfljwrben', {
    headers: { accesstoken: accessToken }
  });

  return response.data.response.data; // Adjusted to match the new data structure
};

const Positions = () => {
  const { data, error, isLoading } = useQuery(['positions'], fetchPositions, {
    retry: false,
    refetchOnWindowFocus: false
  });

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Positions
      </Typography>
      <Divider sx={{ my: 2 }} />
      {isLoading && <CircularProgress color="primary" />}
      {error && <Alert severity="error">{error.message}</Alert>}
      {data?.length === 0 && !isLoading && <Typography>Cureently no positions available</Typography>}
      {data?.length > 0 && (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="h6">Symbol</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6">Quantity</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6">Average Price</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6">Current Price</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6">Day Change (%)</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6">PNL</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((position) => (
                <TableRow key={position.isin}>
                  <TableCell>
                    <Typography>{position.trading_symbol}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{position.quantity}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{position.average_price.toFixed(2)}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{position.last_price.toFixed(2)}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{position.day_change_percentage.toFixed(2)}%</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{position.pnl.toFixed(2)}</Typography>
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

export default Positions;
