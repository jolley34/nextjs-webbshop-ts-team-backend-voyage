import { Box, Grid } from "@mui/material";
import { SessionProvider } from "next-auth/react";
import { PropsWithChildren } from "react";

export default async function ProductsLayout(props: PropsWithChildren) {
  return (
    <Box>
      <SessionProvider>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></Box>

        <Grid container spacing={0}>
          {props.children}
        </Grid>
      </SessionProvider>
    </Box>
  );
}
