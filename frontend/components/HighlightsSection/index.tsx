"use client";

import { listarProdutos } from "@/app/Services/api";
import { Produto } from "@/app/types/produto";
import { LucideShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";
import { ProductCard } from "../ProductCard";

export function HighlightsSection() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function buscarProdutos() {
      try {
        const data = await listarProdutos();
        setProdutos(data);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      } finally {
        setLoading(false);
      }
    }

    buscarProdutos();
  }, []);

  if (loading) {
    return (
      <section className="bg-white py-24">
        <div className="mx-auto flex max-w-[1340px] items-center justify-center px-6">
          <p className="font-inter text-sm text-[#73839A]">
            Carregando produtos...
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1340px] px-6">
        <div className="flex items-baseline gap-4 border-b border-[#E5E7EB] pb-6">
          <span className="font-jet text-xs uppercase tracking-[0.2em] text-[#73839A]">
            02
          </span>

          <h2 className="font-inter text-3xl font-bold leading-tight text-black">
            Em destaque
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 py-5 md:grid-cols-2 lg:grid-cols-4">
          {produtos.length === 0 ? (
            <div className="col-span-full flex min-h-[300px] flex-col items-center justify-center gap-5 text-[#73839A]">
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
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {produtos.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
