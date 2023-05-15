import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getStoryIdsQuery, getTopStoriesQuery } from "./data/queries/queries";
import ArticleList from "./components/ArticleList";
import { Alert, CircularProgress, Pagination } from "@mui/material";
import { endpoints } from "./types/types";

function Index({ storyIdKey }: { storyIdKey: keyof typeof endpoints }) {
  const {
    data: topStoryIdArray,
    isLoading,
    isError,
  } = useQuery(getStoryIdsQuery(storyIdKey));
  const [page, setPage] = useState<number>(1);
  const {
    data: topStories,
    isLoading: isLoadingTopStories,
    isError: isErrorTopStories,
  } = useQuery({
    ...getTopStoriesQuery(page, topStoryIdArray ?? []),
  });

  function handlePagination(event: React.ChangeEvent<unknown>, value: number) {
    setPage(value);
    window.scrollTo(0, 0);
  }

  if (isLoading || isLoadingTopStories) {
    return <CircularProgress />;
  }

  if (isError || isErrorTopStories) {
    return <Alert severity="warning">Failed to load stories!</Alert>;
  }

  return (
    <>
      <ArticleList stories={topStories ?? []} />
      <Pagination
        sx={{ mt: 4 }}
        count={
          topStoryIdArray.length % 10 === 0
            ? topStoryIdArray.length / 10
            : topStoryIdArray.length / 10 + 1
        }
        page={page}
        onChange={handlePagination}
      />
    </>
  );
}

export default Index;
