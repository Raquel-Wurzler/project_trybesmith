import { NextFunction, Request, Response } from 'express';
import statusCodes from '../statusCodes';

import { Product, Error } from '../types';

function validateName(name: string): Error | null {
  if (!name) {
    const message = '"name" is required';
    return ({ status: statusCodes.BAD_REQUEST, message });
  }
  if (typeof name !== 'string') {
    const message = '"name" must be a string';
    return ({ status: statusCodes.UNPROCESSABLE_ENTITY, message });
  }
  if (name.length < 3) {
    const message = '"name" length must be at least 3 characters long';
    return ({ status: statusCodes.UNPROCESSABLE_ENTITY, message });
  }
  return null;
}

function validateAmount(amount: string): Error | null {
  if (!amount) {
    const message = '"amount" is required';
    return ({ status: statusCodes.BAD_REQUEST, message });
  }
  if (typeof amount !== 'string') {
    const message = '"amount" must be a string';
    return ({ status: statusCodes.UNPROCESSABLE_ENTITY, message });
  }
  if (amount.length < 3) {
    const message = '"amount" length must be at least 3 characters long';
    return ({ status: statusCodes.UNPROCESSABLE_ENTITY, message });
  }
  return null;
}

export default async function validateProduct(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { name, amount } = req.body as Product;

  const errorName = await validateName(name);
  if (errorName) {
    return res.status(errorName.status).json({ message: errorName.message });
  }

  const errorAmount = await validateAmount(amount);
  if (errorAmount) {
    return res.status(errorAmount.status).json({ message: errorAmount.message });
  }

  next();
}
