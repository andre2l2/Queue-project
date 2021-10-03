import Time from './Time.js';
import { Serving } from './Serving.js';
import SoketUtils from '../admin/SocketUrils.js';

try {
	SoketUtils.get();
	Time.render();
	Serving.render(1);
} catch (error) {
	console.error(error);
}
