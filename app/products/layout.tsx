import HeaderV3 from "@/components/shared/header/HeaderV3";
import { Box, Grid } from "@mui/material";
import { SessionProvider } from "next-auth/react";
import { PropsWithChildren } from "react";

export default async function ProductsLayout(props: PropsWithChildren) {
  return (
    <Box>
      <SessionProvider>
        <HeaderV3 />
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
