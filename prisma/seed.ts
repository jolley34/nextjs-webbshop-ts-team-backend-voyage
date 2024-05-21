import { PrismaClient } from "@prisma/client";
import console from "console";
import { seedProducts } from "./seed/product";
import { seedUsers } from "./seed/user";

const db = new PrismaClient();

async function main() {
  await seedProducts(db);
  await seedUsers(db);
}

main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });
