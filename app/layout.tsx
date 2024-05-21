import Footer from "@/components/shared/footer/Footer";
import { Box, CssBaseline, Grid } from "@mui/material";
import { SessionProvider } from "next-auth/react";
import { CartProvider } from "./context/CartContext";
import { ProductProvider } from "./context/ProductContext";
import { LayoutProps } from "./types";

export default function RootLayout({ children }: LayoutProps) {
  return (
    <>
      <html lang="en">
        <body>
          <CssBaseline />
          <SessionProvider>
            <ProductProvider>
              <CartProvider>
                <Grid container direction="column">
                  <Grid item xs>
                    <Box component={"main"}>{children}</Box>
                  </Grid>
                  <Footer />
                </Grid>
              </CartProvider>
            </ProductProvider>
          </SessionProvider>
        </body>
      </html>
    </>
  );
}
