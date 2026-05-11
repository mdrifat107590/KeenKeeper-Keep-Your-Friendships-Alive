import friends from "@/data/friends.json";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getFriends() {
  await delay(900);
  return friends;
}

export async function getFriendById(id) {
  const allFriends = await getFriends();
  return allFriends.find((friend) => friend.id === Number(id));
}

export function getSummaryStats(items) {
  return {
    total: items.length,
    onTrack: items.filter((item) => item.status === "on-track").length,
    almostDue: items.filter((item) => item.status === "almost due").length,
    overdue: items.filter((item) => item.status === "overdue").length,
  };
}
