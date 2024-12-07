import React from "react";
import { Box, Grid, Typography, TextField, Button, Link } from "@mui/material";
import { Facebook, Twitter, Instagram, Pinterest, YouTube, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#033B32",
        color: "#fff",
        padding: { xs: "20px", md: "40px" },
      }}
    >
      <Grid container spacing={4}>
        {/* Left Section: Links */}
        <Grid item xs={12} md={6} lg={4}>
          <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: "20px" }}>
            Chobani
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {["Careers", "Our Services", "Consumer Care", "Alumni", "latest News", "Webservice", "mohali® punjab", "punjab® India"].map((item) => (
              <Typography
                key={item}
                variant="body2"
                sx={{
                  fontSize: "0.9rem",
                  cursor: "pointer",
                  "&:hover": { color:"#00bf62" },
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>
        </Grid>

        {/* Middle Section: Social Links */}
        <Grid item xs={12} md={6} lg={4}>
          <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "10px" }}>
            Follow Us
          </Typography>
          <Box sx={{ display: "flex", gap: "15px", alignItems: "center" }}>
            {[Facebook, Twitter, Instagram, Pinterest, YouTube].map((Icon, index) => (
              <Icon
                key={index}
                sx={{
                  fontSize: "1.8rem",
                  cursor: "pointer",
                  transition: "color 0.3s",
                  "&:hover": { color: "#fd5356" },
                }}
              />
            ))}
            {/* LinkedIn Icon with Redirect */}
            <Link
              href="https://www.linkedin.com/company/chobani/"
              target="_blank"
              sx={{ color: "inherit", textDecoration: "none" }}
            >
              <LinkedIn
                sx={{
                  fontSize: "1.8rem",
                  cursor: "pointer",
                  transition: "color 0.3s",
                  "&:hover": { color: "#ff5857" },
                }}
              />
            </Link>
          </Box>
        </Grid>

        {/* Right Section: Newsletter */}
        <Grid item xs={12} lg={4}>
          <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "10px" }}>
            Subscribe here
          </Typography>
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <TextField
              placeholder="Your email here"
              variant="outlined"
              size="small"
              sx={{
                backgroundColor: "#fff",
                borderRadius: "5px",
                "& .MuiOutlinedInput-root": {
                  fontSize: "0.9rem",
                },
              }}
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#ff5456",
                color: "#033B32",
                fontSize: "0.9rem",
                "&:hover": { backgroundColor: "#01be64" },
              }}
            >
              Subscribe
            </Button>
          </Box>
          <Typography
            variant="caption"
            sx={{
              color: "#C5C5C5",
              fontSize: "0.8rem",
              marginTop: "5px",
            }}
          >
            
          </Typography>
        </Grid>
      </Grid>

      {/* Footer Bottom Links */}
      <Box
        sx={{
          marginTop: "30px",
          borderTop: "1px solid #546E64",
          paddingTop: "15px",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "15px",
        }}
      >
        {[
          "Website Terms",
          "Privacy Policy",
          "Accessibility Statement",
          "CA Transparency in Supply Chains Act",
          "Supplier Code of Conduct",
          "Marketing to Children",
          "Do Not Sell My Information",
        ].map((item) => (
          <Typography
            key={item}
            variant="caption"
            sx={{
              color: "white",
              fontSize: "0.8rem",
              cursor: "pointer",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            {item}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default Footer;
