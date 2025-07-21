import express from "express";
import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../controllers/productController.js";

//Initialize the Router
const router = express.Router();

//Get all the product details
router.get("/", getProducts);

//Create a new product detail
router.post("/", createProduct);

//Update product details
router.put("/:id", updateProduct);

//Delete an existing product detail
router.delete("/:id", deleteProduct);

export default router;
