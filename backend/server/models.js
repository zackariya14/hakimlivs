import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'category' }, 
  description: String,
  Image: String,
});

const Product = mongoose.model('Product', productSchema);

export default Product;
