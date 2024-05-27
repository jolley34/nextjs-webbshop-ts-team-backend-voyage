"use client";
import Footer from "@/components/shared/footer/Footer";
import Header from "@/components/shared/header/Header";
import { Box, CssBaseline, Grid, ThemeProvider } from "@mui/material";
import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { CartProvider } from "./context/CartContext";
import theme from "./themes/themes";
import { LayoutProps } from "./types";

export default function RootLayout({ children }: LayoutProps) {
  const [session, setSession] = useState(null);

  useEffect(() => {
    async function fetchSession() {
      const sessionData = await getSession();
      setSession(sessionData);
    }

    fetchSession();
  }, []);
  return (
    <>
      <html lang="en">
        <body>
          <CssBaseline />
          <CartProvider>
            <ThemeProvider theme={theme}>
              <Header name="ananas" session={session} />

              <Grid container direction="column">
                <Grid item xs>
                  <Box component={"main"}>{children}</Box>
                </Grid>
                <Footer />
              </Grid>
            </ThemeProvider>
          </CartProvider>
        </body>
      </html>
    </>
  );
}
