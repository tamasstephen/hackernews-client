import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getTopStories } from "./data/api/dataHandlers";
import { topStoryIdsQuery, getTopStoriesQuery } from "./data/queries/queries";

function App() {
  const {
    data: topStoryIdArray,
    isLoading,
    isError,
  } = useQuery({ ...topStoryIdsQuery });
  const [page, setPage] = useState<number>(1);
  const {
    data: topStories,
    isLoading: isLoadingTopStories,
    isError: isErrorTopStories,
  } = useQuery({
    ...getTopStoriesQuery(page, topStoryIdArray ?? []),
  });

  if (topStories) {
    console.log(topStories);
  }

  if (isLoading || isLoadingTopStories) {
    return <p>Loading...</p>;
  }

  if (isError || isErrorTopStories) {
    return <p>Failed to load top stories</p>;
  }

  return (
    <>
      <p>Is Loaded</p>
    </>
  );
}

export default App;
