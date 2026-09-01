import { Carrinho } from "../types/carrinho";
import { CarrinhoItem } from "../types/carrinhoitem";
import { ProdutoCategoria } from "../types/produto";
import { User } from "../types/user";

export async function listarProdutos() {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("Usuário não autenticado");
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/catalogo/filtrarprodutos`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    },
  );

  if (!response.ok) {
    throw new Error("Erro ao buscar produtos");
  }

  return await response.json();
}
export async function login(email: string, password: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    },
  );

  if (!response.ok) {
    throw new Error("Email ou senha inválidos");
  }

  const token = await response.text();

  localStorage.setItem("token", token);

  return token;
}
export async function excluirProduto(id: number) {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("Usuário não autenticado");
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/catalogo/${id}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    },
  );

  if (!response.ok) {
    throw new Error("Erro ao excluir produto");
  }

  return await response.text();
}
export async function adicionarProduto(
  nome: string,
  descricao: string,
  valor: number,
  review: number,
  imagem: string,
  produtoCategoria: ProdutoCategoria,
) {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("Usuário não autenticado");
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/catalogo/adicionarproduto`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome,
        review,
        valor,
        descricao,
        imagem,
        produtoCategoria,
      }),
    },
  );

  if (!response.ok) {
    if (response.status === 400) {
      throw new Error("Falha ao criar produto, verifique os dados");
    }

    if (response.status === 403) {
      throw new Error("Você não tem permissão para adicionar produtos");
    }

    throw new Error("Erro ao criar produto");
  }

  return await response.json();
}
export async function register(
  name: string,
  email: string,
  password: string,
  role: string,
) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/register`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        role,
      }),
    },
  );

  if (!response.ok) {
    if (response.status === 400) {
      throw new Error("Esse email já está cadastrado");
    }

    throw new Error("Erro ao criar conta");
  }

  const token = await response.text();

  localStorage.setItem("token", token);

  return token;
}
export async function listarCarrinho(): Promise<Carrinho> {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("Usuário não autenticado");
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/carrinho`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    },
  );

  if (!response.ok) {
    throw new Error("Erro ao buscar carrinho");
  }

  return response.json();
}
export async function removerDoCarrinho(produtoId: number): Promise<string> {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("Usuário não autenticado");
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/carrinho/${produtoId}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    },
  );

  if (!response.ok) {
    throw new Error("Erro ao remover produto do carrinho");
  }

  return response.text();
}
export async function listarCatalogo() {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("Usuário não autenticado");
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/catalogo`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    },
  );

  if (!response.ok) {
    throw new Error("Erro ao buscar produtos do catálogo");
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

export async function buscarUsuarioLogado(): Promise<User> {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("Usuário não autenticado");
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/users/me`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    },
  );

  if (!response.ok) {
    throw new Error("Erro ao buscar usuário");
  }

  return response.json();
}
