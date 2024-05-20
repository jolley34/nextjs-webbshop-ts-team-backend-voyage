import { db } from "../db";

export async function seedProducts() {
  const macbookCategory = await db.category.upsert({
    where: { name: "Mac" },
    update: {},
    create: {
      name: "Mac",
    },
  });

  const iphoneCategory = await db.category.upsert({
    where: { name: "Mac" },
    update: {},
    create: {
      name: "Mac",
    },
  });

  const iphone = await db.product.upsert({
    where: { name: "Iphone 15" },
    update: {},
    create: {
      name: "Iphone 15",
      description: "Jätte bra",
      image:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-blue?wid=5120&hei=2880&fmt=webp&qlt=70&.v=cHJOTXEwTU92OEtKVDV2cVB1R2FTSjlERndlRTljaUdZeHJGM3dlLzR2OGlYQ0tYMHd1OS9ZREtnNzFSR1owOHF2TWlpSzUzejRCZGt2SjJUNGl1VEtsS0dZaHBma3VTb3UwU2F6dkc4TGZPaDVjV2NEQVBZbTZldUQyWkpKRHk=&traceId=1",
      video: "video_url.mp4",
      price: 100,
      isArchived: false,
      categories: {
        connect: [{ id: iphoneCategory.id }],
      },
    },
  });

  const macbook = await db.product.upsert({
    where: { name: "Macbook Pro" },
    update: {},
    create: {
      name: "Macbook Pro",
      description: "M4",
      image:
        "https://www.mstore.se/thumb/32307/1160x928/Macbook_Pro_M3_Space_Gray_PDP_Image_Position_1__WWEN.jpg?min_w=400&min_h=320&fill=ffffff",
      video: "video_url.mp4",
      price: 15000,
      isArchived: false,
      categories: {
        connect: [{ id: macbookCategory.id }],
      },
    },
  });

  console.log({ iphone });
  console.log({ macbook });
  console.log({ macbookCategory });
  console.log({ iphoneCategory });
}
