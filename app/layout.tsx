import Footer from "@/components/shared/footer/Footer";
import { Box, CssBaseline, Grid, ThemeProvider } from "@mui/material";
import { CartProvider } from "./context/CartContext";
import { ProductProvider } from "./context/ProductContext";
import theme from "./themes/themes";
import { LayoutProps } from "./types";

export default function RootLayout({ children }: LayoutProps) {
  return (
    <>
      <html lang="en">
        <body>
          <CssBaseline />
          <ProductProvider>
            <CartProvider>
              <ThemeProvider theme={theme}>
                <Grid container direction="column">
                  <Grid item xs>
                    <Box component={"main"}>{children}</Box>
                  </Grid>
                  <Footer />
                </Grid>
              </ThemeProvider>
            </CartProvider>
          </ProductProvider>
        </body>
      </html>
    </>
  );
}
