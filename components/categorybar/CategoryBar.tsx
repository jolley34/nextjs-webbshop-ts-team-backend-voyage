"use client";

import { IconButton, List, ListItem } from "@mui/material";
import Link from "next/link";

interface BarProps {
  name: string;
  onClick: () => void;
}

const CategoryBar: React.FC<BarProps> = ({ name, onClick }) => {
  return (
    <>
      <List>
        <IconButton sx={{ textDecoration: "none" }}>
          <Link
            href={`/products/${encodeURIComponent(name)}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItem sx={{ cursor: "pointer", fontSize: "0.75rem" }}>
              {name}
            </ListItem>
          </Link>
        </IconButton>
      </List>
    </>
  );
};

export default CategoryBar;
