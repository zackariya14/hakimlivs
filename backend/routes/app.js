import express from 'express';
import cors from 'cors';
import { urlencoded } from 'express';
import productsRouter from './product.route.js';
import categoryRouter from './category.route.js';

const app = express();

app.use(
    cors(
       "*"
    )
);


app.use(urlencoded({ extended: true }));
app.use(express.json());

app.use('/products', productsRouter);
app.use('/categories', categoryRouter);

app.get('/', (req, res) => res.send('Hello World from /!'));

export default app;
