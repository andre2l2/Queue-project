import express from 'express';
import cors from 'cors';
import cowsay from 'cowsay';

import pagesRouter from './routes/pages.routes';
import queueRouter from './routes/queue.routes';

const PORT = 3333;
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));
app.use(express.json());
app.use(cors());

app.use(pagesRouter);
app.use(queueRouter);

export const listen = app.listen(PORT, () => {
	const say = cowsay.say({
		text: `Running in ${PORT}`,
		e: 'oO',
		T: 'U ',
	});

	console.log(say);
});
