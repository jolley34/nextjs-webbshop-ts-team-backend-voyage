import VideoContainer from "@/components/VideoContainer";
import { Box, Grid } from "@mui/material";
import { PropsWithChildren } from "react";

export default function NewsLayout(props: PropsWithChildren) {
  return (
    <>
      <Box>
        <div
          style={{
            padding: "1.5rem",
            position: "absolute",
            top: 0,
            background: "black",
            width: "100%",
          }}
        ></div>
        <VideoContainer />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderBottom: "1px solid lightgray",
          }}
        ></Box>
        <Grid container spacing={0}>
          {props.children}
        </Grid>
      </Box>
    </>
  );
}
