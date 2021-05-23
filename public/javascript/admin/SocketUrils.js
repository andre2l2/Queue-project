import ClientList from './ClientList.js';
const socket = io.connect();

const SoketUtils = {
    send: () => {
        socket.emit('queue', { next: 1 });      
    },
    get: () => {
        socket.on('data', (data) => {
            ClientList.render(data);
        });
    }
};

export default SoketUtils;