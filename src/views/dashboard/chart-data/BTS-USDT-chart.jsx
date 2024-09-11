import React, { useState, useEffect, useRef } from 'react';
import { AdvancedChart } from 'react-tradingview-embed';
import { Box, Grid, Typography, Paper } from '@mui/material';
import { textAlign } from '@mui/system';

const Dashboard = () => {
  const [query, setQuery] = useState('BTC');
  const [addressData, setAddressData] = useState({});
  const searchInput = useRef(null);

  const CRYPTO_COMPARE = '54c69a67adfc783963d3589c5a08a40a5d619b0f22b94b1c79df9acc9129c5ff';

  useEffect(() => {
    loadChartData();
  }, [query]);

  const loadChartData = async () => {
    try {
      const response = await fetch(
        `https://min-api.cryptocompare.com/data/blockchain/histo/day?fsym=${query}&api_key=${CRYPTO_COMPARE}&limit=30`
      );
      const data = await response.json();
      const bulkData = data.Data.Data;
      const dataArray = bulkData.map((y) => ({
        x: y.time * 1000,
        y: y.transaction_count * y.average_transaction_value
      }));
      setAddressData(dataArray); // Assuming addressData is used for visualization
    } catch (error) {
      console.error('Error fetching chart data:', error);
    }
  };

  const handleInputChange = () => {
    setQuery(searchInput.current.value);
  };

  return (
    <Box display="flex" flexDirection="column" sx={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
      <Grid item sx={{ textAlign: 'left', pt: 2, pb: 2, pl: 2, pr: 2 }}>
        <Typography variant="h4">Live Chart</Typography>
      </Grid>
      <Box sx={{ width: '100%', height: 'calc(100vh - 100px)' }}>
        <AdvancedChart
          widgetProps={{
            showSymbolLogo: true,
            isTransparent: true,
            displayMode: 'adaptive',
            colorTheme: 'dark',
            autosize: true,
            symbols: [
              { proName: 'BITSTAMP:ETHUSD', title: 'ETH/USD' },
              { proName: 'BITSTAMP:BTCUSD', title: 'BTC/USD' },
              { proName: 'BINANCE:BNBUSDT', title: 'BNB/USDT' },
              { proName: 'BINANCE:ADAUSD', title: 'ADA/USD' },
              { proName: 'BINANCE:DOTUSDT', title: 'DOT/USDT' },
              { proName: 'UNISWAP:UNIUSDT', title: 'UNI/USDT' }
            ]
          }}
        />
      </Box>

      <Grid container sx={{ mt: 2, height: 'calc(100vh - 200px)' }}>
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 2, width: '100%', height: '100%' }}>
            {query.length > 2 ? (
              <AdvancedChart
                widgetProps={{
                  interval: '1D',
                  theme: 'light',
                  symbol: `${query}USD`,
                  allow_symbol_change: true
                }}
              />
            ) : (
              <Typography>BTCUSD</Typography>
            )}
          </Paper>
        </Grid>
      </Grid>

      <HoverHint data={addressData} query={query} />
    </Box>
  );
};

const HoverHint = ({ data, query }) => (
  <Box sx={{ textAlign: 'center', mt: 2 }}>
    <Typography color="white">{data.length > 1 ? query : `Raw Averaged Volume (Transactions * Average Value $USD)`}</Typography>
    <Typography color="white">{data.length < 1 ? '' : `${data.time} - $${data.price}`}</Typography>
  </Box>
);

export default Dashboard;
