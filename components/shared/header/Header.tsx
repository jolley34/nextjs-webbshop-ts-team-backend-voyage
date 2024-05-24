"use client";

import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { signOutUser } from "@/app/server-actions/user/userActions";
import SignInButton from "@/app/sign-in/components/SignInButton";
import theme from "@/app/themes/themes";
import ShopCartWithBadge from "../../ShopCartWithBadge";

interface HeaderProps {
  name: string;
  session: any;
}

export default function Header({ name, session }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const pathname = usePathname();
  const [hoverItem, setHoverItem] = useState<number | null>(null);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY === 0) {
        setScrolling(false);
      } else {
        setScrolling(true);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleDrawerOpen = () => {
    setOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleDrawerClose = () => {
    setOpen(false);
    document.body.style.overflow = "auto";
  };

  const handleItemHoverEnter = (index: number) => {
    setHoverItem(index);
  };

  const handleItemHoverLeave = () => {
    setHoverItem(null);
  };

  const handleMouseEnter = () => {
    if (!open) {
      setHovering(true);
    }
  };

  const handleMouseLeave = () => {
    if (!open) {
      setHovering(false);
      setHoverItem(null);
    }
  };

  const pathnames = () => {
    return (
      pathname === "/checkout" ||
      pathname === "/admin" ||
      pathname === "/confirmation" ||
      pathname === "/contact" ||
      pathname === "/sign-in" ||
      pathname === "/sign-up" ||
      pathname.startsWith("/admin/product/")
    );
  };

  const getAppBarSettings = () => {
    const borderThickness = 1;

    if (pathname === "/about") {
      return {
        padding: "0rem 0rem 0rem 0rem",
        paddingInline: "2rem",
        top: 0,
        bgcolor: open
          ? "transparent"
          : scrolling || hovering
          ? "#111111"
          : "#1b1b1b",
        boxShadow: "none",
        transition: `background-color ${open ? "0.5s" : "0.7s"} ease`,
        overflow: "hidden",
        "::after": {
          content: "''",
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: open || scrolling || hovering ? "100%" : 0,
          height: open ? "0px" : `${borderThickness}px`,
          backgroundColor: "#ffffff",
          transition: "width 0.7s ease",
          zIndex: -1,
        },
      };
    } else {
      return {
        padding: "0.75rem 0rem 0.75rem 0rem",
        paddingInline: "2rem",
        top: 0,
        bgcolor: open
          ? "rgba(0, 0, 0, 0.0)"
          : pathnames() || scrolling || hovering
          ? "white"
          : "transparent",
        boxShadow: "none",
        transition: `background-color ${open ? "0.5s" : "0.7s"} ease`,
        "::after": {
          content: "''",
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: pathnames() || open || scrolling || hovering ? "100%" : 0,
          height: open ? "0px" : `${borderThickness}px`,
          backgroundColor: "#e0e0e0",
          transition: "width 0.3s ease",
          zIndex: -1,
        },
      };
    }
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <AppBar
          sx={getAppBarSettings()}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Toolbar
            sx={{
              justifyContent: "space-between",
              display: "flex",
              alignItems: "center",
            }}
          >
            <IconButton
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerOpen}
            >
              <MenuIcon
                onClick={handleDrawerOpen}
                sx={{
                  color: pathname === "/about" ? "white" : "black",
                  opacity: open ? 0 : loaded ? 1 : 0,
                  transition: "opacity 0.5s ease",
                }}
              />
            </IconButton>

            <Box sx={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
              <Link
                sx={{
                  textDecoration: "none",
                  cursor: open ? "default" : "pointer",
                  pointerEvents: open ? "none" : "auto",
                }}
                href="/"
              >
                <Typography
                  sx={{
                    color: pathname === "/about" ? "white" : "black",
                    fontSize:
                      pathname === "/about"
                        ? { xs: "1rem", sm: "1.25rem", md: "1.25rem" }
                        : { xs: "1.7rem", sm: "1.95rem", md: "1.95rem" },
                    fontFamily: "'Futura', 'Trebuchet MS', 'Arial', sans-serif",
                    fontWeight: "400",
                    letterSpacing: "-0.04em",
                    opacity: open ? 0 : loaded ? 1 : 0,
                    transition: "opacity 0.5s ease",
                  }}
                >
                  {name}
                </Typography>
              </Link>

              <Typography
                sx={{
                  display: pathname === "/about" ? "block" : "none",
                  opacity: open ? 0 : loaded ? 1 : 0,
                  transition: "opacity 0.5s ease",
                }}
              >
                X showcase
              </Typography>
            </Box>

            <Box>
              <IconButton
                size="small"
                sx={{
                  color: "black",
                  opacity: open ? 0 : loaded ? 1 : 0,
                  transition: "opacity 0.5s ease",
                  cursor: open ? "default" : "pointer",
                  pointerEvents: open ? "none" : "auto",
                }}
              ></IconButton>
              <IconButton
                size="small"
                sx={{
                  opacity: open ? 0 : loaded ? 1 : 0,
                  transition: "opacity 0.5s ease",
                  cursor: open ? "default" : "pointer",
                  pointerEvents: open ? "none" : "auto",
                }}
              >
                <ShopCartWithBadge />
              </IconButton>
            </Box>
          </Toolbar>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              paddingInline: "1.25rem",
            }}
          >
            {session?.user ? (
              <>
                <p style={{ color: "black" }}>{session.user.name}</p>
                <form action={signOutUser}>
                  <button
                    style={{
                      background: "#0072e4",
                      border: "none",
                      padding: "0.5rem",
                      borderRadius: "10px",
                      color: "white",
                    }}
                  >
                    Sign out
                  </button>
                </form>
              </>
            ) : (
              <SignInButton />
            )}
          </div>
        </AppBar>

        <Box>
          <Drawer
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            sx={{
              position: "relative",
              color: hoverItem === null ? "black" : "gray",
              width: { xs: "100%", sm: "50%", md: "40%" },
              "& .MuiDrawer-paper": {
                width: { xs: "100vw", sm: "50vw", md: "28vw" },
                backgroundColor:
                  pathname === "/about" && open ? "#1b1b1b" : "white",
              },
            }}
            variant="persistent"
            anchor="left"
            open={open}
            onClose={handleDrawerClose}
          >
            <List
              sx={{
                overflowY: "auto",
                height: "100%",
                flexDirection: "column",
                justifyContent: "space-between",
                display: "flex",
              }}
            >
              <Box sx={{ padding: "2rem" }}>
                <Box>
                  <ListItem>
                    <ListItemButton
                      sx={{
                        color:
                          pathname === "/about" && open ? "white" : "black",
                      }}
                      onClick={handleDrawerClose}
                    >
                      <CloseIcon />
                    </ListItemButton>
                  </ListItem>
                  <ListItem>
                    <Box
                      sx={{
                        width: "100%",
                      }}
                    >
                      {menuItems.map((item, index) => (
                        <Link
                          key={`menu-item-${index}`}
                          sx={{
                            textDecoration: "none",
                            color:
                              pathname === "/about" && open ? "white" : "black",
                            width: "100%",
                          }}
                          href={item.href}
                        >
                          <ListItemButton
                            onMouseEnter={() => handleItemHoverEnter(index)}
                            onMouseLeave={handleItemHoverLeave}
                            sx={{
                              transition: "color 0.3s ease",
                              color:
                                hoverItem === null
                                  ? pathname === "/about"
                                    ? "white"
                                    : "black"
                                  : hoverItem === index
                                  ? pathname === "/about"
                                    ? "white"
                                    : "black"
                                  : "gray",
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <Typography
                              sx={{
                                fontSize: "1.25rem",
                                fontFamily:
                                  "'Futura', 'Trebuchet MS', 'Arial', sans-serif",
                                position: "relative",
                                "&::before": {
                                  content: '""',
                                  position: "absolute",
                                  bottom: 0,
                                  left: 0,
                                  width: 0,
                                  height: "1px",
                                  backgroundColor:
                                    pathname === "/about" ? "white" : "black",
                                  transition: "width 0.3s ease-in-out",
                                },
                                "&:hover::before": {
                                  width: hoverItem === index ? "100%" : 0,
                                },
                              }}
                            >
                              {item.label}
                            </Typography>
                            <NavigateNextIcon
                              sx={{
                                position: "relative",
                                width: hoverItem === index ? "-100%" : 0,
                                transition: "width 0.5s ease",
                              }}
                            />
                          </ListItemButton>
                        </Link>
                      ))}
                    </Box>
                  </ListItem>
                </Box>
              </Box>

              <ListItem
                sx={{
                  borderTop:
                    pathname === "/about" && open
                      ? "1px solid #2a2a2a"
                      : "1px solid #e0e0e0",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    padding: "2rem",
                  }}
                >
                  {subItems.map((item, index) => (
                    <Link
                      key={`menu-item-${index}`}
                      sx={{
                        textDecoration: "none",

                        width: "100%",
                      }}
                      href={item.href}
                    >
                      <ListItemButton
                        sx={{
                          transition: "color 0.3s ease",
                          color:
                            pathname === "/about" && open ? "white" : "black",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: "0.8rem",
                            fontFamily:
                              "'Futura', 'Trebuchet MS', 'Arial', sans-serif",
                            position: "relative",
                          }}
                        >
                          {item.label}
                        </Typography>
                      </ListItemButton>
                    </Link>
                  ))}
                </Box>
              </ListItem>
            </List>
          </Drawer>
          {open && (
            <Box
              sx={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                zIndex: 400,
              }}
              onClick={handleDrawerClose}
            />
          )}
        </Box>
      </ThemeProvider>
    </>
  );
}

const menuItems = [
  { label: "Hem", href: "/" },
  { label: "Nyheter", href: "/" },
  { label: "Dam", href: "/" },
  { label: "Herr", href: "/" },
  { label: "Collections", href: "/about" },
  { label: "Vår story", href: "/" },
];

const subItems = [
  { label: "Hållbarhet", href: "/" },
  { label: "Hitta din butik", href: "/" },
  { label: "Kan vi hjälpa dig?", href: "/contact" },
  { label: "+46 7 519 928 37", href: "/" },
];
