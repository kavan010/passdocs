"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function SignInGoogle() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        <p>Signed in as {session.user?.email}</p>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }

  return (
    <button 
    onClick={() => signIn("google", { callbackUrl: "/" })}
    className="w-64 px-4 py-2 bg-gray-100 text-black rounded-4xl hover:bg-gray-200 transition-all duration-200"
    >
        <Image src="/google.png" alt="Google Logo" width={20} height={20} className="inline-block mr-2 mb-0.5"/> 
        Sign In with Google
    </button>
  );
}