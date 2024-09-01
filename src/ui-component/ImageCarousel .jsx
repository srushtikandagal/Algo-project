import { useState, useEffect } from 'react';
import { Grid, Box, IconButton, Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const images = [
  'https://web.algorooms.com/static/media/new2.b0f045c24bc87893584bbbb5ca270256.svg',
  'https://web.algorooms.com/static/media/new1.08960d7d039717b7797875d9a634a0ea.svg'
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <Grid item xs={12} md={5} p={10} sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
      {/* Logo at the top-left */}
      <Box textAlign={'left'} mb={5}>
        {/* <img src="../" alt="Logo" style={{ width: '35%', height: 'auto' }} loading="lazy" /> */}
        <p>Algo Trading Logo</p>
      </Box>

      {/* Carousel */}
      <Box height={'100%'} textAlign={'center'} position="relative">
        <img src={images[currentIndex]} alt="Carousel Image" style={{ width: '80%', height: 'auto', transition: 'opacity 0.5s ease' }} />

        {/* Navigation Buttons */}
        <IconButton onClick={prevImage} sx={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', zIndex: 1 }}>
          <ArrowBackIosIcon />
        </IconButton>
        <IconButton onClick={nextImage} sx={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', zIndex: 1 }}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Grid>
  );
};

export default ImageCarousel;
