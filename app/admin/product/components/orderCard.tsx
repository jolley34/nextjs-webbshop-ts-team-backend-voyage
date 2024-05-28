import { Card, Grid } from "@mui/material";
import { Prisma } from "@prisma/client";

interface Props {
  id: string;
  userId: string;
  user: any;
  createdAt: Date;
  firstName: string;
  lastName: string;
  street: string;
  zipcode: string;
  email: string;
  phoneNumber: string;
  productName: string;
  productPrice: Prisma.Decimal;
  totalPrice: Prisma.Decimal;
}

export default function OrderCard({
  id,
  userId,
  user,
  createdAt,
  firstName,
  lastName,
  street,
  zipcode,
  email,
  phoneNumber,
  productName,
  productPrice,
  totalPrice,
}: Props) {
  const formattedDate = createdAt.toLocaleString();

  return (
    <Card sx={{ padding: "2rem", background: "#f6f5f3" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h2 style={{ margin: 0 }}>Order Overview</h2>
            <div>
              <p style={{ fontWeight: "700" }}>Order ID</p>
              <p>{id}</p>
            </div>
            <div>
              <p style={{ fontWeight: "700" }}>User ID</p>
              <p>{userId}</p>
            </div>
            <div>
              <p style={{ fontWeight: "700" }}>Username</p>
              <p>{user}</p>
            </div>
            <div>
              <p style={{ fontWeight: "700" }}>Created At</p>
              <p style={{ color: "green" }}>{formattedDate}</p>
            </div>
            <div>
              <p style={{ fontWeight: "700", fontSize: "1rem" }}>
                Total Order price
              </p>
              <p style={{ color: "green" }}>{totalPrice.toString()} kr</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <h2 style={{ margin: 0 }}>Address</h2>
          <Grid container>
            <Grid item xs={12} sm={12} md={6}>
              <div style={{ display: "flex" }}>
                <div>
                  <div>
                    <p style={{ fontWeight: "700" }}>Name</p>
                    <p>{firstName}</p>
                  </div>
                  <div>
                    <p style={{ fontWeight: "700" }}>Last name</p>
                    <p>{lastName}</p>
                  </div>
                  <div>
                    <p style={{ fontWeight: "700" }}>Street name</p>
                    <p>{street}</p>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <div style={{ display: "flex" }}>
                <div>
                  <div>
                    <p style={{ fontWeight: "700" }}>Zipcode</p>
                    <p>{zipcode}</p>
                  </div>
                  <div>
                    <p style={{ fontWeight: "700" }}>Email</p>
                    <p>{email}</p>
                  </div>
                  <div>
                    <p style={{ fontWeight: "700" }}>Phone number</p>
                    <p>{phoneNumber}</p>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <h2 style={{ margin: 0 }}>Product</h2>
      <div>
        <div>
          <div>
            <p style={{ fontWeight: "700" }}>Product name</p>
            <p>{productName}</p>
          </div>
          <div>
            <p style={{ fontWeight: "700" }}>Product price</p>
            <p style={{ color: "green" }}>{productPrice.toString()} kr</p>
          </div>
        </div>
      </div>
    </Card>
  );
}
