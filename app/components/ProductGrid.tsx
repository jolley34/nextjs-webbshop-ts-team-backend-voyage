"use client";
import { products } from "@/data";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {
  Box,
  Card,
  Grid,
  IconButton,
  Typography,
  createTheme,
} from "@mui/material";
import { Prisma } from "@prisma/client";
import Link from "next/link";
import { useState } from "react";

interface CardProps {
  name: string;
  description: string;
  image: string;
  price: Prisma.Decimal;
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
      light: "#fdfdfd",
    },
    secondary: {
      main: "#272727",
      light: "#fffff",
    },
  },
});

export default function ProductGrid({
  name,
  description,
  image,
  price,
}: CardProps) {
  const [hovering, setHovering] = useState<number | null>(null);

  const [productImageIndexes, setProductImageIndexes] = useState(
    Array(products.length).fill(0)
  );

  const handleNextImage = (index: number) => {
    setProductImageIndexes((prevIndexes) => {
      const newIndexes = [...prevIndexes];
      newIndexes[index] = (prevIndexes[index] + 1) % imagesToShow[index].length;
      return newIndexes;
    });
  };

  const handlePreviousImage = (index: number) => {
    setProductImageIndexes((prevIndexes) => {
      const newIndexes = [...prevIndexes];
      newIndexes[index] =
        prevIndexes[index] === 0
          ? imagesToShow[index].length - 1
          : prevIndexes[index] - 1;
      return newIndexes;
    });
  };

  const imagesToShow = products.map((product) => [
    product.image,
    ...product.images,
  ]);

  return (
    <Box sx={{ backgroundColor: "#ffffff" }}>
      <Box>
        <Grid component={"main"} container>
          <Grid item xs={12} sm={6} md={3} data-cy="product">
            <Card
              sx={{
                boxShadow: "none",
                width: "500px",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                borderRadius: 0,
                position: "relative",
              }}
              /*       onMouseEnter={() => setHovering(index)} */
              onMouseLeave={() => setHovering(null)}
            >
              <Box sx={{ position: "relative", overflow: "hidden" }}>
                {/*                 <Link href={`/product`} style={{ textDecoration: "none" }}>
                 */}{" "}
                <Box
                  sx={{
                    display: "flex",
                    transition: "transform 1s ease",
                    /*    transform: `translateX(-${
                        productImageIndexes[index] * 100
                      }%)`, */
                  }}
                >
                  {/*   {imagesToShow[index].map((image, i) => ( */}
                  <img
                    /*          key={i} */
                    width={300}
                    height={300}
                    src={image}
                    alt={name}
                    style={{
                      backgroundImage:
                        "linear-gradient(to bottom, #e2e0df, #ffffff)",
                      objectPosition: "top",
                      objectFit: "cover",
                      aspectRatio: 1,
                      width: "100%",
                      height: "100%",
                    }}
                  />
                  {/*       ))} */}
                </Box>
                {/*                 </Link>
                 */}
                <>
                  <IconButton
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: 0,
                      transform: "translateY(-50%)",
                      cursor: "pointer",
                      color: "black",
                      zIndex: 1,
                      /*    opacity: hovering === index ? 1 : 0, */
                      transition: "opacity 0.5s ease",
                    }}
                    /*     onClick={() => handlePreviousImage(index)} */
                  >
                    <NavigateBeforeIcon fontSize="medium" />
                  </IconButton>
                  <IconButton
                    sx={{
                      position: "absolute",
                      top: "50%",
                      right: 0,
                      transform: "translateY(-50%)",
                      cursor: "pointer",
                      color: "black",
                      zIndex: 1,
                      /*    opacity: hovering === index ? 1 : 0, */
                      transition: "opacity 0.5s ease",
                    }}
                    /*   onClick={() => handleNextImage(index)} */
                  >
                    <NavigateNextIcon fontSize="medium" />
                  </IconButton>
                </>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "1rem",
                }}
              >
                <Link href={`/product/}`} style={{ textDecoration: "none" }}>
                  <Box>
                    <Typography
                      fontWeight="400"
                      fontSize={{
                        xs: "0.70rem",
                        sm: "0.75rem",
                        md: "0.75rem",
                      }}
                      color="black"
                      data-cy="product-title"
                    >
                      {name}
                    </Typography>
                    <Typography
                      fontWeight="400"
                      fontSize="0.75rem"
                      color="#6d6767"
                    >
                      {description}
                    </Typography>
                    <Typography
                      fontWeight="400"
                      fontSize="0.75rem"
                      color="black"
                      data-cy="product-price"
                    >
                      {price} kr
                    </Typography>
                  </Box>
                </Link>
                {/*                 <AddToCartButton product={product} size={"1"} />
                 */}{" "}
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
