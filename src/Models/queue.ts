import { MQueue } from '../infrastructure/database/MQueue';

class Queue {
	async getAll(): Promise<unknown> {
		return MQueue.find({}, { __v: 0 });
	}

	async getLast(): Promise<any> {
		return MQueue.findOne({}).sort({ createdAt: -1 });
	}

	async updateOne(id: string, body: any): Promise<unknown> {
		return MQueue.updateOne({ _id: id }, { wasAttended: body.wasAttended });
	}

	async create(name: string, email: string): Promise<any> {
		const lastRegister = await this.getLast();
		let queue = lastRegister?.queue ? lastRegister.queue : 0;
		queue = queue + 1;

		return MQueue.create({
			name: name,
			email: email,
			queue: queue,
			wasAttended: false,
		});
	}

	async delete(id: string): Promise<unknown> {
		return await MQueue.deleteOne({ _id: id });
	}
}

export default new Queue();
