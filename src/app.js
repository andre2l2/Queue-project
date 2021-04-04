import express from 'express';
import { QueueRoutes } from './routes/queue.routes.js';

const app = express();
app.use(express.json());

app.get('/queue', QueueRoutes.geAllQueue);  
app.put('/queue/:id', QueueRoutes.update);
app.post('/queue', QueueRoutes.create);
app.delete('/queue/:id', QueueRoutes.delete);

app.listen(3333);