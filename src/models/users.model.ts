import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import { User } from '../types';

const create = async (user: User): Promise<User> => {
  const { username, vocation, level, password } = user;
  const result = await connection.execute<ResultSetHeader & User>(
    `INSERT INTO Trybesmith.users(username, vocation, level, password)
    VALUES (?, ?, ?, ?)`,
    [username, vocation, level, password],
  );
  const [dataInserted] = result;
  const { insertId } = dataInserted;
  return { id: insertId, ...user };
};

// async function getAll(): Promise<Product[]> {
//   const [rows] = await connection.execute<RowDataPacket[] & Product[]>(
//     'SELECT * FROM Trybesmith.products',
//   );

//   return rows;
// }

export default { create };