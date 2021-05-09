import { Server } from 'socket.io';
import { listen } from '../routes/app.routes';

const io = new Server(listen);

io.on('connection', (socket) => {
    socket.on('test', (data) => {
        console.log(data);
    })
});