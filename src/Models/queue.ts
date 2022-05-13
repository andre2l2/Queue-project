import { MQueue } from '../database/MQueue';

class Queue {
	private queue: number = 0;

	async getAll(): Promise<unknown> {
		const data = await MQueue.find({
			wasAttended: false,
		});
		return data;
	}

	async getLast(): Promise<number> {
		const data: any = await MQueue.find({}).sort({ createdAt: -1 }).limit(1);
		return data.numberQueue;
	}

	async updateOne(id: string, body: any): Promise<unknown> {
		if (!body) throw new Error('Body error');
		if (!id) throw new Error('ID not to be sned');

		return await MQueue.updateOne({ _id: id }, { wasAttended: body.wasAttended });
	}

	async create(name: string, email: string): Promise<unknown> {
		if (!name && !email) throw new Error('Name or Email not defined');

		const last = await this.getLast();
		if (last) this.queue = last;

		this.queue++;
		return await MQueue.create({
			name: name,
			email: email,
			numberQueue: this.queue,
		});
	}

	async delete(id: string): Promise<unknown> {
		if (!id) throw new Error('ID not defined');
		return await MQueue.deleteOne({ _id: id });
	}
}

export default new Queue();
