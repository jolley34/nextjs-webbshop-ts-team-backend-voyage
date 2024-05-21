"use server";
import { auth } from "@/auth";
import SignInButton from "@/components/GitHubSignInButton";
import { signOutUser } from "../server-actions/user/userActions";

export default async function SignInPage() {
  const session = await auth();

  return (
    <>
      {session?.user && (
        <header>
          <p>{session.user.name}</p>
          <form action={signOutUser}>
            <button>Sign out</button>
          </form>
        </header>
      )}
      {!session && <SignInButton />}
    </>
  );
}
