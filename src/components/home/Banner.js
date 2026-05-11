export function Banner() {
  return (
    <section className="text-center">
      <h1 className="text-4xl font-black tracking-tight text-slate-800 sm:text-5xl">Friends to keep close in your life</h1>
      <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-500 sm:text-base">
        Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
      </p>
      <button
        type="button"
        className="mt-6 inline-flex items-center gap-2 rounded-md bg-emerald-800 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-900"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14" />
          <path d="M5 12h14" />
        </svg>
        Add a Friend
      </button>
    </section>
  );
}
