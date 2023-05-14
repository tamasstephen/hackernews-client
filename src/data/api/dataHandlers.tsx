import { UseQueryOptions } from "@tanstack/react-query";
import { Story } from "../../types/articles";

export async function getTopStoryIds(): Promise<Array<number>> {
  const res = await fetch(
    "https://hacker-news.firebaseio.com/v0/topstories.json"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch top stories");
  }
  return res.json();
}

export async function getTopStories({
  queryKey,
}: UseQueryOptions): Promise<Array<Story>> {
  if (!queryKey || !queryKey[1] || !queryKey[2]) {
    throw new Error(`Plese provide a page number and an array of story ids`);
  }
  if (typeof queryKey[1] === "number" && Array.isArray(queryKey[2])) {
    const topStoryIds = getCurrentTopStoryIds(queryKey[1], queryKey[2]);
    return await Promise.all(topStoryIds.map((id) => getStory(id)));
  }
  throw new Error("Failed to fetch top stories");
}

function getCurrentTopStoryIds(page: number, storyIds: Array<number>) {
  return storyIds.slice((page - 1) * 10, page * 10);
}

export async function getStory(id: number): Promise<Story> {
  const res = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch article");
  }
  return res.json();
}