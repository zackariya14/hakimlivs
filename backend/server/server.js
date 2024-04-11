import express from 'express';
import mongoose from 'mongoose';
import productRouter from '../routes/product.route.js';

const app = express();
const PORT = process.env.PORT || 7000;

mongoose.connect('mongodb+srv://OlleOllsson:test1234@hakimslivs4.zrzjb7b.mongodb.net/', {
    
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

app.use(express.json());

app.use('/api/products', productRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
