import jwt from 'jsonwebtoken';
import { User } from '../types';

// require('dotenv/config');

const SECRET = process.env.JWT_SECRET;

const createToken = (user: User) => {
  const payload = { id: user.id, username: user.username };
  const token = jwt.sign(payload, SECRET as string, { expiresIn: '1d', algorithm: 'HS256' });
  return token;
};

// const validateToken = async (req, res, next) => {
//   const token = req.headers.authorization;
//   if (!token) {
//     return res.status(401).send({ message: 'Token not found' });
//   }
//   try {
//     const decoded = jwt.verify(token, SECRET);
//     req.user = decoded;
//   } catch (error) {
//     return res.status(401).send({ message: 'Expired or invalid token' }); 
//   }
//   return next();
// };

export default { createToken };