import express from 'express';
import mongoose from 'mongoose';
import Product from './models.js';


const app = express();
const PORT = process.env.PORT || 5000; 

mongoose.connect('mongodb+srv://OlleOllsson:test1234@hakimslivs4.zrzjb7b.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

app.get('/api/products', async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      console.error('Error fetching products:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
    