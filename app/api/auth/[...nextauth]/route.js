export const dynamic = "force-dynamic";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { getDb } from "@/lib/mongodb";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      try {
        const db = await getDb();
        const users = db.collection("users");
        const existing = await users.findOne({ email: user.email });
        if (!existing) {
          await users.insertOne({ name: user.name, email: user.email });
        }
        console.log("User saved:", user.email);
        return true;
      } catch (err) {
        console.error("DB error in signIn:", err);
        return false; // <-- change this from true to false
      }
    }
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
