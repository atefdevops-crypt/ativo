import { eq } from "drizzle-orm";
import { DB } from "../DB/index.js";
import { users } from "../DB/schema.js";

export async function getLocalUser(clerkUserId: string) {
  const [row] = await DB.select().from(users).where(eq(users.clerkUserId, clerkUserId)).limit(1);
  return row;
}

