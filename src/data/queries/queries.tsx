import { getTopStoryIds } from "../api/dataHandlers";
import { getTopStories } from "../api/dataHandlers";
import { endpoints, storyKeys } from "../../types/types";

export function getStoryIdsQuery(key: keyof typeof endpoints) {
  return {
    queryKey: [key],
    queryFn: getTopStoryIds,
  };
}

export function getTopStoriesQuery(
  page: number,
  storyIds: Array<number>,
  queryKey?: (typeof storyKeys)[keyof typeof storyKeys]
) {
  const key = queryKey ?? "topStories";
  return {
    queryKey: [`${key} _${page}`, page, storyIds],
    queryFn: getTopStories,
    enabled: !!storyIds,
  };
}
