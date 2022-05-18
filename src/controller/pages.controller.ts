import { Request, Response } from 'express';
import { responseRender } from '../utils/render-page.utils';

function indexPage(req: Request, res: Response): void {
	responseRender(res, 'index');
}

function queueAdmin(req: Request, res: Response): void {
	responseRender(res, 'queue-admin');
}

function clientPage(req: Request, res: Response): void {
	responseRender(res, 'queue-client');
}

export default { indexPage, queueAdmin, clientPage };
