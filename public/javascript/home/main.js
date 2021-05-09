import {
    buttonPageTo,
    buttonScrollDown
} from './buttons.js';

try {
    buttonPageTo({ element: '.button-client', to: '/client' });
    buttonPageTo({ element: '.button-attendent', to: '/admin' });
    buttonScrollDown('#scroll');
} catch (e) {
    console.error(e);
}