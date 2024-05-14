import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

async function main() {
  const user = await db.user.create({
    data: {
      username: "Joel",
      password: "hemligt",
      isAdmin: true,
    },
  });

  const category = await db.category.create({
    data: {
      name: "MacBook",
    },
  });

  const product = await db.product.create({
    data: {
      name: "MacBook Pro 16",
      description: "Titan styled computer with POWER",
      image: "url_jpg",
      video: "video_url.mp4",
      price: 15000,
      isArchived: false,
      category: {
        connect: { id: category.id },
      },
    },
  });

  const order = await db.order.create({
    data: {
      date: new Date(),
      color: "Titan",
      firstName: "Vem",
      lastName: "Vet",
      phoneNumber: "123456789",
      address: "123 Fejk Gatan",
      zipcode: "12345",
      city: "Tranemo",
      email: "joel@tranemo.com",
      user: {
        connect: { id: user.id },
      },
      product: {
        connect: { id: product.id },
      },
    },
  });

  console.log("Created Order:", order);
  console.log("Created Category:", category);
  console.log("Created User:", user);
  console.log("Created Product:", product);
}

main()
  .then(() => {
    console.log("Success Created User, Category, Product, and Order");
  })
  .catch((err) => {
    console.error(err);
  });
