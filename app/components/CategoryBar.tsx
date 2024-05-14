"use client";

import { Box, List, ListItem } from "@mui/material";

export default function CategoryBar() {
  return (
    <>
      <Box
        sx={{
          zIndex: 2000,
          paddingTop: "1rem",
        }}
      >
        <List
          sx={{
            paddingInline: "3rem",
            width: "100%",
            color: "black",
            display: "flex",
            fontSize: "0.75rem",
            alignItems: "center",
          }}
        >
          <ListItem sx={{ cursor: "pointer" }}>Mac</ListItem>
          <ListItem sx={{ cursor: "pointer" }}>Ipad</ListItem>
          <ListItem sx={{ cursor: "pointer" }}>iPhone</ListItem>
          <ListItem sx={{ cursor: "pointer" }}>Watch</ListItem>
          <ListItem sx={{ cursor: "pointer" }}>Airpods</ListItem>
          <ListItem sx={{ cursor: "pointer" }}>Tv och hem</ListItem>
        </List>
      </Box>
    </>
  );
}
