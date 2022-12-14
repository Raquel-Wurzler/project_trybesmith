import { Request, Response } from 'express';
import ordersService from '../services/orders.service';
import statusCodes from '../statusCodes';

const erro = 'Ocorreu um erro';

// const create = async (req: Request, res: Response) => {
//   try {
//     const product = req.body;
//     const productCreated = await productsService.create(product);
//     return res.status(statusCodes.CREATED).json(productCreated);
//   } catch (error) {
//     return res.status(statusCodes.INTERNAL_SERVER_ERROR)
//       .json({ message: `${erro}: ${error}` });
//   }
// };

async function getAll(req: Request, res: Response) {
  try {
    const products = await ordersService.getAll();
    return res.status(statusCodes.OK).json(products);
  } catch (error) {
    return res.status(statusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: `${erro}: ${error}` });
  }
}

export default { getAll };