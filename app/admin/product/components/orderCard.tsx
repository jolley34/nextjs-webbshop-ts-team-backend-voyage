"use client";
import { OrderWithUserProductsAddress } from "@/app/server-actions/orders/handler";
import { Card, Grid, Typography, useTheme } from "@mui/material";
import { styled } from "@mui/system";
import { useState } from "react";

interface Props {
  order: OrderWithUserProductsAddress;
}

const AnimatedCard = styled(Card)(
  ({ theme, expanded }: { theme: any; expanded: boolean }) => ({
    maxHeight: expanded ? "2000px" : "110px",
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

export default function OrderCard({ order }: Props) {
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();

  const handleCardClick = () => {
    setExpanded(!expanded);
  };

  console.log(order);
  const { id, userId, user, createdAt, shippingAddress, products, totalPrice } =
    order;

  const { firstName, lastName, email, phoneNumber, street, zipcode } =
    shippingAddress;

  const quantity = products.reduce((acc, product) => acc + product.quantity, 0);

  const formattedDate = createdAt.toLocaleString();
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
                sx={{
                  margin: 0,
                  fontSize: { xs: "1rem", sm: "1.5rem" },
                  fontWeight: "700",
                  color: "#878787",
                }}
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
                    <Typography variant="subtitle1">{user.name}</Typography>
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
                    <Typography variant="subtitle1" fontWeight="700">
                      Quantity
                    </Typography>
                    <Typography variant="subtitle1">{quantity}</Typography>
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
            {products.map((product) => (
              <Card
                key={product.id}
                sx={{ padding: "1rem", background: "#f6f6f6" }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6} md={3}>
                    <div>
                      <Typography variant="subtitle1" fontWeight="700">
                        Name
                      </Typography>
                      <Typography variant="subtitle1">
                        {product.product.name}
                      </Typography>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <div>
                      <Typography variant="subtitle1" fontWeight="700">
                        Price
                      </Typography>
                      <Typography variant="subtitle1" sx={{ color: "#00D100" }}>
                        {product.subTotalPrice.toString()}
                      </Typography>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <div>
                      <Typography variant="subtitle1" fontWeight="700">
                        Quantity
                      </Typography>
                      <Typography variant="subtitle1">
                        {product.quantity}
                      </Typography>
                    </div>
                  </Grid>
                </Grid>
              </Card>
            ))}
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
