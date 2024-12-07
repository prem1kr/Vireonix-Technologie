import React from "react";
import { Box, Grid, Typography, TextField, Button, Link } from "@mui/material"; // Added 'Link' import
import { Facebook, Twitter, Instagram, LinkedIn, Email } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#F7FAFC",
        padding: { xs: "20px 10px", md: "40px 20px" },
        borderTop: "1px solid #ddd",
        display: "flex",
        justifyContent: "center", // Center the grid horizontally
        alignItems: "center", // Center the grid vertically
        flexDirection: "column", // Stack content vertically
      }}
    >
      <Grid
        container
        spacing={4}
        sx={{
          display: "flex",
          justifyContent: "center", // Center the grid content
          textAlign: "center", // Center the text in the grid
        }}
      >
        {/* Partners */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Partners
          </Typography>
          {["Vireonix Technologies", "Webtoks IT Solutions", "Webtuks IT Solutions"].map((partner) => (
            <Typography
              key={partner}
              sx={{
                cursor: "pointer",
                transition: "color 0.3s",
                "&:hover": { color: "primary.main" },
              }}
            >
              {partner}
            </Typography>
          ))}
        </Grid>

        {/* Social Media Links */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Stay Connected
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              justifyContent: "center", // Center icons horizontally
              marginTop: "10px",
              flexWrap: "wrap", // Allow icons to wrap on smaller screens
            }}
          >
            {[Facebook, Twitter, Email, Instagram].map((Icon, index) => (
              <Icon
                key={index}
                fontSize="large"
                sx={{
                  cursor: "pointer",
                  fontSize: { xs: "1.5rem", md: "2rem" },
                  transition: "color 0.3s",
                  "&:hover": { color: "#ff5654" },
                }}
              />
            ))}

            {/* LinkedIn Icon with Redirect */}
            <Link href="https://www.linkedin.com/company/vireonix-technologies/" target="_blank" sx={{ color: "inherit" }}>
              <LinkedIn
                fontSize="large"
                sx={{
                  cursor: "pointer",
                  fontSize: { xs: "1.5rem", md: "2rem" },
                  transition: "color 0.3s",
                  "&:hover": { color: "#ff5654" },
                }}
              />
            </Link>
          </Box>
        </Grid>

        {/* Newsletter */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            For latest news and updates
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: "10px" }}>
            Stay updated with our latest job opportunities, recruitment tips, and career insights. Subscribe to our
            newsletter and never miss an update on your job search journey!
          </Typography>
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: "10px",
              justifyContent: "center", // Center the form
            }}
          >
            <TextField
              label="Enter your mail here"
              variant="outlined"
              size="small"
              fullWidth
              sx={{
                flexGrow: 1,
                "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "primary.main",
                },
              }}
            />
            <Button
              variant="contained"
              color="primary"
              size="small"
              sx={{
                backgroundColor:"#CD5C5C",
                transition: "transform 0.2s",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              Subscribe
            </Button>
          </Box>
        </Grid>
      </Grid>

      {/* Footer Bottom */}
      <Box
        sx={{
          marginTop: "40px",
          textAlign: "center",
          borderTop: "1px solid #ddd",
          paddingTop: "20px",
        }}
      >
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{
            fontSize: { xs: "0.8rem", md: "1rem" },
            transition: "color 0.3s",
            "&:hover": { color: "primary.main" },
          }}
        >
          Terms Of Use | Privacy Policy | Accessibility
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{
            fontSize: { xs: "0.8rem", md: "1rem" },
            transition: "color 0.3s",
            "&:hover": { color: "primary.main" },
          }}
        >
          Copyright © Vireonix Technologies 2024. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
