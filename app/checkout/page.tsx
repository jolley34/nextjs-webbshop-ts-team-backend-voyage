import { auth } from "@/auth";
import CartSignInForm from "@/components/CartSignInForm";
import CustomerForm from "../../components/CustomerForm";
import { signOutUser } from "../server-actions/user/userActions";
import CheckoutLayout from "./component/CheckoutLayout";

export default async function CartPage() {
  const session = await auth();

  return (
    <>
      {session?.user ? (
        <CheckoutLayout session={{ ...session, sessionToken: "", userId: "" }}>
          <header>
            <p>{session.user.name}</p>
            <p>{session.user.email}</p>
            <p>ADMIN: {session.user.isAdmin ? "YES" : "NO"}</p>
            <form action={signOutUser}>
              <button>Sign out</button>
            </form>
          </header>
          <CustomerForm />
        </CheckoutLayout>
      ) : (
        <CheckoutLayout session={session}>
          <CartSignInForm />
        </CheckoutLayout>
      )}
    </>
  );
}
