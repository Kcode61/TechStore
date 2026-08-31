"use client";

import { useEffect, useState } from "react";
import { Produto, ProdutoCategoria } from "../types/produto";
import { listarCatalogo } from "../Services/api";
import { Check, LucideShoppingBag, Plus, ShoppingCart } from "lucide-react";
import { adicionarProduto as adicionarProdutoApi } from "../Services/api";
import { ProductCard } from "@/components/ProductCard";

export default function AdminPainel() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [loading, setLoading] = useState(true);
  const [nome, setNome] = useState("");
  const [categoria, setCategoria] = useState<ProdutoCategoria>(
    ProdutoCategoria.PERIFERICOS,
  );
  const [valor, setValor] = useState("");
  const [imagem, setImagem] = useState("");
  const [descricao, setDescricao] = useState("");
  const [adicionando, setAdicionando] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function buscarProdutos() {
      try {
        const data = await listarCatalogo();
        setProdutos(data);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      } finally {
        setLoading(false);
      }
    }

    buscarProdutos();
  }, []);

  async function handleAdicionarProduto(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const produto = await adicionarProdutoApi(
        nome,
        descricao,
        Number(valor),
        0,
        imagem,
        categoria,
      );

      setProdutos((prevProdutos) => [...prevProdutos, produto]);
      setAdicionando(true);
      setTimeout(() => setAdicionando(true), 2000);
      console.log("Produto criado:", produto);
    } catch (error) {
      setError("Erro ao adicionar produto:" + (error as Error).message);
    }
  }

  return (
    <section className="min-h-screen bg-white py-16">
      <div className="mx-auto max-w-[1340px] px-6">
        <div className="flex flex-col gap-2 border-b border-[#E5E7EB] py-5">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#73839A]">
            Painel administrativo
          </p>

          <div className="flex flex-wrap items-end justify-between gap-3">
            <h2 className="font-inter text-4xl font-bold text-black">
              Produtos
            </h2>

            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#73839A]">
              {loading
                ? "Carregando..."
                : `${produtos.length} produto(s) encontrado(s)`}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 py-10 md:grid-cols-3">
          <div className="rounded-2xl border border-[#E0E3E8] bg-white p-8">
            <div className="mb-7">
              <h3 className="font-inter text-lg font-bold text-black">
                Adicionar produto
              </h3>

              <p className="mt-1 font-inter text-sm text-[#73839A]">
                Preencha as informações e salve no estoque.
              </p>
            </div>

            <form
              onSubmit={handleAdicionarProduto}
              className="flex flex-col gap-5"
            >
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="nome"
                  className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#73839A]"
                >
                  Nome
                </label>

                <input
                  id="nome"
                  type="text"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Ex: Teclado Mecânico"
                  className="h-12 w-full rounded-xl border border-[#DDE1E7] bg-white px-4 font-inter text-sm text-[#111827] outline-none transition placeholder:text-[#A0AABC] focus:border-[#111827]"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="categoria"
                    className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#73839A]"
                  >
                    Categoria
                  </label>

                  <select
                    id="categoria"
                    value={categoria}
                    onChange={(e) =>
                      setCategoria(e.target.value as ProdutoCategoria)
                    }
                    className="h-12 w-full rounded-xl border border-[#DDE1E7] bg-white px-4 font-inter text-sm text-[#111827] outline-none transition focus:border-[#111827]"
                  >
                    {Object.values(ProdutoCategoria).map((categoria) => (
                      <option key={categoria} value={categoria}>
                        {categoria.toLocaleLowerCase()}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="valor"
                    className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#73839A]"
                  >
                    Valor (R$)
                  </label>

                  <input
                    id="valor"
                    type="number"
                    step="0.01"
                    min="0"
                    value={valor}
                    onChange={(e) => setValor(e.target.value)}
                    placeholder="0,00"
                    className="h-12 w-full rounded-xl border border-[#DDE1E7] bg-white px-4 font-inter text-sm text-[#111827] outline-none transition placeholder:text-[#A0AABC] focus:border-[#111827]"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="imagem"
                  className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#73839A]"
                >
                  URL da imagem
                </label>

                <input
                  id="imagem"
                  type="url"
                  value={imagem}
                  onChange={(e) => setImagem(e.target.value)}
                  placeholder="https://..."
                  className="h-12 w-full rounded-xl border border-[#DDE1E7] bg-white px-4 font-inter text-sm text-[#111827] outline-none transition placeholder:text-[#A0AABC] focus:border-[#111827]"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="descricao"
                  className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#73839A]"
                >
                  Descrição
                </label>

                <textarea
                  id="descricao"
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                  placeholder="Detalhes do produto"
                  rows={4}
                  className="w-full resize-none rounded-xl border border-[#DDE1E7] bg-white px-4 py-3 font-inter text-sm text-[#111827] outline-none transition placeholder:text-[#A0AABC] focus:border-[#111827]"
                  required
                />
              </div>

              <button
                type="submit"
                className="mt-2 flex h-11 w-full items-center justify-center gap-2 rounded-full bg-[#111426] font-inter text-sm font-bold text-white transition-all duration-300 ease hover:bg-[#1B2038] active:scale-[0.98]"
              >
                {adicionando ? <Check size={16} /> : <ShoppingCart size={16} />}
                {adicionando ? "Adicionado!" : "Adicionar produto"}
              </button>
            </form>
          </div>

          <div className="md:col-span-2">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {loading ? (
                <div className="grid grid-cols-2 gap-4 py-5 md:grid-cols-3 lg:grid-cols-4">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div
                      key={i}
                      className="flex animate-pulse flex-col gap-3 rounded-2xl border border-[#E5E7EB] p-3"
                    >
                      <div className="aspect-square rounded-xl bg-[#F1F5F9]" />
                      <div className="h-3 w-3/4 rounded bg-[#F1F5F9]" />
                      <div className="h-3 w-1/2 rounded bg-[#F1F5F9]" />
                    </div>
                  ))}
                </div>
              ) : produtos.length === 0 ? (
                <div className="flex min-h-[300px] flex-col items-center justify-center gap-5 py-5 text-[#73839A]">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-[#3567F4]/10 blur-xl animate-pulse" />
                    <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-[#E5E7EB] bg-white shadow-sm">
                      <LucideShoppingBag
                        size={36}
                        strokeWidth={1.5}
                        className="text-[#3567F4]"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col items-center gap-2">
                    <h3 className="font-inter text-lg font-bold text-[#0E1629]">
                      Estoque vazio
                    </h3>
                    <p className="max-w-xl text-center font-jet text-sm leading-relaxed text-[#73839A]">
                      Parece que ainda não há produtos disponíveis. Espere o
                      Kauan colocar novos produtos no estoque.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-4 py-5 md:grid-cols-3 lg:grid-cols-4">
                  {produtos.map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
