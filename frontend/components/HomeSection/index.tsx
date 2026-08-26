import { ArrowUpRight, User2Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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
  return (
    <section className="pt-32  bg-white">
      <div className="max-w-[1340px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col  gap-6">
            <p className="font-mono text-xs mb-4 uppercase tracking-[0.2em] text-[#73839A]">
              Edição 2026 — Curadoria tech
            </p>

            <h1 className="font-inter font-bold text-5xl  md:text-7xl  text-black">
              Tecnologia <br /> que{" "}
              <span className="text-[#3567F4]">vale a pena.</span>
            </h1>
            <p className="text-lg font-inter max-w-sm  text-[#73839A]">
              Setup, produtividade e entretenimento. Selecionamos o que importa
              — sem enrolação, pelo preço justo.
            </p>
            <div className="flex mt-2 gap-2 items-center flex-col md:flex-row">
              <Link
                href="/produtos"
                className="flex gap-2 mb-2 text-white w-fit group font-bold font-inter items-center rounded-full py-3 cursor-pointer px-8 bg-[#0E1629] hover:bg-gradient-to-r from-[#3567F4] to-[#3567F4] transition ease duration-300 "
              >
                Ver produtos
                <ArrowUpRight
                  size={17}
                  className="transition-all ease duration-200 group-hover:-translate-y-1 group-hover:translate-1"
                />
              </Link>
              <Link
                href="/register"
                className="flex gap-2 mb-2 text-[#6b7c94] w-fit hover:text-white group font-bold font-inter items-center rounded-full py-3 cursor-pointer px-8 border border-[#E5E7EB] hover:border-[#0E1629]   hover:bg-[#0E1629] bg-white transition ease duration-300 "
              >
                Criar conta
                <User2Icon
                  size={17}
                  className="transition-all ease duration-200 group-hover:-translate-y-1 "
                />
              </Link>
            </div>
            <div className="flex gap-4 mt-4 items-center">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#73839A]">
                +20 produtos
              </p>

              <div className="w-px h-3 bg-[#E5E7EB]"></div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#73839A]">
                8 categorias
              </p>
              <div className="w-px h-3 bg-[#E5E7EB]"></div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#73839A]">
                4.8★ avaliação
              </p>
            </div>
          </div>
          <div className="">
            <Link
              href="/produtos"
              className="group relative block h-full min-h-[340px] overflow-hidden rounded-2xl bg-[#F1F5F9]"
            >
              <Image
                src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=1200&q=80"
                alt="Setup tech"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-[#0F172A]/10 to-transparent" />

              <div className="absolute left-5 top-5">
                <span className="rounded-full bg-white/15 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-white backdrop-blur">
                  Edição 2026
                </span>
              </div>

              <div className="absolute inset-x-5 bottom-5 flex items-end justify-between">
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-white/70">
                    Seleção
                  </p>
                  <p className="mt-1 text-xl font-bold text-white">
                    Setups que rendem
                  </p>
                </div>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0F172A] transition group-hover:bg-[#2D5BFF] group-hover:text-white">
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
                className="flex items-center gap-8 font-mono text-xs uppercase tracking-[0.2em] text-white/70"
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
