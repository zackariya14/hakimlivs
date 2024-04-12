import mongoose from 'mongoose';
import Product from '../models/product.model.js';
import Category from '../models/categorymodel.js';

export async function createProduct(req, res) {
    try {
        const { name, category, price, imageURL, description } = req.body;

        if (!name || !price) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        let categoryId;

        
        if (mongoose.Types.ObjectId.isValid(category)) {
            categoryId = category;
        } else {
            const foundCategory = await Category.findOne({ name: category });
            if (!foundCategory) {
                return res.status(404).json({ message: "Category not found" });
            }
            categoryId = foundCategory._id;
        }

        const newProduct = new Product({
            "name": name,
            "category": categoryId,
            "price": price,
            "imageURL": imageURL
        });

        console.log("newProduct: ", newProduct);
        
        const savedProduct = await newProduct.save();
        res.status(201).send(savedProduct);
    } catch (error) {
        console.log("Error in createProduct:", error);
        res.status(400).json({ message: "Error in createProduct" });
    }
}

export async function getProducts(req, res) {
    try {
        const products = await Product.find();
        res.status(200).send(products);
        console.log("Products: ", products);
    } catch (error) {
        console.error("Error in getProducts:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}


export async function searchProducts(req, res) {
    try {
        const { query } = req.body;

        const products = await Product.find({
            $or: [
                { name: { $regex: query, $options: 'i' } }, 
                { category: { $in: await Category.find({ name: { $regex: query, $options: 'i' } }).select('_id') } } 
            ]
        }).populate('category');
        res.status(200).send(products);
    } catch (error) {
        console.error("Error searching products", error);
        res.status(500).json({ message: "Error" });
    }
}

export async function editProduct(req, res) {
    try {
        const id = req.params.id;
        const { name, category, price, imageURL, description } = req.body;

        if (!id || !name || !category || !price || !imageURL) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        const updatedProduct = await Product.findByIdAndUpdate(id, { name, category, price, imageURL }, { new: true });
        console.log(updatedProduct)
        res.status(200).send(updatedProduct)

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

export async function deleteProduct(req, res) {
    try {
        const id = req.params.id;
        console.log(id)
        if (!id) {
            return res.status(400).json({ message: "Missing required fields" });
        }
        const deletedProduct = await Product.findByIdAndDelete(id);
        console.log(deletedProduct)
        res.status(200).send(deletedProduct)

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

export async function startMessage(req, res) {
    res.status(200).send("Hello world")
}
