"use client";

import SignInButton from "@/app/sign-in/components/SignInButton";
import ShopCartWithBadge from "@/components/ShopCartWithBadge";
import CategoryBar from "@/components/categorybar/CategoryBar";
import CategoryBarMenu from "@/components/categorybar/CategoryBarMenu";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useTheme } from "@mui/material/styles";

import {
  Box,
  Drawer,
  Hidden,
  List,
  ListItem,
  ListItemButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface PageProps {
  session: any;
  categories: any;
}

export default function HeaderLayout({ session, categories }: PageProps) {
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [hoverItem, setHoverItem] = useState<number | null>(null);
  const [hovering, setHovering] = useState(false);
  const pathname = usePathname();

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
      pathname.startsWith("/my-page") ||
      pathname.startsWith("/admin") ||
      pathname.startsWith("/products") ||
      pathname.startsWith("/product")
    );
  };

  const theme = useTheme();

  const isMdDown = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <>
      <div
        style={{
          display: open ? "none" : "block",
          padding: 0,
          margin: 0,
          background: pathnames()
            ? "rgba(241, 241, 241, 0.806)"
            : "rgba(15, 15, 15, 0.59)",
          top: 0,
          position: "sticky",
          backdropFilter: "blur(10px)",
          transition: "background-color 0.3s ease",
          zIndex: 1000,
        }}
      >
        <nav
          style={{
            display: "flex",
            listStyle: "none",
            justifyContent: isMdDown ? "space-between" : "center",
            paddingInline: isMdDown ? "2rem" : "0rem",
            alignItems: "center",
            padding: "0.5rem",
            color: "white",
            gap: "3rem",
            fontSize: "0.75rem",
          }}
        >
          <Hidden mdDown>
            <Link href="/">
              <img
                src="/vegetable-food-broccoli-svgrepo-com.svg"
                style={{
                  height: "18px",
                  cursor: "pointer",
                  marginTop: "5px",
                  filter: pathnames()
                    ? "brightness(0) saturate(100%) invert(0%)"
                    : "brightness(0) saturate(100%) invert(100%)",
                }}
                alt="Category Icon"
              />
            </Link>
          </Hidden>

          <Hidden mdDown>
            <li
              style={{
                cursor: "pointer",
                color: pathnames() ? "black" : "white",
              }}
            >
              Store
            </li>
            {categories.map((category) => (
              <CategoryBar name={category.name} />
            ))}
          </Hidden>
          <Hidden mdDown>
            <div style={{ display: "flex", alignItems: "center", gap: "3rem" }}>
              {session?.user ? (
                <>
                  <div
                    style={{
                      display: "flex",
                      gap: "0.5rem",
                      alignItems: "center",
                    }}
                  >
                    <p
                      style={{
                        margin: 0,
                        color: pathnames() ? "black" : "white",
                        fontWeight: "900",
                        fontSize: "0.75rem",
                      }}
                    >
                      Welcome back
                    </p>
                    <Link href="/my-page" style={{ textDecoration: "none" }}>
                      <p
                        style={{
                          margin: 0,
                          color: pathnames() ? "black" : "white",
                          fontSize: "0.75rem",
                          cursor: "pointer",
                          transition: "color 0.3s, background-color 0.3s",
                        }}
                      >
                        {session.user.name}
                      </p>
                    </Link>
                  </div>
                </>
              ) : (
                <SignInButton />
              )}
            </div>
          </Hidden>

          <Hidden mdUp>
            <MenuIcon
              onClick={handleDrawerOpen}
              sx={{
                cursor: "pointer",
                color: pathnames() ? "black" : "white",
                height: "18px",
                width: "18px",
              }}
            />
          </Hidden>
          <Hidden mdUp>
            <Typography
              sx={{
                color: pathnames() ? "black" : "white",
                fontSize: "0.75rem",
              }}
            >
              Brocalli
            </Typography>
          </Hidden>

          <ShopCartWithBadge />
        </nav>
      </div>
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
                      color: pathname === "/about" && open ? "white" : "black",
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
                    {categories.map((category) => (
                      <ListItemButton
                        sx={{
                          transition: "color 0.3s ease",

                          color: "black",

                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <CategoryBarMenu name={category.name} />

                        <NavigateNextIcon
                          sx={{
                            position: "relative",
                            color: "black",
                            transition: "width 0.5s ease",
                          }}
                        />
                      </ListItemButton>
                    ))}
                    <Link href="/my-page" style={{ textDecoration: "none" }}>
                      <ListItemButton
                        sx={{
                          transition: "color 0.3s ease",

                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <ListItem
                          sx={{
                            color: "black",
                            cursor: "pointer",
                            fontSize: "1.25rem",
                            padding: 0,
                            margin: 0,
                          }}
                        >
                          Profile
                        </ListItem>
                        <NavigateNextIcon
                          sx={{
                            position: "relative",
                            color: "black",
                            transition: "width 0.5s ease",
                          }}
                        />
                      </ListItemButton>
                    </Link>
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
                  <ListItemButton
                    sx={{
                      transition: "color 0.3s ease",
                      color: pathname === "/about" && open ? "white" : "black",
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
    </>
  );
}

const subItems = [
  { label: "Sustainability", href: "/" },
  { label: "Find store", href: "/" },
  { label: "Can we help you?", href: "/contact" },
  { label: "+46 7 519 928 37", href: "/" },
];
