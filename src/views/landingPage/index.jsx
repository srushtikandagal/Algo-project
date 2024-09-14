import React, { useEffect, useState, Suspense, lazy } from 'react';
import { Box, Drawer, CssBaseline, CircularProgress } from '@mui/material';
import Aos from 'aos';
import 'aos/dist/aos.css';

// Lazy-load components
const Hero = lazy(() => import('./components/hero/Hero'));
const Header = lazy(() => import('./components/header/Header'));
const NavMobile = lazy(() => import('./components/nav/NavMobile'));
const Stats = lazy(() => import('./components/stats/Stats'));
const Why = lazy(() => import('./components/stats/Why'));
const Trade = lazy(() => import('./components/sections/Trade'));
const Features = lazy(() => import('./components/sections/Features'));
const NewsLetter = lazy(() => import('./components/sections/NewsLetter'));
const Footer = lazy(() => import('./components/sections/Footer'));

function App() {
  const [navMobile, setNavMobile] = useState(false);

  useEffect(() => {
    Aos.init({
      duration: 600,
      delay: 100,
      easing: 'ease-in-out'
    });
  }, []);

  return (
    <Box sx={{ overflow: 'hidden' }}>
      <CssBaseline />

      {/* Wrap components with Suspense for lazy loading */}
      <Suspense fallback={<CircularProgress sx={{ position: 'fixed', top: '50%', left: '50%' }} />}>
        <Header setNavMobile={setNavMobile} />

        <Hero />

        <Drawer
          anchor="right"
          open={navMobile}
          onClose={() => setNavMobile(false)}
          transitionDuration={{ enter: 300, exit: 200 }}
          sx={{
            '& .MuiDrawer-paper': {
              width: '250px',
              boxShadow: '2px 0 5px rgba(0, 0, 0, 0.2)',
              transition: 'transform 0.3s ease-in-out'
            }
          }}
        >
          <NavMobile setNavMobile={setNavMobile} />
        </Drawer>

        <Box id="home">
          <Stats />
        </Box>
        <Box id="why">
          <Why />
        </Box>
        <Box id="trade">
          <Trade />
        </Box>
        <Box id="features">
          <Features />
        </Box>
        <Box id="newsletter">
          <NewsLetter />
        </Box>
        <Box id="footer">
          <Footer />
        </Box>
      </Suspense>
    </Box>
  );
}

export default App;
