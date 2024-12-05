import React, { useRef, useEffect } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { ArrowForward, ArrowBack } from '@mui/icons-material';
import { Card } from '@mui/joy'; 
import AspectRatio from '@mui/joy/AspectRatio';

const clients = [
  { id: 1, name: "Webtuks" },
  { id: 2, name: "Local Konnect" },
  { id: 3, name: "Another Client" },
  { name: 'Tech Mahindra', logo: 'mahindra.png', description: 'Leading IT company' },
  { name: 'Abacus', logo: 'abacus.png', description: 'Finance solutions provider' },
  { name: 'DortexAI', logo: 'dortexai.png', description: 'AI-driven technology' },
  { name: 'Webtoks', logo: 'webtoks.png', description: 'Web development solutions' },
  { name: 'Webtuks', logo: 'webtuks.png', description: 'Cloud computing experts' },
  { name: 'Local Konnect', logo: 'L&k.png', description: 'Local business network' },
  { name: 'Tech Mahindra', logo: 'mahindra.png', description: 'Leading IT company' },
  { name: 'Abacus', logo: 'abacus.png', description: 'Finance solutions provider' },
  { name: 'DortexAI', logo: 'dortexai.png', description: 'AI-driven technology' },
  { name: 'Webtoks', logo: 'webtoks.png', description: 'Web development solutions' },
  { name: 'Webtuks', logo: 'webtuks.png', description: 'Cloud computing experts' },
  { name: 'Local Konnect', logo: 'L&k.png', description: 'Local business network' },
  { name: 'Tech Mahindra', logo: 'mahindra.png', description: 'Leading IT company' },
  { name: 'Abacus', logo: 'abacus.png', description: 'Finance solutions provider' },
  { name: 'DortexAI', logo: 'dortexai.png', description: 'AI-driven technology' },
  { name: 'Webtoks', logo: 'webtoks.png', description: 'Web development solutions' },
  { name: 'Webtuks', logo: 'webtuks.png', description: 'Cloud computing experts' },
  { name: 'Local Konnect', logo: 'L&k.png', description: 'Local business network' },
];


function Clients() {
 

  const scrollRef = useRef();

  // Auto-scroll every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 200; // Scroll by 200px
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      scrollRef.current.scrollLeft += scrollAmount;
    }
  };

  return (

    
    <Box
    id="clients" // ID to scroll to this section

     sx={{ overflow: 'hidden', maxWidth: '1400px', margin: 'auto', position: 'relative', height: '60vh' }}>
      <Typography
        variant="h4"
        gutterBottom
        align="center"
        sx={{
          marginTop: 4,
          color:'#CD5C5C',
          fontSize: { xs: '1.5rem', sm: '1rem', md: '1.5rem' },
        }}
      >
        Our Students
      </Typography>

      {/* Horizontal Scrollable Container */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          overflowX: 'auto',
          scrollBehavior: 'smooth',
          paddingBottom: '10px',
          height: '90%',
          marginLeft: '15px',
          marginRight: '15px',
          scrollbarWidth: 'none', // Hide scrollbar on Firefox
          '&::-webkit-scrollbar': {
            display: 'none', // Hide scrollbar on Chrome, Safari, etc.
          },
        }}
        ref={scrollRef}
      >
        {/* Render Clients as Cards */}
        {clients.map((client, index) => (
          <Card
            key={client.name}
            variant="outlined"
            sx={{
              mx: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '600px', // Fixed card width
              padding: 6,
            }}
          >
            <AspectRatio ratio="1" sx={{ width: '100%', marginBottom: 2 }}>
              <img
                srcSet={`${client.logo}?h=120&fit=crop&auto=format&dpr=2 2x`}
                src={`${client.logo}?h=120&fit=crop&auto=format`}
                alt={client.name}
                style={{ objectFit: 'contain' }}
              />
            </AspectRatio>
            <Typography level="title-md" sx={{ fontSize: '1.3rem', textAlign: 'center' }}>
              {client.name}
            </Typography>
            <Typography level="body-sm" sx={{ fontSize: '0.9rem', textAlign: 'center' }}>
              {client.description}
            </Typography>
          </Card>
        ))}
      </Box>

      {/* Left Scroll Button */}
      <IconButton
        onClick={() => scroll('left')}
        sx={{
          position: 'absolute',
          left: '-10px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 1,
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
        }}
      >
        <ArrowBack />
      </IconButton>

      {/* Right Scroll Button */}
      <IconButton
        onClick={() => scroll('right')}
        sx={{
          position: 'absolute',
          right: '10px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 1,
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
        }}
      >
        <ArrowForward />
      </IconButton>
    </Box>
  );
  
}

export default Clients;
