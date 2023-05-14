import { getTopStoryIds } from "../api/dataHandlers";
import { getTopStories } from "../api/dataHandlers";

export const topStoryIdsQuery = {
  queryKey: ["topStoryIds"],
  queryFn: getTopStoryIds,
};

export function getTopStoriesQuery(page: number, storyIds: Array<number>) {
  return {
    queryKey: [`topStories_${page}`, page, storyIds],
    queryFn: getTopStories,
    enabled: !!storyIds,
  };
}
