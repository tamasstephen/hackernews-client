import { UseQueryOptions } from "@tanstack/react-query";
import { Story } from "../../types/types";
import { endpoints } from "../../types/types";

export async function getTopStoryIds({
  queryKey,
}: UseQueryOptions): Promise<Array<number>> {
  if (!queryKey || !queryKey[0] || typeof queryKey[0] !== "string") {
    throw new Error(`Plese provide a query`);
  }
  const endpoint = { ...endpoints }[queryKey[0]];
  if (!endpoint) {
    throw new Error(`Plese provide a valid endpoint`);
  }
  const res = await fetch(
    `https://hacker-news.firebaseio.com/v0/${endpoint}.json`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch stories");
  }
  return res.json();
}

export async function getTopStories({
  queryKey,
}: UseQueryOptions): Promise<Array<Story>> {
  if (!queryKey || !queryKey[1] || !queryKey[2]) {
    throw new Error(`Plese provide a page number and an array of story ids`);
  }
  const [_key, page, storyIds] = queryKey;
  if (typeof page === "number" && Array.isArray(storyIds)) {
    const topStoryIds = getCurrentTopStoryIds(page, storyIds);
    const topStories = await Promise.all(topStoryIds.map((id) => getStory(id)));
    return topStories;
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
