import { MongoClient } from "mongodb";
import { config } from "dotenv";
config();

export const client = new MongoClient(process.env.MONGO_DB_URL);

export const userCollection = client.db("super_drive").collection("user");
export const authCollection = client.db("super_drive").collection("user");
export const commentCollection = client.db("superdrive").collection("comments");


