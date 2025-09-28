"use client"
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function NavBar() {
    const { data: session, status } = useSession();
    if (status === "loading") {
        return <div>Loading...</div>; // or your skeleton navbar
    }

    return (
        <div className="fixed top-0 left-0 right-0 h-16 flex items-center justify-between px-8 z-10">
            <Link href="/">
                <div className="text-black font-bold text-xl">passordDocs</div>
            </Link>
            <div className="flex items-center space-x-4">
                <button className="px-4 py-2 text-black rounded-lg">Docs</button>
                <button className="ml-4 px-4 py-2 text-black rounded-lg">Security</button>
                {session?.user && (
                <Link href="/dashboard">
                <img
                    src={session?.user.image}
                    alt={session?.user.name}
                    className="w-10 h-10 rounded-full object-cover border-2 border-gray-300"
                />
                </Link>
                )}
            </div>
        </div>
    );
}