export function ToastStack({ toasts }) {
  return (
    <div className="pointer-events-none fixed right-4 top-4 z-50 flex w-full max-w-xs flex-col gap-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="rounded-lg border border-emerald-900/20 bg-emerald-700 px-4 py-3 text-sm font-medium text-white shadow-lg"
        >
          {toast.message}
        </div>
      ))}
    </div>
  );
}
