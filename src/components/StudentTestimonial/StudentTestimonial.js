import React, { useRef, useEffect } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { ArrowForward, ArrowBack } from '@mui/icons-material';
import { Card } from '@mui/joy'; // Assuming Card and AspectRatio are from Joy UI
import AspectRatio from '@mui/joy/AspectRatio';

const candidateTestimonials = [
  {
    name: 'Sarah K.',
    title: 'Marketing Specialist',
    text: "This platform made my job search so much easier! The matching feature connected me with roles that perfectly fit my skills and experience. I found my dream job within weeks of signing up!",
    avatar: 'canidateTestemonial.jpg',
  },
  {
    name: 'Sarah T.',
    title: 'Graphic Designer',
    text: "I love how user-friendly the platform is. The resume builder and job recommendations were incredibly helpful, and I could easily track my applications. It’s the best tool I’ve used for job searching!",
    avatar: 'canidateTestemonial1.jpg',
  },
  {
    name: 'John S.',
    title: 'Software Developer',
    text: "Thanks to this platform, I found a role that aligns perfectly with my career goals. The process was smooth, from setting up my profile to getting interview notifications. It took a lot of stress out of the job search!",
    avatar: 'canidateTestemonial2.jpg',
  },
  {
    name: 'Sarah K.',
    title: 'Marketing Specialist',
    text: "This platform made my job search so much easier! The matching feature connected me with roles that perfectly fit my skills and experience. I found my dream job within weeks of signing up!",
    avatar: 'canidateTestemonial.jpg',
  },
  {
    name: 'Sarah T.',
    title: 'Graphic Designer',
    text: "I love how user-friendly the platform is. The resume builder and job recommendations were incredibly helpful, and I could easily track my applications. It’s the best tool I’ve used for job searching!",
    avatar: 'canidateTestemonial1.jpg',
  },
  {
    name: 'John S.',
    title: 'Software Developer',
    text: "Thanks to this platform, I found a role that aligns perfectly with my career goals. The process was smooth, from setting up my profile to getting interview notifications. It took a lot of stress out of the job search!",
    avatar: 'canidateTestemonial2.jpg',
  },
  // Add more candidates for testing
];

function StudentTestimonial() {
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
    id="StudentTestimonial" // ID to scroll to this section
     sx={{ overflow: 'hidden', maxWidth: '1400px', margin: 'auto', position: 'relative', height: '70vh', }}>
      <Typography
        variant="h4"
        gutterBottom
        align="center"
        sx={{
          marginTop: 4,
          fontSize: { xs: '1.5rem', sm: '2rem' },
          
        }}
      >
        
        Students' Testimonials
      </Typography>

      {/* Horizontal Scrollable Container */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          overflowX: 'auto',
          scrollBehavior: 'smooth',
          paddingBottom: '10px',
          height: '100%',
          marginLeft: '15px',
          marginRight: '15px',
          scrollbarWidth: 'none', // Hide scrollbar on Firefox
          '&::-webkit-scrollbar': {
            display: 'none', // Hide scrollbar on Chrome, Safari, etc.
          },
        }}
        ref={scrollRef}
      >
        {/* Render Candidates as Cards */}
        {candidateTestimonials.map((candidate, index) => (
          <Card
            key={index}
            variant="outlined"
            sx={{
              mx: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: { xs: '280px', sm: '300px', md: '350px' }, // Adjust card width based on screen size
              padding: 2,
              height: 'auto',
              flexShrink: 0, // Prevent cards from shrinking too small
            }}
          >
            <AspectRatio ratio="1" sx={{ width: '40%', marginBottom: 2 }}>
              <img
                src={candidate.avatar}
                alt={candidate.name}
                style={{
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                 
                  
                }}
              />
            </AspectRatio>
            <Typography sx={{ fontSize: '1.2rem', fontWeight: 'bold', textAlign: 'center' }}>
              {candidate.name}
            </Typography>
            <Typography sx={{ fontSize: '1rem', fontStyle: 'italic', textAlign: 'center' }}>
              {candidate.title}
            </Typography>
            <Typography sx={{ fontSize: '0.9rem', textAlign: 'center', marginTop: 1 }}>
              {candidate.text}
            </Typography>
          </Card>
        ))}
      </Box>

      {/* Left Scroll Button */}
      <IconButton
        onClick={() => scroll('left')}
        sx={{
          position: 'absolute',
          left: '10px',
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

export default StudentTestimonial;
