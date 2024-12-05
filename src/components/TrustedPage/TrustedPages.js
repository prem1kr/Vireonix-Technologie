import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";

const TrustedPage = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        p: 4,
        bgcolor: "#f9f9f9",
        minHeight: "30vh",
        border:"5px white",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",

        
      }}
    >
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", mb: 4, color: "#333" }}
      >
        "Trusted by Over"
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 3,
          flexWrap: "wrap",
        }}
      >
        {/* Card 1 */}
        <Card
          sx={{
            width: 200,
            bgcolor: "#E6F7FF",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <CardContent>
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", color: "#007BFF" }}
            >
              10,000+
            </Typography>
            <Typography variant="body1" sx={{ mt: 1, color: "#555" }}>
              Candidates
            </Typography>
          </CardContent>
        </Card>

        {/* Card 2 */}
        <Card
          sx={{
            width: 200,
            bgcolor: "#E8FFE6",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <CardContent>
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", color: "#28A745" }}
            >
              15,000+
            </Typography>
            <Typography variant="body1" sx={{ mt: 1, color: "#555" }}>
              Happy Users
            </Typography>
          </CardContent>
        </Card>

        {/* Card 3 */}
        <Card
          sx={{
            width: 200,
            bgcolor: "#EFEFFF",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <CardContent>
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", color: "#6F42C1" }}
            >
              500+
            </Typography>
            <Typography variant="body1" sx={{ mt: 1, color: "#555" }}>
              Companies
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Typography
        variant="h6"
        sx={{ fontWeight: "medium", mt: 4, color: "#555" }}
      >
        and Growing Every Day!
      </Typography>
    </Box>
  );
};

export default TrustedPage;
