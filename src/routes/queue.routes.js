import { MQueue } from '../database/MQueue.js';
import { SUSSES, CREATED, BAD_REQUEST } from '../enums/http.enum.js';

const QueueRoutes = {
    async geAllQueue(req, res) {
        const data = await MQueue.find();

        return res
            .status(SUSSES)
            .json(data);
    },
    async update(req, res) {
        const { id } = req.params;
        const { wasAttended } = req.body;
        
        if (!wasAttended) {
            return res
                .status(BAD_REQUEST)
                .json()
        };

        await MQueue.updateOne(
            { _id: id },
            { wasAttended: wasAttended }
        )
    
        return res
            .status(SUSSES)
            .json();
    },
    async create(req, res) {
        const { name, queueNumber } = req.body;

        if (!name || !queueNumber) {
            return res
                .status(BAD_REQUEST)
                .json()
        }

        const data = await MQueue.create({
            name,
            queueNumber
        })
    
        return res
            .status(CREATED)
            .json(data);
    },
    async delete(req, res) {
        const { id } = req.params;
        await MQueue.deleteOne({ _id: id });

        return res
            .status(SUSSES)
            .json({ msg: 'User deleted!' });
    }
}

export { QueueRoutes };