export async function getTopStories(): Promise<Array<number>> {
  const res = await fetch(
    "https://hacker-news.firebaseio.com/v0/topstories.json"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch top stories");
  }

  return res.json();
}
