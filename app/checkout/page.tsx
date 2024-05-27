"use client";
import { useSession } from "next-auth/react";
import CustomerForm from "./components/CustomerForm";
import CheckoutLayout from "./components/layout";

export default function CheckoutPage() {
  const session = useSession();
  return (
    <>
      <CheckoutLayout />
      {session?.data?.user && <CustomerForm />}
    </>
  );
}
