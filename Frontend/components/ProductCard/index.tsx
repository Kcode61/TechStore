"use client";
import {
  adicionarAoCarrinho,
  buscarUsuarioLogado,
  excluirProduto,
} from "@/app/Services/api";
import { Produto } from "@/app/types/produto";
import { User } from "@/app/types/user";
import { Check, ShoppingCart, Star, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type MouseEvent } from "react";

export function ProductCard({
  product,
  onDelete,
}: {
  product: Produto;
  onDelete?: (productId: number) => void;
}) {
  const formatCurrency = (value: number) =>
    value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  const [usuario, setUsuario] = useState<User | null>(null);
  const [added, setAdded] = useState(false);
  const isAdmin = usuario?.cargo === "ADMIN";

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

  async function handleDeletarProduto(
    event: MouseEvent<HTMLButtonElement>,
    produtoId: number,
  ) {
    event.preventDefault();
    event.stopPropagation();

    if (!isAdmin || !onDelete) {
      return;
    }

    try {
      await excluirProduto(produtoId);
      onDelete(produtoId);
    } catch (error) {
      console.error("Erro ao excluir produto:", error);
    }
  }

  async function handleAdicionarCarrinho(
    event: MouseEvent<HTMLButtonElement>,
    produtoId: number,
  ) {
    event.preventDefault();
    event.stopPropagation();

    try {
      console.log("Adicionando produto:", produtoId);

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

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-[#E2E8F0] bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
      <div className="relative aspect-square overflow-hidden bg-[#F1F5F9]">
        {isAdmin && (
          <button
            type="button"
            aria-label={`Excluir ${product.produtoNome}`}
            onClick={(event) => handleDeletarProduto(event, product.id)}
            className="absolute right-4 top-4 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-red-500 shadow-sm transition hover:scale-105 hover:bg-white"
          >
            <Trash2 size={16} />
          </button>
        )}
        <Link href={`/produtos/${product.id}`} className="absolute inset-0">
          <Image
            src={product.produtoImage}
            alt={product.produtoNome}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
        <button
          type="button"
          disabled={!usuario}
          onClick={(event) => handleAdicionarCarrinho(event, product.id)}
          className="absolute bottom-0 left-0 right-0 z-10 flex cursor-pointer translate-y-full items-center justify-center gap-2 bg-[#2D5BFF] py-3 text-sm font-semibold text-white transition-transform duration-300 group-hover:translate-y-0"
        >
          {" "}
          {added ? <Check size={16} /> : <ShoppingCart size={16} />}{" "}
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
        <div className="flex justify-between">
          <Link href={`/produtos/${product.id}`}>
            <h3 className="line-clamp-2 text-sm hover:text-[#2D5BFF] font-semibold text-[#0F172A]">
              {product.produtoNome}
            </h3>
          </Link>
          <div className="flex items-center gap-1">
            <Star size={14} className="fill-amber-400 text-amber-400" />
            <span className="text-xs font-medium text-[#0F172A]">
              {product.produtoReview.toFixed(1)}
            </span>
            <span className="text-xs text-[#73839A]">
              ({product.reviewsCount})
            </span>
          </div>
        </div>

        <div className="mt-auto pt-1">
          <span className="text-lg font-bold text-[#0F172A]">
            {formatCurrency(product.produtoValor)}
          </span>
        </div>
      </div>
    </div>
  );
}
