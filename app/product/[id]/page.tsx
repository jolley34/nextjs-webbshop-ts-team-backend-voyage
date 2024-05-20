/* eslint-disable @next/next/no-img-element */
"use client";
import theme from "@/app/themes/themes";
import AddToCartButton from "@/components/AddToCartButton";
import { products } from "@/data";
import {
  Box,
  CardMedia,
  Grid,
  Link,
  ThemeProvider,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useEffect, useState } from "react";

type PageProps = { params: { id: string } };

export default function ProductPage({ params }: PageProps) {
  const product = products.find((p) => p.id === params.id);
  const [size, setSize] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isXsScreen = useMediaQuery(theme.breakpoints.only("xs"));
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSizeChange = (selectedSize: string) => {
    setSize(selectedSize);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  if (!product) {
    return (
      <div>
        <Typography variant="h2">{`Produkten med id ${params.id} finns tyvärr inte...`}</Typography>
        <Typography variant="body1">
          {`Vi hittade inte produkt med id "${params.id}". Gå tillbaka till `}
          <Link href="/" variant="body1">
            startsidan
          </Link>
          {" för att fortsätta shoppingen."}
        </Typography>
      </div>
    );
  }

  const imagesToShow = [product.image, ...product.images];

  return (
    <>
      <ThemeProvider theme={theme}>
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
              {product.video && imagesToShow.length > 0 && (
                <CardMedia
                  component="video"
                  autoPlay
                  loop
                  muted
                  src={product.video}
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
              )}

              {imagesToShow.map((image, index) => (
                <Box
                  key={index}
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
                    alt={`Product Image ${index}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      backgroundImage:
                        "linear-gradient(to bottom, #e2e0df, #ffffff)",
                    }}
                  />
                </Box>
              ))}
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
                  md: `calc(100dvh + ${Math.min(scrollPosition, 88)}px)`,
                },
                overflowY: "auto",
                ...(isXsScreen && {
                  flexDirection: "column",
                }),
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
                    {product.description}
                  </Typography>
                  <Typography
                    data-cy="product-title"
                    sx={{ fontSize: "1.25rem", fontWeight: "700" }}
                  >
                    {product.title}
                  </Typography>
                  <Typography
                    data-cy="product-price"
                    sx={{ fontSize: "1rem", fontWeight: "200" }}
                  >
                    Från {product.price} kr
                  </Typography>
                </Box>

                <Box>
                  <AddToCartButton product={product} size={size} hasVariant />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </>
  );
}
