import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { HiChartBar, HiUser, HiGlobe } from 'react-icons/hi';
import CountUp from 'react-countup'; // Import CountUp
import { useInView } from 'react-intersection-observer'; // Import Intersection Observer

const Stats = () => {
  // Setup intersection observer
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.3 // Trigger when 30% of the component is in view
  });

  return (
    <Box component="section" sx={{}} data-aos="fade-up" data-aos-delay="1200">
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between" alignItems="center" ref={ref}>
          {/* Item 1 */}
          <Grid item xs={12} lg={4}>
            <Box display="flex" alignItems="center" gap={2}>
              {/* Item icon */}
              <Box
                sx={{
                  border: '2px solid gray',
                  width: 80,
                  height: 80,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: { xs: 24, lg: 32 },
                  color: 'primary.main'
                }}
              >
                <HiChartBar />
              </Box>
              {/* Item text */}
              <Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: { xs: 24, lg: 40 },
                    fontWeight: 'bold',
                    mb: { lg: 1 }
                  }}
                >
                  {/* Using CountUp for number animation */}
                  {inView && <CountUp start={0} end={100} decimals={1} prefix="₹" suffix="cr" duration={4} />}
                </Typography>
                <Typography>Trade Across Market</Typography>
              </Box>
            </Box>
          </Grid>

          {/* Item 2 */}
          <Grid item xs={12} lg={4}>
            <Box display="flex" alignItems="center" gap={2}>
              {/* Item icon */}
              <Box
                sx={{
                  border: '2px solid gray',
                  width: 80,
                  height: 80,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: { xs: 24, lg: 32 },
                  color: 'primary.main'
                }}
              >
                <HiUser />
              </Box>
              {/* Item text */}
              <Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: { xs: 24, lg: 40 },
                    fontWeight: 'bold',
                    mb: { lg: 1 }
                  }}
                >
                  {/* Using CountUp for number animation */}
                  {inView && <CountUp start={0} end={7.7} decimals={1} suffix="M+" duration={7} />}
                </Typography>
                <Typography>Trusted Wallets Investor</Typography>
              </Box>
            </Box>
          </Grid>

          {/* Item 3 */}
          <Grid item xs={12} lg={4}>
            <Box display="flex" alignItems="center" gap={2}>
              {/* Item icon */}
              <Box
                sx={{
                  border: '2px solid gray',
                  width: 80,
                  height: 80,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: { xs: 24, lg: 32 },
                  color: 'primary.main'
                }}
              >
                <HiGlobe />
              </Box>
              {/* Item text */}
              <Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: { xs: 24, lg: 40 },
                    fontWeight: 'bold',
                    mb: { lg: 1 }
                  }}
                >
                  {/* Using CountUp for number animation */}
                  {inView && <CountUp start={0} end={195} duration={4} />}
                </Typography>
                <Typography>Countries Supported</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Stats;
