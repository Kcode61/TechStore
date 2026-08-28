"use client";
import { useState } from "react";
import { LogIn, Mail, LockKeyhole } from "lucide-react";
import { login } from "../Services/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");

      await login(email, password);

      window.location.href = "/";
    } catch (error) {
      setError(error instanceof Error ? error.message : "Erro ao fazer login");
    } finally {
      setLoading(false);
    }
  }
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-[1340px] px-6">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#3567F4] text-white">
              <LogIn size={26} />
            </div>

            <h1 className="font-inter text-2xl font-bold text-black">
              Bem vindo de volta
            </h1>

            <p className="font-mono text-sm text-[#73839A]">
              Faça login para continuar
            </p>
          </div>

          <div className="w-full max-w-[450px] rounded-xl border border-[#E5E7EB] p-8 shadow-sm">
            <form onSubmit={handleLogin} className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-[#111827]"
                >
                  Email
                </label>

                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#73839A]"
                  />
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="h-12 w-full rounded-lg border border-[#E5E7EB] bg-white pl-11 pr-4 text-sm text-black outline-none transition placeholder:text-[#73839A] focus:border-[#3567F4] focus:ring-2 focus:ring-[#3567F4]/10"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium text-[#111827]"
                  >
                    Senha
                  </label>

                  <button
                    type="button"
                    className="text-sm text-[#4F46E5] hover:underline"
                  >
                    Esqueceu a senha?
                  </button>
                </div>

                <div className="relative">
                  <LockKeyhole
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#73839A]"
                  />

                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="h-12 w-full rounded-lg border border-[#E5E7EB] bg-white pl-11 pr-4 text-sm text-black outline-none transition placeholder:text-[#73839A] focus:border-[#3567F4] focus:ring-2 focus:ring-[#3567F4]/10"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="h-12 rounded-lg bg-[#3567F4] text-sm font-medium text-white transition hover:bg-[#2858DD] disabled:opacity-50"
              >
                {loading ? "Entrando..." : "Entrar"}
              </button>
            </form>
          </div>

          <p className="text-sm text-[#73839A]">
            Não tem uma conta?{" "}
            <a
              href="/register"
              className="font-medium text-[#4F46E5] hover:underline"
            >
              Crie uma
            </a>
          </p>
          {error && <p className="text-sm text-red-500">{error}</p>}
        </div>
      </div>
    </section>
  );
}
