"use client";

import {
  LocalShippingOutlined,
  PaymentOutlined,
  UndoOutlined,
} from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import RemoveIcon from "@mui/icons-material/Remove";

import {
  Box,
  CardContent,
  Divider,
  Grid,
  IconButton,
  MenuItem,
  Select,
  ThemeProvider,
  Typography,
} from "@mui/material";
import CustomerForm from "../components/CustomerForm";
import { useCart } from "../context/CartContext";
import theme from "../themes/themes";

function CartPage() {
  const { cart, removeFromCart, changeQuantity } = useCart();

  const handleRemoveFromCart = (productId: string, size: string) => {
    removeFromCart(productId, size);
  };

  const handleDecreaseQuantity = (productId: string, size: string) => {
    const currentItem = cart.find(
      (item) => item.id === productId && item.size === size
    );
    if (currentItem && currentItem.quantity > 1) {
      changeQuantity(productId, currentItem.quantity - 1, size);
    } else if (currentItem && currentItem.quantity === 1) {
      removeFromCart(productId, size);
    }
  };

  const handleIncreaseQuantity = (productId: string, size: string) => {
    const currentItem = cart.find(
      (item) => item.id === productId && item.size === size
    );
    if (currentItem && currentItem.quantity < 1000) {
      changeQuantity(productId, currentItem.quantity + 1, size);
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
      <ThemeProvider theme={theme}>
        <Box>
          <Grid
            container
            justifyContent="center"
            alignItems="flex-start"
            spacing={2}
            sx={{
              padding: "1rem",
              bgcolor: "#f6f5f3",
              minHeight: "100vh",
              paddingTop: { xs: "97px", sm: "104px", md: "104px" },
            }}
          >
            {/* Products Column */}
            <Grid item xs={12} md={6}>
              {cart.map((item) => {
                const totalcost = item.price * item.quantity;
                return (
                  <Box
                    key={item.id + item.size}
                    sx={{
                      padding: "1rem",
                      backgroundColor: "#fff",
                      borderBottom: "1px solid #e9e9e9",
                    }}
                    data-cy="cart-item"
                  >
                    <Grid container alignItems="center" spacing={2}>
                      <Grid item xs={12} sm={3}>
                        <img
                          src={item.image}
                          alt={item.title}
                          style={{
                            width: "100%",
                            height: "auto",
                            marginBottom: "1rem",
                            backgroundImage:
                              "linear-gradient(to bottom, #e2e0df, #ffffff)",
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
                              {item.title}
                            </Typography>
                            <IconButton
                              aria-label="delete"
                              onClick={() =>
                                handleRemoveFromCart(item.id, item.size)
                              }
                              color="default"
                            >
                              <CloseIcon sx={{ fontSize: "1rem" }} />
                            </IconButton>
                          </Box>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{
                              fontSize: "1rem",
                              color: "#797979",
                              fontFamily:
                                "'Futura', 'Trebuchet MS', 'Arial', sans-serif",
                            }}
                          >
                            Storlek: {item.size}
                          </Typography>
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
                                  Number(event.target.value),
                                  item.size
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
                                  onClick={() =>
                                    handleDecreaseQuantity(item.id, item.size)
                                  }
                                  sx={{ fontSize: "1rem" }}
                                />
                              </IconButton>
                              <IconButton>
                                <AddIcon
                                  data-cy="increase-quantity-button"
                                  onClick={() =>
                                    handleIncreaseQuantity(item.id, item.size)
                                  }
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
                  backgroundColor: "#fff",
                  padding: "1rem",
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "100",
                      marginBottom: "1rem",
                      fontFamily:
                        "'Futura', 'Trebuchet MS', 'Arial', sans-serif",
                      fontSize: { xs: "1.5rem", md: "2rem" },
                    }}
                  >
                    Din varukorg ({totalItems})
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
                        Summa:
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
                        Frakt:
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
                        Att betala:
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
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "100",
                      marginTop: "1rem",
                      fontFamily:
                        "'Futura', 'Trebuchet MS', 'Arial', sans-serif",
                      fontSize: { xs: "1.5rem", md: "2rem" },
                    }}
                  >
                    Leveransuppgifter
                  </Typography>

                  <CustomerForm />
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
                        Gratis och snabb leverans
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily:
                            "'Futura', 'Trebuchet MS', 'Arial', sans-serif",
                        }}
                      >
                        Få din beställning levererad hem eller hämta den i någon
                        av våra butiker. I brådska? Vi erbjuder även gratis
                        expressleverans hem.
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
                        Enkelt att returnera
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily:
                            "'Futura', 'Trebuchet MS', 'Arial', sans-serif",
                        }}
                      >
                        Vi accepterar returer av alla varor inom 30 dagar från
                        mottagandet med rätt till full återbetalning.
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
                        Säker betalning
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily:
                            "'Futura', 'Trebuchet MS', 'Arial', sans-serif",
                        }}
                      >
                        Kredit- och betalkort, Paypal, Apple Pay, Ideal
                        (tillgängligt i Nederländerna) och Bancontact
                        (tillgängligt i Belgien)
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default CartPage;
