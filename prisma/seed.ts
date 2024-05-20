import console from "console";
import { seedProducts } from "./seed/product";
import { seedUsers } from "./seed/user";

async function main() {
  await seedProducts();
  await seedUsers();
}

main()
  .then(async () => {
    console.log("Success Created/Updated Users, Products, and Orders");
  })
  .catch((err) => {
    console.error(err);
  });
