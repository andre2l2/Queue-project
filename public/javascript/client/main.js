import Time from './Time.js';
import { Serving } from './Serving.js';

const queue = document.querySelector('#queue').value;

setInterval(() => {
	window.location = '/queue';
}, 10 * 1000);

try {
	Time.render();
	Serving.render(queue);
} catch (error) {
	console.error(error);
}
