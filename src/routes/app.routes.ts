import express from 'express';
import cors from 'cors';
import cowsay from 'cowsay';

import { Server } from 'socket.io';
import SocketUtil from '../aplication/socket';
import pagesRouter from './pages.routes';
import queueRouter from './queue.routes';

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

const io = new Server(listen);
io.on('connection', (socket) => {
	const socketUtil = new SocketUtil(socket);
	socketUtil.get();
});
