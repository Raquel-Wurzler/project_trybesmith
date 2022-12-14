import { Router } from 'express';
import usersController from '../controllers/users.controller';

const userRouter = Router();

userRouter.post('/', usersController.create);
// userRouter.get('/', productsController.getAll);

export default userRouter;