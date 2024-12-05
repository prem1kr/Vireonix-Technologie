import React, { useState } from "react";
import axios from "axios";
import { CssVarsProvider } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import { Box, GlobalStyles, keyframes } from "@mui/material";
import { useNavigate } from "react-router-dom";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "https://job-portal-1-bdk6.onrender.com/api";

// Animation for form appearance
const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await axios.post(`${API_BASE_URL}/hiring-managers/signup`, { email, password, role });
      navigate("/verification-code");
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed.");
    }
  };

  return (
    <CssVarsProvider>
      {/* Global styles */}
      <GlobalStyles
        styles={{
          "html, body": {
            margin: 0,
            padding: 0,
            width: "100%",
            height: "100%",
            fontFamily: "Roboto, sans-serif",
            overflow: "hidden",
            backgroundColor: "white",
          },
        }}
      />

      {/* Background Box */}
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          gap: { xs: 2, sm: "5%", md: "10%" },
        }}
      >
        {/* Left Image */}
        <Box
          component="img"
          src="./logo.png" // Replace with your image path
          alt="Signup Illustration"
          sx={{
            objectFit: "cover",
            borderRadius: "8px",
            backgroundColor: "white",
            width: { xs: "80%", sm: "450px", md: "500px", lg: "600px" },
            height: { xs: "250px", sm: "300px", md: "400px", lg: "500px" },
            maxWidth: "100%",
          }}
        />

        {/* Signup Form */}
        <Sheet
          sx={{
            width: "100%",
            maxWidth: 350,
            padding: { xs: 4, sm: 4, md: 5 },
            display: "flex",
            flexDirection: "column",
            backgroundColor: "transparent",
            gap: 2,
            textAlign: "center",
            animation: `${fadeInUp} 1s ease-out`,
            marginTop: { xs: 2, sm: 0 },
          }}
          variant="soft"
        >
          {/* Signup Form Content */}
          <form onSubmit={handleSignup}>
            <Typography level="h3" component="h1" sx={{ mb: 1 }}>
              Sign Up
            </Typography>

            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                name="email"
                type="email"
                value={email}
                placeholder="johndoe@email.com"
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  borderColor: "neutral.outlinedBorder",
                  "&:hover": { borderColor: "primary.solidHoverBg" },
                }}
                required
              />
            </FormControl>

            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
                name="password"
                type="password"
                value={password}
                placeholder="Create a password"
                onChange={(e) => setPassword(e.target.value)}
                sx={{
                  borderColor: "neutral.outlinedBorder",
                  "&:hover": { borderColor: "primary.solidHoverBg" },
                }}
                required
              />
            </FormControl>

            <FormControl>
              <FormLabel>Role</FormLabel>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                style={{
                  padding: "8px",
                  borderRadius: "4px",
                  borderColor: "neutral.outlinedBorder",
                  width: "100%",
                }}
                required
              >
                <option value="">Select Role</option>
                <option value="admin">Company</option>
                <option value="user">Job Seeker</option>
              </select>
            </FormControl>

            <Button
              type="submit"
              sx={{
                mt: 2,
                width: "100%",
                backgroundColor: "primary.solidBg",
                "&:hover": { backgroundColor: "primary.solidHoverBg" },
              }}
            >
              Sign Up
            </Button>

            {error && (
              <Typography color="error" sx={{ mt: 1 }}>
                {error}
              </Typography>
            )}

            <Typography
              fontSize="sm"
              sx={{ alignSelf: "center", mt: 2, color: "text.secondary" }}
            >
              Already have an account?{" "}
              <Button
                variant="text"
                onClick={() => navigate("/login")}
                sx={{
                  color: "primary.solidBg",
                  textTransform: "none",
                  padding: 0,
                  minWidth: 0,
                }}
              >
                Log in
              </Button>
            </Typography>
          </form>
        </Sheet>
      </Box>
    </CssVarsProvider>
  );
};

export default SignupPage;
