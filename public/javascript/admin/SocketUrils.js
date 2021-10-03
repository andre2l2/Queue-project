const socket = io.connect();

const SoketUtils = {
	send: () => {
		socket.emit('data', { next: true });
	},
	get: () => {
		socket.on('data', (data) => {
			console.log(data);
		});
	},
};

export default SoketUtils;
