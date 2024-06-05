import OrderCard from "@/app/admin/product/components/orderCard";
import { db } from "@/prisma/db";
import { Box } from "@mui/material";

export default async function TrackOrderPage() {
  const orders = await db.order.findMany({
    select: {
      id: true,
      userId: true,
      createdAt: true,
      totalPrice: true,
      user: {
        select: {
          name: true,
        },
      },
      shippingAddress: {
        select: {
          firstName: true,
          lastName: true,
          street: true,
          city: true,
          zipcode: true,
          email: true,
          phoneNumber: true,
        },
      },
      products: {
        select: {
          product: {
            select: {
              name: true,
              image: true,
              price: true,
            },
          },
          quantity: true,
          subTotalPrice: true,
        },
      },
    },
    orderBy: { id: "desc" },
    where: {
      products: {
        some: {
          isShipped: true,
        },
      },
    },
  });

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
