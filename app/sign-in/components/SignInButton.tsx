"use client";

import { signIn } from "next-auth/react";

export default function SignInButton() {
  return (
    <button
      style={{
        background: "#0072e4",
        border: "none",
        padding: "0.5rem 1rem",
        borderRadius: "20px",
        color: "white",
        cursor: "pointer",
      }}
      onClick={() => signIn()}
    >
      Sign in with Github
    </button>
  );
}
