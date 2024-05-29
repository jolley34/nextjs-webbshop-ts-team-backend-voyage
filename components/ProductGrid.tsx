"use client";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Button, Card, Grid, Typography } from "@mui/material";
import { Prisma } from "@prisma/client";
import Link from "next/link";

interface CardProps {
  slug: string;
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
  slug,
}: CardProps) {
  return (
    <Box>
      <Box sx={{ paddingBottom: "6rem" }}>
        <Grid component={"main"} container>
          <Card
            sx={{
              boxShadow: "none",
            }}
          >
            <Link
              href={`/product/${encodeURIComponent(slug)}`}
              style={{ textDecoration: "none" }}
            >
              <Box sx={{ position: "relative", overflow: "hidden" }}>
                <Box
                  sx={{
                    display: "flex",
                    transition: "transform 1s ease",
                  }}
                >
                  <img
                    width={"100%"}
                    height={"100%"}
                    src={image}
                    alt={name}
                    style={{
                      background: "#f6f5f3",
                      objectFit: "contain",
                      aspectRatio: 1,
                      width: "100%",
                      height: "100%",
                      cursor: "pointer",
                    }}
                  />
                </Box>
              </Box>
            </Link>

            <Box
              sx={{
                background: "#f6f5f3",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "1rem",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                  alignItems: "center",
                }}
              >
                <Typography
                  fontWeight="400"
                  fontSize={{
                    xs: "0.70rem",
                    sm: "1rem",
                    md: "2rem",
                  }}
                  color="black"
                  data-cy="product-title"
                >
                  {name}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography fontWeight="400" fontSize="1rem" color="#6d6767">
                    {description}
                  </Typography>
                  <Box
                    sx={{ display: "flex", gap: "2rem", alignItems: "center" }}
                  >
                    <Button
                      sx={{
                        border: "1px solid black",
                        borderRadius: "20px",
                        padding: "0rem 1rem 0rem 1rem",
                      }}
                    >
                      Learn More
                    </Button>
                    <Link
                      href={`/product/${encodeURIComponent(slug)}`}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <Typography
                        sx={{
                          textTransform: "capitalize",
                          fontSize: "1rem",
                          cursor: "pointer",
                          borderBottom: "2px solid transparent",
                          transition: "border-bottom 0.3s ease",
                          "&:hover": {
                            borderBottom: "2px solid #6d6767",
                          },
                        }}
                      >
                        Buy <ArrowForwardIosIcon sx={{ fontSize: "12px" }} />
                      </Typography>
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Card>
        </Grid>
      </Box>
    </Box>
  );
}
