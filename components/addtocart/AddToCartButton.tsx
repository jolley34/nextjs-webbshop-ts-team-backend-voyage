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
          color="primary"
          variant="outlined"
          data-cy="product-buy-button"
          sx={{
            padding: "0.5rem 4rem 0.5rem 4rem",
            width: "100%",
            border: "none",
            bgcolor: "#0072e4",
            borderRadius: "20px",
            "&:hover": {
              bgcolor: "#0264C5",
            },
          }}
        >
          <Typography sx={{ color: "white", fontWeight: "400" }}>
            Buy
          </Typography>
        </Button>
        <Toast open={toastOpen} onClose={handleToastClose} />
      </ThemeProvider>
    </>
  );
}

export default AddToCartButton;
