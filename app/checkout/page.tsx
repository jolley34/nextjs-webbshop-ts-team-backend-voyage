"use client";
import { useSession } from "next-auth/react";
import CheckoutLayout from "./components/layout";

export default function CheckoutPage() {
  const session = useSession();
  return (
    <>
      <CheckoutLayout />
    </>
  );
}
