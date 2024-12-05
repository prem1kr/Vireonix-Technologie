import React, { useState, useEffect } from "react";
import { Box, Grid, CardMedia, Typography, Fade } from "@mui/material";

const Process = () => {
  const [inView, setInView] = useState(false);

  // Intersection Observer callback
  const handleScroll = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setInView(true);
    } else {
      setInView(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleScroll, {
      rootMargin: "0px",
      threshold: 0.5, // Trigger animation when 50% of the section is visible
    });

    const element = document.getElementById("services");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <Box
      id="services" // ID to scroll to this section
      sx={{
        backgroundColor: "white",
        padding: { xs: "1rem", sm: "4rem", md: "6rem" },
        minHeight: "50vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid container spacing={4}>
        {/* Image 1 - Left Section */}
        <Grid
          item
          xs={15} // Full width on smaller screens
          sm={6} // Half width on larger screens
          order={{ xs: 1, sm: 1 }} // Maintain order on all screens
        >
          <Fade in={inView} timeout={1000}>
            <div>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: "#333",
                  marginBottom: "1rem",
                  textAlign: { xs: "center", sm: "left" },
                }}
              >
                Process Flow for Recruiting Companies
              </Typography>
              <CardMedia
                component="img"
                image="cproceess.png" // Replace with your left image URL
                alt="Process Step 1"
                sx={{
                  borderRadius: "8px",
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                }}
              />
            </div>
          </Fade>
        </Grid>

        {/* Image 2 - Right Section */}
        <Grid
          item
          xs={15} // Full width on smaller screens
          sm={6} // Half width on larger screens
          order={{ xs: 2, sm: 2 }} // Maintain order on all screens
        >
          <Fade in={inView} timeout={1500}>
            <div>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: "#333",
                  marginBottom: "1rem",
                  textAlign: { xs: "center", sm: "left" },
                }}
              >
                Process Flow for Applied Candidates
              </Typography>
              <CardMedia
                component="img"
                image="cpocess1.png" // Replace with your right image URL
                alt="Process Step 2"
                sx={{
                  borderRadius: "8px",
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                }}
              />
            </div>
          </Fade>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Process;
