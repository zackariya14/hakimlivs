import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        text: true,
        required: true,
        trim: true
    },
    category: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }],
    description: {
        type: String,
        required: false,
    },
    price: {
        type: Number,
        required: true
    },
    imageURL: {
        type: String,
        required: false
    }
});

const Product = mongoose.model('Product', productSchema);
export default Product;
