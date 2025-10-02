import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI);

export async function getDb() {
  if (!client.topology || !client.topology.isConnected()) await client.connect();
  return client.db();
}
