import ordersModel from '../models/orders.model';
import { Order } from '../types';

const create = async (userId: number): Promise<number> => {
  const orderCreated = await ordersModel.create(userId);
  return orderCreated;
};

const getAll = async (): Promise<Order[]> => {
  const orders = await ordersModel.getAll();
  return orders;
};

export default { getAll, create };