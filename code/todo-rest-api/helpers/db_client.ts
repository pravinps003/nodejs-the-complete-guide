import { Database, MongoClient } from "https://deno.land/x/mongo/mod.ts";

let db: Database;
export const connect = async () => {
  const client = new MongoClient();
  await client.connect(
    "mongodb+srv://ps003:mongops003@cluster0.rcwfq.mongodb.net/todo-app?authMechanism=SCRAM-SHA-1",
  );
  db = client.database("todo-app");
};

export const getDB = () => {
  return db;
};
