const statusStyles = {
  overdue: "bg-rose-100 text-rose-700",
  "almost due": "bg-amber-100 text-amber-700",
  "on-track": "bg-emerald-100 text-emerald-700",
};

export function StatusBadge({ status }) {
  return (
    <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-bold capitalize ${statusStyles[status]}`}>
      {status}
    </span>
  );
}
