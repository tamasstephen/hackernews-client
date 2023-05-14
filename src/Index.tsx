import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { topStoryIdsQuery, getTopStoriesQuery } from "./data/queries/queries";
import ArticleList from "./components/ArticleList";
import { Alert, CircularProgress } from "@mui/material";

function Index() {
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

  if (isLoading || isLoadingTopStories) {
    return <CircularProgress />;
  }

  if (isError || isErrorTopStories) {
    return <Alert severity="warning">Failed to load stories!</Alert>;
  }

  return (
    <>
      <ArticleList stories={topStories ?? []} />
    </>
  );
}

export default Index;
