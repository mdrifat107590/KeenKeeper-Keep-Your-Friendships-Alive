import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[55vh] flex-col items-center justify-center text-center">
      <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">404 Error</p>
      <h1 className="mt-3 text-4xl font-black text-slate-900">Page not found</h1>
      <p className="mt-3 max-w-md text-slate-500">The page you requested does not exist. Please return to the home page.</p>
      <Link
        href="/"
        className="mt-6 inline-flex rounded-md bg-emerald-800 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-900"
      >
        Go Home
      </Link>
    </div>
  );
}
