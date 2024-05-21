"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signInUser } from "../../server-actions/user/userActions";
import {
  UserCreate,
  UserSignInSchema,
} from "../../server-actions/validation/validation";

export default function SignInForm() {
  const form = useForm<UserCreate>({ resolver: zodResolver(UserSignInSchema) });

  const {
    formState: { errors },
  } = form;

  const handleSubmit = async (data: UserCreate) => {
    await signInUser(data);

    form.reset();
    console.log(data);
  };

  return (
    <>
      <form
        className="w-96 flex flex-col gap-2"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <input
          {...form.register("username")}
          type="text"
          placeholder="username"
        />
        {errors.username && <span>{errors.username.message}</span>}
        <input
          {...form.register("password")}
          type="password"
          placeholder="password"
        />
        {errors.password && <span>{errors.password.message}</span>}
        <button onSubmit={form.handleSubmit(handleSubmit)} type="submit">
          Login User
        </button>
      </form>
    </>
  );
}
