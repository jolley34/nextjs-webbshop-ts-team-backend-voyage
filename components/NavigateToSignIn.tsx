"use client";
import { LoginOutlined } from "@mui/icons-material";
import { Link } from "@mui/material";

export default function NavigateToSignIn() {
  return (
    <Link href="/sign-in">
      <LoginOutlined />
    </Link>
  );
}

// Kan denna tas bort helt?
