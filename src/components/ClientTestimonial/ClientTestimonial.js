import React, { useEffect } from 'react';
import { Box, Paper, Grid, Avatar, Typography } from '@mui/material';

const testimonial = {
  text: `I love how intuitive and efficient the platform is. We get access to a wide range of talented professionals, and the matching system helps us find the right fit for each role. It's become an essential part of our hiring strategy!`,
  author: 'Sophia L., Founder of CareerWave Partners',
  image: 'client.jpg',
};

const ClientsTestimonial = () => {
  useEffect(() => {
    // Scroll to the "testimonial" section on component mount
    const section = document.getElementById('testimonial');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }else {
      window.scrollTo(0, 0);  }
  }, []);

  return (

    <Box

      sx={{ padding: 2 }}
    >
      <Typography
        variant="h4"
        gutterBottom
        align="center"
        sx={{ fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }, height: '10vh' }}
      >
        Client Testimonials
      </Typography>
      <Paper
        elevation={3}
        sx={{
          padding: { xs: 2, sm: 4 },
          marginTop: 2,
          backgroundColor: '#F8FFFD',
          maxWidth: { xs: '100%', sm: '80%', md: '800px' },
          margin: '0 auto',
        }}
      >
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={4} md={2}>
            <Avatar
              src={testimonial.image}
              alt="Sophia L."
              sx={{
                width: { xs: 60, sm: 100 },
                height: { xs: 60, sm: 100 },
                margin: '0 auto',
              }}
            />
          </Grid>
          <Grid item xs={12} sm={8} md={10}>
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
                textAlign: { xs: 'center', sm: 'left' },
              }}
            >
              {testimonial.author}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                marginTop: 1,
                fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                textAlign: { xs: 'center', sm: 'left' },
              }}
            >
              {testimonial.text}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default ClientsTestimonial;
