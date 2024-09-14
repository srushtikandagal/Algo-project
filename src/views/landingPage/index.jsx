import React, { useEffect, useState } from 'react';
import { Box, Drawer, CssBaseline } from '@mui/material';
import Aos from 'aos';
import 'aos/dist/aos.css';

import Hero from './components/hero/Hero';
import Header from './components/header/Header';
import NavMobile from './components/nav/NavMobile';
import Stats from './components/stats/Stats';
import Why from './components/stats/Why';
import Trade from './components/sections/Trade';
import Calculate from './components/sections/Calculate';
import Features from './components/sections/Features';
import NewsLetter from './components/sections/NewsLetter';
import Footer from './components/sections/Footer';

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
    </Box>
  );
}

export default App;
