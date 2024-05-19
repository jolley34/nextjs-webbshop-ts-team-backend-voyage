import { Box } from "@mui/material";
import VideoContainer from "./components/VideoContainer";

export default async function Home() {
  // const { products } = await showAllProducts();

  return (
    <>
      <Box>
        <VideoContainer />
        <Box sx={{ display: "flex" }}>
          {/* {products.map((product, index) => (
            <ProductGrid
              key={index}
              name={product.name}
              image={product.image}
              description={product.description}
              price={product.price}
            />
          ))} */}
        </Box>
      </Box>
    </>
  );
}
