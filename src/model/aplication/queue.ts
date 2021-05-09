import { MQueue } from '../database/MQueue';

const Queue = {
    queue: 1,
    async geAll() {
        const data = await MQueue.find();
        return data;
    },
    async update(id: string, body: any) {     
        if (!body) throw new Error('Body error');
        if (!id) throw new Error('ID not to be sned');

        return await MQueue.updateOne(
            { _id: id },
            { wasAttended: body.wasAttended }
        )
    },
    async create(name: string) {
        if (!name) throw new Error('Name not defined');

        const queueNumber = Queue.queue++;
        return await MQueue.create({
            name,
            queueNumber
        })
    },
    async delete(id: string) {
        if (!id) throw new Error('ID not defined');
        return await MQueue.deleteOne({ _id: id });
    }
}

export { Queue };