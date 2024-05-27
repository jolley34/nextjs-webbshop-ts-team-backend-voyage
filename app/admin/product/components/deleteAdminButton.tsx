"use client";

import handleArchive from "@/app/server-actions/admin/handler";
import { Button, Typography } from "@mui/material";

interface DeleteAdminButtonProps {
  productId: string;
}

export default function DeleteAdminButton({
  productId,
}: DeleteAdminButtonProps) {
  const handleClick = async () => {
    await handleArchive(productId, true);
    window.location.reload();
  };

  console.log(productId);

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
        Delete
      </Typography>
    </Button>
  );
}
