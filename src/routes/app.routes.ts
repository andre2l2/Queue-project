import express from 'express';
import cors from 'cors';
import { Server } from 'socket.io';
import QueueContoller from '../controller/queue.controller';
import PublicContoller from '../controller/public.contoller';
import SocketUtil from '../aplication/socket';

const PORT = 3333;
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));
app.use(express.json());
app.use(cors());

app.get('/', PublicContoller.home);
app.get('/admin', PublicContoller.admin);
app.get('/client', PublicContoller.client);

app.get('/queue', QueueContoller.getAll);
app.put('/queue/:id', QueueContoller.update);
app.post('/queue', QueueContoller.create);
app.delete('/queue/:id', QueueContoller.delete);

export const listen = app.listen(PORT, () => console.log(`\n Hello! Running in ${PORT}`));

const io = new Server(listen);
io.on('connection', (socket) => {
	SocketUtil.get(socket);
	SocketUtil.send(socket);
});
