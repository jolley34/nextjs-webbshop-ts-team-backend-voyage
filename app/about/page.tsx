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
    title: "SS24 SUMMER COLLECTION",
    date: "SUMMER 2024",
    image:
      "https://www.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton--BC_AOL_2023_CAMPAIGN_290_LVCOM_1600x2000_DII.jpg?wid=4096",
  },
  {
    title: "SS24 SPRING COLLECTION",
    date: "SPRING 2024",
    image:
      "https://www.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton--BC_AOL_2023_CAMPAIGN_318_LVCOM_2048x1152_DI3.jpg?wid=4096",
  },
  {
    title: "SS24 WINTER COLLECTION",
    date: "WINTER 2024",
    image:
      "https://www.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton--BC_LV_SKI_00070_LVCOM_1600x2000_DII.jpg?wid=4096",
  },
  {
    title: "SS23 FALL COLLECTION",
    date: "FALL 2023",
    image:
      "https://www.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton--BC_AOL_2023_CAMPAIGN_325_LVCOM_1600x2000_DII.jpg?wid=4096",
  },
  {
    title: "SS23 SUMMER COLLECTION",
    date: "SUMMER 2023",
    image:
      "https://www.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton--BC_AOL_2023_CAMPAIGN_287_LVCOM_2048x1152_DI3.jpg?wid=4096",
  },
  {
    title: "SS23 SPRING COLLECTION",
    date: "SPRING 2023",
    image:
      "https://www.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton--BC_COMMERCIAL_HOLIDAY2023_IMG015_LVCOM_2048x1152_DI3.jpg?wid=4096",
  },
];
