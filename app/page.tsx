import { Box, Grid } from "@mui/material";
import { showAllCategories } from "./actions/categories/handler";
import { showAllProducts } from "./actions/products/handler";
import CategoryBar from "./components/CategoryBar";
import ProductGrid from "./components/ProductGrid";
import VideoContainer from "./components/VideoContainer";

export default async function Home() {
  const { products } = await showAllProducts();
  const { categories } = await showAllCategories();

  return (
    <Box>
      <VideoContainer />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {categories.map((category, index) => (
          <CategoryBar key={index} name={category.name} />
        ))}
      </Box>

      <Grid container spacing={0}>
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
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
