import { signOutUser } from "@/app/server-actions/user/userActions";
import SignInButton from "@/app/sign-in/components/SignInButton";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
  Avatar,
  Box,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  Typography,
} from "@mui/material";
import { useSession } from "next-auth/react";

function MyPageLayout() {
  const session = useSession();

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
              sx={{
                width: "100%",
                backgroundColor: "#fff",
                padding: "1rem",
                marginTop: "1rem",
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
                      width: "100%", // Make sure this spans the full width
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
              </List>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default MyPageLayout;
