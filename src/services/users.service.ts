import usersModel from '../models/users.model';
import { User } from '../types';

const create = async (user: User): Promise<User> => {
  const userCreated = await usersModel.create(user);
  return userCreated;
};

const getByUsername = async (username: string) => {
  const user = await usersModel.getByUsername(username);

  return user as User;
};

const getAll = async (): Promise<User[]> => {
  const users = await usersModel.getAll();
  return users;
};

export default { create, getByUsername, getAll };