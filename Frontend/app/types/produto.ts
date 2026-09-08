export enum ProdutoCategoria {
  COMPONENTES = "COMPONENTES",
  CONTROLES = "CONTROLES",
  MONITORES = "MONITORES",
  PROCESSADORES = "PROCESSADORES",
  NOTEBOOKS = "NOTEBOOKS",
  PERIFERICOS = "PERIFERICOS",
  ACESSORIOS = "ACESSORIOS",
}
export interface Produto {
  id: number;
  produtoNome: string;
  produtoDescricao: string;
  produtoValor: number;
  produtoReview: number;
  reviewsCount: number;
  produtoImage: string;
  produtoCategoria: ProdutoCategoria;
}
