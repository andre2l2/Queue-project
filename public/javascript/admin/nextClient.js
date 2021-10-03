import SocketUrils from './SocketUrils.js';

const NextCliet = {
	call() {
		const $button = document.querySelector('#next');

		$button.addEventListener('click', () => {
			SocketUrils.send();
		});
	},
};

export const ButtonRefresh = {
	start: () => {
		const $refresh = document.querySelector('#refresh');
		$refresh.addEventListener('click', () => {
			console.log('button');
		});
	},
};

export default NextCliet;
