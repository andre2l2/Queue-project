import { Request, Response } from 'express';
import { responseRender } from '../infrastructure/utils/render-page.utils';
import Queue from '../Models/queue';

function indexPage(req: Request, res: Response): void {
	responseRender(res, 'index');
}

function queueAdmin(req: Request, res: Response): void {
	responseRender(res, 'queue-admin');
}

async function clientPage(req: Request, res: Response): Promise<void> {
	const userQueue = await Queue.getLast();
	return responseRender(res, 'queue-client', { queue: userQueue.queue });
}

export default { indexPage, queueAdmin, clientPage };
