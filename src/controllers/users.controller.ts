import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import usersService from '../services/users.service';
import statusCodes from '../statusCodes';
// import { createToken } from '../auth';

import { User } from '../types';

// require('dotenv/config');

const SECRET = process.env.JWT_SECRET;

const createToken = (user: User) => {
  const payload = { id: user.id, user: user.username };
  const token = jwt.sign(payload, SECRET as string, { expiresIn: '1d', algorithm: 'HS256' });
  return token;
};

const erro = 'Ocorreu um erro';

const create = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    const userCreated = await usersService.create(user);
    const token = createToken(userCreated);
    return res.status(statusCodes.CREATED).json({ token });
  } catch (error) {
    return res.status(statusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: `${erro}: ${error}` });
  }
};

export default { create };