"use client";

import { buscarUsuarioLogado } from "@/app/Services/api";
import { User } from "@/app/types/user";
import {
  ArrowUpRight,
  LogOut,
  ShoppingCartIcon,
  User2Icon,
} from "lucide-react";
import { usePathname } from "next/dist/client/components/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Header() {
  const [usuario, setUsuario] = useState<User | null>(null);
  const pathname = usePathname();

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
  }, [pathname]);
  function handleLogout() {
    localStorage.removeItem("token");
    window.location.href = "/login";
  }
  return (
    <header className="sticky top-0 z-50 border-b border-[#E5E7EB] bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1340px] items-center justify-between gap-4 py-4">
        <div className="flex items-center gap-12">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0E1629] font-inter font-bold text-white transition-colors duration-300 group-hover:bg-[#3567F4]">
              TS
            </div>
            <h1 className="font-inter text-xl font-bold text-[#0F172A]">
              TechStore
            </h1>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link
              className="font-mono text-xs uppercase tracking-[0.2em] text-[#73839A] transition-colors hover:text-[#0F172A]"
              href="/"
            >
              Home
            </Link>
            <Link
              className="font-mono text-xs uppercase tracking-[0.2em] text-[#73839A] transition-colors hover:text-[#0F172A]"
              href="/Produtos"
            >
              Produtos
            </Link>
          </nav>
        </div>

        {usuario ? (
          <div className="flex items-center gap-3">
            <Link
              href="/carrinho"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-[#0F172A] transition-all duration-300 hover:border-[#3567F4] hover:bg-[#EEF3FF] hover:text-[#3567F4]"
            >
              <ShoppingCartIcon size={18} />
            </Link>
            <Link
              href="/perfil"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-[#0F172A] transition-all duration-300 hover:border-[#3567F4] hover:bg-[#EEF3FF] hover:text-[#3567F4]"
            >
              <User2Icon size={18} />
            </Link>
            <button
              type="button"
              onClick={handleLogout}
              className="flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-5 py-2.5 font-inter text-sm font-bold text-[#64748B] transition-all duration-300 hover:border-[#FCA5A5] hover:bg-[#FEF2F2] hover:text-[#DC2626]"
            >
              <LogOut size={16} /> Sair
            </button>
          </div>
        ) : (
          <Link
            href="/login"
            className="group flex items-center gap-2 rounded-full bg-[#0E1629] px-8 py-3 font-inter text-sm font-bold text-white transition ease duration-300 hover:bg-gradient-to-r hover:from-[#3567F4] hover:to-[#3567F4]"
          >
            Entrar
            <ArrowUpRight
              size={16}
              className="transition-all ease duration-200 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>
        )}
      </div>
    </header>
  );
}
