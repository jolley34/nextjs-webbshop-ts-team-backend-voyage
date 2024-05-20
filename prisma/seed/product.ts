import { db } from "../db";

export async function seedProducts() {
  const category1 = await db.category.upsert({
    where: { name: "Mac" },
    update: {},
    create: {
      name: "Mac",
    },
  });

  const product1 = await db.product.upsert({
    where: { name: "Iphone 15" },
    update: {},
    create: {
      name: "Iphone 15",
      description: "Jätte bra",
      image: "image_url.jpg",
      video: "video_url.mp4",
      price: 100,
      isArchived: false,
      categories: {
        connect: [{ id: category1.id }],
      },
    },
  });
  console.log({ product1 });

  const product2 = await db.product.upsert({
    where: { name: "Macbook Pro" },
    update: {},
    create: {
      name: "Macbook Pro",
      description: "M4",
      image: "image_url.jpg",
      video: "video_url.mp4",
      price: 15000,
      isArchived: false,
      categories: {
        connect: [{ name: "Mac" }],
      },
    },
  });
  console.log({ product2 });

  console.log({ category1 });
}
