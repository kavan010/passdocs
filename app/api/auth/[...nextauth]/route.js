import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI);
async function getDb() {
  if (!client.topology?.isConnected()) await client.connect();
  return client.db("your-db-name");
}

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user }) {
      const db = await getDb();
      const users = db.collection("users");
      const existing = await users.findOne({ email: user.email });
      if (!existing) await users.insertOne({ name: user.name, email: user.email });
      return true;
    },
  },
});

export { handler as GET, handler as POST };
