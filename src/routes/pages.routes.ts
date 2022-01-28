import express from 'express';

const pagesRouter = express.Router();

pagesRouter.get('/', (req, res) => {
	res.render('../public/pages/index', { addedUser: false, number: 1 });
});
pagesRouter.get('/admin', (req, res) => {
	res.render('../public/pages/queue-admin');
});
pagesRouter.get('/client', (req, res) => {
	res.render('../public/pages/queue-client');
});

export default pagesRouter;
