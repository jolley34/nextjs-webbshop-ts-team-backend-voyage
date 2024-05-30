"use client";
import { useSession } from "next-auth/react";
import MyPageLayout from "./components/layout";

export default function CheckoutPage() {
  const session = useSession();
  return (
    <>
      <MyPageLayout />
    </>
  );
}
