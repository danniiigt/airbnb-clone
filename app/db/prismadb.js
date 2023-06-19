import { PrismaClient } from "@prisma/client";

const prismaDB = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV === "development") {
  globalThis.prisma = prismaDB;
}

export default prismaDB;
