import {
    buttonPageTo,
    buttonScrollDown
} from './buttons.js';

try {
    buttonPageTo({ element: '.button-client', to: './queue-client.html' });
    buttonPageTo({ element: '.button-attendent', to: './queue-admin.html' });
    buttonScrollDown('#scroll');
} catch (e) {
    console.error(e);
}