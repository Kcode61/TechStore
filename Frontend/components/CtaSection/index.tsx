import {
  BadgeCheckIcon,
  Headphones,
  ShieldCheck,
  Sparkles,
  Truck,
} from "lucide-react";

export function CtaSection() {
  return (
    <section className="bg-white py-24 border-t border-[#E5E7EB]">
      <div className="mx-auto max-w-[1340px] px-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="grid grid-cols-1 p-4 rounded-xl border border-[#E5E7EB] md:grid-cols-2 gap-4 ">
            <div className="flex border-b border-r border-[#E5E7EB] items-start gap-3 py-2 sm:px-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#2D5BFF]/10 text-[#2D5BFF]">
                <ShieldCheck size={18} />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#0F172A]">
                  Compra segura
                </p>
                <p className="mt-1 text-xs text-[#73839A]">
                  Ambiente simulado, sem pagamento real.
                </p>
              </div>
            </div>
            <div className="flex border-b border-[#E5E7EB] items-start gap-3 py-2 sm:px-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#2D5BFF]/10 text-[#2D5BFF]">
                <Truck size={18} />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#0F172A]">
                  Envio rápido
                </p>
                <p className="mt-1 text-xs text-[#73839A]">
                  Entrega simulada em todo o Brasil.
                </p>
              </div>
            </div>
            <div className="flex border-r border-[#E5E7EB] items-start gap-3 py-2 sm:px-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#2D5BFF]/10 text-[#2D5BFF]">
                <BadgeCheckIcon size={18} />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#0F172A]">
                  Curadoria
                </p>
                <p className="mt-1 text-xs text-[#73839A]">
                  Tecnologia premium selecionada.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 py-2 sm:px-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#2D5BFF]/10 text-[#2D5BFF]">
                <Headphones size={18} />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#0F172A]">Suporte</p>
                <p className="mt-1 text-xs text-[#73839A]">
                  Atendimento técnico dedicado.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-xl border border-[#E5E7EB] bg-white p-6">
            <div>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#2D5BFF]/10 text-[#2D5BFF]">
                <Sparkles size={18} />
              </div>

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2D5BFF]">
                Tech Store
              </span>

              <h3 className="mt-3 text-2xl font-bold text-[#0F172A]">
                Encontre a tecnologia certa para o seu setup
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-[#73839A]">
                Explore nossa seleção de produtos, acessórios e equipamentos
                pensados para oferecer qualidade, desempenho e praticidade.
              </p>
            </div>

            <div className="mt-6 flex items-center justify-between rounded-xl bg-[#F8FAFC] p-4">
              <div>
                <p className="text-sm font-semibold text-[#0F172A]">
                  Tecnologia sem complicação.
                </p>
                <p className="mt-1 text-xs text-[#73839A]">
                  Escolha, compare e encontre o que combina com você.
                </p>
              </div>

              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#2D5BFF] text-white">
                <Sparkles size={16} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
