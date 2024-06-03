import { showAllCategories } from "@/app/server-actions/categories/handler";
import { signOutUser } from "@/app/server-actions/user/userActions";
import SignInButton from "@/app/sign-in/components/SignInButton";
import { auth } from "@/auth";
import ShopCartWithBadge from "@/components/ShopCartWithBadge";
import CategoryBar from "@/components/categorybar/CategoryBar";
import Link from "next/link";
import { IoIosSearch } from "react-icons/io";

export default async function HeaderV3() {
  const categories = await showAllCategories();
  const session = await auth();

  return (
    <>
      <div
        style={{
          padding: 0,
          margin: 0,
          background: "#f6f5f390",
          borderBottom: "1px solid lightgray",
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
            color: "black",
            gap: "3rem",
            fontSize: "0.75rem",
          }}
        >
          <Link href="/">
            <img
              src="/vegetable-food-broccoli-svgrepo-com-copy.svg"
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
                      color: "black",
                      fontWeight: "700",
                      fontSize: "0.75rem",
                    }}
                  >
                    Welcome back
                  </p>
                  <Link href="/my-page" style={{ textDecoration: "none" }}>
                    <p
                      style={{
                        margin: 0,
                        color: "black",

                        fontSize: "0.75rem",
                        cursor: "pointer",
                      }}
                    >
                      {session.user.name}
                    </p>
                  </Link>
                </div>

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
