"use client";

import { Product } from "@/data";
import { useState } from "react";
import { useCart } from "../../app/context/CartContext";
import Toast from "../Toast";

function AddToCartButtonAppleStyle({ product }: { product: Product }) {
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
      <button
        onClick={handleClick}
        style={{
          background: "#0072e4",
          border: "none",
          padding: "0.5rem",
          borderRadius: "10px",
          color: "white",
          cursor: "pointer",
        }}
      >
        Köp
      </button>
      <Toast open={toastOpen} onClose={handleToastClose} />
    </>
  );
}

export default AddToCartButtonAppleStyle;
