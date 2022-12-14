import productsModel from '../models/products.model';
import { Product } from '../types';

const create = async (product: Product): Promise<Product> => {
  const productCreated = await productsModel.create(product);
  return productCreated;
};

export default { create };