export type Product = {
  id?: number,
  name: string,
  amount: string,
  orderId?: number,
};

export type User = {
  id?: number,
  username: string,
  vocation: string,
  level: number,
  password?: string
};

export type Order = {
  id?: number,
  userId: number
};

export type Login = {
  username: string,
  password: string
};

export type Error = {
  status: number,
  message: string
};

export type Password = {
  password: string
};

export type ProductsIds = {
  productsIds: number[]
};