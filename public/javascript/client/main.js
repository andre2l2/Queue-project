import Time from './Time.js';
import { Serving } from './Serving.js';

try {
	Time.render();
	Serving.render(1);
} catch (error) {
	console.error(error);
}
