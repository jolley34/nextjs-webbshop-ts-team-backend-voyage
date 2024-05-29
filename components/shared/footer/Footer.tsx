"use client";

import { Facebook, Instagram } from "@mui/icons-material";
import XIcon from "@mui/icons-material/X";

import AddIcon from "@mui/icons-material/Add";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Grid,
  Hidden,
  Link,
  Typography,
} from "@mui/material";
import { usePathname } from "next/navigation";

function StyledLink({
  text,
  href,
  datacy,
}: {
  text: string;
  href: string;
  datacy?: string;
}) {
  const pathname = usePathname();
  return (
    <Link
      sx={{
        textDecoration: "none",
        color: pathname === "/about" ? "#ffffff" : "black",
        letterSpacing: "-0.05em",
        fontFamily: "sans-serif, 'Futura', 'Trebuchet MS', 'Arial'",
        fontSize: "0.8rem",
        margin: "0.2rem 0",
        "&:hover": {
          color: "gray",
        },
      }}
      href={href}
      data-cy={datacy}
    >
      {text}
    </Link>
  );
}

export default function Footer() {
  const pathname = usePathname();
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: pathname === "/about" ? "#1b1b1b" : "white",
        width: "100%",
        borderTop:
          pathname === "/about" ? "1px solid #1b1b1b" : "1px solid #e0e0e0",

        padding: "1rem 0",
      }}
    >
      <Container
        sx={{
          minWidth: "100%",
        }}
      >
        <Grid
          container
          spacing={1}
          sx={{
            fontFamily: "Playfair Display",
            marginTop: "2rem",

            marginBottom: "2rem",

            color: pathname === "/about" ? "#ffffff" : "black",
          }}
        >
          <Grid item xs={12} sm={12} md={3}>
            <Box display="flex" justifyContent="center">
              <Hidden mdDown>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="flex-start"
                >
                  <Typography
                    sx={{
                      fontWeight: "100",
                      letterSpacing: "-0.05em",
                      fontSize: "0.8rem",
                      paddingBottom: "0.8rem",
                    }}
                  >
                    OM ananas
                  </Typography>
                  <StyledLink text="Nyheter" href="/about" />
                  <StyledLink text="Admin" href="/admin" datacy="admin-link" />
                  <StyledLink text="Hjälp med att handla" href="/about" />
                </Box>
              </Hidden>
            </Box>
            <Hidden mdUp>
              <Accordion>
                <AccordionSummary
                  expandIcon={<AddIcon sx={{ fontSize: "1rem" }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  sx={{
                    backgroundColor:
                      pathname === "/about" ? "#2d2d2d" : "white",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: "100",
                      letterSpacing: "-0.05em",

                      fontSize: "0.7rem",

                      color: pathname === "/about" ? "#ffffff" : "black",
                    }}
                  >
                    OM ananas
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    display: "flex",
                    flexDirection: "column",

                    backgroundColor:
                      pathname === "/about" ? "#202020" : "white",
                  }}
                >
                  <StyledLink text="Nyheter" href="/about" />
                  <StyledLink text="Admin" href="/admin" datacy="admin-link" />
                  <StyledLink text="Hjölp med att handla" href="/about" />
                </AccordionDetails>
              </Accordion>
            </Hidden>
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <Box display="flex" justifyContent="center">
              <Hidden mdDown>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="flex-start"
                >
                  <Typography
                    sx={{
                      fontWeight: "100",
                      letterSpacing: "-0.05em",
                      fontSize: "0.8rem",
                      paddingBottom: "0.8rem",
                    }}
                  >
                    KONTO
                  </Typography>
                  <StyledLink text="Hantera ditt Ananas-ID" href="/about" />
                  <StyledLink text="Ananas Store-konto" href="/about" />
                  <StyledLink text="iCloud.com" href="/about" />
                </Box>
              </Hidden>
            </Box>
            <Hidden mdUp>
              <Accordion>
                <AccordionSummary
                  expandIcon={<AddIcon sx={{ fontSize: "1rem" }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  sx={{
                    backgroundColor:
                      pathname === "/about" ? "#2d2d2d" : "white",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: "100",
                      letterSpacing: "-0.05em",

                      fontSize: "0.7rem",

                      color: pathname === "/about" ? "#ffffff" : "black",
                    }}
                  >
                    KONTO
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    display: "flex",
                    flexDirection: "column",

                    backgroundColor:
                      pathname === "/about" ? "#202020" : "white",
                  }}
                >
                  <StyledLink text="Hantera ditt Ananas-ID" href="/about" />
                  <StyledLink text="Ananas Store-konto" href="/about" />
                  <StyledLink text="iCloud.com" href="/about" />
                </AccordionDetails>
              </Accordion>
            </Hidden>
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <Box display="flex" justifyContent="center">
              <Hidden mdDown>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="flex-start"
                >
                  <Typography
                    sx={{
                      fontWeight: "100",
                      letterSpacing: "-0.05em",
                      fontSize: "0.8rem",
                      paddingBottom: "0.8rem",
                    }}
                  >
                    KUNDTJÄNST
                  </Typography>
                  <StyledLink text="Kontakta oss" href="/contact" />
                  <StyledLink text="Garanti" href="/contact" />
                </Box>
              </Hidden>
            </Box>
            <Hidden mdUp>
              <Accordion>
                <AccordionSummary
                  expandIcon={<AddIcon sx={{ fontSize: "1rem" }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  sx={{
                    backgroundColor:
                      pathname === "/about" ? "#2d2d2d" : "white",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: "100",
                      letterSpacing: "-0.05em",
                      fontSize: "0.7rem",
                      color: pathname === "/about" ? "#ffffff" : "black",
                    }}
                  >
                    KUNDTJÄNST
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor:
                      pathname === "/about" ? "#202020" : "white",
                  }}
                >
                  <StyledLink text="Kontakta oss" href="/contact" />
                  <StyledLink text="Garanti" href="/contact" />
                </AccordionDetails>
              </Accordion>
            </Hidden>
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <Box display="flex" justifyContent="center">
              <Hidden mdDown>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="flex-start"
                >
                  <Typography
                    sx={{
                      fontWeight: "100",
                      letterSpacing: "-0.05em",
                      fontSize: "0.8rem",
                      paddingBottom: "0.8rem",
                    }}
                  >
                    TJÄNSTER
                  </Typography>
                  <StyledLink text="Presentkort" href="/services" />
                  <StyledLink text="Tillbehör" href="/services" />
                  <StyledLink text="Ananas Pay" href="/services" />
                </Box>
              </Hidden>
            </Box>
            <Hidden mdUp>
              <Accordion>
                <AccordionSummary
                  expandIcon={<AddIcon sx={{ fontSize: "1rem" }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  sx={{
                    color: pathname === "/about" ? "#ffffff" : "black",
                    backgroundColor:
                      pathname === "/about" ? "#2d2d2d" : "white",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: "100",
                      letterSpacing: "-0.05em",
                      fontSize: "0.7rem",
                    }}
                  >
                    TJÄNSTER
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    display: "flex",
                    flexDirection: "column",

                    backgroundColor:
                      pathname === "/about" ? "#202020" : "white",
                  }}
                >
                  <StyledLink text="Presentkort" href="/faq" />
                  <StyledLink text="Tillbehör" href="/services" />
                  <StyledLink text="Ananas Pay" href="/services" />
                </AccordionDetails>
              </Accordion>
            </Hidden>
          </Grid>
        </Grid>

        <Typography
          variant="body1"
          display="flex"
          justifyContent="center"
          sx={{
            fontFamily: "'Futura', 'Trebuchet MS', 'Arial', sans-serif",
            fontWeight: "400",
            letterSpacing: "-0.02em",
            fontSize: "1rem",

            paddingTop: "1rem",
            borderTop:
              pathname === "/about" ? "1px solid #2a2a2a" : "1px solid #e0e0e0",
            color: pathname === "/about" ? "#ffffff" : "black",
          }}
        >
          Följ oss
        </Typography>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            marginTop: "1rem",
            paddingBottom: "1rem",
            borderBottom:
              pathname === "/about" ? "1px solid #2a2a2a" : "1px solid #e0e0e0",
          }}
        >
          <Facebook
            sx={{
              cursor: "pointer",
              fontSize: "1.8rem",
              margin: "0 0.5rem",
              color: pathname === "/about" ? "white" : "black",
            }}
          />
          <XIcon
            sx={{
              cursor: "pointer",
              fontSize: "1.6rem",
              margin: "0 0.5rem",
              color: pathname === "/about" ? "white" : "black",
            }}
          />
          <Instagram
            sx={{
              cursor: "pointer",
              fontSize: "1.8rem",
              margin: "0 0.5rem",
              color: pathname === "/about" ? "white" : "black",
            }}
          />
        </Box>

        <Typography
          sx={{
            fontFamily: "'Futura', 'Trebuchet MS', 'Arial', sans-serif",
            fontWeight: "400",
            letterSpacing: "-0.02em",
            fontSize: "0.9rem",
            padding: "1.5rem 0",

            color: pathname === "/about" ? "#ffffff" : "black",
          }}
          variant="body1"
          align="center"
        >
          © 2024 ananas
        </Typography>
      </Container>
    </Box>
  );
}
