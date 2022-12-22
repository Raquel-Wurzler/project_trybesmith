import { RowDataPacket, ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import { Order } from '../types';

const create = async (userId: number): Promise<number> => {
  const [dataInserted] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.orders (user_id) VALUES (?)',
    [userId],
  );
  const { insertId } = dataInserted;
  return insertId;
};

const getAll = async (): Promise<Order[]> => {
  const [rows] = await connection.execute<RowDataPacket[] & Order[]>(
    `SELECT o.id, o.user_id AS userId, JSON_ARRAYAGG(pr.id) AS productsIds
    FROM Trybesmith.orders AS o
    INNER JOIN Trybesmith.products AS pr
    ON pr.order_id = o.id
    GROUP BY o.id;`,
  );
  
  return rows;
};

export default { getAll, create };
