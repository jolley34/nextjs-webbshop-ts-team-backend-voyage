"use client";
import ProductForm from "@/app/components/ProductForm";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";

type Props = { params: { id: string; title: string } };

export default function AdminNewProductPage(props: Props) {
  return (
    <Box
    sx={{ paddingTop: { xs: "81px", sm: "88px", md: "88px" },
     paddingBottom: '55px', 
     backgroundImage: "linear-gradient(to bottom, rgb(246 245 243), #ffffff)",
      }}>
    <Typography variant="h4" sx={{ padding: '20px', textAlign:"center",     fontSize: "2rem",
    fontWeight: "700",
    fontFamily: "'Futura', 'Trebuchet MS', 'Arial', sans-serif" }} >
      Admin New Product Page
    </Typography>
    <ProductForm />
    </Box>
  );
}
