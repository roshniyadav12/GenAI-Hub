import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const connectionString = process.env.NEXT_PUBLIC_DRIZZLE_DB_URL as string; // Neon DB URL from .env
const client = postgres(connectionString, { ssl: "require" }); // Secure connection
export const db = drizzle(client);
