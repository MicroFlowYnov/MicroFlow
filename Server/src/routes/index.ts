import { Router } from 'express';
import counterRouter from '~/routes/counter.router';

const routes = Router();

routes.use('/counter', counterRouter);

export default routes;