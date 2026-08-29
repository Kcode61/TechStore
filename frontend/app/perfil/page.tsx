"use client";

import {
  LogOut,
  User2Icon,
  Mail,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import { useEffect, useState } from "react";
import { buscarUsuarioLogado } from "../Services/api";
import { User } from "../types/user";
import { useRouter } from "next/navigation";

export default function Perfil() {
  const [usuario, setUsuario] = useState<User | null>(null);
  const router = useRouter();

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

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
    }
  }, [router]);

  function handleLogout() {
    localStorage.removeItem("token");
    window.location.href = "/login";
  }

  return (
    <section className=" bg-[#F8F9FB] py-16">
      <div className="mx-auto max-w-[1340px] px-6">
        <div className="mb-10">
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.25em] text-[#73839A]">
            Conta
          </p>

          <h1 className="font-inter text-4xl font-bold tracking-tight text-[#111318]">
            Minha conta
          </h1>

          <p className="mt-2 font-inter text-sm text-[#73839A]">
            Gerencie suas informações e configurações da conta.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
          <div className="overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white">
            <div className="border-b border-[#E5E7EB] px-8 py-8">
              <div className="flex items-center gap-5">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-[#ECEFFD] text-[#4F75F5]">
                  <User2Icon size={34} />
                </div>

                <div>
                  <h2 className="font-inter text-xl font-bold text-[#111318]">
                    {usuario?.nome || "Carregando..."}
                  </h2>

                  <p className="mt-1 font-mono text-xs tracking-wide text-[#73839A]">
                    {usuario?.email || "Carregando..."}
                  </p>

                  <span className="mt-3 inline-flex rounded-full bg-[#F1F3FF] px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-[#4F75F5]">
                    {usuario?.cargo || "Usuário"}
                  </span>
                </div>
              </div>
            </div>

            <div className="px-8 py-7">
              <div className="mb-6">
                <h3 className="font-inter text-base font-bold text-[#111318]">
                  Informações pessoais
                </h3>

                <p className="mt-1 font-inter text-sm text-[#73839A]">
                  Informações associadas à sua conta.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="rounded-xl border border-[#E5E7EB] p-5">
                  <div className="mb-3 flex items-center gap-2 text-[#73839A]">
                    <User2Icon size={16} />
                    <span className="font-mono text-[10px] uppercase tracking-wider">
                      Nome
                    </span>
                  </div>

                  <p className="font-inter text-sm font-semibold text-[#111318]">
                    {usuario?.nome || "—"}
                  </p>
                </div>

                <div className="rounded-xl border border-[#E5E7EB] p-5">
                  <div className="mb-3 flex items-center gap-2 text-[#73839A]">
                    <Mail size={16} />
                    <span className="font-mono text-[10px] uppercase tracking-wider">
                      Email
                    </span>
                  </div>

                  <p className="break-all font-inter text-sm font-semibold text-[#111318]">
                    {usuario?.email || "—"}
                  </p>
                </div>

                <div className="rounded-xl border border-[#E5E7EB] p-5">
                  <div className="mb-3 flex items-center gap-2 text-[#73839A]">
                    <ShieldCheck size={16} />
                    <span className="font-mono text-[10px] uppercase tracking-wider">
                      Cargo
                    </span>
                  </div>
                  <span
                    className={`inline-flex items-center rounded-md border px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider ${
                      usuario?.cargo === "ADMIN"
                        ? "border-[#7C5CFC]/20 bg-[#7C5CFC]/10 text-[#6941C6]"
                        : usuario?.cargo === "USER"
                          ? "border-[#4F75F5]/20 bg-[#4F75F5]/10 text-[#4F75F5]"
                          : "border-[#E5E7EB] bg-[#F5F6FA] text-[#73839A]"
                    }`}
                  >
                    {usuario?.cargo ?? "—"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-[#FECACA] bg-white p-6">
              <p className="font-inter text-sm font-bold text-[#111318]">
                Sair da conta
              </p>

              <p className="mt-2 font-inter text-xs leading-5 text-[#73839A]">
                Você precisará fazer login novamente para acessar sua conta.
              </p>

              <button
                type="button"
                onClick={handleLogout}
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-[#FECACA] bg-[#FEF2F2] px-4 py-3 font-inter text-sm font-bold text-[#DC2626] transition-all duration-300 hover:bg-[#FEE2E2]"
              >
                <LogOut size={16} />
                Sair da conta
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
