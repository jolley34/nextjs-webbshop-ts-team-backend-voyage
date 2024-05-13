"use client";
import { Box, Button, Grid, Snackbar, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState } from "react";

const theme = createTheme({
  typography: {
    fontFamily: "'Futura', 'Trebuchet MS', 'Arial', sans-serif",
  },
  palette: {
    primary: {
      main: "#000000",
    },
  },
});

export default function ContactPage() {
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleWhatsAppClick = () => {
    setSnackbarOpen(true);
  };

  return (
    <Box
      sx={{
        paddingTop: { xs: "81px", sm: "88px", md: "88px" },
        display: "flex",
        justifyContent: "center",
        padding: "4rem",
      }}
    >
      <ThemeProvider theme={theme}>
        <Grid container sx={{ width: "80%" }}>
          <Grid
            item
            xs={12}
            md={12}
            sx={{
              borderBottom: "1px solid #e9e9e9",
              textAlign: "left",
              display: "flex",
              flexDirection: "column",
              padding: { xs: "2rem", sm: "3rem", md: "4rem" },
            }}
          >
            <Typography sx={{ fontSize: "2.25rem", fontWeight: "400" }}>
              Kontakta oss
            </Typography>
            <Typography sx={{ fontSize: "0.9rem", fontWeight: "200" }}>
              Använd en av följande metoder för att kontakta oss
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={12}
            sx={{
              borderBottom: "1px solid #e9e9e9",
              display: "flex",
              padding: { xs: "2rem", sm: "3rem", md: "4rem" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "0.5rem",
                width: "100%",
              }}
            >
              <Typography sx={{ fontSize: "1.5rem", fontWeight: "400" }}>
                Ring vår kundtjänst
              </Typography>
              <Typography
                sx={{ fontSize: "0.75rem", fontWeight: "200", width: "50%" }}
              >
                För att kontakta vår kundtjänst kan du ringa 1-833-833-833 från
                måndag till lördag 9:00 - 22:00, eller söndag 9:00 - 20:00,
                eller fylla i formuläret nedan.
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={12}
            sx={{
              borderBottom: "1px solid #e9e9e9",
              display: "flex",
              padding: { xs: "2rem", sm: "3rem", md: "4rem" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "0.5rem",
                width: "100%",
              }}
            >
              <Typography sx={{ fontSize: "1.5rem", fontWeight: "400" }}>
                Skicka oss ett meddelande
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                  width: "50%",
                }}
              >
                {" "}
                <Typography sx={{ fontSize: "0.75rem", fontWeight: "200" }}>
                  Anslut med vår kundtjänst via WhatsApp från måndag till lördag
                  9:00 - 22:00, eller söndag 9:00 - 20:00.
                </Typography>
                <Button variant="outlined" onClick={handleWhatsAppClick}>
                  WHATSAPP
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2000}
        onClose={handleSnackbarClose}
        message="Tyvärr, WhatsApp-tjänsten är för närvarande stängd."
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />
    </Box>
  );
}
