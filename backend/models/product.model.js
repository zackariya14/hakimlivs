import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  category: { type: String, required: true },
  title: { type: String, required: true },
  imageUrl: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
});

const Product = mongoose.model("Products", productSchema);

export default Product;
