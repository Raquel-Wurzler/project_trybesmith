import usersModel from '../models/users.model';
import { User } from '../types';

const create = async (user: User): Promise<User> => {
  const userCreated = await usersModel.create(user);
  return userCreated;
};

// async function getAll(): Promise<Product[]> {
//   const products = await productsModel.getAll();
//   return products;
// }

export default { create };