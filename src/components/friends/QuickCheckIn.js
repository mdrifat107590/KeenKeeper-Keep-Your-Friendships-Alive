"use client";

import Image from "next/image";
import { useTimeline } from "@/components/layout/AppProviders";

const actions = [
  { type: "call", label: "Call", icon: "/assets/icon/call.png" },
  { type: "text", label: "Text", icon: "/assets/icon/text.png" },
  { type: "video", label: "Video", icon: "/assets/icon/video.png" },
];

export function QuickCheckIn({ friendName }) {
  const { addInteraction } = useTimeline();

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
      {actions.map((action) => (
        <button
          key={action.type}
          type="button"
          onClick={() => addInteraction(action.type, friendName)}
          className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-4 py-5 text-lg font-semibold text-slate-700 transition hover:bg-white"
        >
          <Image src={action.icon} alt={action.label} width={20} height={20} />
          <span>{action.label}</span>
        </button>
      ))}
    </div>
  );
}
