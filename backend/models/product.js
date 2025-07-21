import mongoose from "mongoose";

//Create a database schema for the product details
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } //createdAt updatedAt values
);

const Product = mongoose.model("Product", productSchema);

export default Product;
