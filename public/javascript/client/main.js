import Time from './Time.js';
import { emitSocket } from './socket.js';

try {
    Time.render();
    emitSocket();
} catch (error) {
    console.error(error);
}