
import { createProduct, getProducts, searchProducts, editProduct, deleteProduct, startMessage } from '../controllers/product.controller.js';
// import { isAdmin } from '../middleware/auth-middleware.js'; 
import express from 'express';
const productsRouter= express.Router();


productsRouter.get('/',getProducts);
productsRouter.post('/search', searchProducts);
productsRouter.get('/start', startMessage);

productsRouter.post('/',  createProduct); 
productsRouter.put('/:id', editProduct); 
productsRouter.delete('/:id',  deleteProduct); 

export default productsRouter ;
