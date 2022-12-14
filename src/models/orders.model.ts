import { RowDataPacket } from 'mysql2/promise';
import connection from './connection';
import { Order } from '../types';

// const create = async (product: Product): Promise<Product> => {
//   const { name, amount } = product;
//   const result = await connection.execute<ResultSetHeader & Product>(
//     'INSERT INTO Trybesmith.products(name, amount) VALUES (?, ?)',
//     [name, amount],
//   );
//   const [dataInserted] = result;
//   const { insertId } = dataInserted;
//   return { id: insertId, ...product };
// };

async function getAll(): Promise<Order[]> {
  const [rows] = await connection.execute<RowDataPacket[] & Order[]>(
    `SELECT o.id, o.user_id AS userId, JSON_ARRAYAGG(pr.id) AS productsIds
    FROM Trybesmith.orders AS o
    INNER JOIN Trybesmith.products AS pr
    ON pr.order_id = o.id
    GROUP BY o.id;`,
  );
  
  return rows;
}

export default { getAll };
