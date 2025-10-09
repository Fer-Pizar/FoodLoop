import { Router } from "express";
import bcrypt from "bcrypt";
import prismaPkg from "@prisma/client";

const { PrismaClient } = prismaPkg;
const prisma = new PrismaClient();
const router = Router();

router.post("/register", async (req, res) => {
  try {
    const { nombre, email, password } = req.body;

    if (!nombre || !email || !password) {
      return res.status(400).json({ error: "nombre, email y password son obligatorios" });
    }

    const existing = await prisma.usuarios.findUnique({ where: { email } });
    if (existing) return res.status(409).json({ error: "El email ya está registrado" });

    const rounds = parseInt(process.env.BCRYPT_ROUNDS || "12", 10);
    const hash = await bcrypt.hash(password, rounds);

    const user = await prisma.usuarios.create({
      data: { nombre, email, contrasena_hash: hash },
      select: { id_usuario: true, nombre: true, email: true }
    });

    return res.status(201).json({ ok: true, user });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Error interno registrando usuario" });
  }
});

export default router;
