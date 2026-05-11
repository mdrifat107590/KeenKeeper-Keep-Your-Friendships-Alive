import { FriendCard } from "@/components/home/FriendCard";

export function FriendsGrid({ friends }) {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-black text-slate-800">Your Friends</h2>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {friends.map((friend) => (
          <FriendCard key={friend.id} friend={friend} />
        ))}
      </div>
    </section>
  );
}
