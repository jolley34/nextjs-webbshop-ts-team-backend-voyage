"use client";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Box, Button, styled } from "@mui/material";

const StyledButton = styled(Button)(() => ({
  padding: "0.75rem 5.25rem 0.75rem 5.25rem",
  color: "#0072e4",
  border: "1px solid #0072e4",
  borderRadius: "50px",
  textTransform: "none",
  fontFamily: "'Futura', 'Trebuchet MS', 'Arial', sans-serif",
  "&:hover": {
    boxShadow: "0px 0px 0px 1px #0264C5 inset",
  },
}));

export default function ShowMoreComponent() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "4rem 4rem 1rem 4rem",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <StyledButton>Show more</StyledButton>
        <KeyboardArrowUpIcon sx={{ fontSize: "1.75rem" }} />
      </Box>
      ;
    </>
  );
}
