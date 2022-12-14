import { ResultSetHeader } from 'mysql2/promise';
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

export default { create };
