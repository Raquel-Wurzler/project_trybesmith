import { NextFunction, Request, Response } from 'express';
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

export default { validateUsername };
