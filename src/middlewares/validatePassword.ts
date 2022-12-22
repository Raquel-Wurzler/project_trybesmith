import { NextFunction, Request, Response } from 'express';
import statusCodes from '../statusCodes';

import { Password, Error } from '../types';

function validatePassword(password: string): Error | null {
  if (!password) {
    const message = '"password" is required';
    return ({ status: statusCodes.BAD_REQUEST, message });
  }
  if (typeof password !== 'string') {
    const message = '"password" must be a string';
    return ({ status: statusCodes.UNPROCESSABLE_ENTITY, message });
  }
  if (password.length < 8) {
    const message = '"password" length must be at least 8 characters long';
    return ({ status: statusCodes.UNPROCESSABLE_ENTITY, message });
  }
  return null;
}

export default async function validatePass(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { password } = req.body as Password;

  const errorPassword = await validatePassword(password);
  if (errorPassword) {
    return res.status(errorPassword.status).json({ message: errorPassword.message });
  }

  next();
}