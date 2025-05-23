"use client";
"use client";

import { EditProduct } from "@/app/server-actions/admin/handler";
import { ProductFormData } from "@/app/server-actions/validation/validation";
import { Button, Typography } from "@mui/material";

interface EditAdminButtonProps {
  productId: string;
  productData: ProductFormData; // Now properly typed from Zod schema
}

export default function EditAdminButton({
  productId,
  productData,
}: EditAdminButtonProps) {
  const handleClick = async () => {
    // Create a complete product data object that matches ProductFormData
    const completeProductData: ProductFormData = {
      ...productData,
      id: productId, // Ensure the id is included
      categories: productData.categories || [], // Ensure categories is always an array
    };

    await EditProduct(productId, completeProductData);
    window.location.reload();
  };

  return (
    <Button
      color="secondary"
      variant="outlined"
      onClick={handleClick}
      sx={{
        bgcolor: "#000",
        borderColor: "#000",
        marginTop: "2px",
        "&:hover": {
          bgcolor: "#333",
          borderColor: "#000",
        },
      }}
    >
      <Typography
        sx={{
          color: "white",
          fontWeight: "400",
          fontFamily: "'Futura', 'Trebuchet MS', 'Arial', sans-serif",
        }}
      >
        Edit Product
      </Typography>
    </Button>
  );
}
