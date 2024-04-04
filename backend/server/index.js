
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

let products = [
  { id: 1, name: 'Apple', price: 1.99 },
  { id: 2, name: 'Banana', price: 0.99 },
];

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.post('/api/products', (req, res) => {
  const { name, price } = req.body;
  const newProduct = { id: products.length + 1, name, price };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
