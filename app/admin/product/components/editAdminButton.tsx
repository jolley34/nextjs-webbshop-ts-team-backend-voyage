import { Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export default function EditAdminButton({ productId }) {
  const router = useRouter();

  const handleEditClick = () => {
    router.push(`/admin/product/${productId}`);
  };

  return (
    <Button
      onClick={handleEditClick}
      data-cy="admin-edit-product"
      color="secondary"
      variant="outlined"
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
        Redigera
      </Typography>
    </Button>
  );
}
