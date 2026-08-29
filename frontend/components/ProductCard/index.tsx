"use client";
import { adicionarAoCarrinho, buscarUsuarioLogado } from "@/app/Services/api";
import { Produto } from "@/app/types/produto";
import { User } from "@/app/types/user";
import { Check, ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const formatCurrency = (value: number) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
const [usuario, setUsuario] = useState<User | null>(null);
export function ProductCard({ product }: { product: Produto }) {
  useEffect(() => {
    async function carregarUsuario() {
      try {
        const data = await buscarUsuarioLogado();
        setUsuario(data);
      } catch {
        setUsuario(null);
      }
    }

    carregarUsuario();
  }, []);
  async function handleAdicionarCarrinho(produtoId: number) {
    try {
      const item = await adicionarAoCarrinho(produtoId);

      console.log("Adicionado ao carrinho:", item);
      setAdded(true);
      setTimeout(() => setAdded(false), 1500);
    } catch (error) {
      console.error("Erro:", error);
    }
  }
  const [added, setAdded] = useState(false);

  return (
    <Link
      href={`/produtos/${product.id}`}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-[#E2E8F0] bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
    >
      <div className="relative aspect-square overflow-hidden bg-[#F1F5F9]">
        <Image
          src={product.produtoImage}
          alt={product.produtoNome}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <button
          disabled={!usuario}
          onClick={() => handleAdicionarCarrinho(product.id)}
          className="absolute bottom-0 left-0 right-0 flex translate-y-full items-center justify-center gap-2 bg-[#2D5BFF] py-3 text-sm font-semibold text-white transition-transform duration-300 group-hover:translate-y-0"
        >
          {added ? <Check size={16} /> : <ShoppingCart size={16} />}
          {!usuario
            ? "Faça login para adicionar"
            : added
              ? "Adicionado!"
              : "Adicionar ao carrinho"}
        </button>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <span className="text-xs font-medium uppercase tracking-wide text-[#2D5BFF]">
          {product.produtoCategoria}
        </span>
        <h3 className="line-clamp-2 text-sm font-semibold text-[#0F172A]">
          {product.produtoNome}
        </h3>

        <div className="flex items-center gap-1">
          <Star size={14} className="fill-amber-400 text-amber-400" />
          <span className="text-xs font-medium text-[#0F172A]">
            {product.produtoReview.toFixed(1)}
          </span>
          <span className="text-xs text-[#73839A]">
            ({product.reviewsCount})
          </span>
        </div>

        <div className="mt-auto pt-1">
          <span className="text-lg font-bold text-[#0F172A]">
            {formatCurrency(product.produtoValor)}
          </span>
        </div>
      </div>
    </Link>
  );
}
