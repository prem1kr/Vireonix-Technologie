import React from "react";
import { Box, Grid, Typography, TextField, Button } from "@mui/material";
import { Phone, Email, Business, Message } from "@mui/icons-material";

const CombinedContactPage = () => {
  return (
    <Box
      id="contact" // ID to scroll to this section
      sx={{
        padding: { xs: "20px", sm: "30px", md: "40px" },
        backgroundColor: "#C2E4FD2E",
      }}
    >
      <Grid container spacing={4}>
        {/* Contact Info */}
        <Grid item xs={15} md={6}>
  <Box
    sx={{
      backgroundColor: "#fff", // Light background for better contrast
      padding: { xs: "20px", sm: "30px", md: "40px" }, // Responsive padding
      borderRadius: "10px", // Slightly rounded corners for a softer look
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)", // Subtle box-shadow for a floating effect
      marginTop: { xs: "10px", md: "0%" },
      textAlign: "center", // Centered text on smaller screens for better readability
      position: "relative",
      top: "0", // Reset the top position for consistent layout
      transition: "transform 0.3s ease", // Smooth transition for hover effects
      ":hover": {
        transform: "translateY(-10px)", // Lift effect on hover for interactivity
      },
    }}
  >
    <Typography
      variant="h4"
      gutterBottom
      sx={{
        color: "#333", // Darker text color for better readability
        fontWeight: "bold",
        marginBottom: "20px",
        fontSize: { xs: "1.6rem", sm: "1.8rem", md: "2.2rem",color:"#fb5957" }, // Responsive font sizes
      }}
    >
      Contact Us
    </Typography>
    <Typography
      variant="body1"
      mb={2}
      sx={{
        color: "#555",
        textAlign: "center",
        fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" ,color:"#00bf62"}, // Adjusted for readability
        lineHeight: 1.6,
      }}
    >
      Feel free to contact us anytime, Vireonix Technologies will always love to hear from you.
    </Typography>
    
    {/* Contact Details Section */}
    <Box sx={{ textAlign: "center" }}>
      <Typography
        variant="body2"
        sx={{ color: "#777", fontSize: "1rem", lineHeight: 1.6 }}
      >
        <strong>General Enquiry:</strong>{" "}
        <a
  href="tel:+918945671230"
  style={{
    color: "#ff5654",
    textDecoration: "none",
  }}
  onMouseEnter={(e) => (e.currentTarget.style.color = "#008000")} // Change color on hover
  onMouseLeave={(e) => (e.currentTarget.style.color = "#ff5654")} // Reset color when hover ends
>
  <Phone sx={{ fontSize: 18, marginRight: 1 }} />
  +91-8945671230
</a>
        <br />
        <strong>HR & Recruitment:</strong>{" "}
        <a href="tel:+918945671230" style={{ color: "#ff5654", textDecoration: "none" }}
         onMouseEnter={(e) => (e.currentTarget.style.color = "#008000")} // Change color on hover
         onMouseLeave={(e) => (e.currentTarget.style.color = "#ff5654")} // Reset color when hover ends
        >
          <Phone sx={{ fontSize: 18, marginRight: 1 }} />
          +91-8945671230
        </a>
        <br />
        <strong>SMS, Voice Call, WhatsApp, Ads:</strong>{" "}
        <a href="tel:+918945671230" style={{ color: "#ff5654", textDecoration: "none" }}
         onMouseEnter={(e) => (e.currentTarget.style.color = "#008000")} // Change color on hover
         onMouseLeave={(e) => (e.currentTarget.style.color = "#ff5654")} // Reset color when hover ends
        >
          <Phone sx={{ fontSize: 18, marginRight: 1 }} />
          +91-8945671230
        </a>
      </Typography>

      {/* Email and Address Section */}
      <Typography
        variant="body2"
        mt={2}
        sx={{ color: "#777", fontSize: "1rem", lineHeight: 1.6 }}
        
      >
        <strong>Send Email:</strong>{" "}
        <a href="mailto:info@Vireonix.com" style={{ color: "#ff5654", textDecoration: "none" }}
         onMouseEnter={(e) => (e.currentTarget.style.color = "#008000")} // Change color on hover
         onMouseLeave={(e) => (e.currentTarget.style.color = "#ff5654")} // Reset color when hover ends
        >
          <Email sx={{ fontSize: 18, marginRight: 1 }} />
          info@Vireonix.com
        </a>{" "}
        /{" "}
        <a href="mailto:hr@Vireonix.com" style={{ color: "#ff5654", textDecoration: "none" }}
         onMouseEnter={(e) => (e.currentTarget.style.color = "#008000")} // Change color on hover
         onMouseLeave={(e) => (e.currentTarget.style.color = "#ff5654")} // Reset color when hover ends
        >
          <Email sx={{ fontSize: 18, marginRight: 1 }} />
          hr@Vireonix.com
        </a>
        <br />
        <strong>Address:</strong> SECTOR 112, LANDRAN, KHARAR BANUR HWY,
        SAHIBZADA AJIT SINGH NAGAR, PUNJAB 140307
        <br />
        <strong>Phone:</strong>{" "}
        <a href="tel:18002003575" style={{ color: "#ff5654", textDecoration: "none" }}
         onMouseEnter={(e) => (e.currentTarget.style.color = "#008000")} // Change color on hover
         onMouseLeave={(e) => (e.currentTarget.style.color = "#ff5654")} // Reset color when hover ends
        >
          <Phone sx={{ fontSize: 18, marginRight: 1 }} />
          1800 200 3575
        </a>
      </Typography>
    </Box>
  </Box>
</Grid>


        {/* Enquiry Form */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              backgroundColor: "#ffffff",
              padding: { xs: "15px", sm: "20px", md: "30px" },
              borderRadius: "8px",
              boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            }}
          >
            <Typography
              variant="h5"
              gutterBottom
              sx={{ textAlign: { xs: "center", md: "left" } }}
            >
              For Any Query
            </Typography>
            <Typography
              variant="body2"
              mb={2}
              sx={{ textAlign: { xs: "center", md: "left" } }}
            >
              Reach us by filling out the form below:
            </Typography>
            <form>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    sx={{ backgroundColor: "#F5F5F5", width: "100%", }}
                    label={
                      <>
                        <Business sx={{ fontSize: 20, marginRight: 1 }} /> Full
                        Name
                      </>
                    }
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    sx={{ backgroundColor: "#F5F5F5", width: "100%" }}
                    label={
                      <>
                        <Email sx={{ fontSize: 20, marginRight: 1 }} /> Email
                      </>
                    }
                    type="email"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    sx={{ backgroundColor: "#F5F5F5", width: "100%" }}
                    label={
                      <>
                        <Phone sx={{ fontSize: 20, marginRight: 1 }} /> Phone
                      </>
                    }
                    type="tel"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    sx={{ backgroundColor: "#F5F5F5", width: "100%" }}
                    label={
                      <>
                        <Business sx={{ fontSize: 20, marginRight: 1 }} />{" "}
                        Company
                      </>
                    }
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    sx={{ backgroundColor: "#F5F5F5", width: "100%" }}
                    label={
                      <>
                        <Message sx={{ fontSize: 20, marginRight: 1 }} />{" "}
                        Message
                      </>
                    }
                    variant="outlined"
                    multiline
                    rows={4}
                    fullWidth
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{
                  marginTop: "10px",
                  display: "block",
                  marginLeft: "auto",
                  backgroundColor:"#CD5C5C",
                }}
              >
                Submit
              </Button>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CombinedContactPage;
