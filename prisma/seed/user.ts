import { PrismaClient } from "@prisma/client";

export async function seedUsers(db: PrismaClient) {
  const user1 = await db.user.upsert({
    where: { id: "clwgbsd2g00049q81pzvugkn1" },
    update: {},
    create: {
      id: "clwgbsd2g00049q81pzvugkn1",
      name: "Hello",
      email: "jolle@gmail.com",
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

  const user2 = await db.user.upsert({
    where: { id: "clwgbsder00089q814t1jch2a" },
    update: {},
    create: {
      id: "clwgbsder00089q814t1jch2a",
      name: "Bye",
      email: "noob@gmail.com",
    },
  });

  console.log({ user1 });
  console.log({ user2 });
}
