import { Router } from 'express';
import ordersControler from '../controllers/orders.controler';

const orderRouter = Router();

orderRouter.get('/', ordersControler.getAll);

export default orderRouter;