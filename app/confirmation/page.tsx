"use client";
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import React from "react";
import { useCart } from "../context/CartContext";

import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../themes/themes";

export default function CheckoutConfirmation() {
  const [activeStep, setActiveStep] = React.useState(0);
  const { cart, clearLocalStorage } = useCart();

  const TotalCostAll = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const cartItems = cart.map((item) => (
    <Card key={item.id} sx={{ marginBottom: 2 }}>
      <Grid container>
        <Grid item xs={4}>
          <CardMedia
            component="img"
            sx={{ objectFit: "contain", width: "65%", height: "100%" }}
            // witfh är storleke på bilden och height är på
            image={item.image}
            alt={item.name}
          />
        </Grid>
        <Grid item xs={8}>
          <CardContent>
            <Typography
              variant="body2"
              style={{
                fontSize: "1rem",
                fontFamily: "'Futura', 'Trebuchet MS', 'Arial', sans-serif",
              }}
            >
              {item.name} - {item.description}
              <br />
              {item.quantity} st
              <br />
              {item.price} kr
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  ));

  React.useEffect(() => {
    clearLocalStorage();
  }, [clearLocalStorage]);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  interface RandomOrderNumberOptions {
    length: number;
  }

  const generateRandomOrderNumber = ({ length }: RandomOrderNumberOptions) => {
    let result = "";
    for (let i = 0; i < length; i++) {
      result += Math.floor(Math.random() * 10);
    }
    return result;
  };

  const options: RandomOrderNumberOptions = { length: 8 };
  const orderNumber = generateRandomOrderNumber(options);

  const formData = JSON.parse(localStorage.getItem("formData") || "{}");

  return (
    <ThemeProvider theme={theme}>
      <Box
        style={{
          width: "100%",
          height: "auto",
          backgroundImage:
            "linear-gradient(to bottom, rgb(246 245 243), #ffffff)",
        }}
      >
        <React.Fragment>
          <CssBaseline />
          <Box>
            <AppBar
              position="absolute"
              color="default"
              elevation={0}
              sx={{
                position: "relative",
              }}
            ></AppBar>
            <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
              <Paper
                variant="outlined"
                sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
              >
                <Typography
                  component="h1"
                  variant="h4"
                  align="center"
                  sx={{
                    fontSize: "2rem",
                    fontWeight: "700",
                    fontFamily: "'Futura', 'Trebuchet MS', 'Arial', sans-serif",
                  }}
                >
                  Checkout
                </Typography>
                <Stepper
                  activeStep={activeStep}
                  sx={{ pt: 3, pb: 2 }}
                ></Stepper>
                <React.Fragment>
                  <Typography
                    variant="h5"
                    gutterBottom
                    style={{
                      fontSize: "2rem",
                      fontFamily:
                        "'Futura', 'Trebuchet MS', 'Arial', sans-serif",
                    }}
                  >
                    Thank you for your order.
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    style={{ marginTop: "16px", fontWeight: "bold" }}
                  >
                    Your order number is #{orderNumber}
                  </Typography>
                  <Typography variant="subtitle1" marginBottom={4}>
                    We have emailed your order confirmation, and will send you
                    an update when your order has shipped.
                  </Typography>
                  {cartItems}
                  <Typography
                    style={{
                      fontSize: "0.950rem",
                      fontWeight: "bold",
                      marginBottom: "26px",
                      marginRight: "25px",
                      textAlign: "right",
                      fontFamily:
                        "'Futura', 'Trebuchet MS', 'Arial', sans-serif",
                    }}
                  >
                    Totalt: {TotalCostAll} kr
                  </Typography>
                </React.Fragment>
                <Typography variant="body1">Namn: {formData.name}</Typography>
                <Typography variant="body1">
                  Adress: {formData.address}
                </Typography>
                <Typography variant="body1">
                  Zipcode: {formData.zipCode}
                </Typography>
                <Typography variant="body1">City: {formData.city}</Typography>
                <Typography variant="body1">Email: {formData.email}</Typography>
                <Typography variant="body1">
                  Phonenumber: {formData.phoneNumber}
                </Typography>
                <React.Fragment>
                  <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                    <Link href="/">
                      <Button
                        variant="contained"
                        size="small"
                        sx={{
                          padding: "0.3rem 3rem",
                          width: "100%",
                          border: "none",
                          bgcolor: "#0072e4",
                          borderRadius: "20px",
                          "&:hover": {
                            bgcolor: "#0264C5",
                          },
                        }}
                      >
                        BACK TO HOMEPAGE
                      </Button>
                    </Link>
                  </Box>
                </React.Fragment>
              </Paper>
            </Container>
          </Box>
        </React.Fragment>
      </Box>
    </ThemeProvider>
  );
}
