"use client";

import { handleArchive } from "@/app/server-actions/admin/handler";
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
        bgcolor: "#fff",
        borderColor: "#0072e4",
        marginTop: "2px",
        borderRadius: "20px",
        "&:hover": {
          borderColor: "#0264C5",
        },
      }}
    >
      <Typography
        sx={{
          color: "#0072e4",
          fontWeight: "400",
          fontFamily: "'Futura', 'Trebuchet MS', 'Arial', sans-serif",
        }}
      >
        Delete
      </Typography>
    </Button>
  );
}
