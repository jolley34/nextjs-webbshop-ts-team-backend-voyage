/* eslint-disable @next/next/no-img-element */
import { db } from "@/prisma/db";
import {
  Box,
  Button,
  CardContent,
  Grid,
  Link,
  ThemeProvider,
  Typography,
} from "@mui/material";
import theme from "../themes/themes";
import DeleteAdminButton from "./product/components/deleteAdminButton";
import OrderCard from "./product/components/orderCard";

export default async function AdminPage() {
  // const session = await auth();
  // if (!session?.user.isAdmin) return redirect("/>SignIn");

  const products = await db.product.findMany({ where: { isArchived: false } });

  const orders = await db.order.findMany({
    select: {
      id: true,
      userId: true,
      createdAt: true,
      totalPrice: true,
      user: {
        select: {
          name: true,
        },
      },
      shippingAddress: {
        select: {
          firstName: true,
          lastName: true,
          street: true,
          city: true,
          zipcode: true,
          email: true,
          phoneNumber: true,
        },
      },
      products: {
        select: {
          product: {
            select: {
              name: true,
              image: true,
              price: true,
            },
          },
          quantity: true,
          subTotalPrice: true,
        },
      },
    },
    orderBy: { id: "desc" },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box>
          <Grid
            container
            justifyContent="center"
            sx={{
              bgcolor: "#f6f5f3",
              minHeight: "100vh",
              flexDirection: "column",
              padding: "20px",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#fff",
                marginBottom: "20px",
                paddingBottom: "2rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "20px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Typography
                sx={{
                  fontSize: "2rem",
                  fontWeight: "700",
                  fontFamily: "'Futura', 'Trebuchet MS', 'Arial', sans-serif",
                }}
              >
                Admin Dashboard
              </Typography>
              <Link href="/admin/product/new" data-cy="product-form">
                <Button
                  data-cy="admin-add-product"
                  color="secondary"
                  variant="outlined"
                  size="large"
                  sx={{
                    bgcolor: "#000",
                    borderColor: "#000",
                    "&:hover": {
                      bgcolor: "#333",
                      borderColor: "#000",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      color: "white",
                      fontWeight: "400",
                      fontFamily:
                        "'Futura', 'Trebuchet MS', 'Arial', sans-serif",
                    }}
                  >
                    Add new
                  </Typography>
                </Button>
              </Link>
            </Box>
            <Grid
              container
              sx={{
                paddingInline: "1rem",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 1 }}
            >
              {products
                .filter((product) => !product.isArchived)
                .map((product) => (
                  <Grid
                    key={product.id}
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    data-cy="product"
                    sx={{ marginTop: "20px", width: "100%" }}
                  >
                    <Box
                      sx={{
                        backgroundColor: "#fff",
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        padding: "20px",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        borderRadius: 0,
                        textDecoration: "none",
                      }}
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        style={{
                          objectFit: "contain",
                          aspectRatio: 1,
                          width: "100%",
                          height: "100%",
                        }}
                      />
                      <CardContent>
                        <Typography
                          sx={{
                            fontSize: "1rem",
                            fontWeight: "bold",
                            fontFamily:
                              "'Futura', 'Trebuchet MS', 'Arial', sans-serif",
                          }}
                        >
                          Title:
                        </Typography>
                        <Typography
                          sx={{
                            fontWeight: "100",
                            fontFamily:
                              "'Futura', 'Trebuchet MS', 'Arial', sans-serif",
                          }}
                          data-cy="product-title"
                        >
                          {product.name}
                        </Typography>

                        <Typography
                          sx={{
                            fontSize: "1rem",
                            fontWeight: "bold",
                            fontFamily:
                              "'Futura', 'Trebuchet MS', 'Arial', sans-serif",
                          }}
                        >
                          ID:
                        </Typography>
                        <Typography
                          data-cy="product-id"
                          sx={{
                            fontWeight: "100",
                            fontFamily:
                              "'Futura', 'Trebuchet MS', 'Arial', sans-serif",
                          }}
                        >
                          {product.id}
                        </Typography>

                        <Typography
                          sx={{
                            fontSize: "1rem",
                            fontWeight: "bold",
                            fontFamily:
                              "'Futura', 'Trebuchet MS', 'Arial', sans-serif",
                          }}
                        >
                          Description:
                        </Typography>
                        <Typography
                          sx={{
                            fontWeight: "100",
                            fontFamily:
                              "'Futura', 'Trebuchet MS', 'Arial', sans-serif",
                          }}
                        >
                          {product.description}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "1rem",
                            fontWeight: "bold",
                            fontFamily:
                              "'Futura', 'Trebuchet MS', 'Arial', sans-serif",
                          }}
                        >
                          Price:
                        </Typography>
                        <Typography
                          sx={{
                            fontWeight: "100",
                            fontFamily:
                              "'Futura', 'Trebuchet MS', 'Arial', sans-serif",
                          }}
                          data-cy="product-price"
                        >
                          {product.price.toString()} kr
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "1rem",
                            fontWeight: "bold",
                            fontFamily:
                              "'Futura', 'Trebuchet MS', 'Arial', sans-serif",
                          }}
                        >
                          Inventory:
                        </Typography>
                        <Typography
                          sx={{
                            fontWeight: "100",
                            fontFamily:
                              "'Futura', 'Trebuchet MS', 'Arial', sans-serif",
                          }}
                        >
                          {product.stock}
                        </Typography>
                      </CardContent>
                      <Link
                        href={`/admin/product/${encodeURIComponent(
                          product.id
                        )}`}
                      >
                        <button>Edit Product</button>
                      </Link>
                      <DeleteAdminButton productId={product.id} />
                    </Box>
                  </Grid>
                ))}
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ padding: "0.5rem 0rem 0.5rem 3rem" }}>
          <h1>Orders</h1>
        </Box>
        <Box sx={{ paddingInline: "3rem", paddingBottom: "1.5rem" }}>
          <Grid container spacing={2}>
            {orders.map((order) => (
              <Grid item xs={12} sm={12} md={12} key={order.id}>
                <OrderCard order={order as any} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </ThemeProvider>
    </>
  );
}
