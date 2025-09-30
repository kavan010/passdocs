import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

await client.connect(); // connect once at module load

export function getDb() {
  return client.db("production");
}
