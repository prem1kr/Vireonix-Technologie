import React from "react";
import { Box, Typography, Card, CardMedia } from "@mui/material";
import { motion } from "framer-motion"; // Import motion from framer-motion

const DownloadPage = () => {
  return (
    <Box
      sx={{
        padding: { xs: "10px", sm: "20px" },
        backgroundColor: "#f9f9f9",
        minHeight: "50vh",
      }}
    >
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <Card
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            padding: "20px",
            backgroundColor: "#D9D9D9",
           
            backgroundSize: "cover", // Make the background cover the entire Card
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            marginBottom: "20px",
            gap: { xs: "20px", md: "0" },
            alignItems: { xs: "center", md: "flex-start" },
            height: "auton", // Allow Card to grow based on content
          }}
        >
          {/* Text Content */}
          <Box
            sx={{
              flex: 1,
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  fontSize: { xs: "20px", md: "32px" },
                  position: "relative",
                  marginTop: "5%",
                  color: "#fb5957",
                }}
              >
                Download Vireonix Technologies App
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <Typography
                variant="body1"
                mb={2}
                sx={{
                  fontSize: { xs: "14px", md: "16px" },
                  position: "relative",
                  marginTop: "5%",
                }}
              >
                - Resume Build assistance
                <br />
                - Training for Interviews
                <br />
                - Direct Contact to Company HRs
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                  justifyContent: { xs: "center", md: "flex-start" },
                  position: "relative",
                  marginTop: "5%",
                }}
              >
                <img
                  src="playstore-.png"
                  alt="Google Play"
                  style={{
                    cursor: "pointer",
                    backgroundColor: "white",
                    borderRadius: "10px",
                    width: "120px",
                  }}
                />
                <img
                  src="appstore-.png"
                  alt="App Store"
                  style={{
                    cursor: "pointer",
                    backgroundColor: "white",
                    borderRadius: "10px",
                    width: "120px",
                  }}
                />
              </Box>
            </motion.div>
          </Box>

          {/* QR Code Section */}
          <Box
            sx={{
              textAlign: "center",
              flex: 1,
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <img
                src="Qr.png"
                alt="QR Code"
                style={{
                  width: "150px",
                  height: "150px",
                  marginBottom: "20px",
                  backgroundColor: "transparent",
                  borderRadius: "20px",
                  position: "relative",
                  marginTop: "10%",
                }}
              />
            </motion.div>
            <Typography
              variant="body2"
              sx={{ fontSize: { xs: "12px", md: "14px" } }}
            >
              Scan QR to download App
            </Typography>
          </Box>

          {/* Phone Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <CardMedia
              component="img"
              sx={{
                width: { xs: "425px", md: "450px" },
                height: { xs: "200px", md: "300px" },
                objectFit: "cover", // Adjust this to cover the area of the container
                backgroundColor: "transparent",
                borderRadius: "40px",
                background: "none",
              }}
              image="phone (4).png"
              alt="App Screenshots"
            />
          </motion.div>
        </Card>
      </motion.div>
    </Box>
  );
};

export default DownloadPage;
