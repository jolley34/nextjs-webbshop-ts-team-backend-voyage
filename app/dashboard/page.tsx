import { Box, Grid } from "@mui/material";
import ProductGrid from "../../components/ProductGrid";
import CategoryBar from "../../components/categorybar/CategoryBar";
import { showAllCategories } from "../server-actions/categories/handler";
import { showAllProducts } from "../server-actions/products/handler";

export default async function Dashboard() {
  const { products } = await showAllProducts();
  const { categories } = await showAllCategories();

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderBottom: "1px solid lightgray",
        }}
      >
        {categories.map((category, index) => (
          <CategoryBar key={index} name={category.name} />
        ))}
      </Box>

      <Grid container spacing={0}>
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <ProductGrid
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
