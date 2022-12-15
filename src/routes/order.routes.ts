import { Router } from 'express';
import ordersControler from '../controllers/orders.controler';
// import validateToken from '../middlewares/validateToken';

const orderRouter = Router();

orderRouter.get('/', ordersControler.getAll);

orderRouter.post('/', ordersControler.create);

export default orderRouter;