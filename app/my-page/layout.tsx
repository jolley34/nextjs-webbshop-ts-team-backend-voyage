import { signOutUser } from "@/app/server-actions/user/userActions";
import SignInButton from "@/app/sign-in/components/SignInButton";
import { auth } from "@/auth";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
  Avatar,
  Box,
  CardContent,
  Divider,
  Grid,
  Link,
  ListItem,
  ListItemAvatar,
  Typography,
} from "@mui/material";
import { PropsWithChildren } from "react";

export default async function MyPageLayout({ children }: PropsWithChildren) {
  const session = await auth();

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
                      {session?.user ? (
                        <p style={{ color: "black", fontWeight: "900" }}>
                          {session.user.name}
                        </p>
                      ) : (
                        <SignInButton />
                      )}
                    </Typography>
                    {session?.user && (
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
              <Link href="/my-page/order" style={{ textDecoration: "none" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontSize: "1rem",
                    padding: "0.5rem",
                    cursor: "pointer",
                    transition: "background 0.5s ease",
                    "&:hover": {
                      background: "rgba(241, 241, 241, 0.806)",
                    },
                    borderRadius: "10px",
                  }}
                >
                  <Typography>My Orders</Typography>
                  <KeyboardArrowRightIcon sx={{ fontSize: "1rem" }} />
                </Box>
              </Link>

              <Link
                href="/my-page/track-order"
                style={{ textDecoration: "none" }}
              >
                <Box
                  sx={{
                    transition: "background 0.5s ease",
                    "&:hover": {
                      background: "rgba(241, 241, 241, 0.806)",
                    },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontSize: "1rem",
                    padding: "0.5rem",
                    cursor: "pointer",
                    borderRadius: "10px",
                  }}
                >
                  <Typography>Orders on the way</Typography>
                  <KeyboardArrowRightIcon sx={{ fontSize: "1rem" }} />
                </Box>
              </Link>

              {[
                "My Returns",
                "My Details",
                "Change Password",
                "Payment Methods",
                "Account Settings",
              ].map((text) => (
                <Box
                  key={text}
                  sx={{
                    transition: "background 0.5s ease",
                    "&:hover": {
                      background: "rgba(241, 241, 241, 0.806)",
                    },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontSize: "1rem",
                    padding: "0.5rem",
                    cursor: "pointer",
                    borderRadius: "10px",
                  }}
                >
                  <Typography>{text}</Typography>
                  <KeyboardArrowRightIcon sx={{ fontSize: "1rem" }} />
                </Box>
              ))}
              <Divider sx={{ marginY: "1rem" }} />
              {[
                "Privacy Options",
                "Social Accounts",
                "Gift Cards",
                "Help and Support",
              ].map((text) => (
                <Box
                  key={text}
                  sx={{
                    transition: "background 0.5s ease",
                    "&:hover": {
                      background: "rgba(241, 241, 241, 0.806)",
                    },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontSize: "1rem",
                    padding: "0.5rem",
                    cursor: "pointer",
                    borderRadius: "10px",
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
              {children}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
