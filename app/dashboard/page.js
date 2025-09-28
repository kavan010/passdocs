"use client";
import Navbar from "@/components/Navbar";
import { signIn, signOut, useSession } from "next-auth/react";

export default function DashboardPage() {
    const { data: session, status } = useSession();
    if (status === "loading") {
        return <div>Loading...</div>;
    }
    if (!session) {
        if (typeof window !== 'undefined') {
            window.location.href = "/api/auth/signin";
        }
        return null;
    }
    return (
        <div className="pt-20">
            <Navbar />
            <div className="bg-gray-300 flex flex-col justify-center items-center mt-50">
                <h1 className="text-2xl font-bold text-center">Welcome to your Dashboard, {session.user.name}</h1>
            </div>
        </div>
    );
}