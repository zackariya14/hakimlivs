import { Router } from 'express';
import { createProduct, getProducts, startMessage, searchProducts, editProduct, deleteProduct } from '../controllers/product.controller.js';

const productsRouter = Router();

productsRouter.post('/', createProduct);
productsRouter.get('/', getProducts);
productsRouter.post('/search', searchProducts);
productsRouter.get('/start', startMessage);
productsRouter.put('/edit/:id', editProduct);
productsRouter.delete('/delete/:id', deleteProduct);

export default productsRouter;
