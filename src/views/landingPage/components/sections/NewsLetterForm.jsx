import React from "react";
import { Box, TextField, Button } from "@mui/material";

const NewsLetterForm = () => {
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        width: "100%",
      }}
      noValidate
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          alignItems: "center",
          gap: { xs: "16px", lg: "10px" },
        }}
      >
        <TextField
          variant="outlined"
          placeholder="Enter your email"
          fullWidth
          InputProps={{
            style: {
              color: "white",
              fontSize: "16px",
            },
          }}
          InputLabelProps={{
            style: {
              color: "white",
            },
          }}
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            borderRadius: "8px",
            "& .MuiOutlinedInput-root": {
              borderRadius: "8px",
            },
          }}
        />
        <Button
          variant="contained"
          color="primary"
          sx={{
            backgroundColor: "white",
            color: "darkblue",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.7)",
            },
            paddingX: 4,
          }}
        >
          Subscribe
        </Button>
      </Box>
    </form>
  );
};

export default NewsLetterForm;
