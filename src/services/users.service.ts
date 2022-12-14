import usersModel from '../models/users.model';
import { User } from '../types';

const create = async (user: User): Promise<User> => {
  const userCreated = await usersModel.create(user);
  return userCreated;
};

export default { create };