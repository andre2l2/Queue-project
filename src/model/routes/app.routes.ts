import express from 'express';
import cors from 'cors';
import QueueContoller from '../../controller/queue.controller';
import { PublicContoller } from '../../controller/public.contoller';

const PORT = 3333;
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('./public'));
app.use(express.json());
app.use(cors());

app.get('/', PublicContoller.home)
app.get('/admin', PublicContoller.admin)
app.get('/client', PublicContoller.client)

app.get('/queue', QueueContoller.getAll);  
app.put('/queue/:id', QueueContoller.update);
app.post('/queue', QueueContoller.create);
app.delete('/queue/:id', QueueContoller.delete);

export const listen = app.listen(PORT, () => 
    console.log(`\nVocê deve estar procurando a porta. Ela tá aqui! -> Running in ${PORT}`)
);  