"use client";

import { showOneProduct } from "@/app/server-actions/products/handler";
import AddToCartButton from "@/components/addtocart/AddToCartButton";
import { Box, CardMedia, Grid, Typography } from "@mui/material";
import Image from "next/image"; // Import Next.js Image component
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

  const { video, image, name, description, price, id, stock, isArchived } =
    product;

  // Convert Decimal price to number for AddToCartButton
  const productForCart = {
    id,
    name,
    description,
    image,
    video,
    price: Number(price), // Convert Decimal to number (assuming decimal.js)
    stock,
    isArchived,
  };

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
              padding: "2rem",
              paddingTop: "4rem",
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
                  md: "90dvh",
                },
                objectFit: "cover",
                borderRadius: "50px",
              }}
            />

            <Box
              key={productId}
              sx={{
                height: {
                  xs: "calc(100dvh)",
                  sm: "calc(100dvh)",
                  md: "calc(100dvh)",
                },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                src={image}
                alt={name} // Already had alt prop, kept it
                width={300}
                height={500}
                style={{
                  width: "300px",
                  height: "500px",
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
                justifyContent: "center",
                alignItems: "center",
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
                <AddToCartButton product={productForCart} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
