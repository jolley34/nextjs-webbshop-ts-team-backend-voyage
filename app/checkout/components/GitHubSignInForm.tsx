import { Box, Button, Typography } from "@mui/material";
import { signIn } from "next-auth/react";

export default function GitHubSignInForm() {
  return (
    <Box>
      <Typography
        variant="h6"
        sx={{
          fontWeight: "100",
          marginTop: "1.5rem",
          fontFamily: "'Futura', 'Trebuchet MS', 'Arial', sans-serif",
          fontSize: { xs: "1.5rem", md: "2rem" },
        }}
      >
        Sign in to complete your order..
      </Typography>
      <Button
        type="submit"
        color="secondary"
        variant="outlined"
        size="large"
        fullWidth
        sx={{
          bgcolor: "#0072e4",
          marginTop: "2rem",
          borderRadius: "20px",
          border: "none",
          marginBottom: "2rem",
          "&:hover": {
            bgcolor: "#0264C5",
          },
        }}
        onClick={() => signIn()}
      >
        <Typography
          sx={{
            color: "white",
            fontWeight: "400",
            fontFamily: "'Futura', 'Trebuchet MS', 'Arial', sans-serif",
          }}
        >
          Sign in with GitHub
        </Typography>{" "}
      </Button>
    </Box>
  );
}
