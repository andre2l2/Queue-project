import { Queue } from './queue';

const SocketUtil = {
    send: async (socket) => {
        const data = await Queue.geAll();
        socket.emit('data', data);
    },
    get: (socket) => {
        socket.on('queue', (data) => {   
            console.log(data);
                     
            socket.emit('data', data);
        })
    }
}

export { SocketUtil };