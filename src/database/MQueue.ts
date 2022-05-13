import mongoose from 'mongoose';
import cowsay from 'cowsay';

mongoose.connect('mongodb://localhost:27017/queue', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

mongoose.connection.once('open', () => {
	const say = cowsay.say({
		text: `Database connected`,
		e: 'oO',
		T: 'U ',
	});

	console.log(say);
});

const schema = {
	name: String,
	email: String,
	numberQueue: String,
	wasAttended: Boolean,
};

const MQueueSchema = new mongoose.Schema(schema, { timestamps: true });

const MQueue = mongoose.model('Mqueue', MQueueSchema);
export { MQueue };
