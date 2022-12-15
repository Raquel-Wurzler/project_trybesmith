import { NextFunction, Request, Response } from 'express';
import statusCodes from '../statusCodes';

import { User, Error } from '../types';

function validateUsername(username: string): Error | null {
  if (!username) {
    const message = '"username" is required';
    return ({ status: statusCodes.BAD_REQUEST, message });
  }
  if (typeof username !== 'string') {
    const message = '"username" must be a string';
    return ({ status: statusCodes.UNPROCESSABLE_ENTITY, message });
  }
  
  if (username.length < 3) {
    const message = '"username" length must be at least 3 characters long';
    return ({ status: statusCodes.UNPROCESSABLE_ENTITY, message });
  }
  return null;
}

function validateVocation(vocation: string): Error | null {
  if (!vocation) {
    const message = '"vocation" is required';
    return ({ status: statusCodes.BAD_REQUEST, message });
  }
  if (typeof vocation !== 'string') {
    const message = '"vocation" must be a string';
    return ({ status: statusCodes.UNPROCESSABLE_ENTITY, message });
  }
  
  if (vocation.length < 3) {
    const message = '"vocation" length must be at least 3 characters long';
    return ({ status: statusCodes.UNPROCESSABLE_ENTITY, message });
  }
  return null;
}

function validateLevel(level: number): Error | null {
  if (level === undefined) {
    const message = '"level" is required';
    return ({ status: statusCodes.BAD_REQUEST, message });
  }
  if (typeof level !== 'number') {
    const message = '"level" must be a number';
    return ({ status: statusCodes.UNPROCESSABLE_ENTITY, message });
  }
  
  if (level < 1) {
    const message = '"level" must be greater than or equal to 1';
    return ({ status: statusCodes.UNPROCESSABLE_ENTITY, message });
  }
  return null;
}

export default async function validateUser(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { username, vocation, level } = req.body as User;

  const errorUsername = await validateUsername(username);
  if (errorUsername) {
    return res.status(errorUsername.status).json({ message: errorUsername.message });
  }

  const errorVocation = await validateVocation(vocation);
  if (errorVocation) {
    return res.status(errorVocation.status).json({ message: errorVocation.message });
  }

  const errorLevel = await validateLevel(level);
  if (errorLevel) {
    return res.status(errorLevel.status).json({ message: errorLevel.message });
  }

  next();
}