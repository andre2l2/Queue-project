import { MQueue } from '../database/MQueue.js';

const Queue = {
    queue: 1,
    async geAll() {
        const data = await MQueue.find();
        return data;
    },
    async update(id, body) {     
        if (!body) throw new Error('Body error');
        if (!id) throw new Error('ID not to be sned');

        return await MQueue.updateOne(
            { _id: id },
            { wasAttended: body.wasAttended }
        )
    },
    async create(name) {
        if (!name) throw new Error('Name not defined');

        const queueNumber = Queue.queue++;
        return await MQueue.create({
            name,
            queueNumber
        })
    },
    async delete(id) {
        if (!id) throw new Error('ID not defined');
        return await MQueue.deleteOne({ _id: id });
    }
}

export { Queue };