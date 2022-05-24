import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import pagesRouter from './routes/pages.routes';
import queueRouter from './routes/queue.routes';

const PORT = process.env.PORT;
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));
app.use(express.json());
app.use(cors());

app.use(pagesRouter);
app.use(queueRouter);

app.listen(PORT);
