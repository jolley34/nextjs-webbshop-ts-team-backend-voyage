import { Box } from "@mui/material";
import { showAllCategories } from "./actions/categories/handler";
import { showAllProducts } from "./actions/products/handler";
import CategoryBar from "./components/CategoryBar";
import ProductGrid from "./components/ProductGrid";
import VideoContainer from "./components/VideoContainer";

export default async function Home() {
  const { products } = await showAllProducts();
  const { categories } = await showAllCategories();

  return (
    <>
      <Box>
        <VideoContainer />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            fontSize: "0.75rem",
            alignItems: "center",
          }}
        >
          {categories.map((category, index) => (
            <CategoryBar key={index} name={category.name} />
          ))}
        </Box>

        <Box sx={{ display: "flex" }}>
          {products.map((product, index) => (
            <ProductGrid
              key={index}
              name={product.name}
              image={product.image}
              description={product.description}
              price={product.price}
            />
          ))}
        </Box>
      </Box>
    </>
  );
}
