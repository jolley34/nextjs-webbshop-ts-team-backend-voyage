import { showOneProduct } from "@/app/server-actions/products/handler";
import AddToCartButton from "@/components/addtocart/AddToCartButton";
import { Box, CardMedia, Grid, Typography } from "@mui/material";
import Link from "next/link";

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  console.log(params);
  const productId = params.slug;
  const product = await showOneProduct(productId);

  if (!product) {
    return (
      <div>
        <Typography variant="h2">{`Produkten med id ${productId} finns tyvärr inte...`}</Typography>
        <Typography variant="body1">
          {`Vi hittade inte produkt med id "${productId}". Gå tillbaka till `}
          <Link href="/">startsidan</Link>
          {" för att fortsätta shoppingen."}
        </Typography>
      </div>
    );
  }

  const { video, image, name, description, price } = product;

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Grid container>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              height: "100%",
            }}
          >
            <CardMedia
              component="video"
              autoPlay
              loop
              muted
              src={video}
              sx={{
                width: "100%",
                height: {
                  xs: "50dvh",
                  sm: "50dvh",
                  md: "100dvh",
                },
                objectFit: "cover",
              }}
            />

            <Box
              key={productId}
              sx={{
                height: {
                  xs: "calc(50dvh)",
                  sm: "calc(100dvh)",
                  md: "calc(100dvh)",
                },
              }}
            >
              <img
                src={image}
                alt={name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              top: 0,
              display: "flex",
              justifyContent: "center",
              width: "100%",
              position: "sticky",
              bottom: 0,
              background: "white",
              alignItems: "center",
              height: {
                xs: "calc(50dvh)",
                sm: "calc(50dvh)",
                md: "calc(100dvh)",
              },
              overflowY: "auto",
              "@media (max-width: 1280px)": {
                flexDirection: "column",
              },
              transition: "height 0.7s ease",
            }}
          >
            <Box
              sx={{
                width: "70%",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.25rem",
                }}
              >
                <Typography
                  data-cy="product-description"
                  sx={{ fontSize: "0.6rem", fontWeight: "200" }}
                >
                  {description}
                </Typography>
                <Typography
                  data-cy="product-title"
                  sx={{ fontSize: "1.25rem", fontWeight: "700" }}
                >
                  {name}
                </Typography>
                <Typography
                  data-cy="product-price"
                  sx={{ fontSize: "1rem", fontWeight: "200" }}
                >
                  Från {price.toString()} kr
                </Typography>
              </Box>

              <Box>
                <AddToCartButton product={product} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
