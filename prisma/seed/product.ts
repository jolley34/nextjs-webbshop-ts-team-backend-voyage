import { PrismaClient } from "@prisma/client";

export async function seedProducts(db: PrismaClient) {
  const macCategory = await db.category.upsert({
    where: { name: "Mac" },
    update: {},
    create: {
      name: "Mac",
    },
  });

  const iPadCategory = await db.category.upsert({
    where: { name: "iPad" },
    update: {},
    create: {
      name: "iPad",
    },
  });

  const visionCategory = await db.category.upsert({
    where: { name: "Vision" },
    update: {},
    create: {
      name: "Vision",
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
      name: "iPhone 15 Pro",
      description: "The ultimate iPhone.",
      image:
        "https://www.apple.com/v/iphone/home/bu/images/overview/select/iphone_15_pro__bpnjhcrxofqu_xlarge_2x.png",
      video:
        "https://www.apple.com/105/media/us/iphone/family/2024/1efec3e0-8619-4684-a57e-6e2310394f08/anim/welcome/xlarge_2x.mp4",
      price: 10000,
      isArchived: false,
      categories: {
        connect: [{ id: iphoneCategory.id }],
      },
      stock: 100,
    },
  });

  const ipad = await db.product.upsert({
    where: { id: "clwjnqc00000008l76r760urc" },
    update: {},
    create: {
      name: "Ipad Air",
      description: "Fin och bra",
      image:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-air-model-unselect-gallery-1-202405_FMT_WHH?wid=1280&hei=720&fmt=p-jpg&qlt=95&.v=1713559203897",
      video:
        "https://www.apple.com/105/media/us/ipad/2024/45762adb-901a-4726-8b0c-1f3ee092b09a/anim/welcome-hero/xlarge_2x.mp4",
      price: 10000,
      isArchived: false,
      categories: {
        connect: [{ id: iPadCategory.id }],
      },
      stock: 200,
    },
  });

  const vision = await db.product.upsert({
    where: { id: "clwjnxict000108l7d6f938im" },
    update: {},
    create: {
      name: "Apple Vision Pro",
      description: "Upplevelse och bra",
      image:
        "https://www.tradeinn.com/f/14090/140900046_2/apple-vision-pro-256gb-us.jpg",
      video:
        "https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/experience-entertainment/large.mp4",
      price: 50000,
      isArchived: false,
      categories: {
        connect: [{ id: visionCategory.id }],
      },
      stock: 1000,
    },
  });

  const iMac = await db.product.upsert({
    where: { id: "clwj7b9fi000008jz3mwd8xns" },
    update: {},
    create: {
      name: "iMac",
      description: "M3",
      image:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/imac-24-no-id-blue-gallery-1?wid=4000&hei=3074&fmt=jpeg&qlt=90&.v=1699550958801",
      video:
        "https://www.apple.com/105/media/us/mac/family/2024/60fc0159-4236-4a03-8534-f5ba07e538c5/anim/welcome/xlarge_2x.mp4",
      price: 15000,
      isArchived: false,
      categories: {
        connect: [{ id: macCategory.id }],
      },
      stock: 3000,
    },
  });

  console.log({ iphone });
  console.log({ iMac });
  console.log({ ipad });
  console.log({ vision });
  console.log({ macCategory });
  console.log({ iphoneCategory });
  console.log({ iPadCategory });
  console.log({ visionCategory });
}
