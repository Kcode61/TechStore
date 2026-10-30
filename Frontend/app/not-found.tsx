import { ArrowLeft, ArrowUpRight, PackageSearch } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-[calc(100svh-73px)] items-center overflow-hidden bg-[#F8FAFC] text-[#0F172A] dark:bg-[#09090B] dark:text-white">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(53,103,244,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(53,103,244,0.035)_1px,transparent_1px)] bg-[size:48px_48px] dark:bg-[linear-gradient(rgba(125,156,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(125,156,255,0.045)_1px,transparent_1px)]" />

      <section className="relative mx-auto grid w-full max-w-[1340px] items-center gap-12 px-4 py-16 md:grid-cols-[1fr_0.9fr] md:px-6 md:py-24">
        <div className="max-w-xl">
          <p className="mb-6 flex items-center gap-2 font-mono text-[10px] uppercase text-[#3567F4] sm:text-xs">
            <span className="h-2 w-2 bg-[#3567F4]" />
            TechStore / erro 404
          </p>

          <h1 className="font-inter text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Parece que este endereço saiu de linha.
          </h1>
          <p className="mt-5 max-w-md font-inter text-base leading-7 text-[#73839A] dark:text-[#9AA6B8] md:text-lg">
            A página que você procura não está por aqui. Que tal descobrir algo
            novo no nosso catálogo?
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/produtos"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#0E1629] px-6 font-inter text-sm font-bold text-white transition-colors hover:bg-[#3567F4] dark:bg-[#3567F4] dark:hover:bg-[#2858DD]"
            >
              Explorar produtos
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
            <Link
              href="/"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#DDE1E7] px-6 font-inter text-sm font-bold text-[#0F172A] transition-colors hover:border-[#3567F4] hover:text-[#3567F4] dark:border-[#34363D] dark:text-white dark:hover:border-[#7D9CFF] dark:hover:text-[#7D9CFF]"
            >
              <ArrowLeft size={16} />
              Voltar ao início
            </Link>
          </div>

          <p className="mt-10 font-mono text-[10px] uppercase text-[#73839A] dark:text-[#9AA6B8]">
            Ref. 404&nbsp;&nbsp;·&nbsp;&nbsp;Página não encontrada
          </p>
        </div>

        <div
          aria-hidden="true"
          className="relative flex min-h-[280px] items-center justify-center border-y border-[#DDE1E7] py-10 dark:border-[#34363D] md:min-h-[420px]"
        >
          <span className="select-none font-mono text-[clamp(8rem,20vw,18rem)] font-bold leading-none text-[#E8EEF9] dark:text-[#171D2A]">
            404
          </span>
          <div className="absolute flex h-24 w-24 items-center justify-center border border-[#3567F4]/30 bg-[#F8FAFC] text-[#3567F4] dark:bg-[#09090B] dark:text-[#7D9CFF] md:h-32 md:w-32">
            <PackageSearch size={54} strokeWidth={1.3} className="md:hidden" />
            <PackageSearch
              size={72}
              strokeWidth={1.2}
              className="hidden md:block"
            />
          </div>
          <span className="absolute bottom-5 right-0 font-mono text-[10px] uppercase text-[#73839A] dark:text-[#9AA6B8]">
            item não localizado
          </span>
        </div>
      </section>
    </main>
  );
}
