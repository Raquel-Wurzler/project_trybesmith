import productsModel from '../models/products.model';
import { Product } from '../types';

const create = async (product: Product): Promise<Product> => {
  const productCreated = await productsModel.create(product);
  return productCreated;
};

async function getAll(): Promise<Product[]> {
  const products = await productsModel.getAll();
  return products;
}

export default { create, getAll };