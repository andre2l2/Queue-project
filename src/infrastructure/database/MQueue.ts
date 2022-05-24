import mongoose from 'mongoose';
import cowsay from 'cowsay';

const url = process.env.MONGO_DB_URL as string;

mongoose.connect(url, {
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
	name: { type: String },
	email: { type: String },
	queue: { type: String },
	wasAttended: { type: Boolean },
};

// @ts-ignore
const MQueueSchema = new mongoose.Schema(schema, { timestamps: true });

const MQueue = mongoose.model('Mqueue', MQueueSchema);
export { MQueue };
