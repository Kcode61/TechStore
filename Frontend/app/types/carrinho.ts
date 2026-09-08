import { CarrinhoItem } from "./carrinhoitem";
import { User } from "./user";

export interface Carrinho {
  id: number;
  carrinhoItemList: CarrinhoItem[];
  user: User;
}
