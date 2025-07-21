import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();

//Initialize express
const app = express();

app.use(express.json()); //Accepts JSON request body

//Base URL for Product Routes
app.use("/api/products", productRoutes);

//Listen for the Database connection and localhost server
app.listen(5000, () => {
  connectDB();
  console.log("Server is started!");
  console.log("View it at: http://localhost:5000");
});

//54:03 timestamp
