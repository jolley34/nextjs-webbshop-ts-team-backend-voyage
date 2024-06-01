"use client";

import {
  AddressCreate,
  AddressCreateSchema,
} from "@/app/server-actions/validation/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useCart } from "../../context/CartContext";
import { saveOrder } from "../../server-actions/orders/handler";

export default function CustomerForm() {
  const form = useForm<AddressCreate>({
    resolver: zodResolver(AddressCreateSchema),
  });
  const { cart, clearLocalStorage } = useCart();

  const {
    formState: { errors },
  } = form;

  const handleSubmit = async (data: AddressCreate) => {
    console.log("Form data:", data);
    console.log("Cart items:", cart);
    await saveOrder(data, cart);
    form.reset();
    clearLocalStorage();
    console.log(data);
  };

  return (
    <form
      style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
      onSubmit={form.handleSubmit(handleSubmit)}
    >
      <h1
        style={{
          fontWeight: "100",
          marginTop: "1.5rem",
          fontFamily: "'Futura', 'Trebuchet MS', 'Arial', sans-serif",
          fontSize: "1.5rem",
        }}
      >
        Delivery information
      </h1>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          paddingBottom: "1.5rem",
        }}
      >
        <input
          style={{
            padding: "1rem",
            border: "none",
            borderBottom: "1px solid gray",
          }}
          placeholder="Firstname"
          {...form.register("firstName")}
        />
        <input
          style={{
            padding: "1rem",
            border: "none",
            borderBottom: "1px solid gray",
          }}
          placeholder="Lastname"
          {...form.register("lastName")}
        />
        <input
          style={{
            padding: "1rem",
            border: "none",
            borderBottom: "1px solid gray",
          }}
          placeholder="Phonenumber"
          {...form.register("phoneNumber")}
        />
        <input
          style={{
            padding: "1rem",
            border: "none",
            borderBottom: "1px solid gray",
          }}
          placeholder="Email"
          {...form.register("email")}
        ></input>
        <input
          style={{
            padding: "1rem",
            border: "none",
            borderBottom: "1px solid gray",
          }}
          placeholder="Street"
          {...form.register("street")}
        />

        <input
          style={{
            padding: "1rem",
            border: "none",
            borderBottom: "1px solid gray",
          }}
          placeholder="Zipcode"
          {...form.register("zipcode")}
        />
        <input
          style={{
            padding: "1rem",
            border: "none",
            borderBottom: "1px solid gray",
          }}
          placeholder="City"
          {...form.register("city")}
        />
      </div>
      <button
        type="submit"
        style={{
          cursor: "pointer",
          border: "none",
          color: "white",
          padding: "0.75rem",
          background: "#0072e4",
          borderRadius: "20px",
        }}
      >
        SUBMIT ORDER
      </button>
    </form>
  );
}
