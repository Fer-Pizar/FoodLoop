import express from "express";
import authRoutes from "./src/routes/auth.routes.js";

const app = express();
app.use(express.json());
app.use("/api/auth", authRoutes);

app.listen(process.env.PORT || 3000, () =>
  console.log(`API running on :${process.env.PORT || 3000}`)
);
