import { ArrowUpRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function InfosSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1340px] px-6">
        <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-2 lg:gap-20">
          <div className="flex flex-col gap-8">
            <div className="flex items-baseline gap-4 border-b border-[#E5E7EB] pb-6">
              <span className="font-jet text-xs uppercase tracking-[0.2em] text-[#73839A]">
                01
              </span>

              <h2 className="font-inter text-3xl font-bold leading-tight text-black md:text-3xl">
                Feito pra quem leva tecnologia a sério
              </h2>
            </div>

            <p className="max-w-lg font-inter text-lg leading-relaxed text-[#73839A]">
              A gente filtra o barulho do mercado e fica só com o que vale. Cada
              item passou por curadoria — do setup ao acessório — para você
              comprar com clareza e sem arrependimento.
            </p>

            <Link
              href="/produtos"
              className="group flex w-fit items-center gap-2 rounded-full bg-[#0E1629] px-8 py-3 text-sm font-bold text-white transition duration-300 hover:bg-[#3567F4]"
            >
              Explorar catálogo
              <ArrowUpRight
                size={17}
                className="transition-all duration-200 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>

            <div className="mt-2 h-px w-full bg-[#E5E7EB]" />

            <div className="flex items-center justify-between gap-6 pt-2">
              <div className="flex flex-col gap-1">
                <h3 className="font-jet text-2xl font-semibold text-black">
                  +20
                </h3>

                <span className="font-inter text-xs uppercase tracking-wide text-[#73839A]">
                  Produtos
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="flex items-center gap-2 font-jet text-2xl font-semibold text-black">
                  4.8
                  <Star size={15} fill="black" />
                </h3>

                <span className="font-inter text-xs uppercase tracking-wide text-[#73839A]">
                  Avaliação
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="font-jet text-2xl font-semibold text-black">
                  100%
                </h3>

                <span className="font-inter text-xs uppercase tracking-wide text-[#73839A]">
                  Selecionado
                </span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="group relative h-[340px] w-full overflow-hidden rounded-3xl bg-[#F1F5F9] lg:h-[450px]">
              <Image
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
                alt="Setup tech"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-[#0F172A]/10 to-transparent" />

              <div className="absolute bottom-6 left-6">
                <span className="rounded-full bg-white/15 px-4 py-2 font-mono text-[10px] uppercase tracking-wider text-white backdrop-blur-md">
                  Curadoria 2026
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
