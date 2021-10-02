import Queue from '../aplication/queue';
import httpStatusCode from '../enums/http.enum';

class QueueContoller {
	async getAll(req, res) {
		const data = await Queue.getAll();

		return res.status(httpStatusCode.SUSSES).json(data);
	}

	async update(req, res) {
		try {
			const { id } = req.params;
			const body = req.body;

			const data = await Queue.updateOne(id, body);

			return res.status(httpStatusCode.SUSSES).json(data);
		} catch (error) {
			return res.status(httpStatusCode.BAD_REQUEST).json({ error });
		}
	}

	async create(req, res) {
		try {
			const { name } = req.body;

			const data = await Queue.create(name);
			return res.status(httpStatusCode.CREATED).json(data);
		} catch (error) {
			return res.status(httpStatusCode.BAD_REQUEST).json({ error });
		}
	}

	async delete(req, res) {
		try {
			const { id } = req.params;
			await Queue.delete(id);

			return res.status(httpStatusCode.SUSSES).json({ msg: 'User deleted!' });
		} catch (error) {
			return res.status(httpStatusCode.BAD_REQUEST).json({ error });
		}
	}
}

export default new QueueContoller();
