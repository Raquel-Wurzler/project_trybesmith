import { Request, Response } from 'express';
import usersService from '../services/users.service';
import statusCodes from '../statusCodes';
import createToken from '../auth';

const erro = 'Ocorreu um erro';

const create = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    const userCreated = await usersService.create(user);
    const token = createToken.createToken(userCreated);
    return res.status(statusCodes.CREATED).json({ token });
  } catch (error) {
    return res.status(statusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: `${erro}: ${error}` });
  }
};

const login = async (req: Request, res: Response) => {
  try {
    const { username } = req.body;
    const users = await usersService.getAll();
    const isValidUsername = users.some((u) => u.username === username);
    if (!isValidUsername) {
      const message = 'Username or password invalid';
      return res.status(statusCodes.UNAUTHORIZED).json(message);
    }
    const user = await usersService.getByUsername(username);
    const token = createToken.createToken(user);
    return res.status(statusCodes.OK).json({ token });
  } catch (error) {
    return res.status(statusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: `${erro}: ${error}` });
  }
};

export default { create, login };