import ClientList from './clientList.js';
import NextClient from './nextClient.js';

try {
    ClientList.render();
    NextClient.call();
} catch (error) {
    console.error(error);
}