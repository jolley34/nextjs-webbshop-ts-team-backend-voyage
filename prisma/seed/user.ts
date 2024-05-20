import { db } from "../db";

export async function seedUsers() {
  const user1 = await db.user.upsert({
    where: { username: "shitface" },
    update: {},
    create: {
      username: "shitface",
      password: "secret",
      isAdmin: false,

      orders: {
        create: [
          {
            products: {
              create: [
                {
                  product: {
                    connect: { name: "Macbook Pro" },
                  },
                  quantity: 3,
                  subTotalPrice: 200,
                },
              ],
            },
            totalPrice: 100,
            number: 1,
            shippingAdress: {
              create: {
                firstName: "joel",
                lastName: "erlandsson",
                city: "gbg",
                phoneNumber: "112",
                street: "ananasgatan",
                zipcode: "112312",
              },
            },
          },
        ],
      },
    },
  });

  console.log({ user1 });
  const user2 = await db.user.upsert({
    where: { username: "noob" },
    update: {},
    create: {
      username: "noob",
      password: "imnotnoob",
      isAdmin: false,
    },
  });
  console.log({ user2 });
}
