import React from 'react';
import { Box, Typography, TextField, MenuItem } from '@mui/material';
import Chart from 'react-apexcharts';
import MainCard from 'ui-component/cards/MainCard'; // Replace with your MainCard component for consistent styling
import { useTheme } from '@mui/material/styles';

// Sample monthly data for trades and revenue
const monthlyData = [
  { month: 'January', trades: 120, revenue: 15000 },
  { month: 'February', trades: 140, revenue: 18000 },
  { month: 'March', trades: 100, revenue: 12000 },
  { month: 'April', trades: 160, revenue: 20000 },
  { month: 'May', trades: 180, revenue: 22000 },
  { month: 'June', trades: 150, revenue: 19000 },
  { month: 'July', trades: 130, revenue: 16000 },
  { month: 'August', trades: 170, revenue: 21000 },
  { month: 'September', trades: 110, revenue: 14000 },
  { month: 'October', trades: 190, revenue: 23000 },
  { month: 'November', trades: 200, revenue: 24000 },
  { month: 'December', trades: 220, revenue: 26000 }
];

const TopUsersLineChart = () => {
  const theme = useTheme();
  const [timeRange, setTimeRange] = React.useState('year');

  // Dropdown options for selecting time ranges
  const status = [{ value: 'year', label: 'This Year' }];

  // Configuration for the ApexChart
  const chartOptions = {
    chart: {
      type: 'line',
      toolbar: { show: false },
      zoom: { enabled: false }
    },
    colors: [theme.palette.primary.main, theme.palette.secondary.main],
    stroke: {
      curve: 'smooth',
      width: 3
    },
    markers: {
      size: 5,
      strokeWidth: 2,
      hover: {
        size: 7
      }
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: monthlyData.map((data) => data.month),
      labels: {
        style: {
          colors: theme.palette.text.primary
        }
      }
    },
    yaxis: [
      {
        title: {
          text: 'Number of Trades',
          style: {
            color: theme.palette.primary.main
          }
        },
        labels: {
          style: {
            colors: theme.palette.text.primary
          }
        }
      },
      {
        opposite: true,
        title: {
          text: 'Revenue (in Thousands)',
          style: {
            color: theme.palette.secondary.main
          }
        },
        labels: {
          style: {
            colors: theme.palette.text.primary
          },
          formatter: (value) => `$${value / 1000}k`
        }
      }
    ],
    tooltip: {
      theme: 'dark',
      shared: true,
      intersect: false,
      y: [
        {
          formatter: (value) => `${value} trades`
        },
        {
          formatter: (value) => `$${value / 1000}k`
        }
      ]
    },
    grid: {
      borderColor: theme.palette.divider
    },
    legend: {
      show: true,
      position: 'top',
      horizontalAlign: 'right',
      labels: {
        colors: theme.palette.text.primary
      }
    }
  };

  // Data series for the chart
  const chartSeries = [
    {
      name: 'Trades',
      data: monthlyData.map((data) => data.trades)
    },
    {
      name: 'Revenue',
      data: monthlyData.map((data) => data.revenue)
    }
  ];

  return (
    <MainCard>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
          Monthly Trades and Revenue
        </Typography>
        <TextField select value={timeRange} onChange={(e) => setTimeRange(e.target.value)} size="small" sx={{ width: 150 }}>
          {status.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Box>
      <Chart options={chartOptions} series={chartSeries} type="line" height={350} />
    </MainCard>
  );
};

export default TopUsersLineChart;
