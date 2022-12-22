import { Request, Response } from 'express';
import ordersService from '../services/orders.service';
import statusCodes from '../statusCodes';
import productsService from '../services/products.service';

const erro = 'Ocorreu um erro';

const create = async (req: Request, res: Response) => {
  try {
    const { productsIds } = req.body;
    const orderCreated = await ordersService.create(req.body.user.id);
    const mapUpdateOrderIdInProducts = productsIds
      .map((pId: number) => productsService.update(pId, orderCreated));
    await Promise.all(mapUpdateOrderIdInProducts);
    return res.status(statusCodes.CREATED).json({ userId: req.body.user.id, productsIds });
  } catch (error) {
    return res.status(statusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: `${erro}: ${error}` });
  }
};

const getAll = async (req: Request, res: Response) => {
  try {
    const orders = await ordersService.getAll();
    return res.status(statusCodes.OK).json(orders);
  } catch (error) {
    return res.status(statusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: `${erro}: ${error}` });
  }
};

export default { getAll, create };