import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/queue', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

mongoose.connection.once('open', () => {
	console.log('Database connected!');
});

const schema = {
	name: String,
	numberQueue: String,
	wasAttended: Boolean,
};

const MQueueSchema = new mongoose.Schema(schema, { timestamps: true });

const MQueue = mongoose.model('Mqueue', MQueueSchema);
export { MQueue };
