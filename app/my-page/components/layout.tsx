import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
  Avatar,
  Box,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";

function MyPageLayout() {
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
          <Grid item xs={12} md={12}>
            <Box
              sx={{
                width: "100%",
                backgroundColor: "#fff",
                padding: "1rem",
                borderRadius: "10px",
                marginTop: "2rem",
                border: "1px solid #edede9",
              }}
            >
              <CardContent>
                <ListItem
                  alignItems="center" // Se till att alignItems är center
                  sx={{ display: "flex", alignItems: "center" }} // Lägg till flexbox
                >
                  <ListItemAvatar>
                    <Avatar
                      alt="Jane Doe"
                      sx={{ width: 100, height: 100, margin: "1rem" }} // Ange önskad bredd och höjd
                    />
                  </ListItemAvatar>
                  <ListItemText>
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        fontSize: "1.5rem",
                        padding: "1.5rem",
                      }}
                    >
                      Förnamn Efternamn
                    </Typography>
                  </ListItemText>
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
                borderRadius: "10px",
                border: "1px solid #edede9",
              }}
            >
              <Typography sx={{ fontSize: "1rem", padding: "0.5rem" }}>
                Mina beställningar
                <KeyboardArrowRightIcon sx={{ fontSize: "1rem" }} />
              </Typography>
              <Typography sx={{ fontSize: "1rem", padding: "0.5rem" }}>
                Mina returer
                <KeyboardArrowRightIcon sx={{ fontSize: "1rem" }} />
              </Typography>
              <Typography sx={{ fontSize: "1rem", padding: "0.5rem" }}>
                Mina uppgifter
                <KeyboardArrowRightIcon sx={{ fontSize: "1rem" }} />
              </Typography>
              <Typography sx={{ fontSize: "1rem", padding: "0.5rem" }}>
                Ändra lösenord
                <KeyboardArrowRightIcon sx={{ fontSize: "1rem" }} />
              </Typography>
              <Typography sx={{ fontSize: "1rem", padding: "0.5rem" }}>
                Betalningsmetoder
                <KeyboardArrowRightIcon sx={{ fontSize: "1rem" }} />
              </Typography>
              <Typography sx={{ fontSize: "1rem", padding: "0.5rem" }}>
                Kontoinställningar
                <KeyboardArrowRightIcon sx={{ fontSize: "1rem" }} />
              </Typography>
            </Box>
          </Grid>

          {/* Orders Column */}
          <Grid item xs={12} md={8}>
            <Box
              sx={{
                width: "100%",
                backgroundColor: "#fff",
                padding: "1rem",
                borderRadius: "10px",
                border: "1px solid #edede9",
              }}
            >
              <List
                sx={{
                  width: "100%",
                  // maxWidth: 360,
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
