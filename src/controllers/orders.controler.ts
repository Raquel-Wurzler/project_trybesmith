import { Request, Response } from 'express';
import ordersService from '../services/orders.service';
import statusCodes from '../statusCodes';
// import validateToken from '../middlewares/validateToken';

const erro = 'Ocorreu um erro';

const create = async (req: Request, res: Response) => {
  try {
    // const { /* productsIds */ decoded } = req.body.user;
    console.log(req.body.user);
    const orderCreated = await ordersService.create(1);
    return res.status(statusCodes.CREATED).json(orderCreated);
  } catch (error) {
    return res.status(statusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: `${erro}: ${error}` });
  }
};

async function getAll(req: Request, res: Response) {
  try {
    const products = await ordersService.getAll();
    return res.status(statusCodes.OK).json(products);
  } catch (error) {
    return res.status(statusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: `${erro}: ${error}` });
  }
}

export default { getAll, create };