import express from 'express';
import cors from 'cors';
import QueueContoller from '../../controller/queue.controller';

const PORT = 3333;

const app = express();
app.use(express.json());
app.use(cors());

app.get('/queue', QueueContoller.getAll);  
app.put('/queue/:id', QueueContoller.update);
app.post('/queue', QueueContoller.create);
app.delete('/queue/:id', QueueContoller.delete);

export const listen = app.listen(PORT, () => 
    console.log(`\nVocê deve estar procurando a porta. Ela tá aqui! -> Running in ${PORT}`)
);