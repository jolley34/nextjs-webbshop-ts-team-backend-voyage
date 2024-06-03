"use client";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { Badge, Link, ThemeProvider } from "@mui/material";
import { usePathname } from "next/navigation";
import { useCart } from "../app/context/CartContext";
import { theme } from "../app/themes/themes";

export default function ShopCartWithBadge() {
  const { cart } = useCart();
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const pathname = usePathname();

  return (
    <ThemeProvider theme={theme}>
      <Link href="/checkout" data-cy="cart-link" underline="none">
        <Badge
          badgeContent={totalItems}
          color={"secondary"}
          data-cy="cart-items-count-badge"
          sx={{
            marginBottom: "1px",
            "& .MuiBadge-badge": {
              minWidth: "14px",
              height: "14px",
              fontSize: "10px",
            },
            "& .MuiSvgIcon-root": {
              color:
                pathname.startsWith("/products") ||
                pathname.startsWith("/my-page") ||
                pathname.startsWith("/admin") ||
                pathname.startsWith("/checkout") ||
                pathname.startsWith("/confirmation")
                  ? "black"
                  : "white",
              fontSize: "18px",
            },
          }}
        >
          <ShoppingBagOutlinedIcon
            sx={{ color: pathname === "/about" ? "white" : "black" }}
          />
        </Badge>
      </Link>
    </ThemeProvider>
  );
}
