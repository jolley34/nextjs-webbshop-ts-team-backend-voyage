"use client";

import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {
  AppBar,
  Box,
  Drawer,
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
import { useSession } from "next-auth/react";
import ShopCartWithBadge from "../../ShopCartWithBadge";

interface HeaderProps {
  name: string;
}

export default function Header({ name }: HeaderProps) {
  const session = useSession();
  console.log(session?.data?.user);
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
      pathname === "/my-page/" ||
      pathname.startsWith("/admin/product/")
    );
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <AppBar
          sx={{
            top: 0,
            margin: 0,
            padding: 0,
            bgcolor: "rgba(24, 24, 24, 0.9)",
            position: "sticky",
            boxShadow: "none",
            backdropFilter: "blur(2px)",
            transition: "background-color 0.3s ease",
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "1.5rem",
              margin: 0,
              padding: 0,
            }}
          >
            <Link
              sx={{
                textDecoration: "none",
                cursor: open ? "default" : "pointer",
                pointerEvents: open ? "none" : "auto",
              }}
              href="/"
            >
              <img
                style={{ width: "20px", height: "20px" }}
                src="https://b.kisscc0.com/20180813/bre/kisscc0-logo-asian-pear-apple-fruit-computer-icons-pear-logo-5b714c651d9a73.0672339315341517811213.png"
              />
            </Link>

            <MenuIcon
              onClick={handleDrawerOpen}
              sx={{
                width: "20px",
                height: "20px",
                color: "white",
                cursor: "pointer",
                opacity: open ? 0 : loaded ? 1 : 0,
                transition: "opacity 0.5s ease",
              }}
            />

            <Box
              sx={{
                opacity: open ? 0 : loaded ? 1 : 0,
              }}
            >
              <ShopCartWithBadge />
            </Box>
          </Toolbar>
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
                      <div style={{ padding: "2rem 1rem 1rem 1rem" }}>
                        {session?.data?.user ? (
                          <>
                            <p style={{ color: "black", fontWeight: "900" }}>
                              {session.data.user.name}
                            </p>
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
                          </>
                        ) : (
                          <SignInButton />
                        )}
                      </div>
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
                  {session?.data?.user && (
                    <Link style={{ textDecoration: "none" }} href="/my-page/">
                      <ListItemButton>
                        <Typography
                          sx={{
                            fontSize: "0.8rem",
                            fontFamily:
                              "'Futura', 'Trebuchet MS', 'Arial', sans-serif",
                            position: "relative",
                          }}
                        >
                          My ananas account
                        </Typography>
                      </ListItemButton>
                    </Link>
                  )}
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
  { label: "Home", href: "/" },
  { label: "News", href: "/" },
  { label: "iPhone", href: "/" },
  { label: "Watch", href: "/" },
  { label: "iPad", href: "/about" },
  { label: "Mac", href: "/about" },
  { label: "Our story", href: "/" },
];

const subItems = [
  { label: "Sustainability", href: "/" },
  { label: "Find store", href: "/" },
  { label: "Can we help you?", href: "/contact" },
  { label: "+46 7 519 928 37", href: "/" },
];
