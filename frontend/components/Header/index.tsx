"use client";

import { buscarUsuarioLogado } from "@/app/Services/api";
import { User } from "@/app/types/user";
import { LogOut, User2Icon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Header() {
  const [usuario, setUsuario] = useState<User | null>(null);

  useEffect(() => {
    async function carregarUsuario() {
      try {
        const data = await buscarUsuarioLogado();
        setUsuario(data);
      } catch (error) {
        console.error("Erro ao carregar usuário:", error);
      }
    }

    carregarUsuario();
  }, []);

  return (
    <header className="border-b border-[#E5E7EB] bg-white py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#3567F4] font-inter font-bold text-white">
            TS
          </div>

          <h1 className="font-inter text-xl font-bold text-[#0F172A]">
            TechStore
          </h1>
        </div>

        {usuario ? (
          <div className="flex items-center gap-2">
            <Link
              href="/perfil"
              className="group flex items-center gap-3 rounded-xl border border-transparent px-3 py-2 transition-all duration-200 hover:border-[#E5E7EB] hover:bg-[#F8FAFC]"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#3567F4] transition-transform duration-200 group-hover:scale-105">
                <User2Icon size={17} />
              </div>

              <div className="hidden text-left sm:block">
                <p className="text-xs font-medium text-[#73839A]">Olá,</p>

                <p className="max-w-[140px] truncate text-sm font-semibold text-[#0F172A]">
                  {usuario.nome}
                </p>
              </div>
            </Link>

            <div className="mx-1 hidden h-7 w-px bg-[#E5E7EB] sm:block" />

            <button
              type="button"
              className="group flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-[#73839A] transition-all duration-200 hover:bg-[#FEF2F2] hover:text-[#DC2626]"
            >
              <LogOut
                size={17}
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              />

              <span className="hidden sm:block">Sair</span>
            </button>
          </div>
        ) : (
          <Link
            href="/login"
            className="flex items-center gap-2 rounded-xl bg-[#0F172A] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#3567F4] hover:shadow-md hover:shadow-[#3567F4]/20"
          >
            Entrar
          </Link>
        )}
      </div>
    </header>
  );
}
