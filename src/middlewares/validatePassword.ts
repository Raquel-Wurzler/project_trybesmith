import { NextFunction, Request, Response } from 'express';
import statusCodes from '../statusCodes';

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

export default { validatePassword };