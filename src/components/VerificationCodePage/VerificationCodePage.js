import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Grid,
  Link,
  Alert,
  CircularProgress,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { keyframes } from "@mui/system";
import { useEffect } from "react"; // Import useEffect

// Animation keyframes
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const VerificationCodePage = () => {
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Prevent scrolling when the component is mounted
  useEffect(() => {
    document.body.style.overflow = "hidden"; // Disable scrolling
    return () => {
      document.body.style.overflow = "auto"; // Restore scrolling when unmounted
    };
  }, []);

  const handleVerifyCode = async (e) => {
    e.preventDefault();
    setMessage(""); // Clear previous messages
    setLoading(true); // Show loader

    try {
      const response = await axios.post(
        "https://job-portal-1-bdk6.onrender.com/api/hiring-managers/verify-code",
        { code, newPassword }
      );
      setMessage({
        text: response.data.message || "Password updated successfully.",
        type: "success",
      });
      setTimeout(() => navigate("/login"), 2000); // Redirect to login after success
    } catch (err) {
      setMessage({
        text: err.response?.data?.message || "Verification failed.",
        type: "error",
      });
    } finally {
      setLoading(false); // Hide loader
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Full viewport height
        backgroundColor: "#f5f5f5",
        animation: `${fadeIn} 1s ease-out`, // Page fade-in effect
        overflow: "hidden", // Prevent container overflow
      }}
    >
      <Grid
        container
        sx={{
          width: "100%",
          maxWidth: "600px",
          borderRadius: "8px",
          overflow: "hidden",
          padding: 4,
          animation: `${fadeIn} 1.5s ease-out`,
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", textAlign: "center", mb: 2 }}>
          Verification Code
        </Typography>
        <Typography sx={{ mb: 4, color: "gray", textAlign: "center" }}>
          Enter the verification code sent to your email and reset your password.
        </Typography>

        {/* Error or Success Message */}
        {message && (
          <Alert severity={message.type} sx={{ mb: 3 }}>
            {message.text}
          </Alert>
        )}

        {/* Verification Form */}
        <form onSubmit={handleVerifyCode}>
          <TextField
            fullWidth
            label="Verification Code"
            variant="outlined"
            margin="normal"
            required
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <TextField
            fullWidth
            label="New Password"
            type="password"
            variant="outlined"
            margin="normal"
            required
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 2,
              py: 1.5,
              backgroundColor: "#0056b3",
              "&:hover": {
                backgroundColor: "#003f88",
              },
            }}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : "Verify and Reset"}
          </Button>
        </form>

        {/* Resend Code Link */}
        <Box sx={{ mt: 2, textAlign: "center" }}>
          <Link href="#" underline="hover" sx={{ color: "#0056b3" }}>
            Resend Code
          </Link>
        </Box>
      </Grid>
    </Box>
  );
};

export default VerificationCodePage;
