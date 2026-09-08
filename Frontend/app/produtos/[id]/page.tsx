"use client";

import { adicionarAoCarrinho, buscarProdutoPorId } from "@/app/Services/api";
import { Produto } from "@/app/types/produto";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Star,
  ShoppingCart,
  Check,
  ShieldCheck,
  Truck,
  Package,
} from "lucide-react";
import Link from "next/link";

const formatCurrency = (value: number) =>
  value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

export default function ProductPage() {
  const params = useParams();
  const id = Number(params.id);

  const [produto, setProduto] = useState<Produto>();
  const [loading, setLoading] = useState(true);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    async function carregarProduto() {
      try {
        const produtoEncontrado = await buscarProdutoPorId(id);
        setProduto(produtoEncontrado);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    carregarProduto();
  }, [id]);

  async function handleAdicionarCarrinho(
    event: React.MouseEvent<HTMLButtonElement>,
    produtoId: number,
  ) {
    event.preventDefault();
    event.stopPropagation();

    try {
      const item = await adicionarAoCarrinho(produtoId);

      console.log("Adicionado ao carrinho:", item);

      setAdded(true);

      setTimeout(() => {
        setAdded(false);
      }, 1500);
    } catch (error) {
      console.error("Erro ao adicionar ao carrinho:", error);
    }
  }

  if (loading || !produto) {
    return (
      <main className="min-h-screen bg-[#F8FAFC]">
        <div className="mx-auto max-w-[1340px] px-6 py-20">
          <div className="h-8 w-48 animate-pulse rounded-lg bg-slate-200" />

          <div className="mt-10 grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="aspect-square animate-pulse rounded-3xl bg-slate-200" />

            <div className="space-y-5">
              <div className="h-5 w-32 animate-pulse rounded bg-slate-200" />
              <div className="h-12 w-3/4 animate-pulse rounded bg-slate-200" />
              <div className="h-10 w-40 animate-pulse rounded bg-slate-200" />
              <div className="h-24 w-full animate-pulse rounded bg-slate-200" />
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <div className="mx-auto max-w-[1340px] px-6 py-10 md:py-16">
        <div className="mb-8 flex items-center gap-2 text-sm text-[#73839A]">
          <Link href="/">Início</Link>
          <span>/</span>
          <Link href="/produtos">Produtos</Link>
          <span>/</span>
          <span className="font-medium text-[#0F172A]">
            {produto.produtoNome}
          </span>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="relative">
            <div className="group relative aspect-square overflow-hidden rounded-[28px] border border-[#E2E8F0] bg-white shadow-sm">
              <img
                src={produto.produtoImage}
                alt={produto.produtoNome}
                className="h-full w-full object-contain p-8 transition duration-500 group-hover:scale-[1.03] md:p-14"
              />

              <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#3567F3] shadow-sm backdrop-blur">
                {produto.produtoCategoria}
              </div>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3">
              <div className="flex flex-col items-center rounded-2xl border border-[#E2E8F0] bg-white p-4 text-center">
                <Truck size={20} className="mb-2 text-[#3567F3]" />
                <span className="text-xs font-semibold text-[#0F172A]">
                  Envio rápido
                </span>
              </div>

              <div className="flex flex-col items-center rounded-2xl border border-[#E2E8F0] bg-white p-4 text-center">
                <ShieldCheck size={20} className="mb-2 text-[#3567F3]" />
                <span className="text-xs font-semibold text-[#0F172A]">
                  Compra segura
                </span>
              </div>

              <div className="flex flex-col items-center rounded-2xl border border-[#E2E8F0] bg-white p-4 text-center">
                <Package size={20} className="mb-2 text-[#3567F3]" />
                <span className="text-xs font-semibold text-[#0F172A]">
                  Produto original
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <span className="mb-4 w-fit rounded-full bg-[#EEF4FF] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#3567F3]">
              {produto.produtoCategoria}
            </span>

            <h1 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-[#0F172A] md:text-5xl">
              {produto.produtoNome}
            </h1>

            <div className="mt-5 flex items-center gap-3">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={19}
                    strokeWidth={1.8}
                    className={
                      i < Math.round(produto.produtoReview)
                        ? "fill-amber-400 text-amber-400"
                        : "text-[#CBD5E1]"
                    }
                  />
                ))}
              </div>

              <span className="font-bold text-[#0F172A]">
                {produto.produtoReview.toFixed(1)}
              </span>

              <span className="text-sm text-[#73839A]">
                {produto.reviewsCount} avaliações
              </span>
            </div>

            <div className="my-7 h-px bg-[#E2E8F0]" />

            <div>
              <p className="mb-1 text-sm font-medium text-[#73839A]">
                Por apenas
              </p>

              <span className="text-4xl font-extrabold tracking-tight text-[#0F172A] md:text-5xl">
                {formatCurrency(produto.produtoValor)}
              </span>

              <p className="mt-2 text-sm text-[#73839A]">
                À vista no pagamento
              </p>
            </div>

            <div className="mt-7">
              <h2 className="mb-2 text-sm font-bold uppercase tracking-wide text-[#0F172A]">
                Sobre o produto
              </h2>

              <p className="max-w-xl text-[15px] leading-7 text-[#64748B]">
                {produto.produtoDescricao}
              </p>
            </div>

            <button
              onClick={(event) => handleAdicionarCarrinho(event, produto.id)}
              className={`mt-8 flex h-14 w-full items-center justify-center gap-3 rounded-2xl text-base font-bold text-white shadow-lg transition-all duration-200 ${
                added
                  ? "bg-emerald-500 shadow-emerald-500/20"
                  : "bg-[#3567F3] shadow-[#3567F3]/20 hover:-translate-y-0.5 hover:bg-[#2857DC] hover:shadow-xl"
              }`}
            >
              {added ? (
                <>
                  <Check size={20} strokeWidth={2.5} />
                  Adicionado ao carrinho
                </>
              ) : (
                <>
                  <ShoppingCart size={20} />
                  Adicionar ao carrinho
                </>
              )}
            </button>

            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-[#73839A]">
              <ShieldCheck size={15} />
              Compra protegida e segura
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-3xl border border-[#E2E8F0] bg-white p-7 shadow-sm md:p-10">
          <h2 className="text-xl font-bold text-[#0F172A]">
            Descrição do produto
          </h2>

          <p className="mt-4 max-w-4xl text-[15px] leading-7 text-[#64748B]">
            {produto.produtoDescricao}
          </p>
        </div>
      </div>
    </main>
  );
}
