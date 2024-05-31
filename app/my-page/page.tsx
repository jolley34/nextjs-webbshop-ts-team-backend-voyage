import { Box, Card, Typography } from "@mui/material";
import Link from "next/link";

export default function indexPage() {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Link style={{ textDecoration: "none" }} href="/my-page/track-order">
          <Card sx={{ padding: "2rem", cursor: "pointer" }}>
            <Typography>Spåra din Order</Typography>
          </Card>
        </Link>

        <Link style={{ textDecoration: "none" }} href="/my-page/order">
          <Card sx={{ padding: "2rem", cursor: "pointer" }}>
            <Typography>Mina Beställningar</Typography>
          </Card>
        </Link>
      </Box>
    </>
  );
}
