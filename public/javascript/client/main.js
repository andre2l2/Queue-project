import Time from './Time.js';
import { Serving } from './Serving.js';

const socket = io.connect();

try {
    Time.render();
    Serving.render(2);
    // socket.emit('data', { name: "Andre" });
} catch (error) {
    console.error(error);
}