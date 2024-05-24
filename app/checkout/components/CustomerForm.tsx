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
    await saveOrder(data, cart);
    form.reset();
    clearLocalStorage();
  };

  return (
    <form
      className="w-96 flex flex-col gap-2"
      onSubmit={form.handleSubmit(handleSubmit)}
    >
      <input
        {...form.register("firstName")}
        type="text"
        placeholder="firstname"
      />
      {errors.firstName && <span>{errors.firstName.message}</span>}
      <input
        {...form.register("lastName")}
        type="text"
        placeholder="lastname"
      />
      {errors.lastName && <span>{errors.lastName.message}</span>}
      <input {...form.register("city")} type="text" placeholder="city" />
      {errors.city && <span>{errors.city.message}</span>}
      <input {...form.register("zipcode")} type="text" placeholder="zipcode" />
      {errors.zipcode && <span>{errors.zipcode.message}</span>}
      <input {...form.register("street")} type="text" placeholder="street" />
      {errors.street && <span>{errors.street.message}</span>}
      <input
        {...form.register("phoneNumber")}
        type="text"
        placeholder="phone number"
      />
      {errors.phoneNumber && <span>{errors.phoneNumber.message}</span>}
      <input {...form.register("email")} type="email" placeholder="email" />
      {errors.email && <span>{errors.email.message}</span>}
      <button style={{ cursor: "pointer" }}>Save Order</button>
    </form>
  );
}
