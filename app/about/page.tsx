"use client";
import {
  Box,
  Grid,
  Paper,
  ThemeProvider,
  Typography,
  createTheme,
  styled,
} from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "'Futura', 'Trebuchet MS', 'Arial', sans-serif",
  },
});

export default function AboutPage() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#1b1b1b",
    ...theme.typography.body2,
    padding: theme.spacing(0),
    color: "white",
    borderRadius: 0,
    position: "relative",
    overflow: "hidden",

    "&:hover img": {
      transform: "scale(1.1)",
      opacity: "0.7",
      transition: "transform 0.8s ease-in-out, opacity 0.8s ease-in-out",
    },
  }));

  const ImageWrapper = styled("div")({
    overflow: "hidden",
    width: "100%",
    height: "60%",
  });

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          paddingTop: { xs: "81px", sm: "88px", md: "88px" },
          bgcolor: "#111111",
          color: "white",
          paddingInline: "1rem",
          height: "100%",
          paddingBottom: "1.5rem",
        }}
      >
        <Grid container spacing={2}>
          {campaigns.map((campaign, index) => (
            <Grid item key={index} xs={12} sm={12} md={6} lg={6}>
              <Item sx={{ cursor: "pointer" }}>
                <ImageWrapper>
                  <img
                    style={{
                      width: "100%",
                      aspectRatio: "2",
                      height: "100%",
                      objectFit: "cover",
                      transition:
                        "transform 0.8s ease-in-out, opacity 0.8s ease-in-out",
                    }}
                    src={campaign.image}
                    alt={campaign.title}
                    loading="lazy"
                  />
                </ImageWrapper>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "40%",
                    padding: "1rem",
                  }}
                >
                  <Typography sx={{ fontSize: "0.75rem" }}>
                    {campaign.date}
                  </Typography>
                  <Typography sx={{ fontSize: "1rem", fontWeight: "700" }}>
                    {campaign.title}
                  </Typography>
                </Box>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

const campaigns = [
  {
    title: "GALLERY 01",
    date: "ananas",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-ipad-air-202405?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1713308272877",
  },
  {
    title: "GALLERY 02",
    date: "ananas",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-iphone-15-pro-202309?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1692910040844",
  },
  {
    title: "GALLERY 03",
    date: "ananas",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-watch-s9-202309?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1692720183508",
  },
  {
    title: "GALLERY 04",
    date: "ananas",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-ipad-202310?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1696875297972",
  },
  {
    title: "GALLERY 05",
    date: "ananas",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-iphone-15-202309?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1692719973220",
  },
  {
    title: "GALLERY 06",
    date: "ananas",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-macbook-pro-202310?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1696964122967",
  },
];
