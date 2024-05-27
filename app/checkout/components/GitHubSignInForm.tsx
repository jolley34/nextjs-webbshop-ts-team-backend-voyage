import { Button, Typography } from "@mui/material";
import { signIn } from "next-auth/react";

export default function GitHubSignInForm() {
  return (
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
  );
}
