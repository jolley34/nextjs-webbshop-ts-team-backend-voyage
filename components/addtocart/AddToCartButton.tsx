"use client";

import { Product } from "@/data";
import { ThemeProvider, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useCart } from "../../app/context/CartContext";
import { theme } from "../../app/themes/themes";
import Toast from "../Toast";

function AddToCartButton({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [toastOpen, setToastOpen] = useState(false);

  const handleClick = () => {
    addToCart(product);
    setToastOpen(true);
  };

  const handleToastClose = () => {
    setToastOpen(false);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Button
          onClick={handleClick}
          color="secondary"
          variant="outlined"
          data-cy="product-buy-button"
          sx={{
            padding: "0.5rem",
            width: "100%",
            bgcolor: "#1b1b1b",
            borderRadius: 0,
            "&:hover": {
              bgcolor: "#333",
            },
          }}
        >
          <Typography sx={{ color: "white", fontWeight: "700" }}>
            Lägg till i kundvagn
          </Typography>
        </Button>
        <Toast open={toastOpen} onClose={handleToastClose} />
      </ThemeProvider>
    </>
  );
}

export default AddToCartButton;
