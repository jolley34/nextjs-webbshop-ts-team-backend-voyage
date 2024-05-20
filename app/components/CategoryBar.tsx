"use client";

import { IconButton, List, ListItem } from "@mui/material";

interface BarProps {
  name: string;
}

export default function CategoryBar({ name }: BarProps) {
  return (
    <>
      <List>
        <IconButton>
          <ListItem sx={{ cursor: "pointer", fontSize: "0.75rem" }}>
            {name}
          </ListItem>
        </IconButton>
      </List>
    </>
  );
}
