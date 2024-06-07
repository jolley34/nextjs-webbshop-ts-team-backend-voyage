import OrderCard from "@/app/admin/product/components/orderCard";
import { getUserOrdersByShipping } from "@/app/server-actions/orders/handler";
import { Box } from "@mui/material";

export default async function TrackOrderPage() {
  const orders = await getUserOrdersByShipping();

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {orders.map((order) => (
          <OrderCard key={order.id} order={order as any} />
        ))}
      </Box>
    </>
  );
}
