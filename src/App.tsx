import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { topStoryIdsQuery, getTopStoriesQuery } from "./data/queries/queries";
import Article from "./components/Article";
import ArticleList from "./components/ArticleList";

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
      <ArticleList stories={topStories ?? []} />
    </>
  );
}

export default App;
