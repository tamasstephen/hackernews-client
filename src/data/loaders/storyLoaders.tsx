import { QueryClient } from "@tanstack/react-query";
import { getStoryIdsQuery } from "../queries/queries";
import { getTopStoriesQuery } from "../queries/queries";
import { endpoints } from "../../types/types";

export function loadTopStories(
  queryClient: QueryClient,
  queryIdKey?: keyof typeof endpoints
) {
  return async function () {
    const idKey = queryIdKey ?? "topStoryIds";
    const topStoryIds =
      queryClient.getQueryData([idKey]) ??
      (await queryClient.fetchQuery(getStoryIdsQuery(idKey)));

    if (Array.isArray(topStoryIds)) {
      const storiesQueryKey = endpoints[idKey];
      const topStories =
        queryClient.getQueryData(
          getTopStoriesQuery(1, topStoryIds ?? [], storiesQueryKey).queryKey
        ) ??
        (await queryClient.fetchQuery(
          getTopStoriesQuery(1, topStoryIds ?? [], storiesQueryKey)
        ));
      return topStories;
    }
  };
}
