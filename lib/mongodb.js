import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI; // put your connection string in .env
const client = new MongoClient(uri);

export async function getDb() {
  if (!client.isConnected()) await client.connect();
  return client.db("production"); // your DB name
}
