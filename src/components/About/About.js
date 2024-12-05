import React from "react"; 
import { Box, Grid, Typography, CardMedia } from "@mui/material"; 
import { keyframes } from "@mui/system"; 
import { useInView } from "react-intersection-observer";

// Define animations
const slideInFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const About = () => {
  // Use InView to trigger animations when the section enters the viewport
  const [ref, inView] = useInView({
    triggerOnce: false, // Animation triggers every time section enters the view
    threshold: 0.2, // Trigger when 20% of the component is visible
  });

  return (
    <Box
      id="about"
      ref={ref} // Attach the observer to the Box
      sx={{
        backgroundColor: "#FFFFFF",
        padding: { xs: "1rem", md: "2rem" },
        minHeight: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        container
        spacing={1}
        alignItems="center"
        sx={{
          maxWidth: "1220px",
          margin: "0 auto",
        }}
      >
        {/* Left Section - Image */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            animation: inView
              ? `${slideInFromLeft} 1.5s ease-out`
              : "none", // Apply animation only if inView is true
          }}
        >
          <CardMedia
            component="img"
            image="about.png"
            alt="Who are we?"
            sx={{
              borderRadius: "1rem",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
              width: "100%",
              height: "auto",
              objectFit: "cover",
              position: "relative",
              left: "-5%",
            }}
          />
        </Grid>

        {/* Right Section - Text Content */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            animation: inView
              ? `${slideInFromRight} 1.5s ease-out`
              : "none", // Apply animation only if inView is true
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              color: "#333",
              marginBottom: "1rem",
              textAlign: { xs: "center", md: "left" },
              fontSize: { xs: "1.8rem", md: "2.5rem" },
            }}
          >
            Who are we?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#555",
              lineHeight: "1.8",
              marginBottom: "1rem",
              textAlign: { xs: "center", md: "left" },
              fontSize: { xs: "1rem", md: "1rem" },
            }}
          >
            "At Vireonix Technologies, we deliver tailored IT solutions, expert training, and staffing services.
Our Internships & Training programs offer real-world experience to build careers.
We specialize in Web & App Development, Custom Software, and Cloud Services for business growth."
          </Typography>

          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: "#333",
              marginBottom: "0.5rem",
              textAlign: { xs: "center", md: "left" },
              fontSize: { xs: "1.2rem", md: "1.5rem" },
            }}
          >
            For Companies
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#555",
              lineHeight: "1.8",
              marginBottom: "1rem",
              textAlign: { xs: "center", md: "left" },
              fontSize: { xs: "1rem", md: "1rem" },
            }}
          >
            "For companies, we offer an end-to-end hiring solution that includes
            candidate sourcing, pre-screening, and interview coordination. With
            advanced filters and tailored recruitment support, we ensure you
            connect with the right professionals quickly and efficiently."
          </Typography>

          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: "#333",
              marginBottom: "0.5rem",
              textAlign: { xs: "center", md: "left" },
              fontSize: { xs: "1.2rem", md: "1.5rem" },
            }}
          >
            For Candidates
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#555",
              lineHeight: "1.8",
              marginBottom: "1rem",
              textAlign: { xs: "center", md: "left" },
              fontSize: { xs: "1rem", md: "1rem" },
            }}
          >
            "For job seekers, our platform provides personalized job
            recommendations, resume-building tools, and career guidance to help
            you land your dream job. Whether you’re just starting or looking to
            advance, we’ve got you covered."
          </Typography>

          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: "#333",
              marginBottom: "0.5rem",
              textAlign: { xs: "center", md: "left" },
              fontSize: { xs: "1.2rem", md: "1.5rem" },
            }}
          >
            Our Vision
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#555",
              lineHeight: "1.8",
              textAlign: { xs: "center", md: "left" },
              fontSize: { xs: "1rem", md: "1rem" },
            }}
          >
            "With our innovative approach, we aim to create a seamless
            experience for both employers and candidates, making recruitment
            faster, smarter, and stress-free."
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
