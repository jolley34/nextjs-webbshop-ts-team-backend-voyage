import Footer from "@/components/shared/footer/Footer";
import Header from "@/components/shared/header/Header";
import { Box, CssBaseline, Grid, ThemeProvider } from "@mui/material";
import { SessionProvider } from "next-auth/react";
import { CartProvider } from "./context/CartContext";
import theme from "./themes/themes";
import { LayoutProps } from "./types";

export default function RootLayout({ children }: LayoutProps) {
  return (
    <>
      <html lang="en">
        <body>
          <CssBaseline />
          <SessionProvider>
            <CartProvider>
              <ThemeProvider theme={theme}>
                <Header name="ananas"/>

                <Grid container direction="column">
                  <Grid item xs>
                    <Box component={"main"}>{children}</Box>
                  </Grid>
                  <Footer />
                </Grid>
              </ThemeProvider>
            </CartProvider>
          </SessionProvider>
        </body>
      </html>
    </>
  );
}
