import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { keyframes } from "@mui/system";

// Animations
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

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const Opportunity = () => {
  const services = [
    {
      title: "Job Matching and Placement",
      description:
        "Our platform connects job seekers with ideal employment opportunities by matching their skills and experience with employers' needs. Through targeted recommendations, users can discover roles that align perfectly with their qualifications, providing a seamless path to their next career step.",
      icon: "puzzal.png", // Replace with the correct path for the image
    },
    {
      title: "Simplified Resume Building for Job Seekers",
      description:
        "Our built-in resume builder equips candidates with the tools they need to create a standout profile. With future AI enhancements, users will receive personalized tips and formatting guidance, ensuring their resumes reflect their unique skills and achievements.",
      icon: "resume.png",
    },
    {
      title: "Efficient Candidate Sourcing for Employers",
      description:
        "We streamline the recruitment process for employers by sourcing qualified candidates from a vast pool of talent. By leveraging advanced filters, we help companies efficiently identify, evaluate, and engage top prospects, saving valuable time and resources in the hiring process.",
      icon: "globalsearch.png",
    },
    {
      title: "Recruitment Support",
      description:
        "Beyond job placement, our platform assists with onboarding, salary negotiations, and even training guidance. We aim to offer full recruitment support, providing candidates and employers with everything they need for a successful hiring journey.",
      icon: "haring.png",
    },
  ];

  return (
    <Box
      sx={{
        p: 4,
        backgroundColor: "#f9f9f9",
        textAlign: "center",
        animation: `${fadeIn} 1.5s ease`,
      }}
    >
      {/* Header */}
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2, color: "#333" }}>
        Connecting Talent with Opportunity
      </Typography>
      <Typography
        variant="h6"
        sx={{ color: "#CD5C5C", mb: 4, fontWeight: "bold" }}
      >
        Our Key Services
      </Typography>

      <Grid container spacing={4} justifyContent="center" alignItems="center">
        {/* Left Section */}
        <Grid item xs={12} md={4}>
          {services.slice(0, 2).map((service, index) => (
            <Box
              key={index}
              sx={{
                mb: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                animation: `${fadeIn} ${1 + index * 0.3}s ease`,
              }}
            >
              <img
                src={service.icon}
                alt={service.title}
                style={{
                  width: "50px",
                  marginBottom: "16px",
                  animation: `${bounce} 2s ease infinite`,
                }}
              />
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#228B22", mb: 1 }}
              >
                {service.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#555", textAlign: "center" }}
              >
                {service.description}
              </Typography>
            </Box>
          ))}
        </Grid>

        {/* Center Image */}
        <Grid item xs={12} md={4} textAlign="center">
          <img
            src="opertunity.png" // Replace with the correct image path
            alt="Central Illustration"
            style={{
              maxWidth: "100%",
              height: "auto",
              animation: `${pulse} 3s ease infinite`,
            }}
          />
        </Grid>

        {/* Right Section */}
        <Grid item xs={12} md={4}>
          {services.slice(2).map((service, index) => (
            <Box
              key={index}
              sx={{
                mb: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                animation: `${fadeIn} ${1.5 + index * 0.3}s ease`,
              }}
            >
              <img
                src={service.icon}
                alt={service.title}
                style={{
                  width: "50px",
                  marginBottom: "16px",
                  animation: `${bounce} 2s ease infinite`,
                }}
              />
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#228B22", mb: 1 }}
              >
                {service.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#555", textAlign: "center" }}
              >
                {service.description}
              </Typography>
            </Box>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Opportunity;
