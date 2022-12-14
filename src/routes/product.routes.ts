import { Router } from 'express';
import productsController from '../controllers/products.controler';

const productRouter = Router();

productRouter.post('/', productsController.create);

export default productRouter;