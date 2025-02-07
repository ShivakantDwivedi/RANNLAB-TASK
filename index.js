import express from "express";

import dotenv from "dotenv";

import bodyParser from "body-parser";

import connectdb from "./config/db.js";

import productRoutes from "./routes/productRoutes.js";

import userRoutes from "./routes/userRoutes.js";

dotenv.config();

connectdb();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use("/api/products", productRoutes);

app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});
