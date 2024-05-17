import console from "console";
import { db } from "./db";
import mockedData from "./mocked";

async function main() {
  for (const userData of mockedData.users) {
    const user = await db.user.upsert({
      where: {
        username: userData.username,
      },
      update: {},
      create: userData,
    });
    console.log("Skapad/Uppdaterad användare:", user);
  }
  for (const productData of mockedData.products) {
    const product = await db.product.upsert({
      where: {
        name: productData.name,
      },
      update: {},
      create: productData,
    });
    console.log("Skapad/Uppdaterad användare:", product);
  }

  for (const orderData of mockedData.orders) {
    const user = await db.user.findFirst({
      where: {
        AND: [{ username: orderData.firstName }],
      },
    });

    if (!user) {
      console.error(
        `Användaren med e-postadress '${orderData.email}' hittades inte.`
      );
      continue;
    }

    //Hitta produktens id baserat på dess namn
    const product = await db.product.findFirst({
      where: { name: orderData.email }, // Använd namnet från orderData för att söka efter produkten
    });

    if (!product) {
      console.error(`Produkten med namnet '${orderData.email}' hittades inte.`);
      continue;
    }

    const order = await db.order.upsert({
      where: { id: orderData.number },
      update: {},
      create: {
        createdAt: orderData.createdAt,
        firstName: orderData.firstName,
        lastName: orderData.lastName,
        phoneNumber: orderData.phoneNumber,
        address: orderData.address,
        zipcode: orderData.zipcode,
        city: orderData.city,
        email: orderData.email,
        user: { connect: { id: user.id } },
        product: { connect: { id: product.id } },
      },
    });

    console.log("Skapad/Uppdaterad order:", order);
  }

  for (const categoryData of mockedData.categories) {
    const category = await db.category.upsert({
      where: {
        name: categoryData.name,
      },
      update: {},
      create: {
        name: categoryData.name,
      },
    });
    console.log("Skapad/Uppdaterad kategori:", category);
  }
}

main()
  .then(async () => {
    console.log("Success Created/Updated Users, Products, and Orders");
  })
  .catch((err) => {
    console.error(err);
  });
