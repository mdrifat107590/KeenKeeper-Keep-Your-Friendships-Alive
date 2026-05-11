export function SummaryCards({ stats }) {
  const cards = [
    { title: "Total Friends", value: stats.total },
    { title: "On Track", value: stats.onTrack },
    { title: "Need Attention", value: stats.almostDue },
    { title: "Overdue", value: stats.overdue },
  ];

  return (
    <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
      {cards.map((card) => (
        <article key={card.title} className="rounded-lg border border-slate-200 bg-white p-5 text-center shadow-sm">
          <p className="text-3xl font-extrabold text-emerald-800">{card.value}</p>
          <p className="mt-2 text-sm text-slate-500">{card.title}</p>
        </article>
      ))}
    </div>
  );
}
