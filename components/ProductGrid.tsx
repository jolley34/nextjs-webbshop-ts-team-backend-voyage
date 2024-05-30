"use client";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Button, Card, Typography } from "@mui/material";
import { Prisma } from "@prisma/client";
import Link from "next/link";
import { useState } from "react";

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
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <Box sx={{ paddingBottom: "6rem" }}>
        <Card
          sx={{
            height: "500px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            background: "#f6f5f3",
          }}
        >
          <Link
            href={`/product/${encodeURIComponent(slug)}`}
            style={{ textDecoration: "none" }}
          >
            <img
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              src={image}
              alt={name}
              style={{
                backgroundImage: "#f6f5f3",
                background: "#f6f5f3",
                objectFit: "contain",
                width: "500px",
                height: "250px",
                cursor: "pointer",
                transition: "transform 0.5s ease",
                transform: hovered ? "scale(1.025)" : "scale(1)",
              }}
            />
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
      </Box>
    </>
  );
}
