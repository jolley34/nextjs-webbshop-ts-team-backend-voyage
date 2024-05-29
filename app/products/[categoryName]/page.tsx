import { Box, Grid } from "@mui/material";
import ProductGrid from "../../../components/ProductGrid";
import { getProductsByCategoryName } from "../../server-actions/products/handler";

interface Props {
  params: {
    categoryName?: string;
  };
}

export default async function ProductsByCategoryPage({ params }: Props) {
  const { products } = await getProductsByCategoryName(params.categoryName!);

  return (
    <Box sx={{ padding: "1rem", width: "100%" }}>
      <Grid container spacing={2}>
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <ProductGrid
              slug={product.id}
              name={product.name}
              image={product.image}
              description={product.description}
              price={product.price}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
