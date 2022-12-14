import { Request, Response } from 'express';
import productsService from '../services/products.service';
import statusCodes from '../statusCodes';

const create = async (req: Request, res: Response) => {
  const product = req.body;
  const productCreated = await productsService.create(product);
  return res.status(statusCodes.CREATED).json(productCreated);
};

export default { create };