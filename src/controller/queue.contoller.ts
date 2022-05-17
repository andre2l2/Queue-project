import { Request, Response } from 'express';
import httpCodes from '../enums/http.enum';
import Queue from '../Models/queue';
import StrValidator from '../utils/str-validator.utils';

const { isEmpty } = new StrValidator();

async function getAllQueues(req: Request, res: Response) {
	const data = await Queue.getAll();
	return res.status(httpCodes.SUCCESS).json(data);
}

async function updateOneQueue(req: Request, res: Response) {
	const { id } = req.params;
	const body = req.body;
	const data = await Queue.updateOne(id, body);
	return res.status(httpCodes.SUCCESS).json(data);
}

async function createNewQueue(req: Request, res: Response) {
	const { name, email } = req.body;

	if (isEmpty(email)) return res.status(httpCodes.REDIRECT).redirect('/?error=invalid-email');
	if (isEmpty(email)) return res.status(httpCodes.REDIRECT).redirect('/?error=invalid-name');

	await Queue.create(name, email);
	return res.status(httpCodes.REDIRECT).redirect('/client');
}

async function deleteQueue(req: Request, res: Response) {
	const { id } = req.params;
	await Queue.delete(id);
	return res.status(httpCodes.SUCCESS).json({ msg: 'User deleted!' });
}

export { getAllQueues, updateOneQueue, createNewQueue, deleteQueue };
