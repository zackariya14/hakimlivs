import express from 'express';
import cors from 'cors';
import { urlencoded } from 'express';
import productsRouter from './product.route.js';
import categoryRouter from './category.route.js';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
const app = express();
import router from './user.route.js';

app.use(
    cors({
        origin: ['http://localhost:3000'],
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        credentials: true
    })


);
app.use(morgan('dev'));
app.use(cookieParser());
app.use(urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));
app.use('/products', productsRouter);
app.use('/categories', categoryRouter);
app.use('/users',router);
app.get('/', (req, res) => res.send('Hello World from /!'));

export default app;

