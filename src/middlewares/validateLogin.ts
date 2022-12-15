import { NextFunction, Request, Response } from 'express';
import statusCodes from '../statusCodes';
import usersService from '../services/users.service';

import { Login, Error } from '../types';

async function validateData(username: (string), password: string): Promise<Error | null> {
  if (!password) {
    const message = '"password" is required';
    return ({ status: statusCodes.BAD_REQUEST, message });
  }
  if (!username) {
    const message = '"username" is required';
    return ({ status: statusCodes.BAD_REQUEST, message });
  }
  const user = await usersService.getByUsername(username);
  
  if (!user || user.password !== password) {
    const message = 'Username or password invalid';
    return ({ status: statusCodes.UNAUTHORIZED, message });
  }
  return null;
}

export default async function validateLogin(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { username, password } = req.body as Login;

  const error = await validateData(username, password);

  if (error) return res.status(error.status).json({ message: error.message });

  next();
}