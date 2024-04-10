import express from 'express';
import mongoose from 'mongoose';
import productRouter from '../backend/routes/product.route.js';

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb+srv://OlleOllsson:test1234@hakimslivs4.zrzjb7b.mongodb.net/?retryWrites=true&w=majority&appName=Hakimslivs4', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

app.use(express.json());

app.use('/api/products', productRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
