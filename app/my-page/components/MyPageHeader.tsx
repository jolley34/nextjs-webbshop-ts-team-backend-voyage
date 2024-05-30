/* eslint-disable react/no-unescaped-entities */
import {
  Avatar,
  Card,
  CardContent,
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";

function MyPageHeader() {
  return (
    <Card>
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
              {/* @{user.data?.username} */}
            </Typography>
            <Typography variant="body2" color="black" sx={{ width: "75%" }}>
              Adventurer, shutterbug, storyteller. With a camera in hand and
              wanderlust in his heart, Kai roams the globe, capturing the
              essence of life's most captivating moments. From the bustling
              streets of Tokyo to the serene landscapes of Patagonia, his lens
              uncovers the beauty and complexity of our world. Join him on his
              journey as he explores, inspires, and shares the magic of travel
              through his captivating photography.
            </Typography>
            <Grid container alignItems="center" spacing={2}>
              <Grid item sx={{ marginTop: "1rem" }}>
                <Typography variant="body2" color="black">
                  <b>1</b> following
                </Typography>
              </Grid>
              <Grid item sx={{ marginTop: "1rem" }}>
                <Typography variant="body2" color="black">
                  <b>2859</b> followers
                </Typography>
              </Grid>
              <Grid item sx={{ marginTop: "1rem" }}>
                <Typography variant="body2" color="black">
                  <b>1,249 200</b> liqes
                </Typography>
              </Grid>
            </Grid>
          </ListItemText>
        </ListItem>
      </CardContent>
    </Card>
  );
}

export default MyPageHeader;
