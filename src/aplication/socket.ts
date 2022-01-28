class SocketUtil {
	private _socket;
	private queue: number = 0;

	constructor(socket) {
		this._socket = socket;
	}

	send() {
		this._socket.emit('next', { queue: this.queue });
	}

	get() {
		this._socket.on('data', (data) => {
			console.log(data);

			this.queue++;
			this.send();
		});
	}
}

export default SocketUtil;
