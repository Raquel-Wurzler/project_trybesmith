import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../types';
import statusCodes from '../statusCodes';

require('dotenv/config');

const SECRET = process.env.JWT_SECRET || 'secret';

const createToken = (user: User) => {
  const payload = { id: user.id, username: user.username };
  const token = jwt.sign(payload, SECRET as string, { expiresIn: '1d', algorithm: 'HS256' });
  return token;
};

const validateToken = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(statusCodes.UNAUTHORIZED).send({ message: 'Token not found' });
  }
  try {
    const decoded = jwt.verify(token, SECRET);
    req.body.user = decoded;    
  } catch (error) {
    return res.status(statusCodes.UNAUTHORIZED).send({ message: 'Invalid token' }); 
  }
  return next();
};

export default { createToken, validateToken };