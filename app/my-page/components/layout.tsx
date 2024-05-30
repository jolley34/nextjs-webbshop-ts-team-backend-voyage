import { signOutUser } from "@/app/server-actions/user/userActions";
import SignInButton from "@/app/sign-in/components/SignInButton";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
  Avatar,
  Box,
  CardContent,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  Typography,
} from "@mui/material";
import { useSession } from "next-auth/react";

export default function MyPageLayout() {
  const session = useSession();

  //   const orders = await db.order.findMany({
  //     select: {
  //       id: true,
  //       userId: true,
  //       createdAt: true,
  //       totalPrice: true,
  //       user: {
  //         select: {
  //           name: true,
  //         },
  //       },
  //       shippingAddress: {
  //         select: {
  //           firstName: true,
  //           lastName: true,
  //           street: true,
  //           city: true,
  //           zipcode: true,
  //           email: true,
  //           phoneNumber: true,
  //         },
  //       },
  //       products: {
  //         select: {
  //           product: {
  //             select: {
  //               name: true,
  //               image: true,
  //               price: true,
  //             },
  //           },
  //           quantity: true,
  //           subTotalPrice: true,
  //         },
  //       },
  //     },
  //     orderBy: { id: "desc" },
  //   });

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
            bgcolor: "#f6f5f3",
            minHeight: "100vh",
            paddingTop: { xs: "105px", sm: "105px", md: "105px" },
          }}
        >
          {/* Header Column */}
          <Grid item xs={12}>
            <Box
              alignItems="flex-start"
              sx={{
                width: "100%",
                backgroundColor: "#fff",
                padding: "1rem",
              }}
            >
              <CardContent>
                <ListItem
                  alignItems="center"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <ListItemAvatar>
                    <Avatar
                      alt="Jane Doe"
                      sx={{ width: 100, height: 100, margin: "1rem" }}
                    />
                  </ListItemAvatar>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        fontSize: "1.5rem",
                        padding: "1.5rem",
                      }}
                    >
                      {session?.data?.user ? (
                        <p style={{ color: "black", fontWeight: "900" }}>
                          {session.data.user.name}
                        </p>
                      ) : (
                        <SignInButton />
                      )}
                    </Typography>
                    {session?.data?.user && (
                      <form action={signOutUser}>
                        <button
                          style={{
                            cursor: "pointer",
                            background: "#0072e4",
                            border: "none",
                            padding: "0.5rem 1rem",
                            borderRadius: "20px",
                            color: "white",
                          }}
                        >
                          Sign out
                        </button>
                      </form>
                    )}
                  </Box>
                </ListItem>
              </CardContent>
            </Box>
          </Grid>

          {/* Pages Column */}
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                width: "100%",
                backgroundColor: "#fff",
                padding: "1rem",
                marginBottom: "1rem",
                minHeight: "50vh",
              }}
            >
              {[
                "Mina beställningar",
                "Mina returer",
                "Mina uppgifter",
                "Ändra lösenord",
                "Betalningsmetoder",
                "Kontoinställningar",
              ].map((text) => (
                <Box
                  key={text}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontSize: "1rem",
                    padding: "0.5rem",
                    cursor: "pointer",
                  }}
                >
                  <Typography>{text}</Typography>
                  <KeyboardArrowRightIcon sx={{ fontSize: "1rem" }} />
                </Box>
              ))}
              <Divider sx={{ marginY: "1rem" }} />
              {[
                "Sekretessalternativ",
                "Sociala konton",
                "Presentkort",
                "Hjälp och support",
              ].map((text) => (
                <Box
                  key={text}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontSize: "1rem",
                    padding: "0.5rem",
                    cursor: "pointer",
                  }}
                >
                  <Typography>{text}</Typography>
                  <KeyboardArrowRightIcon sx={{ fontSize: "1rem" }} />
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Orders Column */}
          <Grid item xs={12} md={8}>
            <Box
              sx={{
                width: "100%",
                backgroundColor: "#fff",
                padding: "1rem",
                marginBottom: "1rem",
                minHeight: "50vh",
              }}
            >
              <List
                sx={{
                  width: "100%",
                  bgcolor: "background.paper",
                  textAlign: "justify",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "1.5rem",
                    marginBottom: "1rem",
                  }}
                >
                  Mina beställningar:
                </Typography>
                {/* <Grid container spacing={2}>
                  {orders.map((order) => (
                    <Grid item xs={12} sm={12} md={12} key={order.id}>
                      <OrderCard
                        id={order.id}
                        userId={order.userId}
                        user={order.user.name}
                        createdAt={order.createdAt}
                        firstName={order.shippingAddress.firstName}
                        lastName={order.shippingAddress.lastName}
                        street={order.shippingAddress.street}
                        zipcode={order.shippingAddress.zipcode}
                        email={order.shippingAddress.email}
                        phoneNumber={order.shippingAddress.phoneNumber}
                        productName={order.products
                          .map((product) => product.product.name)
                          .join(",")}
                        productPrice={order.products
                          .map((product) => product.product.price)
                          .join(",")}
                        totalPrice={order.totalPrice}
                        quantity={order.products.reduce(
                          (acc, product) => acc + product.quantity,
                          0
                        )}
                      />
                    </Grid>
                  ))}
                </Grid> */}
              </List>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
