import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Box, Button, styled } from "@mui/material";
import theme from "../app/themes/themes";

const StyledButton = styled(Button)(() => ({
  padding: "0.75rem 5.25rem 0.75rem 5.25rem",
  color: theme.palette.primary.main,
  border: "1px solid black",
  borderRadius: "50px",
  textTransform: "none",
  fontFamily: "'Futura', 'Trebuchet MS', 'Arial', sans-serif",
  "&:hover": {
    backgroundColor: theme.palette.primary.light,
    boxShadow: "0px 0px 0px 1px black inset",
  },
}));

export default function showMoreComponent() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "4rem",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <StyledButton>Visa Mer</StyledButton>
        <KeyboardArrowUpIcon sx={{ fontSize: "1.75rem" }} />
      </Box>
      ;
    </>
  );
}
