import mongoose from "mongoose";
import Product from "../models/product.js";

//Get all the product details
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({
      success: true,
      data: products,
      message: "All products fetched successfully",
    });
  } catch (error) {
    console.error("Error: ", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

//Create a new product detail
export const createProduct = async (req, res) => {
  const product = req.body;

  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all details" });
  }

  const newProduct = new Product(product);

  try {
    await newProduct.save();
    res.status(201).json({
      success: true,
      data: newProduct,
      message: "Product saved successfully",
    });
  } catch (error) {
    console.error("Error: ", error.message);
    res.status(500).json({
      success: false,
      message: "Server Error", //code 500 for internal server error.
    });
  }
};

//Update product details
export const updateProduct = async (req, res) => {
  const { id } = req.params;

  const product = req.body;

  //If id invalid, send a 404 error
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({
      success: false,
      message: "Invalid product id",
    });
  }

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
    });
    res.status(200).json({
      success: true,
      data: updatedProduct,
      message: "Product updated successfully",
    });
  } catch (error) {
    console.error("Error: ", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

//Delete an existing product detail
export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  console.log("id: ", id);

  try {
    await Product.findByIdAndDelete(id);
    res
      .status(200)
      .json({ success: true, message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error: ", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
