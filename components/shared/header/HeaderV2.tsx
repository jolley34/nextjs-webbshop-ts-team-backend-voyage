import { showAllCategories } from "@/app/server-actions/categories/handler";
import { auth } from "@/auth";
import HeaderLayout from "./components/layout";

export default async function HeaderV2() {
  const session = await auth();
  const categories = await showAllCategories();

  return (
    <>
      <HeaderLayout session={session} categories={categories} />
    </>
  );
}
