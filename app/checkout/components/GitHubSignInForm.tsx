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
        Logga in för att slutföra din order
      </Typography>
      <Button
        type="submit"
        color="secondary"
        variant="outlined"
        size="large"
        fullWidth
        sx={{
          bgcolor: "#000",
          borderColor: "#000",
          marginTop: "3rem",
          marginBottom: "3rem",
          "&:hover": {
            bgcolor: "#333",
            borderColor: "#000",
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
          Logga in med GitHub
        </Typography>{" "}
      </Button>
    </Box>
  );
}
