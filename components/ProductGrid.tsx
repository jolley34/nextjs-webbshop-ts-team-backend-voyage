"use client";
import { Box, Card, Grid, Typography } from "@mui/material";
import { Prisma } from "@prisma/client";
import Link from "next/link";

interface CardProps {
  productId: string;
  name: string;
  description: string;
  image: string;
  price: Prisma.Decimal;
}

export default function ProductGrid({
  name,
  description,
  image,
  price,
  productId,
}: CardProps) {
  return (
    <Box sx={{ backgroundColor: "#ffffff" }}>
      <Box>
        <Grid component={"main"} container>
          <Card
            sx={{
              boxShadow: "none",
              cursor: "pointer",
            }}
          >
            <Box sx={{ position: "relative", overflow: "hidden" }}>
              <Box
                sx={{
                  display: "flex",
                  transition: "transform 1s ease",
                }}
              >
                <img
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
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "1rem",
              }}
            >
              <Link
                href={`/product/${productId}}`}
                style={{ textDecoration: "none" }}
              >
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
            </Box>
          </Card>
        </Grid>
      </Box>
    </Box>
  );
}
