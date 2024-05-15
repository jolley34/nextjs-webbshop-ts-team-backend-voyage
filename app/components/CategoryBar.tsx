"use client";

import { Box, IconButton, List, ListItem } from "@mui/material";

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
            justifyContent: "center",
            fontSize: "0.75rem",
            alignItems: "center",
          }}
        >
          <IconButton>
            <ListItem sx={{ cursor: "pointer", fontSize: "0.75rem" }}>
              Mac
            </ListItem>
          </IconButton>
          <IconButton>
            <ListItem sx={{ cursor: "pointer", fontSize: "0.75rem" }}>
              iPad
            </ListItem>
          </IconButton>
          <IconButton size="small">
            <ListItem sx={{ cursor: "pointer", fontSize: "0.75rem" }}>
              iPhone
            </ListItem>
          </IconButton>
          <IconButton>
            <ListItem sx={{ cursor: "pointer", fontSize: "0.75rem" }}>
              Watch
            </ListItem>
          </IconButton>
          <IconButton>
            <ListItem sx={{ cursor: "pointer", fontSize: "0.75rem" }}>
              Airpods
            </ListItem>
          </IconButton>
          <IconButton>
            <ListItem sx={{ cursor: "pointer", fontSize: "0.75rem" }}>
              Tv och hem
            </ListItem>
          </IconButton>
        </List>
      </Box>
    </>
  );
}
