import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.roles.upsert({
    where: { nombre: "CONSUMIDOR" },
    update: {},
    create: { nombre: "CONSUMIDOR" },
  });

  await prisma.roles.upsert({
    where: { nombre: "COMERCIO" },
    update: {},
    create: { nombre: "COMERCIO" },
  });

  await prisma.roles.upsert({
    where: { nombre: "ADMIN" },
    update: {},
    create: { nombre: "ADMIN" },
  });

  console.log("Roles creados exitosamente.");
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1); });