"use client";
import { signIn } from "next-auth/react";

import { Button } from "@mui/material";

export default function GitHubSignIn() {
  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      onClick={() => signIn()}
      sx={{ mt: 3, mb: 2 }}
    >
      Continue with GitHub
    </Button>
  );
}
