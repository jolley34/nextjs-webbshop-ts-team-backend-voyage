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

  const colorCategory = await db.colorCategory.create({
    data: {
      name: "#fffff",
    },
  });

  const productCategory = await db.productCategory.create({
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
      productCategory: {
        connect: { id: productCategory.id },
      },
      colorCategory: {
        connect: { id: colorCategory.id },
      },
    },
  });

  const order = await db.order.create({
    data: {
      date: new Date(),
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

  console.log("Created User:", user);
  console.log("Created Product:", product);
  console.log("Created Product Category:", productCategory);
  console.log("Created Color Category:", colorCategory);
  console.log("Created Order:", order);
}

main()
  .then(() => {
    console.log("Success Created User, Product, and Order");
  })
  .catch((err) => {
    console.error(err);
  });