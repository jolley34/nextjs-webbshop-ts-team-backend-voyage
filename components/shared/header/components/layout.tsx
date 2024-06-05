"use client";

import { signOutUser } from "@/app/server-actions/user/userActions";
import SignInButton from "@/app/sign-in/components/SignInButton";
import ShopCartWithBadge from "@/components/ShopCartWithBadge";
import CategoryBar from "@/components/categorybar/CategoryBar";
import CategoryBarMenu from "@/components/categorybar/CategoryBarMenu";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Typography,
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
      pathname === "/my-page" ||
      pathname.startsWith("/admin") ||
      pathname.startsWith("/products")
    );
  };

  return (
    <>
      <div
        style={{
          padding: 0,
          margin: 0,
          background: pathnames()
            ? "rgba(219, 214, 214, 0.59)"
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
            justifyContent: "center",
            alignItems: "center",
            padding: "0.5rem",
            color: "white",
            gap: "3rem",
            fontSize: "0.75rem",
          }}
        >
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

          <li
            style={{
              cursor: "pointer",
              color: pathnames() ? "black" : "white",
            }}
          >
            Store
          </li>
          {categories.map((category, index) => (
            <CategoryBar key={index} name={category.name} />
          ))}

          <MenuIcon
            onClick={handleDrawerOpen}
            sx={{
              cursor: "pointer",
              color: pathnames() ? "black" : "white",
              height: "18px",
              width: "18px",
            }}
          />

          <ShopCartWithBadge />
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
                <form action={signOutUser}>
                  <button
                    style={{
                      cursor: "pointer",
                      background: "#0072e4",
                      border: "none",
                      padding: "0.25rem 0.5rem",
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
                    {categories.map((category, index) => (
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
                        <CategoryBarMenu key={index} name={category.name} />
                        <NavigateNextIcon
                          sx={{
                            position: "relative",
                            width: hoverItem === index ? "-100%" : 0,
                            transition: "width 0.5s ease",
                          }}
                        />
                      </ListItemButton>
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
                    style={{
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
    </>
  );
}

const subItems = [
  { label: "Sustainability", href: "/" },
  { label: "Find store", href: "/" },
  { label: "Can we help you?", href: "/contact" },
  { label: "+46 7 519 928 37", href: "/" },
];
