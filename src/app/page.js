import { Banner } from "@/components/home/Banner";
import { FriendsGrid } from "@/components/home/FriendsGrid";
import { SummaryCards } from "@/components/home/SummaryCards";
import { getFriends, getSummaryStats } from "@/lib/friends";

export default async function Home() {
  const friends = await getFriends();
  const stats = getSummaryStats(friends);

  return (
    <>
      <Banner />
      <SummaryCards stats={stats} />
      <FriendsGrid friends={friends} />
    </>
  );
}
