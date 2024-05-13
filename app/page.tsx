import { Box } from "@mui/material";
import ProductGrid from "./components/ProductGrid";
import VideoContainer from "./components/VideoContainer";

export default async function Home() {
  return (
    <>
      <Box>
        <VideoContainer />
        <ProductGrid />
      </Box>
    </>
  );
}
