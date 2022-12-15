import { Router } from 'express';
import usersController from '../controllers/users.controller';
import validateUser from '../middlewares/validateUser';
import validatePass from '../middlewares/validatePassword';

const userRouter = Router();

userRouter.post('/', validateUser, validatePass, usersController.create);

export default userRouter;