"use client";

import { IconButton, List, ListItem } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface BarProps {
  name: string;
  onClick: () => void;
}

const CategoryBar: React.FC<BarProps> = ({ name, onClick }) => {
  const pathname = usePathname();
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

  return (
    <>
      <List sx={{ padding: 0, margin: 0, zIndex: 1000 }}>
        <IconButton sx={{ textDecoration: "none" }}>
          <Link
            href={`/products/${encodeURIComponent(name)}`}
            style={{ textDecoration: "none", color: "white" }}
          >
            <ListItem
              sx={{
                color: pathnames() ? "black" : "white",
                cursor: "pointer",
                fontSize: "0.75rem",
                padding: 0,
                margin: 0,
              }}
            >
              {name}
            </ListItem>
          </Link>
        </IconButton>
      </List>
    </>
  );
};

export default CategoryBar;
