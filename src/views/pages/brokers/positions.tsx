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
interface Position {
  symbol: string;
  quantity: number;
  averagePrice: number;
  // Add other fields as needed
}

interface PositionsResponse {
  data: Position[];
}

const fetchPositions = async () => {
  const accessToken = localStorage.getItem('upstox_access_token');
  if (!accessToken) throw new Error('Access token not found');

  const response = await axios.get<PositionsResponse>('https://jetalgosoftware.com/broker/upstox/get/positions/upstox?uuid=lqjenfljwrben', {
    headers: { Authorization: `Bearer ${accessToken}` }
  });

  return response.data;
};

const Positions: React.FC = () => {
  const { data, error, isLoading } = useQuery(['positions'], fetchPositions, {
    retry: false,
    refetchOnWindowFocus: false
  });

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Positions
      </Typography>
      {match({ isLoading, error, data })
        .with({ isLoading: true }, () => <CircularProgress />)
        .with({ error: (e: Error) => !!e }, () => <Alert severity="error">{error?.message}</Alert>)
        .with({ data: (d) => !!d }, () => (
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Symbol</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Average Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.data.map((position) => (
                  <TableRow key={position.symbol}>
                    <TableCell>{position.symbol}</TableCell>
                    <TableCell>{position.quantity}</TableCell>
                    <TableCell>{position.averagePrice}</TableCell>
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

export default Positions;
