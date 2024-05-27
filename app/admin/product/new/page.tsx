import { Box, Typography } from "@mui/material";
import ProductForm from "../new/components/ProductForm";

export default function AdminNewProductPage() {
  return (
    <Box
      sx={{
        paddingTop: { xs: "140px", sm: "140px", md: "140px" },
        paddingBottom: "55px",
        backgroundImage:
          "linear-gradient(to bottom, rgb(246 245 243), #ffffff)",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          padding: "20px",
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: "700",
          fontFamily: "'Futura', 'Trebuchet MS', 'Arial', sans-serif",
        }}
      >
        Admin New Product Page
      </Typography>
      <ProductForm />
    </Box>
  );
}
