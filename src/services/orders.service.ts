import ordersModel from '../models/orders.model';
import { Order } from '../types';

// const create = async (product: Product): Promise<Product> => {
//   const productCreated = await productsModel.create(product);
//   return productCreated;
// };

async function getAll(): Promise<Order[]> {
  const orders = await ordersModel.getAll();
  return orders;
}

export default { getAll };