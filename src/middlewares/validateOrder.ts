import { NextFunction, Request, Response } from 'express';
import statusCodes from '../statusCodes';

import { ProductsIds, Error } from '../types';

function validateProductsIds(productsIds: number[]): Error | null {
  if (!productsIds) {
    const message = '"productsIds" is required';
    return ({ status: statusCodes.BAD_REQUEST, message });
  }
  if (typeof productsIds !== 'object') {
    const message = '"productsIds" must be an array';
    return ({ status: statusCodes.UNPROCESSABLE_ENTITY, message });
  }
  
  if (productsIds.length === 0) {
    const message = '"productsIds" must include only numbers';
    return ({ status: statusCodes.UNPROCESSABLE_ENTITY, message });
  }
  return null;
}

export default async function validateOrder(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { productsIds } = req.body as ProductsIds;

  const errorProductsIds = await validateProductsIds(productsIds);
  if (errorProductsIds) {
    return res.status(errorProductsIds.status).json({ message: errorProductsIds.message });
  }

  next();
}