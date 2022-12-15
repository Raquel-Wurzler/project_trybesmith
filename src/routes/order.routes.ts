import { Router } from 'express';
import ordersControler from '../controllers/orders.controler';
import validateToken from '../middlewares/validateToken';
import validateOrder from '../middlewares/validateOrder';

const orderRouter = Router();

orderRouter.get('/', ordersControler.getAll);

orderRouter.post('/', validateToken.validateToken, validateOrder, ordersControler.create);

export default orderRouter;