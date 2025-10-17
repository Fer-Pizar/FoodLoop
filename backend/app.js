import express from "express";
import cors from "cors";
import authRoutes from "./src/routes/auth.routes.js";

const app = express();

// Middleware
app.use(express.json());

app.use(cors());

// Routes
app.use("/api/auth", authRoutes);
app.get("/api/health", (_req, res) => res.json({ ok: true }));

// Server setup
const PORT = process.env.PORT || 3000;
const HOST = "0.0.0.0";

app.listen(PORT, HOST, () => {
  console.log(`🚀 API running on http://${HOST}:${PORT}`);
});
