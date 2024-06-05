"use client";

import { signOutUser } from "@/app/server-actions/user/userActions";
import SignInButton from "@/app/sign-in/components/SignInButton";
import ShopCartWithBadge from "@/components/ShopCartWithBadge";
import CategoryBar from "@/components/categorybar/CategoryBar";
import Link from "next/link";
import { IoIosSearch } from "react-icons/io";

interface PageProps {
  session: any;
  categories: any;
}

export default function HeaderLayout({ session, categories }: PageProps) {
  return (
    <>
      <div
        style={{
          padding: 0,
          margin: 0,
          background: "rgba(24, 24, 24, 0.7)",
          top: 0,
          position: "sticky",
          backdropFilter: "blur(10px)",
          transition: "background-color 0.3s ease",
          zIndex: 1000,
        }}
      >
        <nav
          style={{
            display: "flex",
            listStyle: "none",
            justifyContent: "center",
            alignItems: "center",
            padding: "0.5rem",
            color: "white",
            gap: "3rem",
            fontSize: "0.75rem",
          }}
        >
          <Link href="/">
            <img
              src="/vegetable-food-broccoli-svgrepo-com.svg"
              style={{ height: "18px", cursor: "pointer", marginTop: "5px" }}
              alt="Category Icon"
            />
          </Link>

          <li style={{ cursor: "pointer" }}>Butik</li>
          {categories.map((category, index) => (
            <CategoryBar key={index} name={category.name} />
          ))}
          <IoIosSearch
            style={{ height: "18px", width: "18px", cursor: "pointer" }}
          />

          <ShopCartWithBadge />
          <div style={{ display: "flex", alignItems: "center", gap: "3rem" }}>
            {session?.user ? (
              <>
                <div
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    alignItems: "center",
                  }}
                >
                  <p
                    style={{
                      margin: 0,
                      color: "white",
                      fontWeight: "900",
                      fontSize: "0.75rem",
                    }}
                  >
                    Welcome back
                  </p>
                  <Link href="/my-page" style={{ textDecoration: "none" }}>
                    <p
                      style={{
                        margin: 0,
                        color: "white",
                        fontSize: "0.75rem",
                        cursor: "pointer",
                        transition: "color 0.3s, background-color 0.3s",
                      }}
                    >
                      {session.user.name}
                    </p>
                  </Link>
                  <form action={signOutUser}>
                    <button
                      style={{
                        cursor: "pointer",
                        background: "#0072e4",
                        border: "none",
                        padding: "0.25rem 0.5rem",
                        borderRadius: "20px",
                        color: "white",
                      }}
                    >
                      Sign out
                    </button>
                  </form>
                </div>
              </>
            ) : (
              <SignInButton />
            )}
          </div>
        </nav>
      </div>
    </>
  );
}
