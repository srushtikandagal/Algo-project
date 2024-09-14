import React from "react";
import { Box, Container, Typography } from "@mui/material";
// Components
import CalcForm from "./CalcForm";

const Calculate = () => {
  return (
    <Box component="section" sx={{ py: 8 }}>
      <Container maxWidth="lg">
        {/* Text Section */}
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography
            variant="h4"
            component="h2"
            sx={{ fontWeight: "bold", mb: 2 }}
            data-aos="fade-up"
            data-aos-offset="400"
          >
            Check how much you can earn.
          </Typography>
          <Typography
            variant="body1"
            component="p"
            sx={{ mb: 4, maxWidth: 622, mx: "auto", color: "text.secondary" }}
            data-aos="fade-up"
            data-aos-offset="450"
          >
            Let's check your hash rate to see how much you will earn today.
          </Typography>
        </Box>
        {/* Form Section */}
        <CalcForm />
      </Container>
    </Box>
  );
};

export default Calculate;
