import { Request, Response } from 'express';

function indexPage(req: Request, res: Response) {
	res.render('../public/pages/index', { addedUser: false, number: 1 });
}

function queueAdmin(req: Request, res: Response) {
	res.render('../public/pages/queue-admin');
}

function clientPage(req: Request, res: Response) {
	res.render('../public/pages/queue-client');
}

export { indexPage, queueAdmin, clientPage };
