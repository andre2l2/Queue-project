const socket = io();

export const emitSocket = () => {
    socket.emit('test', 'hello');
}