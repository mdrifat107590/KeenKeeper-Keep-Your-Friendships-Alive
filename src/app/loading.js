export default function Loading() {
  return (
    <div className="flex min-h-[45vh] items-center justify-center">
      <div className="flex items-center gap-3 rounded-full border border-emerald-200 bg-white px-5 py-3 shadow-sm">
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-emerald-700 border-t-transparent" />
        <span className="text-sm font-semibold text-emerald-900">Loading friends...</span>
      </div>
    </div>
  );
}
