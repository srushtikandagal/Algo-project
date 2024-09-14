import PropTypes from 'prop-types';
import React from 'react';

// Material-UI components
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

// Third-party
import ApexCharts from 'apexcharts';
import Chart from 'react-apexcharts';

// Project imports
import SkeletonTotalGrowthBarChart from 'ui-component/cards/Skeleton/TotalGrowthBarChart';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

// Chart data setup
const initialChartData = {
  series: [
    {
      name: 'Active Users',
      data: [150, 200, 250, 300, 350, 400, 450]
    },
    {
      name: 'Total Users',
      data: [500, 600, 700, 800, 900, 1000, 1100]
    }
  ],
  options: {
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
    },
    yaxis: {
      title: {
        text: 'Users'
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: (val) => `${val} Users`
      }
    }
  }
};

// Status options for the chart (e.g., Today, This Month, This Year)
const statusOptions = [
  { value: 'today', label: 'Today' },
  { value: 'month', label: 'This Month' },
  { value: 'year', label: 'This Year' }
];

const ActiveVsTotalUsersChart = ({ isLoading }) => {
  const [value, setValue] = React.useState('today');
  const theme = useTheme();

  // Theme colors for chart customization
  const { primary } = theme.palette.text;
  const divider = theme.palette.divider;
  const grey500 = theme.palette.grey[500];

  const primary200 = theme.palette.primary[200];
  const primaryDark = theme.palette.primary.dark;
  const secondaryMain = theme.palette.secondary.main;
  const secondaryLight = theme.palette.secondary.light;

  // Effect to update chart options with theme changes
  React.useEffect(() => {
    const updatedChartData = {
      ...initialChartData.options,
      colors: [primary200, primaryDark, secondaryMain, secondaryLight],
      xaxis: {
        labels: {
          style: {
            colors: Array(7).fill(primary) // Use the theme primary color for labels
          }
        }
      },
      yaxis: {
        labels: {
          style: {
            colors: [primary]
          }
        }
      },
      grid: { borderColor: divider },
      tooltip: { theme: 'light' },
      legend: { labels: { colors: grey500 } }
    };

    // Update the chart only if it's not loading
    if (!isLoading) {
      ApexCharts.exec(`user-growth-bar-chart`, 'updateOptions', updatedChartData);
    }
  }, [primary200, primaryDark, secondaryMain, secondaryLight, primary, divider, isLoading, grey500]);

  return (
    <>
      {isLoading ? (
        <SkeletonTotalGrowthBarChart />
      ) : (
        <MainCard>
          <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
              <Grid container alignItems="center" justifyContent="space-between">
                <Grid item>
                  <Grid container direction="column" spacing={1}>
                    <Grid item>
                      <Typography variant="subtitle2">Active vs Total Users</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h3">User Growth</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <TextField id="select-timeframe" select value={value} onChange={(e) => setValue(e.target.value)}>
                    {statusOptions.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Chart options={initialChartData.options} series={initialChartData.series} type="bar" height={350} />
            </Grid>
          </Grid>
        </MainCard>
      )}
    </>
  );
};

ActiveVsTotalUsersChart.propTypes = {
  isLoading: PropTypes.bool
};

export default ActiveVsTotalUsersChart;
