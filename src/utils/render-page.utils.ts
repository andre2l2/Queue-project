import { Response } from 'express';

function responseRender(res: Response, page: string, args?: object): void {
	res.render(`../public/pages/${page}`, args);
}

export { responseRender };
