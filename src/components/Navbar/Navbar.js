import React, { useState, useEffect } from "react";
import logo from "./VTLOGO.jpeg.jpg"; // Import the logo file
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useNavigate, useLocation } from "react-router-dom";
import { keyframes } from "@mui/system";

// Define animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const scaleUp = keyframes`
  from {
    transform: scale(0.8);
    opacity: 0.5;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [marginTop, setMarginTop] = useState(64); // Default AppBar height for small screens
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Adjust margin-top dynamically based on AppBar height
    const appBarElement = document.querySelector(".MuiAppBar-root");
    if (appBarElement) {
      setMarginTop(appBarElement.offsetHeight);
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  // Menu items with IDs
  const menuItems = [
    { label: "Home", id: "/" },
    { label: "About Us", id: "about" },
    { label: "Services", id: "services" },
    { label: "Students", id: "clients" },
    { label: "Testimonial", id: "StudentTestimonial" },
    { label: "Contact Us", id: "contact" },
   
  ];

  // Filter out the Home button if on the Home page
  const filteredMenuItems =
    location.pathname === "/"
      ? menuItems.filter((item) => item.label !== "Home")
      : menuItems;

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      window.scrollTo(0, 0);
    }
  };

  const handleHomeClick = () => {
    // Navigate to the home page directly
    navigate("/");
  };

  return (
    <>
      <AppBar
        position="fixed"
        color="default"
        sx={{
          backgroundColor: "#ffffff",
          boxShadow: "none",
          zIndex: 1300,
          padding: { xs: "0 8px", md: "0 16px" },
          animation: `${fadeIn} 0.5s ease-out`,
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo */}
          <Box
            component="img"
            src={logo}
            alt="Logo"
            sx={{
              width: { xs: 80, md: 80 },
              height: { xs: 60, md: 80 },
              marginRight: 1,
              cursor: "pointer", // Makes the logo clickable
              animation: `${scaleUp} 0.8s ease-in-out`,
            }}
            onClick={handleHomeClick} // Navigate to Home when clicked
          />

          {/* "EASY JOB" Text */}
          <Typography
            variant={{ xs: "subtitle0", md: "h5" }}
            sx={{
              fontWeight: "bold",
              cursor: "pointer", // Makes the text clickable
              animation: `${fadeIn} 1s ease-out`,
              position:"relative",
              left:"-60px",
              color:"#B22222"
            }}
            onClick={handleHomeClick} // Navigate to Home when clicked
          >
           Vireonix Tech
          </Typography>

          {/* Desktop Menu */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 4,
              justifyContent: "center",
              animation: `${fadeIn} 1.2s ease-out`,
            }}
          >
            {filteredMenuItems.map((item) => (
              <Button
                key={item.label}
                sx={{
                  color: "black",
                  fontWeight: 500,
                  "&:hover": {
                    color: "#CD5C5C",
                    transform: "scale(1.1)",
                    transition: "all 0.3s",
                  },
                }}
                onClick={() => {
                  if (item.label === "Home") {
                    handleHomeClick(); // Navigate to home if Home is clicked
                  } else {
                    scrollToSection(item.id); // Scroll to other sections
                  }
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Social Media and Login */}
          <Box
            sx={{
              display: "flex",
              gap: 1,
              
              alignItems: "center",
              animation: `${fadeIn} 1.4s ease-out`,
            }}
          >
            <IconButton color="primary">
              <FacebookIcon />
            </IconButton>
            <IconButton color="primary">
              <InstagramIcon />
            </IconButton>
            <IconButton color="primary" onClick={() => window.location.href = "https://www.linkedin.com/company/vireonix-technologies/"}>
  <LinkedInIcon />
</IconButton>

        {/*   <Button
              variant="contained"
              sx={{
                fontWeight: "bold",
                backgroundColor: "#007BFF",
                "&:hover": {
                  backgroundColor: "#0056b3",
                },
              }}
              onClick={() => navigate("/login")}
            >
              Login
            </Button> */ }
          </Box>

          {/* Hamburger Menu */}
          <IconButton
            edge="end"
            onClick={handleDrawerToggle}
            sx={{
              display: { xs: "block", md: "none" },
              animation: `${fadeIn} 1.5s ease-out`,
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer anchor="left" open={mobileOpen} onClose={handleDrawerToggle}>
        <List>
          {filteredMenuItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton
                onClick={() => {
                  if (item.label === "Home") {
                    handleHomeClick(); // Navigate to home if Home is clicked
                  } else {
                    scrollToSection(item.id); // Scroll to other sections
                  }
                  handleDrawerToggle();
                }}
                sx={{
                  "&:hover": {
                    backgroundColor: "#007BFF",
                    color: "white",
                  },
                  animation: `${fadeIn} 0.6s ease-in`,
                }}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Margin to prevent content overlap */}
      <Box sx={{ marginTop: `${marginTop}px`, display: "none" }}></Box>
    </>
  );
};

export default Navbar;
