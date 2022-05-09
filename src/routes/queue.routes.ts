import express from 'express';
import { getAllQueues, updateOneQueue, createNewQueue, deleteQueue } from '../controller/queue.contoller';

const queueRouter = express.Router();

queueRouter.get('/queue', getAllQueues);
queueRouter.put('/queue/:id', updateOneQueue);
queueRouter.post('/queue', createNewQueue);
queueRouter.delete('/queue/:id', deleteQueue);

export default queueRouter;
