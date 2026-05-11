"use client";

import { useMemo, useState } from "react";
import { useTimeline } from "@/components/layout/AppProviders";
import { TimelineList } from "@/components/timeline/TimelineList";

const filters = ["all", "call", "text", "video"];

export function TimelineClient() {
  const { timelineEntries } = useTimeline();
  const [filter, setFilter] = useState("all");

  const filteredEntries = useMemo(() => {
    if (filter === "all") {
      return timelineEntries;
    }

    return timelineEntries.filter((entry) => entry.type === filter);
  }, [filter, timelineEntries]);

  return (
    <section>
      <h1 className="text-5xl font-black tracking-tight text-slate-800">Timeline</h1>

      <div className="mt-6 flex flex-wrap items-center gap-2">
        {filters.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setFilter(item)}
            className={`rounded-md border px-4 py-2 text-sm font-semibold capitalize transition ${
              filter === item
                ? "border-emerald-800 bg-emerald-800 text-white"
                : "border-slate-300 bg-white text-slate-600 hover:bg-slate-100"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <TimelineList entries={filteredEntries} />
    </section>
  );
}
