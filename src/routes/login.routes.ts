import { Router } from 'express';
import usersController from '../controllers/users.controller';
import validateLogin from '../middlewares/validateLogin';

const loginRouter = Router();

// loginRouter.use(validateLogin);

loginRouter.post('/', validateLogin, usersController.login);

export default loginRouter;