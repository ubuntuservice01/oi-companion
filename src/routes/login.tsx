import { createFileRoute, Link } from "@tanstack/react-router";
import { Eye, EyeOff, LockKeyhole, Mail, Sparkles } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Entrar | OI Companion" },
      {
        name: "description",
        content: "Aceda à sua conta no OI Companion.",
      },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="relative flex min-h-screen overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.22),transparent_32%),radial-gradient(circle_at_80%_80%,rgba(168,85,247,0.18),transparent_30%)]" />

      <section className="relative hidden flex-1 flex-col justify-between p-10 lg:flex xl:p-14">
        <div>
          <div className="flex items-center gap-3 text-white">
            <div className="flex size-11 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15 backdrop-blur">
              <Sparkles className="size-5" />
            </div>
            <span className="text-lg font-semibold tracking-tight">OI Companion</span>
          </div>
        </div>

        <div className="max-w-xl">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.24em] text-indigo-300">
            Seu espaço inteligente
          </p>
          <h1 className="text-5xl font-semibold leading-[1.08] tracking-tight text-white xl:text-6xl">
            Tudo o que precisa para trabalhar melhor.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-8 text-slate-300">
            Entre na sua conta para continuar a utilizar o OI Companion e
            manter o seu trabalho organizado num único lugar.
          </p>
        </div>

        <p className="text-sm text-slate-500">© 2026 OI Companion</p>
      </section>

      <section className="relative flex w-full items-center justify-center bg-white px-6 py-12 lg:w-[48%] xl:w-[44%]">
        <div className="w-full max-w-md">
          <div className="mb-10 lg:hidden">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-slate-950 text-white">
                <Sparkles className="size-5" />
              </div>
              <span className="text-lg font-semibold text-slate-950">
                OI Companion
              </span>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
              Bem-vindo de volta
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Introduza os seus dados para aceder à sua conta.
            </p>
          </div>

          <form className="space-y-5" onSubmit={(event) => event.preventDefault()}>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                E-mail
              </label>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="seuemail@exemplo.com"
                  className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-10 pr-4 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-4 focus:ring-slate-100"
                />
              </div>
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-slate-700"
                >
                  Palavra-passe
                </label>
                <button
                  type="button"
                  className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
                >
                  Esqueceu a palavra-passe?
                </button>
              </div>
              <div className="relative">
                <LockKeyhole className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder="Introduza a sua palavra-passe"
                  className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-10 pr-11 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-4 focus:ring-slate-100"
                />
                <button
                  type="button"
                  aria-label={
                    showPassword
                      ? "Ocultar palavra-passe"
                      : "Mostrar palavra-passe"
                  }
                  onClick={() => setShowPassword((value) => !value)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-slate-400 transition hover:text-slate-700"
                >
                  {showPassword ? (
                    <EyeOff className="size-4" />
                  ) : (
                    <Eye className="size-4" />
                  )}
                </button>
              </div>
            </div>

            <label className="flex items-center gap-2.5 text-sm text-slate-600">
              <input
                type="checkbox"
                className="size-4 rounded border-slate-300 accent-slate-950"
              />
              Manter sessão iniciada
            </label>

            <button
              type="submit"
              className="h-12 w-full rounded-xl bg-slate-950 px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-200"
            >
              Entrar
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-slate-500">
            Ainda não tem uma conta?{" "}
            <Link
              to="/"
              className="font-semibold text-slate-950 underline-offset-4 hover:underline"
            >
              Criar conta
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
