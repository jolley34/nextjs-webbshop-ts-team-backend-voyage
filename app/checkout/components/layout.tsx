"use client";

import {
  LocalShippingOutlined,
  PaymentOutlined,
  UndoOutlined,
} from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import RemoveIcon from "@mui/icons-material/Remove";
import { useSession } from "next-auth/react";
import Image from "next/image";

import {
  Box,
  CardContent,
  Divider,
  Grid,
  IconButton,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useCart } from "../../context/CartContext";
import CustomerForm from "./CustomerForm";
import GitHubSignInForm from "./GitHubSignInForm";

export default function CheckoutLayout() {
  const { cart, removeFromCart, changeQuantity } = useCart();
  const session = useSession();

  const handleRemoveFromCart = (productId: string) => {
    removeFromCart(productId);
  };

  const handleDecreaseQuantity = (productId: string) => {
    const currentItem = cart.find((item) => item.id === productId);
    if (currentItem && currentItem.quantity > 1) {
      changeQuantity(productId, currentItem.quantity - 1);
    } else if (currentItem && currentItem.quantity === 1) {
      removeFromCart(productId);
    }
  };

  const handleIncreaseQuantity = (productId: string) => {
    const currentItem = cart.find((item) => item.id === productId);
    if (currentItem && currentItem.quantity < 1000) {
      changeQuantity(productId, currentItem.quantity + 1);
    }
  };

  const TotalCostAll = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const shippingCost = 49;

  const TotalCostWithShipping = TotalCostAll + shippingCost;

  return (
    <>
      <Box>
        <Grid
          container
          justifyContent="center"
          alignItems="flex-start"
          spacing={2}
          sx={{
            padding: "1rem",
            bgcolor: "rgba(241, 241, 241, 0.806)",
            minHeight: "100vh",
          }}
        >
          {/* Products Column */}
          <Grid item xs={12} md={6}>
            {cart.map((item) => {
              const totalcost = item.price * item.quantity;
              return (
                <Box
                  key={item.id}
                  sx={{
                    padding: "1rem",
                    backgroundColor: "#fff",
                    borderBottom: "1px solid #e9e9e9",
                    borderRadius: "20px",
                  }}
                  data-cy="cart-item"
                >
                  <Grid container alignItems="center" spacing={2}>
                    <Grid item xs={12} sm={3}>
                      <Image
                        src={item.image}
                        alt={item.name}
                        style={{
                          width: "100%",
                          height: "auto",
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={9}>
                      <CardContent>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography
                            data-cy="product-title"
                            variant="h6"
                            sx={{
                              fontSize: "1.5rem",
                              fontWeight: "500",
                              fontFamily:
                                "'Futura', 'Trebuchet MS', 'Arial', sans-serif",
                            }}
                          >
                            {item.name}
                          </Typography>
                          <IconButton
                            aria-label="delete"
                            onClick={() => handleRemoveFromCart(item.id)}
                            color="default"
                          >
                            <CloseIcon sx={{ fontSize: "1rem" }} />
                          </IconButton>
                        </Box>

                        <Typography
                          data-cy="product-price"
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            fontSize: "1rem",
                            fontFamily:
                              "'Futura', 'Trebuchet MS', 'Arial', sans-serif",
                            marginBottom: "0.5rem",
                          }}
                        >
                          {totalcost} kr
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            "& .MuiIconButton-root": {
                              padding: "6px",
                            },
                          }}
                        >
                          <Select
                            data-cy="product-quantity"
                            value={item.quantity}
                            onChange={(event) =>
                              changeQuantity(
                                item.id,
                                Number(event.target.value)
                              )
                            }
                            size="small"
                            style={{
                              fontSize: "0.8rem",
                              width: "40%",
                              fontFamily:
                                "'Futura', 'Trebuchet MS', 'Arial', sans-serif",
                            }}
                            MenuProps={{
                              PaperProps: {
                                style: {
                                  maxHeight: 300,
                                  width: "20ch",
                                },
                              },
                            }}
                          >
                            {Array.from(Array(100).keys()).map((number) => (
                              <MenuItem value={number + 1} key={number}>
                                {number + 1}
                              </MenuItem>
                            ))}
                          </Select>
                          <Box sx={{ display: "flex", gap: "8px" }}>
                            <IconButton>
                              <RemoveIcon
                                data-cy="decrease-quantity-button"
                                onClick={() => handleDecreaseQuantity(item.id)}
                                sx={{ fontSize: "1rem" }}
                              />
                            </IconButton>
                            <IconButton>
                              <AddIcon
                                data-cy="increase-quantity-button"
                                onClick={() => handleIncreaseQuantity(item.id)}
                                sx={{ fontSize: "1rem" }}
                              />
                            </IconButton>
                          </Box>
                        </Box>
                      </CardContent>
                    </Grid>
                  </Grid>
                </Box>
              );
            })}
          </Grid>

          {/* Contact Form Column */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                width: "100%",
                backgroundColor: "#ffffff",
                padding: "1rem",
                borderRadius: "20px",
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "100",
                    marginBottom: "1rem",
                    fontFamily: "'Futura', 'Trebuchet MS', 'Arial', sans-serif",
                    fontSize: { xs: "1.5rem", md: "2rem" },
                  }}
                >
                  Your Shopping Cart ({totalItems})
                </Typography>

                {/* Summary with Left and Right Aligned Text */}
                <Grid container justifyContent="space-between">
                  <Grid item>
                    <Typography
                      variant="body1"
                      sx={{
                        fontFamily:
                          "'Futura', 'Trebuchet MS', 'Arial', sans-serif",
                      }}
                    >
                      Subtotal:
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="body1"
                      data-cy="total-price"
                      sx={{
                        fontFamily:
                          "'Futura', 'Trebuchet MS', 'Arial', sans-serif",
                      }}
                    >
                      {TotalCostAll} kr
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container justifyContent="space-between">
                  <Grid item>
                    <Typography
                      variant="body1"
                      sx={{
                        fontFamily:
                          "'Futura', 'Trebuchet MS', 'Arial', sans-serif",
                      }}
                    >
                      Shipping:
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="body1"
                      sx={{
                        fontFamily:
                          "'Futura', 'Trebuchet MS', 'Arial', sans-serif",
                      }}
                    >
                      49 kr
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container justifyContent="space-between">
                  <Grid item>
                    <Typography
                      variant="body1"
                      sx={{
                        fontFamily:
                          "'Futura', 'Trebuchet MS', 'Arial', sans-serif",
                      }}
                    >
                      Total:
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="body1"
                      sx={{
                        fontFamily:
                          "'Futura', 'Trebuchet MS', 'Arial', sans-serif",
                      }}
                    >
                      {TotalCostWithShipping} kr
                    </Typography>
                  </Grid>
                </Grid>

                <Divider />

                {session?.data?.user ? <CustomerForm /> : <GitHubSignInForm />}
              </CardContent>
              <Divider />
              <Box sx={{ marginTop: "1rem" }}>
                <Grid container spacing={2} alignItems="center">
                  <Grid
                    item
                    xs={3}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "120px",
                    }}
                  >
                    <PaymentOutlined sx={{ fontSize: 40 }} />
                  </Grid>
                  <Grid item xs={9}>
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        fontFamily:
                          "'Futura', 'Trebuchet MS', 'Arial', sans-serif",
                      }}
                    >
                      Free and Fast Delivery
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily:
                          "'Futura', 'Trebuchet MS', 'Arial', sans-serif",
                      }}
                    >
                      Get your order delivered to your home or pick it up at any
                      of our stores. In a hurry? We also offer free express home
                      delivery.
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
              <Divider />

              <Box sx={{ marginTop: "1rem" }}>
                <Grid container spacing={2} alignItems="center">
                  <Grid
                    item
                    xs={3}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "120px",
                    }}
                  >
                    <LocalShippingOutlined sx={{ fontSize: 40 }} />
                  </Grid>
                  <Grid item xs={9}>
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        fontFamily:
                          "'Futura', 'Trebuchet MS', 'Arial', sans-serif",
                      }}
                    >
                      Easy Returns
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily:
                          "'Futura', 'Trebuchet MS', 'Arial', sans-serif",
                      }}
                    >
                      We accept returns of all items within 30 days of receipt
                      for a full refund.
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
              <Divider />

              <Box sx={{ marginTop: "1rem" }}>
                <Grid container spacing={2} alignItems="center">
                  <Grid
                    item
                    xs={3}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "120px",
                    }}
                  >
                    <UndoOutlined sx={{ fontSize: 40 }} />
                  </Grid>
                  <Grid item xs={9}>
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        fontFamily:
                          "'Futura', 'Trebuchet MS', 'Arial', sans-serif",
                      }}
                    >
                      Secure Payment
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily:
                          "'Futura', 'Trebuchet MS', 'Arial', sans-serif",
                      }}
                    >
                      Credit and debit cards, PayPal, Apple Pay, iDEAL
                      (available in the Netherlands), and Bancontact (available
                      in Belgium).
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
