import React from 'react';
import { Box, Typography, Button, Grid, CardMedia } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { keyframes } from '@mui/system';

// Animation definitions for UI elements
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(-50%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

// Live light blue gradient animation
const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const WelcomePage = () => {
  return (
    <Box
    sx={{
      position: 'relative',
      padding: { xs: '1rem', md: '5rem' },
      minHeight: '65vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      background: 'linear-gradient(90deg, indianred, green)', // Gradient of Indian Red and Green
      backgroundSize: '200% 200%',
      animation: `${gradientAnimation} 8s ease infinite`, // Smooth live animation
    }}
    >
      <Grid container spacing={4} alignItems="center" zIndex={1}>
        {/* Left Section */}
        <Grid item xs={12} md={6}>
          <Box sx={{ animation: `${slideIn} 1.2s ease-out` }}>
          <Box display="flex" alignItems="center" mb={1}>
  <SearchIcon sx={{ fontSize: '3rem', color: 'green', marginTop: '20px' }} />
  <Typography
    variant="h6"
    sx={{
      marginLeft: '0.5rem', marginTop: '20px',
      color: 'linear-gradient(90deg, #228B22, #32CD32, #0000FF)',
      fontSize: { xs: '1.5rem', md: '1.25rem' },
    }}
  >
    Welcome to
  </Typography>
</Box>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 'bold',
                color: '#ff5456',
                marginBottom: '1rem',
                fontSize: { xs: '2rem', md: '3rem' },
              }}
            >
              Vireonix Technologies
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'white',
                marginBottom: '2rem',
                fontSize: { xs: '0.875rem', md: '1rem' },
              }}
            >
             We deliver tailored IT solutions, expert training, and staffing services.
Our Internships & Training programs offer real-world experience to build careers.
We specialize in Web & App Development, Custom Software, and Cloud Services for business growth.
Our Staffing Solutions provide skilled professionals to meet IT needs.
Partner with us for innovative solutions to elevate your business.
            </Typography>
            <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} gap={2}>
            <Button
  variant="contained"
  size="large"
  fullWidth={false}
  sx={{
    backgroundColor: 'indianred', // Set Indian Red as the background color
    animation: `${fadeIn} 1.5s ease-out`,
    '&:hover': {
      backgroundColor: 'darkred', // Optional: Set hover effect if desired
    },
  }}
>
  Enroll Now
</Button>

             {/* <Button
                variant="outlined"
                color="primary"
                size="large"
                fullWidth={false}
                sx={{ animation: `${fadeIn} 1.7s ease-out` }}
              >
                I’m Hiring
              </Button> */}

            </Box>
          </Box>
        </Grid>

        {/* Right Section */}
        <Grid item xs={10} md={6}>
          <Box
            sx={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              animation: `${slideIn} 1.8s ease-out`,
            }}
          >
            <CardMedia
              component="img"
              image="welcomepages.png"
              alt="Team Meeting"
              sx={{
                width: { xs: "100%", sm: "90%", md: "50%" }, // Adjust width for different screen sizes
                height: "auto", // Maintain aspect ratio
                borderRadius: "8px", // Optional: Rounded corners
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WelcomePage;
