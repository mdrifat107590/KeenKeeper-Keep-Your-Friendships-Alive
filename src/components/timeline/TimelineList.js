import Image from "next/image";
import { formatDate } from "@/lib/format";

const iconByType = {
  call: "/assets/icon/call.png",
  text: "/assets/icon/text.png",
  video: "/assets/icon/video.png",
};

export function TimelineList({ entries }) {
  if (entries.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-slate-300 bg-white p-8 text-center text-slate-500">
        No entries for this filter.
      </div>
    );
  }

  return (
    <div className="mt-6 space-y-3">
      {entries.map((entry) => (
        <article key={entry.id} className="flex items-center gap-4 rounded-lg border border-slate-200 bg-white px-4 py-3">
          <Image
            src={iconByType[entry.type]}
            alt={entry.type}
            width={26}
            height={26}
            className="h-[26px] w-[26px] object-contain"
          />
          <div>
            <h3 className="text-base font-bold text-slate-800">{entry.title}</h3>
            <p className="text-sm text-slate-500">{formatDate(entry.date)}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
