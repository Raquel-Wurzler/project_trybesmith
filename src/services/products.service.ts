import productsModel from '../models/products.model';
import { Product } from '../types';

const create = async (product: Product): Promise<Product> => {
  const productCreated = await productsModel.create(product);
  return productCreated;
};

const getAll = async (): Promise<Product[]> => {
  const products = await productsModel.getAll();
  return products;
};

const update = async (productId: number, orderId: number): Promise<Product> => {
  const productUpdated = await productsModel.update(productId, orderId);
  return productUpdated;
};

export default { create, getAll, update };