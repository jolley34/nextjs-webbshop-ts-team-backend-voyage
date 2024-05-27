import VideoContainer from "@/components/VideoContainer";
import ShowMoreComponent from "@/components/showMore";
import { Box, Grid } from "@mui/material";
import { PropsWithChildren } from "react";
import CategoryBar from "../../components/categorybar/CategoryBar";
import { showAllCategories } from "../server-actions/categories/handler";

export default async function ProductsLayout(props: PropsWithChildren) {
  const categories = await showAllCategories();

  return (
    <Box>
      <VideoContainer />
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
        {props.children}
      </Grid>
      <ShowMoreComponent />
    </Box>
  );
}
