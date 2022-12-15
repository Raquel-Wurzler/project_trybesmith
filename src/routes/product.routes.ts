import { Router } from 'express';
import productsController from '../controllers/products.controler';
import validateProduct from '../middlewares/validateProduct';

const productRouter = Router();

productRouter.post('/', validateProduct, productsController.create);
productRouter.get('/', productsController.getAll);

export default productRouter;