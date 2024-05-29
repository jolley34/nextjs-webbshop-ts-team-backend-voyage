import { Box, Grid, Typography } from "@mui/material";
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
    <Box sx={{ width: "100%", background: "#f6f5f3" }}>
      <Box sx={{ padding: "6rem 4rem 4rem 6rem" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontWeight: "500", fontSize: "3.5rem" }}>
            Explore the lineup.
          </Typography>
          <Typography
            sx={{
              fontWeight: "500",
              fontSize: "1rem",
              borderBottom: "2px solid transparent",
              cursor: "pointer",
              transition: "border-bottom 0.3s ease",
              "&:hover": {
                borderBottom: "2px solid #6d6767",
              },
            }}
          >
            Compare all models{" "}
          </Typography>
        </Box>
      </Box>
      <Grid container spacing={6} sx={{ paddingInline: "8rem" }}>
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
