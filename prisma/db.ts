import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";

/* neonConfig.webSocketConstructor = WebSocket;
const connectionString = `${process.env.DATABASE_URL}`;

const pool = new Pool({ connectionString });
const adapter = new PrismaNeon(pool); */
export const db = new PrismaClient().$extends(withAccelerate());
