import ProductForm from "@/components/ProductForm";
import { db } from "@/prisma/db";
import { Box, Typography } from "@mui/material";

type Props = { params: { id: string; title: string } };

export default async function AdminEditProductPage(props: Props) {
  // 1. Ta reda på vilken produkt som ska ändras
  // 2. Hämta datan för den produkten
  const product = await db.product.findUnique({
    where: {
      id: props.params.id,
    },
  });

  // todo: 404 om produkten inte finns.
  if (!product) {
    return (
      <div>
        <Typography variant="body1">
          {`Product with id or title: ${
            props.params?.id || props.params?.title
          } does not exist...`}
        </Typography>
      </div>
    );
  }

  return (
    <Box
      sx={{
        paddingTop: { xs: "81px", sm: "88px", md: "88px" },
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
        Admin Edit Product Page
      </Typography>
      <ProductForm product={product} />
    </Box>
  );
}
