import { getTopStoryIds } from "../api/dataHandlers";
import { getTopStories } from "../api/dataHandlers";
import { endpoints } from "../../types/types";

export function getStoryIdsQuery(key: keyof typeof endpoints) {
  return {
    queryKey: [key],
    queryFn: getTopStoryIds,
  };
}

export function getTopStoriesQuery(
  page: number,
  storyIds: Array<number>,
  queryKey?: (typeof endpoints)[keyof typeof endpoints]
) {
  const key = queryKey ?? "topstories";
  return {
    queryKey: [`${key}_${page}`, page, storyIds],
    queryFn: getTopStories,
    enabled: !!storyIds,
  };
}
