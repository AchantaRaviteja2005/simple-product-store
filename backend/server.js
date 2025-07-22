import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();

//Initialize express
const app = express();

//Retrieving port from .env
const PORT = process.env.PORT || 5000;

app.use(express.json()); //Accepts JSON request body

//Base URL for Product Routes
app.use("/api/products", productRoutes);

//Listen for the Database connection and localhost server
app.listen(PORT, () => {
  connectDB();
  console.log("Server is started!");
  console.log("View it at: http://localhost:" + PORT);
});
