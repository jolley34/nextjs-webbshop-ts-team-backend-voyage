import { PrismaClient } from "@prisma/client";

export async function seedProducts(db: PrismaClient) {
  const macbookCategory = await db.category.upsert({
    where: { name: "Mac" },
    update: {},
    create: {
      name: "Mac",
    },
  });

  const iphoneCategory = await db.category.upsert({
    where: { name: "iPhone" },
    update: {},
    create: {
      name: "iPhone",
    },
  });

  const iphone = await db.product.upsert({
    where: { id: "clwj7bhe3000108jzdby5gvy3" },
    update: {},
    create: {
      name: "Iphone 15",
      description: "Jätte bra",
      image:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-blue?wid=5120&hei=2880&fmt=webp&qlt=70&.v=cHJOTXEwTU92OEtKVDV2cVB1R2FTSjlERndlRTljaUdZeHJGM3dlLzR2OGlYQ0tYMHd1OS9ZREtnNzFSR1owOHF2TWlpSzUzejRCZGt2SjJUNGl1VEtsS0dZaHBma3VTb3UwU2F6dkc4TGZPaDVjV2NEQVBZbTZldUQyWkpKRHk=&traceId=1",
      video:
        "https://www.apple.com/105/media/us/iphone/family/2024/1efec3e0-8619-4684-a57e-6e2310394f08/anim/welcome/xlarge_2x.mp4",
      price: 100,
      isArchived: false,
      categories: {
        connect: [{ id: iphoneCategory.id }],
      },
    },
  });

  const macbook = await db.product.upsert({
    where: { id: "clwj7b9fi000008jz3mwd8xns" },
    update: {},
    create: {
      name: "Macbook Pro",
      description: "M4",
      image:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-spacegray-gallery1-202310?wid=4000&hei=3074&fmt=jpeg&qlt=90&.v=1697311136703",
      video:
        "https://www.apple.com/105/media/us/mac/family/2024/60fc0159-4236-4a03-8534-f5ba07e538c5/anim/welcome/xlarge_2x.mp4",
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
