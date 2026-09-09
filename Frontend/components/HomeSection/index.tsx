"use client";
import { buscarUsuarioLogado } from "@/app/Services/api";
import { User } from "@/app/types/user";
import { ArrowUpRight, User2Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
export function HomeSection() {
  const ITEMS = [
    "Notebooks",
    "Smartphones",
    "Monitores",
    "Periféricos",
    "Componentes",
    "Áudio",
    "Acessórios",
    "Gaming",
    "Setup",
    "Produtividade",
  ];
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

  return (
    <section className="bg-white pt-16 md:pt-32">
      <div className="mx-auto max-w-[1340px] px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex flex-col gap-6">
            <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#73839A] md:mb-4 md:text-xs">
              Edição 2026 — Curadoria tech
            </p>

            <h1 className="font-inter text-4xl font-bold leading-tight text-black sm:text-5xl md:text-7xl">
              Tecnologia <br /> que{" "}
              <span className="text-[#3567F4]">vale a pena.</span>
            </h1>
            <p className="max-w-sm text-base font-inter text-[#73839A] md:text-lg">
              Setup, produtividade e entretenimento. Selecionamos o que importa
              — sem enrolação, pelo preço justo.
            </p>
            <div className="mt-2 flex flex-col items-stretch gap-2 sm:flex-row sm:items-center">
              <Link
                href="/produtos"
                className="group flex w-full items-center justify-center gap-2 rounded-full bg-[#0E1629] px-6 py-3 font-inter text-sm font-bold text-white transition duration-300 hover:bg-gradient-to-r hover:from-[#3567F4] hover:to-[#3567F4] sm:w-fit"
              >
                Ver produtos
                <ArrowUpRight
                  size={17}
                  className="transition-all duration-200 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>

              {usuario ? (
                <Link
                  href="/perfil"
                  className="group flex w-full items-center justify-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-6 py-3 font-inter text-sm font-bold text-[#6B7C94] shadow-sm transition-all duration-300 hover:border-[#0E1629] hover:bg-[#0E1629] hover:text-white hover:shadow-md sm:w-fit"
                >
                  Ver perfil
                  <User2Icon
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </Link>
              ) : (
                <Link
                  href="/register"
                  className="group flex w-full items-center justify-center gap-2 rounded-full bg-[#0E1629] px-6 py-3 font-inter text-sm font-bold text-white shadow-sm transition-all duration-300 hover:bg-[#1A2742] hover:shadow-md sm:w-fit"
                >
                  Criar conta
                  <User2Icon
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </Link>
              )}
            </div>
            <div className="mt-2 flex flex-wrap items-center gap-2 sm:gap-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#73839A] sm:text-xs">
                +20 produtos
              </p>

              <div className="hidden h-3 w-px bg-[#E5E7EB] sm:block" />
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#73839A] sm:text-xs">
                8 categorias
              </p>
              <div className="hidden h-3 w-px bg-[#E5E7EB] sm:block" />
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#73839A] sm:text-xs">
                4.8★ avaliação
              </p>
            </div>
          </div>
          <div className="">
            <Link
              href="/produtos"
              className="group relative block h-full min-h-[260px] overflow-hidden rounded-2xl bg-[#F1F5F9] md:min-h-[340px]"
            >
              <Image
                src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=1200&q=80"
                alt="Setup tech"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-[#0F172A]/10 to-transparent" />

              <div className="absolute left-4 top-4 md:left-5 md:top-5">
                <span className="rounded-full bg-white/15 px-3 py-1 font-mono text-[9px] uppercase tracking-wider text-white backdrop-blur sm:text-[10px]">
                  Edição 2026
                </span>
              </div>

              <div className="absolute inset-x-4 bottom-4 flex items-end justify-between md:inset-x-5 md:bottom-5">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-white/70 md:text-xs">
                    Seleção
                  </p>
                  <p className="mt-1 text-lg font-bold text-white md:text-xl">
                    Setups que rendem
                  </p>
                </div>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#0F172A] transition group-hover:bg-[#2D5BFF] group-hover:text-white md:h-10 md:w-10">
                  <ArrowUpRight size={18} />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="py-10">
        <div className="overflow-hidden border-b border-[#1E293B] bg-[#0F172A] py-3 text-white">
          <div className="flex w-max animate-marquee gap-8 whitespace-nowrap">
            {[...ITEMS, ...ITEMS].map((it, i) => (
              <span
                key={i}
                className="flex items-center gap-8 font-mono text-[10px] uppercase tracking-[0.2em] text-white/70 sm:text-xs"
              >
                {it}
                <span className="text-[#2D5BFF]">/</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
