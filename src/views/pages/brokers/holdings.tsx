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
  Paper
} from '@mui/material';
import { match } from 'ts-pattern';

// Type for API response
interface Holding {
  symbol: string;
  quantity: number;
  currentPrice: number;
  // Add other fields as needed
}

interface HoldingsResponse {
  data: Holding[];
}

const fetchHoldings = async () => {
  const accessToken = localStorage.getItem('upstox_access_token');
  if (!accessToken) throw new Error('Access token not found');

  const response = await axios.get<HoldingsResponse>('https://jetalgosoftware.com/broker/upstox/get/holdings/upstox?uuid=lqjenfljwrben', {
    headers: { Authorization: `Bearer ${accessToken}` }
  });

  return response.data;
};

const Holdings: React.FC = () => {
  const { data, error, isLoading } = useQuery(['holdings'], fetchHoldings, {
    retry: false,
    refetchOnWindowFocus: false
  });

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Holdings
      </Typography>
      {match({ isLoading, error, data })
        .with({ isLoading: true }, () => <CircularProgress />)
        .with({ error: (e: Error) => true }, () => <Alert severity="error">{error.message}</Alert>)
        .with({ data: (d) => !!d }, () => (
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Symbol</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Current Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.data.map((holding) => (
                  <TableRow key={holding.symbol}>
                    <TableCell>{holding.symbol}</TableCell>
                    <TableCell>{holding.quantity}</TableCell>
                    <TableCell>{holding.currentPrice}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ))
        .otherwise(() => (
          <Typography>No data available</Typography>
        ))}
    </Box>
  );
};

export default Holdings;
