import { QueryClient } from "@tanstack/react-query";
import { topStoryIdsQuery } from "../queries/queries";
import { getTopStoriesQuery } from "../queries/queries";

export function loadTopStories(queryClient: QueryClient) {
  return async function () {
    const topStoryIds =
      queryClient.getQueryData(topStoryIdsQuery.queryKey) ??
      (await queryClient.fetchQuery(topStoryIdsQuery));

    if (Array.isArray(topStoryIds)) {
      const topStories =
        queryClient.getQueryData(
          getTopStoriesQuery(1, topStoryIds ?? []).queryKey
        ) ??
        (await queryClient.fetchQuery(
          getTopStoriesQuery(1, topStoryIds ?? [])
        ));
      return topStories;
    }
  };
}
