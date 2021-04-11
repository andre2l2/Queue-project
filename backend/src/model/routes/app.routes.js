import express from 'express';
import cors from 'cors';
import QueueContoller from '../../controller/queue.controller.js';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/queue', QueueContoller.getAll);  
app.put('/queue/:id', QueueContoller.update);
app.post('/queue', QueueContoller.create);
app.delete('/queue/:id', QueueContoller.delete);

app.listen(3333);