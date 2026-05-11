"use client";

import { Cell, Pie, PieChart } from "recharts";
import { useTimeline } from "@/components/layout/AppProviders";

const colors = {
  text: "#6c3fd3",
  call: "#215f52",
  video: "#2ea569",
};

export function StatsChart() {
  const { timelineEntries } = useTimeline();

  const counts = timelineEntries.reduce(
    (acc, entry) => {
      if (entry.type in acc) {
        acc[entry.type] += 1;
      }
      return acc;
    },
    { text: 0, call: 0, video: 0 }
  );

  const data = [
    { name: "Text", value: counts.text, key: "text" },
    { name: "Call", value: counts.call, key: "call" },
    { name: "Video", value: counts.video, key: "video" },
  ];

  return (
    <section>
      <h1 className="text-5xl font-black tracking-tight text-slate-800">Friendship Analytics</h1>

      <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-800">By Interaction Type</h2>

        <div className="mt-4 flex justify-center overflow-x-auto">
          <PieChart width={360} height={300}>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={72}
              outerRadius={112}
              paddingAngle={3}
              stroke="none"
            >
              {data.map((entry) => (
                <Cell key={entry.key} fill={colors[entry.key]} />
              ))}
            </Pie>
          </PieChart>
        </div>

        <div className="mt-1 flex justify-center gap-6 text-sm font-semibold text-slate-600">
          {data.map((item) => (
            <div key={item.key} className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: colors[item.key] }} />
              {item.name} ({item.value})
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
