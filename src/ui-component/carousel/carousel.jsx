import React from 'react';
import Slider from 'react-slick';
import Box from '@mui/material/Box';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const imageSources = [
  'https://upstox.com/app/themes/upstox/dist/img/home/home-slide4.png',
  'https://upstox.com/app/themes/upstox/dist/img/home/home_banner_slide_03_mob.webp',
  'https://upstox.com/app/themes/upstox/dist/img/home/home_banner_slide_04_mob.webp',
  'https://upstox.com/app/themes/upstox/dist/img/home/home-slide4.png',
  'https://upstox.com/app/themes/upstox/dist/img/home/home-slide3.png'
];

const Carousel = () => {
  // React Slick carousel settings
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Enable infinite scrolling
    speed: 500, // Transition speed in ms
    slidesToShow: 1, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll at a time
    autoplay: true, // Auto-slide functionality
    autoplaySpeed: 3000 // Time between slides in ms
  };

  return (
    <Box sx={{ maxWidth: 200, margin: '0 auto' }}>
      <Slider {...settings}>
        {imageSources.map((src, index) => (
          <Box key={index} sx={{ textAlign: 'center' }}>
            <img src={src} alt={`Upstox Slide ${index + 1}`} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Carousel;
