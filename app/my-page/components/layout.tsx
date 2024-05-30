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
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar
                      alt="Remy Sharp"
                      //   src={profileAvatar}
                      sx={{ width: 100, height: 100, margin: "1rem" }} // Ange önskad bredd och höjd
                    />
                  </ListItemAvatar>
                  <ListItemText sx={{ margin: "1rem" }}>
                    <Typography gutterBottom variant="h5" component="div">
                      Username
                    </Typography>

                    <Grid container alignItems="center" spacing={2}></Grid>
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
                marginTop: "2rem",

                border: "1px solid #edede9",
              }}
            ></Box>
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
                marginTop: "2rem",
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
