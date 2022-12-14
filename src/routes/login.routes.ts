// import { Router } from 'express';
import { NextFunction, Request, Response, Router } from 'express';
import usersController from '../controllers/users.controller';

import statusCodes from '../statusCodes';
import usersService from '../services/users.service';

const validateUsername = async (req: Request, res: Response, next: NextFunction) => {
  const { username } = req.body;
  const user = await usersService.getByUsername(username);
  console.log(user);
  
  if (!username) {
    return res.status(statusCodes.BAD_REQUEST).send({ message: '"username" is required' });
  }
  if (!user) {
    return res.status(statusCodes.UNAUTHORIZED).send({
      message: 'Username or password invalid' });
  }
  return next();
};

const validatePassword = (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;
  if (password.length < 6) {
    return res.status(statusCodes.UNAUTHORIZED).send({
      message: 'Username or password invalid' });
  }
  if (!password) {
    return res.status(statusCodes.BAD_REQUEST).send({ message: '"password" is required' });
  }
  return next();
};

const loginRouter = Router();

loginRouter.post('/', validateUsername, validatePassword, usersController.login);

export default loginRouter;