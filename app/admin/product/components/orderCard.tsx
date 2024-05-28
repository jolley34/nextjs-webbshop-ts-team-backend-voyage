"use client";
"use client";
import { Card, Grid, Typography, useTheme } from "@mui/material";
import { styled } from "@mui/system";
import { Prisma } from "@prisma/client";
import { useState } from "react";

interface Props {
  id: string;
  userId: string;
  user: any;
  createdAt: Date;
  firstName: string;
  lastName: string;
  street: string;
  zipcode: string;
  email: string;
  phoneNumber: string;
  productName: string;
  productPrice: Prisma.Decimal;
  totalPrice: Prisma.Decimal;
}

const AnimatedCard = styled(Card)(
  ({ theme, expanded }: { theme: any; expanded: boolean }) => ({
    maxHeight: expanded ? "1000px" : "110px",
    transition: "max-height 0.5s ease-in-out, background-color 0.5s ease",
    padding: "2rem",
    background: "#f6f5f3",
    cursor: "pointer",
    width: "100%",
    ...(expanded
      ? {}
      : {
          "&:hover": {
            background: "#e0dedb",
          },
        }),
  })
);

export default function OrderCard({
  id,
  userId,
  user,
  createdAt,
  firstName,
  lastName,
  street,
  zipcode,
  email,
  phoneNumber,
  productName,
  productPrice,
  totalPrice,
}: Props) {
  const [expanded, setExpanded] = useState(false);
  const formattedDate = createdAt.toLocaleString();
  const theme = useTheme();

  const handleCardClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          placeContent: "center",
          alignItems: "center",
        }}
      >
        <AnimatedCard
          onClick={handleCardClick}
          expanded={expanded}
          theme={theme}
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <Typography
                variant="subtitle1"
                style={{ margin: 0, fontSize: "1.5rem" }}
              >
                Order Overview
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ margin: 0, fontSize: { xs: "1rem", sm: "1.5rem" } }}
              >
                {id}
              </Typography>
            </div>

            <Card sx={{ padding: "1rem", background: "#f6f6f6" }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={3}>
                  <div>
                    <Typography variant="subtitle1" fontWeight="700">
                      Order ID
                    </Typography>
                    <Typography variant="subtitle1">{id}</Typography>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <div>
                    <Typography variant="subtitle1" fontWeight="700">
                      User ID
                    </Typography>
                    <Typography variant="subtitle1">{userId}</Typography>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <div>
                    <Typography variant="subtitle1" fontWeight="700">
                      Username
                    </Typography>
                    <Typography variant="subtitle1">{user}</Typography>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <div>
                    <Typography variant="subtitle1" fontWeight="700">
                      Created At
                    </Typography>
                    <Typography variant="subtitle1">{formattedDate}</Typography>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <div>
                    <Typography
                      variant="subtitle1"
                      fontWeight="700"
                      fontSize="1rem"
                    >
                      Total Order price
                    </Typography>
                    <Typography variant="subtitle1" sx={{ color: "#00D100" }}>
                      {totalPrice.toString()}
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </Card>
            {/* Address */}
            <Typography
              variant="subtitle1"
              style={{ margin: 0, fontSize: "1.5rem" }}
            >
              Address
            </Typography>
            <Card sx={{ padding: "1rem", background: "#f6f6f6" }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={3}>
                  <div>
                    <Typography variant="subtitle1" fontWeight="700">
                      Name
                    </Typography>
                    <Typography variant="subtitle1">{firstName}</Typography>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <div>
                    <Typography variant="subtitle1" fontWeight="700">
                      Lastname
                    </Typography>
                    <Typography variant="subtitle1">{lastName}</Typography>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <div>
                    <Typography variant="subtitle1" fontWeight="700">
                      Street
                    </Typography>
                    <Typography variant="subtitle1">{street}</Typography>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <div>
                    <Typography variant="subtitle1" fontWeight="700">
                      Zipcode
                    </Typography>
                    <Typography variant="subtitle1">{zipcode}</Typography>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <div>
                    <Typography
                      variant="subtitle1"
                      fontWeight="700"
                      fontSize="1rem"
                    >
                      Email
                    </Typography>
                    <Typography variant="subtitle1">{email}</Typography>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <div>
                    <Typography
                      variant="subtitle1"
                      fontWeight="700"
                      fontSize="1rem"
                    >
                      Phone
                    </Typography>
                    <Typography variant="subtitle1">{phoneNumber}</Typography>
                  </div>
                </Grid>
              </Grid>
            </Card>
            {/* Produkt */}
            <Typography
              variant="subtitle1"
              style={{ margin: 0, fontSize: "1.5rem" }}
            >
              Product
            </Typography>
            <Card sx={{ padding: "1rem", background: "#f6f6f6" }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={3}>
                  <div>
                    <Typography variant="subtitle1" fontWeight="700">
                      Name
                    </Typography>
                    <Typography variant="subtitle1">{productName}</Typography>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <div>
                    <Typography variant="subtitle1" fontWeight="700">
                      Price
                    </Typography>
                    <Typography variant="subtitle1" sx={{ color: "#00D100" }}>
                      {productPrice.toString()}
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </Card>
          </div>
        </AnimatedCard>
        {/*   {expanded ? (
          <KeyboardDoubleArrowUpIcon />
        ) : (
          <KeyboardDoubleArrowDownIcon />
        )} */}
      </div>
    </>
  );
}
