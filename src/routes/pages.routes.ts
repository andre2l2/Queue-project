import express from 'express';
import pagesContoller from '../controller/pages.controller';

const pagesRouter = express.Router();

pagesRouter.get('/', pagesContoller.indexPage);
pagesRouter.get('/admin', pagesContoller.queueAdmin);
pagesRouter.get('/client', pagesContoller.clientPage);

export default pagesRouter;
