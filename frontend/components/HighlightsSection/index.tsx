"use client";

import { listarProdutos } from "@/app/Services/api";
import { Produto } from "@/app/types/produto";
import { ArrowUpRight, LucideShoppingBag } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ProductCard } from "../ProductCard";

const LIMITE_DESTAQUES = 8;

export function HighlightsSection() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function buscarProdutos() {
      try {
        const data = await listarProdutos();
        setProdutos(data.slice(0, LIMITE_DESTAQUES));
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      } finally {
        setLoading(false);
      }
    }

    buscarProdutos();
  }, []);

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1340px] px-6">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[#E5E7EB] pb-6">
          <div className="flex items-baseline gap-4">
            <span className="font-jet text-xs uppercase tracking-[0.2em] text-[#73839A]">
              02
            </span>
            <h2 className="font-inter text-3xl font-bold leading-tight text-black">
              Em destaque
            </h2>
          </div>

          <Link
            href="/produtos"
            className="group flex items-center gap-1 font-mono text-xs uppercase tracking-[0.2em] text-[#73839A] transition-colors hover:text-[#3567F4]"
          >
            Ver todos
            <ArrowUpRight
              size={14}
              className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 gap-4 py-5 md:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: LIMITE_DESTAQUES }).map((_, i) => (
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
                Parece que ainda não há produtos disponíveis. Espere o Kauan
                colocar novos produtos no estoque.
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
    </section>
  );
}
