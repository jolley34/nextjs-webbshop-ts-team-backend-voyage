import { auth } from "@/auth";
import CartSignInForm from "@/components/CartSignInForm";
import CustomerForm from "../../components/CustomerForm";
import { signOutUser } from "../server-actions/user/userActions";
import CheckoutLayout from "./component/checkoutLayout";

export default async function CartPage() {
  const session = await auth();

  return (
    <>
      <CheckoutLayout
        {...(session?.user && (
          <header>
            <p>{session.user.name}</p>
            <p>{session.user.email}</p>
            <p>ADMIN: {session.user.isAdmin ? "YES" : "NO"}</p>
            <form action={signOutUser}>
              <button>Sign out</button>
            </form>
          </header>
        ))}
        {...(session?.user ? <CustomerForm /> : <CartSignInForm />)}
      />
    </>
  );
}
