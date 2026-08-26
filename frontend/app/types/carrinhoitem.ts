import { Carrinho } from "./carrinho";
import { Produto } from "./produto";

export interface CarrinhoItem {
  itemId: number;
  quantidade: number;
  produto: Produto;
  carrinho: Carrinho;
}
