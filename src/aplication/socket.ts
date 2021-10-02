import Queue from './queue';

class SocketUtil {
	async send(socket) {
		const data = await Queue.getAll();
		socket.emit('data', data);
	}

	get(socket) {
		socket.on('queue', (data) => {
			console.log(data);

			socket.emit('data', data);
		});
	}
}

export default new SocketUtil();
