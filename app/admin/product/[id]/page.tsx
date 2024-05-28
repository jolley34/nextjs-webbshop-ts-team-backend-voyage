"use server";
import { showAllCategories } from "@/app/server-actions/categories/handler";
import { db } from "@/prisma/db";
import { Box, Typography } from "@mui/material";
import EditForm from "./components/editForm";

type Props = { params: { id: string } };

export default async function AdminEditProductPage(props: Props) {
  const categories = await showAllCategories();

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
          {`Product with id or title: ${props.params?.id} does not exist...`}
        </Typography>
      </div>
    );
  }

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
        Edit {product.name}
      </Typography>
      <EditForm
        categories={categories}
        name={product.name}
        price={product.price}
        description={product.description}
        image={product.image}
        video={product.video}
      />
    </Box>
  );
}
