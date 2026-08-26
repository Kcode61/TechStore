import { CarrinhoItem } from "../types/carrinhoitem";

export async function listarProdutos() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/catalogo/filtrarprodutos`,
    {
      method: "GET",
    },
  );

  if (!response.ok) {
    throw new Error("Erro ao buscar produtos");
  }

  return await response.json();
}
export async function adicionarAoCarrinho(
  produtoId: number,
): Promise<CarrinhoItem> {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("Usuário não autenticado");
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/carrinho/${produtoId}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    },
  );

  if (!response.ok) {
    throw new Error("Erro ao adicionar produto ao carrinho");
  }

  return response.json();
}
