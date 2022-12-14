import usersModel from '../models/users.model';
import { User } from '../types';
import HttpException from '../shared/http.exception';

const create = async (user: User): Promise<User> => {
  const userCreated = await usersModel.create(user);
  return userCreated;
};

const getByUsername = async (username: string) => {
  const user = await usersModel.getByUsername(username);
  if (!user) {
    throw new HttpException(400, 'Invalid name or password');
  }
  return user;
};

export default { create, getByUsername };