import { Carrinho } from "./carrinho";

export enum Cargo {
  ADMIN = "ADMIN",
  USER = "USER",
}

export interface User {
  id: number;
  nome: string;
  email: string;
  cargo: Cargo;
  carrinho: Carrinho;
}
