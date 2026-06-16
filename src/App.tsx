export function App() {
  return (
    <main className="min-h-screen bg-slate-100 px-6 py-12 text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto flex max-w-xl flex-col gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold uppercase tracking-[0.35em]">Todo</h1>
          <span className="text-sm text-slate-500 dark:text-slate-400">React + Vite + Tailwind</span>
        </div>

        <div className="rounded-md bg-white p-6 shadow-xl shadow-slate-200/70 dark:bg-slate-900 dark:shadow-black/20">
          <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
            Ambiente pronto. A partir daqui, vale estruturar o HTML semântico do app e transformar cada interação em estado do React.
          </p>
        </div>
      </section>
    </main>
  )
}
