"use client";
import { LoginOutlined } from "@mui/icons-material";
import { Link, ThemeProvider } from "@mui/material";
import { usePathname } from "next/navigation";
import { theme } from "../themes/themes";

export default function SignInIcon() {
  const pathname = usePathname();

  return (
    <ThemeProvider theme={theme}>
      <Link href="/sign-in">
        <LoginOutlined
          sx={{ color: pathname === "/about" ? "white" : "black" }}
        />
      </Link>
    </ThemeProvider>
  );
}
