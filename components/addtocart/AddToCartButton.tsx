"use client";

import { Product } from "@/data";
import { ThemeProvider, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useCart } from "../../app/context/CartContext";
import { theme } from "../../app/themes/themes";
import Toast from "../Toast";

function AddToCartButton({
  product,
  size,
  hasVariant,
}: {
  product: Product;
  size: string;
  hasVariant?: boolean;
}) {
  const { addToCart } = useCart();
  const [toastOpen, setToastOpen] = useState(false);

  const handleClick = () => {
    addToCart(product, size);
    setToastOpen(true);
  };

  const handleToastClose = () => {
    setToastOpen(false);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        {hasVariant ? (
          <Button
            onClick={handleClick}
            color="secondary"
            variant="outlined"
            data-cy="product-buy-button"
            sx={{
              padding: "0.5rem",
              width: "100%",
              bgcolor: "#000",
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
        ) : (
          <Button
            onClick={handleClick}
            color="secondary"
            data-cy="product-buy-button"
          >
            <Typography
              sx={{ color: "#3b3b3b", fontWeight: "400" }}
              fontSize={{ xs: "0.60rem", sm: "0.65rem", md: "0.75rem" }}
            >
              Lägg till i kundvagn
            </Typography>
          </Button>
        )}
        <Toast open={toastOpen} onClose={handleToastClose} />
      </ThemeProvider>
    </>
  );
}

export default AddToCartButton;
