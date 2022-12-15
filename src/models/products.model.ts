import { ResultSetHeader, RowDataPacket, OkPacket } from 'mysql2/promise';
import connection from './connection';
import { Product } from '../types';

const create = async (product: Product): Promise<Product> => {
  const { name, amount } = product;
  const result = await connection.execute<ResultSetHeader & Product>(
    'INSERT INTO Trybesmith.products(name, amount) VALUES (?, ?)',
    [name, amount],
  );
  const [dataInserted] = result;
  const { insertId } = dataInserted;
  return { id: insertId, ...product };
};

const getAll = async (): Promise<Product[]> => {
  const [rows] = await connection.execute<RowDataPacket[] & Product[]>(
    'SELECT * FROM Trybesmith.products',
  );

  return rows;
};

const update = async (productId: number, orderId: number): Promise<Product> => {
  const [rows] = await connection.execute<OkPacket & Product>(
    `UPDATE Trybesmith.products
    SET order_id = ?
    WHERE id = ?`,
    [orderId, productId],
  );

  return rows;
};

export default { create, getAll, update };
