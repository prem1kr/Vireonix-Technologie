import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CssVarsProvider, useColorScheme } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import { Box, GlobalStyles, keyframes } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import { saveToken } from "../Utilites/authUtils";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "https://job-portal-1-bdk6.onrender.com/api";

const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

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

const slideInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const ModeToggle = () => {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <select
      value={mode}
      onChange={(e) => setMode(e.target.value)}
      style={{
        position: "absolute",
        right: "10px",
        zIndex: 10,
        opacity: 0,
      }}
    >
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  );
};

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(`${API_BASE_URL}/hiring-managers/login`, {
        email,
        password,
      });
      const { token, userType } = response.data;
      saveToken(token);

      navigate("/dashboard", { state: { userType } });
    } catch (err) {
      setError(err.response?.data?.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <CssVarsProvider>
      <GlobalStyles
        styles={{
          "html, body": {
            margin: 0,
            padding: 0,
            width: "100%",
            height: "100%",
            overflow: "hidden",
            backgroundColor:"white"
          },
        }}
      />
      <ModeToggle />

      <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          animation: `${gradientShift} 8s ease infinite`,
          position: "relative",
          padding: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100vh",
            gap: { xs: 2, sm: "5%" },
          }}
        >
          <Box
            component="img"
            src="./logo.png"
            alt="Login Illustration"
            sx={{
              objectFit: "cover",
              borderRadius: "8px",
              width: { xs: "80%", sm: "400px" },
              maxHeight: { xs: "250px", sm: "400px" },
              animation: `${slideInLeft} 1s ease-out`,
            }}
          />
          <Sheet
            sx={{
              width: "100%",
              maxWidth: 350,
              padding: 4,
              display: "flex",
              flexDirection: "column",
              gap: 2,
              animation: `${fadeInUp} 1s ease-out`,
            }}
          >
            <Typography level="h4">Login</Typography>

            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                name="email"
                type="email"
                placeholder="johndoe@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
                name="password"
                type="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>

            <Button
              variant="solid"
              sx={{
                mt: 2,
                backgroundColor: "primary.solidBg",
                "&:hover": {
                  backgroundColor: "primary.solidHoverBg",
                  transform: "scale(1.05)",
                },
              }}
              onClick={handleLogin}
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} sx={{ color: "white" }} /> : "Log in"}
            </Button>

            {error && <Typography color="error">{error}</Typography>}

            <Typography
              sx={{ textAlign: "center", mt: 2 }}
              onClick={() => navigate("/forgetpassword")}
            >
              Forgot Password?
            </Typography>

            <Typography
              sx={{ textAlign: "center" }}
              onClick={() => navigate("/signup")}
            >
              Don’t have an account? Sign up
            </Typography>
          </Sheet>
        </Box>
      </Box>
    </CssVarsProvider>
  );
};

export default LoginPage;
