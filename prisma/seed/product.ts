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

  const watchCategory = await db.category.upsert({
    where: { name: "watch" },
    update: {},
    create: {
      name: "Watch",
    },
  });

  const iphoneCategory = await db.category.upsert({
    where: { name: "iPhone" },
    update: {},
    create: {
      name: "iPhone",
    },
  });

  const iphone15pro = await db.product.upsert({
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

  const iphone15 = await db.product.upsert({
    where: { id: "clwj7bhe30203083zdby51y3" },
    update: {},
    create: {
      name: "iPhone 15",
      description: "A total powerhouse.",
      image:
        "https://www.apple.com/v/iphone/home/bu/images/overview/select/iphone_15__fm75iyqlkjau_xlarge_2x.png",
      video:
        "https://www.apple.com/105/media/us/iphone/family/2024/1efec3e0-8619-4684-a57e-6e2310394f08/anim/welcome/xlarge_2x.mp4",
      price: 8000,
      isArchived: false,
      categories: {
        connect: [{ id: iphoneCategory.id }],
      },
      stock: 100,
    },
  });

  const iphone14 = await db.product.upsert({
    where: { id: "clwj7bh23e3023083zdby52y3" },
    update: {},
    create: {
      name: "iPhone 14",
      description: "As amazing as ever.",
      image:
        "https://www.apple.com/v/iphone/home/bu/images/overview/select/iphone_14__cjgvgyn9cquu_xlarge_2x.png",
      video:
        "https://www.apple.com/105/media/us/iphone/family/2024/1efec3e0-8619-4684-a57e-6e2310394f08/anim/welcome/xlarge_2x.mp4",
      price: 7000,
      isArchived: false,
      categories: {
        connect: [{ id: iphoneCategory.id }],
      },
      stock: 100,
    },
  });

  const iphone13 = await db.product.upsert({
    where: { id: "aawj37bh3323e3023083zdby52y3" },
    update: {},
    create: {
      name: "iPhone 13",
      description: "All kinds of awesome.",
      image:
        "https://www.apple.com/v/iphone/home/bu/images/overview/select/iphone_13__gnwdyqfq7i2y_xlarge_2x.png",
      video:
        "https://www.apple.com/105/media/us/iphone/family/2024/1efec3e0-8619-4684-a57e-6e2310394f08/anim/welcome/xlarge_2x.mp4",
      price: 6000,
      isArchived: false,
      categories: {
        connect: [{ id: iphoneCategory.id }],
      },
      stock: 100,
    },
  });

  const ipadPro = await db.product.upsert({
    where: { id: "clwjnqc00000008l76r760urc" },
    update: {},
    create: {
      name: "iPad Pro",
      description:
        "The ultimate iPad experience with the most advanced technology.",
      image:
        "https://www.apple.com/v/ipad/home/cj/images/overview/select/product-tile/pt_ipad_pro__6bgrkek0jnm2_xlarge_2x.png",
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

  const ipadAir = await db.product.upsert({
    where: { id: "clwjnqc00000008l76r760ureereqqwc" },
    update: {},
    create: {
      name: "iPad Air",
      description: "Serious performance in a thin and light design.",
      image:
        "https://www.apple.com/v/ipad/home/cj/images/overview/select/product-tile/pt_ipad_air__cr381zljqdiu_xlarge_2x.png",
      video:
        "https://www.apple.com/105/media/us/ipad/2024/45762adb-901a-4726-8b0c-1f3ee092b09a/anim/welcome-hero/xlarge_2x.mp4",
      price: 6000,
      isArchived: false,
      categories: {
        connect: [{ id: iPadCategory.id }],
      },
      stock: 200,
    },
  });

  const ipad = await db.product.upsert({
    where: { id: "clwjnqc00000008l76r760urcqerere" },
    update: {},
    create: {
      name: "iPad",
      description:
        "The colorful, all‑screen iPad for the things you do every day.",
      image:
        "https://www.apple.com/v/ipad/home/cj/images/overview/select/product-tile/pt_ipad_10th_gen__ej5p5x6yf2gm_xlarge_2x.png",
      video:
        "https://www.apple.com/105/media/us/ipad/2024/45762adb-901a-4726-8b0c-1f3ee092b09a/anim/welcome-hero/xlarge_2x.mp4",
      price: 6000,
      isArchived: false,
      categories: {
        connect: [{ id: iPadCategory.id }],
      },
      stock: 200,
    },
  });

  const ipadMini = await db.product.upsert({
    where: { id: "clwjnqc00000008l76r760urcwewe" },
    update: {},
    create: {
      name: "iPad",
      description: "The full iPad experience in an ultraportable design.",
      image:
        "https://www.apple.com/v/ipad/home/cj/images/overview/select/product-tile/pt_ipad_mini__f3iy3qb50gia_xlarge_2x.png",
      video:
        "https://www.apple.com/105/media/us/ipad/2024/45762adb-901a-4726-8b0c-1f3ee092b09a/anim/welcome-hero/xlarge_2x.mp4",
      price: 6000,
      isArchived: false,
      categories: {
        connect: [{ id: iPadCategory.id }],
      },
      stock: 200,
    },
  });

  const iMac = await db.product.upsert({
    where: { id: "clwj7b9fi000008jz3mwd8xns" },
    update: {},
    create: {
      name: "iMac",
      description:
        "A stunning all-in-one desktop for creativity and productivity.",
      image:
        "https://www.apple.com/v/mac/home/bz/images/overview/select/product_tile_imac_24__inq0od011wuq_large_2x.png",
      video:
        "https://www.apple.com/105/media/us/mac/family/2024/60fc0159-4236-4a03-8534-f5ba07e538c5/anim/welcome/xlarge_2x.mp4",
      price: 13000,
      isArchived: false,
      categories: {
        connect: [{ id: macCategory.id }],
      },
      stock: 3000,
    },
  });

  const macbookAir = await db.product.upsert({
    where: { id: "clwj7b9fi000008jz3mwd8xeqeqwcns" },
    update: {},
    create: {
      name: "MacBook Air 13",
      description:
        "Strikingly thin and fast so you can work, play, or create anywhere.",
      image:
        "https://www.apple.com/v/mac/home/bz/images/overview/select/product_tile_mba_13_15__fx2g3qlubdym_large_2x.png",
      video:
        "https://www.apple.com/105/media/us/mac/family/2024/60fc0159-4236-4a03-8534-f5ba07e538c5/anim/welcome/xlarge_2x.mp4",
      price: 10000,
      isArchived: false,
      categories: {
        connect: [{ id: macCategory.id }],
      },
      stock: 3000,
    },
  });

  const macbookPro = await db.product.upsert({
    where: { id: "clwj7b9fi0000qe08jz3mwd8xeqeqwcns" },
    update: {},
    create: {
      name: "MacBook Pro 14",
      description: "The most advanced Mac laptops for demanding workflows.",
      image:
        "https://www.apple.com/v/mac/home/bz/images/overview/select/product_tile_mba_13_15__fx2g3qlubdym_large_2x.png",
      video:
        "https://www.apple.com/105/media/us/mac/family/2024/60fc0159-4236-4a03-8534-f5ba07e538c5/anim/welcome/xlarge_2x.mp4",
      price: 16000,
      isArchived: false,
      categories: {
        connect: [{ id: macCategory.id }],
      },
      stock: 3000,
    },
  });

  const appleWatchSE = await db.product.upsert({
    where: { id: "clwjnxiqweqcct000108l7d6f938im" },
    update: {},
    create: {
      name: "Apple Watch SE",
      description: "All the essentials, Light on price.",
      image:
        "https://www.apple.com/v/watch/bm/images/overview/select/product_se__frx4hb13romm_xlarge_2x.png",
      video:
        "https://www.apple.com/105/media/us/watch/2024/f0b51c31-e8a5-44d7-b23d-51bd2858454a/anim/hero/xlarge_2x.mp4#t=2.772074",
      price: 2500,
      isArchived: false,
      categories: {
        connect: [{ id: watchCategory.id }],
      },
      stock: 1000,
    },
  });

  const appleWatchSeries9 = await db.product.upsert({
    where: { id: "clwjnxiqweqcct000108l7d6f938im" },
    update: {},
    create: {
      name: "Apple Watch Series 9",
      description: "Powerful sensors, advanced health features.",
      image:
        "https://www.apple.com/v/watch/bm/images/overview/select/product_s9__b8uw2qgcgw1y_xlarge_2x.png",
      video:
        "https://www.apple.com/105/media/us/watch/2024/f0b51c31-e8a5-44d7-b23d-51bd2858454a/anim/hero/xlarge_2x.mp4#t=2.772074",
      price: 4000,
      isArchived: false,
      categories: {
        connect: [{ id: watchCategory.id }],
      },
      stock: 1000,
    },
  });

  const appleWatchUltra2 = await db.product.upsert({
    where: { id: "clwccwjnqweqxiqweqcct000108l7d6f938im" },
    update: {},
    create: {
      name: "Apple Watch Ultra 2",
      description: "The most rugged and capable.",
      image:
        "https://www.apple.com/v/watch/bm/images/overview/select/product_u2__ebztafh9rvau_xlarge_2x.png",
      video:
        "https://www.apple.com/105/media/us/watch/2024/f0b51c31-e8a5-44d7-b23d-51bd2858454a/anim/hero/xlarge_2x.mp4#t=2.772074",
      price: 8000,
      isArchived: false,
      categories: {
        connect: [{ id: watchCategory.id }],
      },
      stock: 1000,
    },
  });

  console.log({ iphone15pro });
  console.log({ iphone15 });
  console.log({ iphone14 });
  console.log({ iphone13 });
  console.log({ ipadPro });
  console.log({ ipadAir });
  console.log({ ipad });
  console.log({ ipadMini });
  console.log({ iMac });
  console.log({ macbookAir });
  console.log({ macbookPro });
  console.log({ appleWatchSE });
  console.log({ appleWatchSeries9 });
  console.log({ appleWatchUltra2 });
  console.log({ macCategory });
  console.log({ iphoneCategory });
  console.log({ iPadCategory });
  console.log({ watchCategory });
}
