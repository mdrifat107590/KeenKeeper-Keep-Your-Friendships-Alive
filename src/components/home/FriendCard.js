import Image from "next/image";
import Link from "next/link";
import { StatusBadge } from "@/components/friends/StatusBadge";

export function FriendCard({ friend }) {
  return (
    <Link
      href={`/friends/${friend.id}`}
      className="rounded-lg border border-slate-200 bg-white p-5 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <Image
        src={friend.picture}
        alt={friend.name}
        width={72}
        height={72}
        className="mx-auto h-[72px] w-[72px] rounded-full object-cover"
      />
      <h3 className="mt-4 text-lg font-bold text-slate-800">{friend.name}</h3>
      <p className="mt-1 text-xs text-slate-500">{friend.days_since_contact} days ago</p>

      <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
        {friend.tags.map((tag) => (
          <span key={tag} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold uppercase text-slate-500">
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-3">
        <StatusBadge status={friend.status} />
      </div>
    </Link>
  );
}
