"use client";
import { useEffect, useState } from "react";
import {
  buscarUsuarioLogado,
  listarCarrinho,
  removerDoCarrinho,
  valorTotalCarrinho,
} from "../Services/api";
import { Carrinho } from "../types/carrinho";
import {
  ArrowUpRight,
  LucideShoppingBag,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function carrinho() {
  const [carrinhoItens, setCarrinho] = useState<Carrinho | null>(null);
  const [subtotal, setSubtotal] = useState<number>(0);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
    }
  }, [router]);

  const handleRemover = async (produtoId: number) => {
    try {
      await removerDoCarrinho(produtoId);

      setCarrinho((prev) => {
        if (!prev) return prev;

        return {
          ...prev,
          carrinhoItemList: prev.carrinhoItemList.filter(
            (item) => item.produto.id !== produtoId,
          ),
        };
      });
    } catch (error) {
      console.error("Erro ao remover produto:", error);
    }
  };
  useEffect(() => {
    async function carregarCarrinho() {
      try {
        const dados = await listarCarrinho();
        setCarrinho(dados);
      } catch (error) {
        console.error(error);
      }
    }

    carregarCarrinho();
  }, []);
  function onCheckout() {
    router.push("/");
  }
  useEffect(() => {
    async function carregarValorTotal() {
      try {
        const dados = await valorTotalCarrinho();
        setSubtotal(dados);
      } catch (error) {
        console.error(error);
      }
    }

    carregarValorTotal();
  }, []);
  const formatCurrency = (value: number) =>
    value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  return (
    <section className=" bg-[#F8F9FB] py-16">
      <div className="mx-auto max-w-[1340px] px-6">
        <h2 className="font-inter text-4xl font-bold text-black ">Carrinho</h2>

        {!carrinhoItens?.carrinhoItemList?.length ? (
          <div className="flex min-h-[300px] flex-col items-center justify-center gap-5 py-5 text-[#73839A]">
            <div className="relative">
              <div className="absolute inset-0 animate-pulse rounded-full bg-[#3567F4]/10 blur-xl" />

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
                Seu carrinho está vazio
              </h3>

              <p className="max-w-xl mb-4 text-center font-jet text-sm leading-relaxed text-[#73839A]">
                Explore nossos produtos e adicione itens ao carrinho.
              </p>
              <Link
                href="/produtos"
                className="flex gap-2 mb-2 text-sm text-white w-fit group font-bold font-inter items-center rounded-full py-3 cursor-pointer px-8 bg-[#0E1629] hover:bg-gradient-to-r from-[#3567F4] to-[#3567F4] transition ease duration-300 "
              >
                Ver produtos
                <ArrowUpRight
                  size={17}
                  className="transition-all ease duration-200 group-hover:-translate-y-1 group-hover:translate-1"
                />
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 py-10 md:grid-cols-3">
            <div className="flex flex-col gap-4 md:col-span-2">
              {carrinhoItens?.carrinhoItemList.map((item) => (
                <div
                  key={item.itemId}
                  className="flex min-h-[130px] items-center gap-4 rounded-xl border border-[#E1E5EB] bg-white p-4"
                >
                  <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-xl bg-[#F8F9FB]">
                    <img
                      src={item.produto.produtoImage}
                      alt={item.produto.produtoNome}
                      className="h-20 w-20 object-contain"
                    />
                  </div>

                  <div className="flex h-full flex-1 flex-col justify-between">
                    <div>
                      <h3 className="font-inter text-sm font-bold text-[#111827]">
                        {item.produto.produtoNome}
                      </h3>

                      <p className="mt-1 text-sm text-[#64748B]">
                        {item.produto.produtoValor.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}{" "}
                        / unidade
                      </p>
                    </div>

                    <div className="mt-5 flex w-fit items-center overflow-hidden rounded-full border border-[#E1E5EB]">
                      <button
                        type="button"
                        className="flex h-8 w-9 items-center justify-center text-[#64748B] transition hover:bg-[#F8F9FB] hover:text-black"
                      >
                        <Minus size={15} />
                      </button>

                      <span className="flex h-8 w-9 items-center justify-center text-sm font-medium text-black">
                        {item.quantidade}
                      </span>

                      <button
                        type="button"
                        className="flex h-8 w-9 items-center justify-center text-[#64748B] transition hover:bg-[#F8F9FB] hover:text-black"
                      >
                        <Plus size={15} />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center gap-5">
                    <span className="font-inter text-sm font-bold text-[#111827]">
                      {(
                        item.produto.produtoValor * item.quantidade
                      ).toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </span>

                    <button
                      onClick={() => handleRemover(item.produto.id)}
                      type="button"
                      className="text-[#64748B] transition hover:text-red-500"
                      title="Remover produto"
                    >
                      <Trash2 size={17} strokeWidth={1.7} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <aside className="sticky top-24 flex flex-col rounded-xl border border-[#E2E8F0] bg-white p-5">
              <header className="mb-4 flex items-center gap-2">
                <ShoppingBag size={18} className="text-[#2D5BFF]" />
                <h2 className="text-base font-semibold text-[#0F172A]">
                  Resumo do pedido
                </h2>
              </header>

              <div className="flex flex-col gap-3 border-b border-[#E2E8F0] pb-4">
                {carrinhoItens?.carrinhoItemList.map((item) => (
                  <div key={item.itemId} className="flex items-center gap-3">
                    <img
                      src={item.produto.produtoImage}
                      alt={item.produto.produtoNome}
                      className="h-12 w-12 rounded-lg object-cover"
                    />
                    <div className="flex flex-1 flex-col">
                      <p className="line-clamp-1 text-sm font-medium text-[#0F172A]">
                        {item.produto.produtoNome}
                      </p>
                      <span className="text-xs text-[#73839A]">
                        Qtd: {item.quantidade}
                      </span>
                    </div>
                    <span className="text-sm font-semibold text-[#0F172A]">
                      {formatCurrency(
                        item.produto.produtoValor * item.quantidade,
                      )}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between py-4">
                <span className="text-sm text-[#73839A]">Subtotal</span>
                <span className="text-sm font-semibold text-[#0F172A]">
                  {formatCurrency(subtotal)}
                </span>
              </div>

              <div className="mb-4 flex items-center justify-between border-t border-[#E2E8F0] pt-4">
                <span className="text-base font-semibold text-[#0F172A]">
                  Total
                </span>
                <span className="text-xl font-bold text-[#0F172A]">
                  {formatCurrency(subtotal)}
                </span>
              </div>

              <button
                onClick={onCheckout}
                className="w-full rounded-full bg-[#2D5BFF] py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Finalizar compra
              </button>
            </aside>
          </div>
        )}
      </div>
    </section>
  );
}
