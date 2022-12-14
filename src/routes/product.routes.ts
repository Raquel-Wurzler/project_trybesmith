import { Router } from 'express';
import productsController from '../controllers/products.controler';

const productRouter = Router();

productRouter.post('/', productsController.create);
productRouter.get('/', productsController.getAll);

export default productRouter;