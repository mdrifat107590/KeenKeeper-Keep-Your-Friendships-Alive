import Image from "next/image";
import { notFound } from "next/navigation";
import { QuickCheckIn } from "@/components/friends/QuickCheckIn";
import { StatusBadge } from "@/components/friends/StatusBadge";
import { formatDate } from "@/lib/format";
import { getFriendById } from "@/lib/friends";

export default async function FriendDetailsPage({ params }) {
  const { id } = await params;
  const friend = await getFriendById(id);

  if (!friend) {
    notFound();
  }

  return (
    <section>
      <div className="grid gap-4 lg:grid-cols-[320px_1fr]">
        <aside>
          <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <Image
              src={friend.picture}
              alt={friend.name}
              width={84}
              height={84}
              className="mx-auto h-[84px] w-[84px] rounded-full object-cover"
            />
            <h1 className="mt-4 text-center text-3xl font-black text-slate-800">{friend.name}</h1>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
              <StatusBadge status={friend.status} />
              {friend.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-bold uppercase text-emerald-700">
                  {tag}
                </span>
              ))}
            </div>

            <p className="mt-5 text-center italic text-slate-500">
              <span>&quot;{friend.bio}&quot;</span>
            </p>
            <p className="mt-3 text-center text-sm font-medium text-slate-600">Preferred: {friend.email}</p>
          </article>

          <div className="mt-3 space-y-2">
            <button
              type="button"
              className="w-full rounded-md border border-slate-200 bg-white px-4 py-3 text-left text-sm font-semibold text-slate-700"
            >
              ⏰ Snooze 2 Weeks
            </button>
            <button
              type="button"
              className="w-full rounded-md border border-slate-200 bg-white px-4 py-3 text-left text-sm font-semibold text-slate-700"
            >
              📦 Archive
            </button>
            <button
              type="button"
              className="w-full rounded-md border border-rose-200 bg-white px-4 py-3 text-left text-sm font-semibold text-rose-600"
            >
              🗑️ Delete
            </button>
          </div>
        </aside>

        <div className="space-y-4">
          <div className="grid gap-3 sm:grid-cols-3">
            <article className="rounded-lg border border-slate-200 bg-white p-6 text-center shadow-sm">
              <p className="text-4xl font-black text-emerald-800">{friend.days_since_contact}</p>
              <p className="mt-2 text-sm text-slate-500">Days Since Contact</p>
            </article>
            <article className="rounded-lg border border-slate-200 bg-white p-6 text-center shadow-sm">
              <p className="text-4xl font-black text-emerald-800">{friend.goal}</p>
              <p className="mt-2 text-sm text-slate-500">Goal (Days)</p>
            </article>
            <article className="rounded-lg border border-slate-200 bg-white p-6 text-center shadow-sm">
              <p className="text-3xl font-black text-emerald-800">{formatDate(friend.next_due_date)}</p>
              <p className="mt-2 text-sm text-slate-500">Next Due</p>
            </article>
          </div>

          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-black text-slate-800">Relationship Goal</h2>
              <button type="button" className="rounded-md border border-slate-200 bg-slate-100 px-4 py-1.5 text-sm font-semibold text-slate-700">
                Edit
              </button>
            </div>
            <p className="mt-5 text-xl text-slate-600">
              Connect every <span className="font-black text-slate-800">{friend.goal} days</span>
            </p>
          </article>

          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-3xl font-black text-slate-800">Quick Check-In</h2>
            <div className="mt-4">
              <QuickCheckIn friendName={friend.name} />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
