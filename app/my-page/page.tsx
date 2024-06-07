import { auth } from "@/auth";
import { Box, Card, Typography } from "@mui/material";
import Link from "next/link";

export default async function indexPage() {
  const session = await auth();

  return (
    <>
      {session?.user && (
        <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <Link style={{ textDecoration: "none" }} href="/my-page/track-order">
            <Card
              sx={{
                padding: "2rem",
                cursor: "pointer",
                transition: "background 0.5s ease",
                "&:hover": {
                  background: "rgba(241, 241, 241, 0.806)",
                },
              }}
            >
              <Typography>Track your order</Typography>
            </Card>
          </Link>

          <Link style={{ textDecoration: "none" }} href="/my-page/order">
            <Card
              sx={{
                padding: "2rem",
                cursor: "pointer",
                transition: "background 0.5s ease",
                "&:hover": {
                  background: "rgba(241, 241, 241, 0.806)",
                },
              }}
            >
              <Typography>My orders</Typography>
            </Card>
          </Link>
        </Box>
      )}
    </>
  );
}
