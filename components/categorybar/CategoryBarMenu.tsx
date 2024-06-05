"use client";

import { List, ListItem } from "@mui/material";
import Link from "next/link";

interface BarProps {
  name: string;
}

const CategoryBarMenu: React.FC<BarProps> = ({ name }) => {
  return (
    <>
      <List sx={{ padding: 0, margin: 0, zIndex: 1000 }}>
        <Link
          href={`/products/${encodeURIComponent(name)}`}
          style={{ textDecoration: "none", color: "white" }}
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
            {name}
          </ListItem>
        </Link>
      </List>
    </>
  );
};

export default CategoryBarMenu;
