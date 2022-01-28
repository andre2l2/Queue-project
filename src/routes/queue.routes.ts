import express from 'express';
import Queue from '../aplication/queue';
import httpStatusCode from '../enums/http.enum';

const queueRouter = express.Router();

queueRouter.get('/queue', async (req, res) => {
	const data = await Queue.getAll();
	return res.status(httpStatusCode.SUSSES).json(data);
});
queueRouter.put('/queue/:id', async (req, res) => {
	const { id } = req.params;
	const body = req.body;
	const data = await Queue.updateOne(id, body);

	return res.status(httpStatusCode.SUSSES).json(data);
});
queueRouter.post('/queue', async (req, res) => {
	const { name } = req.body;
	const data = await Queue.create(name);

	return res.status(httpStatusCode.CREATED).json(data);
});
queueRouter.delete('/queue/:id', async (req, res) => {
	const { id } = req.params;
	await Queue.delete(id);

	return res.status(httpStatusCode.SUSSES).json({ msg: 'User deleted!' });
});

export default queueRouter;
