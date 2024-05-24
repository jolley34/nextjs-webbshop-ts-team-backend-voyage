"use client";

import { signIn } from "next-auth/react";

export default function SignInButton() {
  return (
    <button
      style={{
        background: "#0072e4",
        border: "none",
        padding: "0.5rem",
        borderRadius: "10px",
        color: "white",
        cursor: "pointer",
      }}
      onClick={() => signIn()}
    >
      Sign in with Github
    </button>
  );
}
