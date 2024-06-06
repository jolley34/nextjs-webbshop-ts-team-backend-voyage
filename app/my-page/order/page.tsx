import OrderCard from "@/app/admin/product/components/orderCard";
import { getUserOrders } from "@/app/server-actions/orders/handler";
import { Grid, List, Typography } from "@mui/material";

export default async function MyPageOrdersPage() {
  const orders = await getUserOrders();

  return (
    <List
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        textAlign: "justify",
      }}
    >
      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: "1.5rem",
          marginBottom: "1rem",
        }}
      >
        My Orders:
      </Typography>
      <Grid container spacing={2}>
        {orders.map((order) => (
          <Grid item xs={12} sm={12} md={12} key={order.id}>
            <OrderCard order={order} />
          </Grid>
        ))}
      </Grid>
    </List>
  );
}
