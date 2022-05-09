import express from 'express';
import { indexPage, queueAdmin, clientPage } from '../controller/pages.controller';

const pagesRouter = express.Router();

pagesRouter.get('/', indexPage);
pagesRouter.get('/admin', queueAdmin);
pagesRouter.get('/client', clientPage);

export default pagesRouter;
